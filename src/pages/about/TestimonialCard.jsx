// TestimonialCard.jsx
const TestimonialCard = ({ testimonial, onOpenModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video bg-gray-50 flex items-center justify-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.title} 
          className="w-full h-full object-contain p-2"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/fallback.jpg';
          }}
        />
        <span className="absolute top-2 right-2 bg-white/80 px-2 py-1 text-sm rounded-full">
          {new Date(testimonial.date).toLocaleDateString()}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
            {testimonial.category.replace('-', ' ')}
          </span>
          <span className="text-sm text-gray-500">By {testimonial.author}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.title}</h3>
        <p className="text-gray-600 mb-4">{testimonial.excerpt}</p>
        <button
          onClick={() => onOpenModal(testimonial)}
          className="text-blue-800 font-semibold hover:underline flex items-center"
        >
          Read Full Story
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};