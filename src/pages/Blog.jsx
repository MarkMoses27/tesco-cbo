import EDUCATION from "../assets/education.png";
import VOLUNTEERS from "../assets/volunteer.png";
import ADVOCACY from "../assets/advocacy.png";


const Blog = () => {
  const placeholderPosts = [
    {
      id: 1,
      title: "Empowering Communities Through Education",
      excerpt: "Discover how TESCO's innovative education programs are transforming lives in underserved communities through accessible learning opportunities and vocational training.",
      date: "March 1, 2025",
      image: EDUCATION,
      category: "Education"
    },
    {
      id: 2,
      title: "Disability Advocacy: Our Journey",
      excerpt: "Learn about our community-driven initiatives challenging misconceptions about disabilities through awareness campaigns and inclusive policy advocacy.",
      date: "February 15, 2025",
      image: ADVOCACY,
      category: "Advocacy"
    },
    {
      id: 3,
      title: "Volunteer Spotlight: Changing Lives Together",
      excerpt: "Meet the dedicated individuals powering our community programs and discover how you can join our volunteer network.",
      date: "February 1, 2025",
      image: VOLUNTEERS,
      category: "Community"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Insights from Our Community
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stories of hope, resilience, and transformation from our frontline work
        </p>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg max-w-md mx-auto">
          <p className="text-blue-800 font-semibold">
            ✨ New stories coming soon - Stay tuned! ✨
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderPosts.map(post => (
          <article 
            key={post.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
          >
            {/* Image Container */}
            <div className="relative h-60 w-full">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/40 to-transparent" />
              <span className="absolute top-4 right-4 bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <time className="text-sm text-gray-500 block mb-2">
                {post.date}
              </time>
              <h2 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <button 
                  className="text-blue-800 hover:text-blue-700 font-medium flex items-center gap-2 cursor-not-allowed"
                  disabled
                >
                  <span>Continue Reading</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;