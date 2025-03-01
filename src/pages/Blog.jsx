import React from 'react';

const Blog = () => {
  const placeholderPosts = [
    {
      id: 1,
      title: "Empowering Communities Through Education",
      excerpt: "Discover how TESCO is transforming lives through accessible education programs...",
      date: "2024-03-01"
    },
    {
      id: 2,
      title: "Breaking Disability Stigmas: Our Journey",
      excerpt: "Learn about our innovative approaches to combat stigma against people with disabilities...",
      date: "2024-02-15"
    },
    {
      id: 3,
      title: "Volunteer Spotlight: Making a Difference",
      excerpt: "Meet our dedicated volunteers and learn how you can join our mission...",
      date: "2024-02-01"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">TESCO Blog</h1>
        <p className="text-gray-600 text-lg">Insights, Stories, and Updates from Our Community</p>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 font-semibold">
            🚧 Blog under construction - Check back soon for inspiring stories! 🚧
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderPosts.map(post => (
          <div 
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="h-48 bg-gray-100 rounded-lg mb-4 animate-pulse"></div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">{post.date}</div>
            <div className="mt-4">
              <button 
                className="text-blue-800 hover:text-blue-700 font-medium cursor-not-allowed"
                disabled
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;