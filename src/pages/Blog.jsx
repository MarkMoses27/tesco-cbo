import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import BeachCleanup from "../assets/blog/cleaning-msa.png";
import DianiCP from "../assets/blog/dianicp.png";
import Awareness from "../assets/blog/awareness.png";
import Symposium from "../assets/blog/symposium.png";
import Disability from "../assets/blog/disability.png";
import OFFICE_LAUNCH from "../assets/blog/launch.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, when: "beforeChildren" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, rotateY: 20 },
  show: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 }
  }
};

const Blog = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Using string IDs for consistency. To add another blog post, simply add another object here.
  const placeholderPosts = [
    {
      id: "1",
      title: "Mombasa Beach Cleanup: A Day of Collective Impact",
      excerpt: "Community unites to preserve Kenya's coastline through massive cleanup initiative",
      date: "February 28, 2025",
      category: "Volunteering",
      categoryColor: "bg-emerald-500",
      image: BeachCleanup
    },
    {
      id: "2",
      title: "A Heartfelt Celebration: World Cerebral Palsy Day at Diani CP Center",
      excerpt: "Empowering children with CP and their families through education and advocacy",
      date: "October 3, 2023",
      category: "Events",
      categoryColor: "bg-rose-500",
      image: DianiCP
    },
    {
      id: "3",
      title: "Empowering Voices: SRHR Training for the Deaf at Kwale School for the Deaf",
      excerpt: "Breaking barriers to sexual health education for the deaf community in Kenya",
      date: "September 22, 2023",
      category: "Education",
      categoryColor: "bg-indigo-500",
      image: Awareness
    },

    {
      id:4,
      title: "Celebrating the 10th National Symposium on Disaster and Risk Reduction in Kilifi County",
      excerpt: "Stakeholders gather to discuss strategies for disaster preparedness and response",
      date: "March 10, 2025",
      category: "Events",
      categoryColor: "bg-rose-500",
      image: Symposium
    },

    {
      id: "5",
      title: "Celebrating Our Office Launch – April 29, 2024",
      excerpt: "A new chapter begins with the official opening of our headquarters",
      date: "April 29, 2024",
      category: "Events",
      categoryColor: "bg-rose-500",
      image: OFFICE_LAUNCH, // Make sure to import this image
    },

    {
  id: "6",
  title: "Celebrating the International Day of Persons with Disabilities at Ndohivyo Special School",
  excerpt: "Amplifying voices and leadership in the disability community",
  date: "December 3, 2023",
  category: "Events",
  categoryColor: "bg-rose-500", 
  image: Disability, 
  },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-10">
        {/* ... background elements can go here ... */}
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent mb-6">
          Community Chronicles
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dive into inspiring stories from our network of change-makers
        </p>
      </motion.header>

      {/* Post Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {placeholderPosts.map((post) => (
          <motion.article 
            key={post.id}
            variants={itemVariants}
            className="relative group bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
          >
            <Link 
              to={`/blog/${post.id}`} 
              className="block h-full p-6"
              state={{ post }} // Pass post data through state if needed
            >
              {/* Image container with fixed aspect ratio */}
              <div className="w-full aspect-video bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              
              <div className="pt-6">
                <span className={`${post.categoryColor} text-white px-4 py-1 rounded-full text-sm`}>
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
