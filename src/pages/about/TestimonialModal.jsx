// TestimonialModal.jsx
const TestimonialModal = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="bg-gray-50 p-4 flex items-center justify-center">
            <img 
              src={story.image} 
              alt={story.title} 
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">{story.title}</h2>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="font-medium">By {story.author}</span>
              <span className="text-sm">•</span>
              <span className="text-sm">{new Date(story.date).toLocaleDateString()}</span>
            </div>
          </div>

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