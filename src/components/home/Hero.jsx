import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

//images
import EDUCATION from "../../assets/education.png";
import RIGHTS from "../../assets/right-advocacy.png";
import HEALTH from "../../assets/Health.png";
import GENDER from "../../assets/gende-equality.png";
import INCLUSION from "../../assets/inclusion-disability.png";

const HeroSlide = ({ image, title, description, ctaLink, ctaText, isActive, isNext }) => (
  <div 
    className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
      isActive 
        ? 'opacity-100 z-10 translate-x-0 scale-100' 
        : isNext 
          ? 'opacity-0 z-0 translate-x-full scale-95' 
          : 'opacity-0 z-0 -translate-x-full scale-95'
    }`}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div 
      className="w-full h-full overflow-hidden"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        animation: isActive ? 'slowZoom 20s ease-in-out infinite alternate' : 'none'
      }}
    ></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 text-center text-white">
        <h2 
          className={`text-3xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 delay-300 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {title}
        </h2>
        <p 
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {description}
        </p>
        <Link 
          to={ctaLink}
          className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
            isActive ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="relative z-10 flex items-center">
            {ctaText}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  </div>
);

const HeroComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerHeight, setContainerHeight] = useState("calc(100vh - 80px)");

  // Hero content for each focus area with proper image positioning
  const heroSlides = [
    {
      image: EDUCATION,
      title: "Inclusive Education and Skills Development",
      description: "Empowering communities through accessible education and practical skills training for all, regardless of ability or background.",
      ctaLink: "/programs",
      ctaText: "Explore Education Programs"
    },
    {
      image: INCLUSION,
      title: "Disability Inclusion",
      description: "Creating equal opportunities and fostering inclusive environments that celebrate and support people of all abilities.",
      ctaLink: "/programs",
      ctaText: "Learn About Inclusion"
    },
    {
      image: HEALTH,
      title: "Health and Well-being",
      description: "Promoting holistic health practices and providing access to essential services for improved community well-being.",
      ctaLink: "/programs",
      ctaText: "Discover Health Initiatives"
    },
    {
      image: GENDER, // we need change remember
      title: "Gender Equality",
      description: "Advocating for gender equality and empowering women and girls to reach their full potential in society.",
      ctaLink: "/programs",
      ctaText: "Support Gender Programs"
    },
    {
      image: RIGHTS,
      title: "Rights and Advocacy",
      description: "Championing human rights and amplifying the voices of marginalized communities through advocacy and awareness.",
      ctaLink: "/programs",
      ctaText: "Join Our Advocacy Work"
    }
  ];

  // Function to advance to the next slide with animation
  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newActiveSlide = (activeSlide + 1) % heroSlides.length;
    setNextSlide(newActiveSlide);
    
    // Short delay to trigger animation sequence
    setTimeout(() => {
      setActiveSlide(newActiveSlide);
      setNextSlide((newActiveSlide + 1) % heroSlides.length);
      
      // Allow time for transition to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 50);
  }, [activeSlide, heroSlides.length, isTransitioning]);

  // Autoplay effect with animation handling
  useEffect(() => {
    let intervalId;
    
    if (!isPaused && !isTransitioning) {
      intervalId = setInterval(goToNextSlide, 6000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused, isTransitioning, goToNextSlide]);

  // Ensure autoplay continues when component becomes visible again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsPaused(false);
      } else {
        setIsPaused(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Adjust height on window resize to ensure proper proportions
  useEffect(() => {
    const handleResize = () => {
      // Ensure the hero maintains proper aspect ratio on different screens
      const navbarHeight = 80; // Adjust if your navbar height changes
      const windowHeight = window.innerHeight;
      const minHeight = 400; // Minimum height to prevent excessive shrinking
      
      const calculatedHeight = Math.max(windowHeight - navbarHeight, minHeight);
      setContainerHeight(`${calculatedHeight}px`);
    };
    
    // Set initial height
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle manual navigation
  const navigateToSlide = (index) => {
    if (isTransitioning || index === activeSlide) return;
    
    setIsTransitioning(true);
    setNextSlide(index);
    
    setTimeout(() => {
      setActiveSlide(index);
      setNextSlide((index + 1) % heroSlides.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 50);
    
    // Temporarily pause autoplay when user interacts
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: containerHeight,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Featured programs carousel"
    >
      <style jsx>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-700 bg-opacity-50 z-20">
        <div 
          className="h-full bg-blue-500 transition-all duration-100 ease-linear"
          style={{ 
            width: isPaused ? '0%' : '100%', 
            transitionDuration: isPaused ? '0ms' : '6000ms',
            transitionProperty: 'width'
          }}
        ></div>
      </div>

      {/* Hero Slides */}
      <div className="w-full h-full relative">
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={index}
            isActive={activeSlide === index}
            isNext={nextSlide === index}
            {...slide}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 transform transition-transform duration-500 hover:scale-110">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSlide(index)}
            className={`w-3 h-3 mx-2 rounded-full focus:outline-none transition-all duration-300 ${
              activeSlide === index 
                ? 'bg-white w-12 scale-100' 
                : 'bg-gray-400 bg-opacity-50 hover:bg-opacity-75 scale-90 hover:scale-100'
            }`}
            style={{
              animation: activeSlide === index ? 'pulse 2s infinite ease-in-out' : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={activeSlide === index}
          ></button>
        ))}
      </div>

      {/* Quick Navigation Arrows with Animations */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 transition-opacity duration-300 opacity-70 hover:opacity-100"
           style={{ animation: 'float 3s infinite ease-in-out' }}>
        <button
          className="bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full focus:outline-none transform transition-transform duration-300 hover:-translate-x-1"
          onClick={() => navigateToSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 transition-opacity duration-300 opacity-70 hover:opacity-100"
           style={{ animation: 'float 3s infinite ease-in-out reverse' }}>
        <button
          className="bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full focus:outline-none transform transition-transform duration-300 hover:translate-x-1"
          onClick={() => navigateToSlide((activeSlide + 1) % heroSlides.length)}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;