import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import BeachCleanup from "../assets/blog/cleaning-msa.png";

// Sample blog posts data
const BLOG_POSTS = [
  {
    id: "1",
    title: "Mombasa Beach Cleanup: A Day of Collective Impact",
    category: "Volunteering",
    categoryColor: "bg-emerald-500",
    date: "February 28, 2025",
    image: BeachCleanup,
    excerpt: "Community unites to preserve Kenya's coastline through massive cleanup initiative",
    content: `
      <h2>A Strong Start to a Meaningful Day</h2>
      <p>As the sun rose over the Indian Ocean, over 120 volunteers gathered at the designated meeting point on Mombasa Beach. Armed with reusable gloves, eco-friendly bags, and unwavering enthusiasm, participants from all walks of life—local residents, students, corporate teams, and environmental advocates—set out to reclaim the beauty of our shores.</p>
      
      <blockquote><em>"Seeing the community come together so early in the morning was truly uplifting. It's a reminder that every small effort counts toward a greater good,"</em> shared one of the dedicated volunteers.</blockquote>
      
      <h2>The Impact: Beyond Just a Cleanup</h2>
      <p>Throughout the morning, volunteers worked diligently to remove plastic, debris, and other pollutants that threatened marine life and the health of our coastal ecosystem. Here are some highlights from the day:</p>
      
      <ul>
        <li><strong>Tons of Waste Removed:</strong> Volunteers collectively cleared out an impressive amount of waste, helping to reduce plastic pollution and protect local wildlife.</li>
        <li><strong>Community Engagement:</strong> The event fostered strong community ties and raised awareness about the importance of sustainable living.</li>
        <li><strong>Environmental Education:</strong> Alongside the physical cleanup, educational sessions helped participants understand effective waste management and recycling practices.</li>
      </ul>
      
      <p>These achievements underscore the importance of local initiatives in addressing global environmental challenges. Every piece of trash collected was a step toward a cleaner, healthier environment for both people and marine life.</p>
      
      <h2>Stories from the Shore</h2>
      <p>Participants shared their heartfelt experiences during the cleanup. A local fisherman remarked:</p>
      
      <blockquote><em>"A clean beach means healthy fish and a better livelihood for us. Today, we all witnessed the power of community action."</em></blockquote>
      
      <p>Another volunteer added:</p>
      
      <blockquote><em>"I left with a renewed sense of purpose. This event showed me that when we unite for a cause, even the smallest efforts can create big change."</em></blockquote>
      
      <p>These voices reflect the spirit of collaboration and collective responsibility that defined the day.</p>
      
      <h2>A Roadmap for the Future</h2>
      <p>While the cleanup on 25th February 2025 was a resounding success, it's only the beginning. The event has set the stage for more community-driven environmental initiatives in the future. Here's what's next:</p>
      
      <ul>
        <li><strong>Upcoming Cleanups:</strong> Plans are already in motion for additional beach and coastal cleanup drives.</li>
        <li><strong>Ongoing Education:</strong> Workshops and seminars on sustainability and waste management will continue to empower the community.</li>
        <li><strong>Stronger Partnerships:</strong> By partnering with local organizations and authorities, future events will expand their reach and impact.</li>
      </ul>
      
      <h2>Join the Movement</h2>
      <p>Even if you couldn't be there on the day, you can still contribute to the cause. Adopt sustainable practices, reduce plastic use, and spread awareness about the importance of keeping our beaches clean. Together, we can ensure that Mombasa's coastline remains a thriving and beautiful natural resource for generations to come.</p>
      
      <p><strong>Thank you to everyone who participated and supported the Mombasa Beach Cleanup.</strong> Let's keep the momentum going for a greener, cleaner future!</p>
      
      <p>#MombasaBeachCleanup #CommunityAction #SustainableFuture</p>
    `
  },
  // Add more blog posts as needed
];

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState("");
  
  useEffect(() => {
    // Get the current URL for sharing
    setShareUrl(window.location.href);
    
    // Function to fetch the blog post data based on the ID
    const fetchPost = async () => {
      try {
        // For demonstration, we're using the local BLOG_POSTS array:
        const foundPost = BLOG_POSTS.find(post => post.id === id);
        setPost(foundPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);
  
  // Function to handle social media sharing
  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(post?.title || "Check out this blog post");
    
    let shareLink = "";
    
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "whatsapp":
        shareLink = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
        break;
      default:
        return;
    }
    
    // Open share dialog in a new window
    window.open(shareLink, "_blank", "width=600,height=400");
  };

  // Show loading state while fetching
  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-start">
        <div className="animate-pulse text-xl font-medium">Loading post...</div>
      </div>
    );
  }

  // Show error state if post not found
  if (!post) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-3xl font-bold">Post not found</h2>
        <p className="text-gray-600 mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="text-blue-600 hover:underline mt-6 inline-block">
          ← Back to All Blog Posts
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-4 max-w-3xl mx-auto"
    >
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors font-medium"
        >
          ← Back to All Stories
        </Link>
      </div>

      <article className="prose prose-lg lg:prose-xl mx-auto">
        <header className="mb-12">
          <span className={`${post.categoryColor} text-white px-4 py-1 rounded-full text-sm`}>
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 space-x-4">
            <time>{post.date}</time>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl mb-12"
        />

        {/* Blog post content */}
        <section 
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Share section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold">Share this story</h3>
          <div className="flex space-x-4 mt-4">
            <button 
              onClick={() => handleShare("facebook")} 
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on Facebook"
            >
              Facebook
            </button>
            <button 
              onClick={() => handleShare("twitter")} 
              className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Share on Twitter"
            >
              Twitter
            </button>
            <button 
              onClick={() => handleShare("whatsapp")} 
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Share on WhatsApp"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogDetails;