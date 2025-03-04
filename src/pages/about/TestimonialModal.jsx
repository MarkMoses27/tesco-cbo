import { useEffect } from 'react';

const TestimonialModal = ({ story, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      role="dialog" 
      aria-labelledby="testimonial-title"
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
    >
      {/* Animated Modal Container */}
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden transform transition-all duration-300 opacity-100 scale-100">
        
        {/* Image with Smooth Toggle */}
        <div className="relative">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full aspect-[16/9] object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-grow">
          <div className="mb-6">
            <h2 id="testimonial-title" className="text-3xl font-bold text-blue-800 mb-2">
              {story.title}
            </h2>
            <div className="flex items-center gap-4 text-gray-600">
              {story.author && <span className="font-medium">By {story.author}</span>}
              {story.date && (
                <>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{story.date}</span>
                </>
              )}
            </div>
          </div>

          {/* Paragraphs */}
          <div className="prose max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
