

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// Partner data with absolute paths (assuming images are in public/assets folder)
const partnerData = [
  { name: "NCPWD", logo: "/assets/ncpwd.jpg", alt: "National Council for Persons With Disabilities logo" },
  { name: "Government of Kwale County", logo: "/assets/kwale.jpg", alt: "Government of Kwale County logo" },
  { name: "TINADA Youth Action Africa", logo: "/assets/tinada.png", alt: "TINADA Youth Action Africa logo" },
  { name: "GNDR", logo: "/assets/gndr.png", alt: "GNDR logo" },
  { name: "Kenya for Resilience (K4R)", logo: "/assets/k4r.png", alt: "Kenya for Resilience logo" },
  { name: "Pwani Youth Network", logo: "/assets/pyn.png", alt: "Pwani Youth Network logo" },
  { name: "Tunaweza CBO", logo: "/assets/tunaweza.jpg", alt: "Tunaweza CBO logo" },
  { name: "Pwani Facilitators Network", logo: "/assets/PFN.png", alt: "Pwani Facilitators Network logo" },
  { name: "Bethany Kids Kenya", logo: "/assets/bethany.jpg", alt: "Bethany Kids Kenya logo" },
  { name: "Ministry of Health Kwale", logo: "/assets/Moh.png", alt: "Ministry of Health Kwale logo" },
  { name: "Rotary Club", logo: "/assets/rotary.png", alt: "Rotary Club logo" },
];

// Simple partner card component
const PartnerCard = ({ partner }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl h-40 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white">
      <img 
        src={partner.logo} 
        alt={partner.alt} 
        className="h-16 object-contain mb-4" 
        loading="lazy" 
      />
      <p className="text-center font-medium text-gray-700">{partner.name}</p>
    </div>
  );
};

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Determine items per slide based on viewport width
  const getItemsPerSlide = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 3;
    return 5;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const totalOriginal = partnerData.length;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Extend partner data by appending the first itemsPerSlide items at the end
  const extendedPartnerData = [...partnerData, ...partnerData.slice(0, itemsPerSlide)];

  // Autoplay functionality: increment index every 4 seconds
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 4000);
    }
  }, [isPaused]);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoplay]);

  // When the index reaches the cloned section, reset back to 0 seamlessly
  useEffect(() => {
    if (currentIndex === totalOriginal) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Must match transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalOriginal]);

  // Navigation Handlers
  const handleNext = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentIndex(prev => prev + 1);
    startAutoplay();
  }, [startAutoplay]);

  const handlePrev = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentIndex(prev => (prev === 0 ? totalOriginal - 1 : prev - 1));
    startAutoplay();
  }, [totalOriginal, startAutoplay]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex"
          animate={{ x: `calc(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          {extendedPartnerData.map((partner, index) => (
            <div
              key={index}
              className="flex-none px-4"
              style={{ width: `${100 / itemsPerSlide}%` }}
              aria-roledescription="slide"
              aria-hidden={index < currentIndex || index >= currentIndex + itemsPerSlide}
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="relative mt-6">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] transition-transform active:scale-95"
            aria-label="Previous partners"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] transition-transform active:scale-95"
            aria-label="Next partners"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2" role="tablist">
          {Array.from({ length: totalOriginal }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setCurrentIndex(index);
                startAutoplay();
              }}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] ${
                index === currentIndex % totalOriginal
                  ? 'bg-[var(--accent-color)]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex % totalOriginal ? 'true' : 'false'}
              role="tab"
            />
          ))}
        </div>

        {/* Screen Reader Status */}
        <div className="sr-only" aria-live="polite">
          Showing partners {currentIndex % totalOriginal + 1} of {totalOriginal}
        </div>
      </div>
    </section>
  );
};

export default Partners;
