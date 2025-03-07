import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import BeachCleanup from "../assets/blog/cleaning-msa.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, rotateY: 20 },
  show: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5
    }
  }
};

const Blog = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const placeholderPosts = [
    {
      id: 1,
      title: "Mombasa Beach Cleanup: A Day of Collective Impact",
      excerpt: "Community unites to preserve Kenya's coastline through massive cleanup initiative",
      date: "February 28, 2025",
      category: "Volunteering",
      categoryColor: "bg-emerald-500",
      image: BeachCleanup
    }
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
        {/* ... existing background elements ... */}
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
              state={{ post }} // Pass post data through state
            >
              <div className="h-72 overflow-hidden rounded-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
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