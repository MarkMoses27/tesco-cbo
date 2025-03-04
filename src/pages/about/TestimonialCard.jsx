import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

const TestimonialCard = ({ testimonial, onOpenModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const windowWidth = useWindowWidth();

  const handleClick = () => {
    if (windowWidth < 768) { // Mobile
      setIsExpanded(!isExpanded);
    } else { // Desktop
      onOpenModal(testimonial);
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 transition-all ${
        isExpanded ? 'md:col-span-2 lg:col-span-3' : 'hover:shadow-xl'
      }`}
    >
      {/* Image Section */}
      <div className="w-full h-60 mb-4 overflow-hidden rounded-lg">
        <img 
          src={testimonial.image} 
          alt={testimonial.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div onClick={handleClick} className="cursor-pointer">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          {testimonial.title}
        </h3>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            {isExpanded ? testimonial.content : `${testimonial.excerpt}...`}
          </p>
          
          {!isExpanded && (
            <div className="flex items-center justify-between text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {testimonial.category.replace('-', ' ')}
              </span>
              <span className="text-gray-500">{testimonial.date}</span>
            </div>
          )}
        </div>
      </div>

      {windowWidth < 768 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-800 font-semibold mt-4"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default TestimonialCard;
