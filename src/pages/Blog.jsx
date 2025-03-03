// Blog.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import EDUCATION from "../assets/education.png";
import VOLUNTEERS from "../assets/volunteer.png";
import ADVOCACY from "../assets/advocacy.png";

// Animation configurations
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

const floatingVariants = {
  float: {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
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
      title: "Empowering Through Education",
      excerpt: "Discover how our literacy programs are transforming communities and breaking the cycle of poverty through accessible education initiatives.",
      date: "March 15, 2024",
      category: "Education",
      categoryColor: "bg-cyan-500",
      image: EDUCATION
    },
    {
      id: 2,
      title: "Volunteers Changing Lives",
      excerpt: "Meet the dedicated individuals donating their time and skills to create lasting impact in underprivileged neighborhoods.",
      date: "March 12, 2024",
      category: "Volunteering",
      categoryColor: "bg-emerald-500",
      image: VOLUNTEERS
    },
    {
      id: 3,
      title: "Advocacy in Action",
      excerpt: "Learn about our policy initiatives driving systemic change and creating equitable opportunities for all community members.",
      date: "March 10, 2024",
      category: "Advocacy",
      categoryColor: "bg-indigo-500",
      image: ADVOCACY
    },
    {
      id: 4,
      title: "Youth Empowerment Programs",
      excerpt: "How our after-school initiatives are nurturing future leaders and providing safe spaces for creative expression.",
      date: "March 8, 2024",
      category: "Education",
      categoryColor: "bg-cyan-500",
      image: EDUCATION
    },
    {
      id: 5,
      title: "Community Cleanup Success",
      excerpt: "See the incredible results of our neighborhood revitalization project led by local volunteers and partners.",
      date: "March 5, 2024",
      category: "Volunteering",
      categoryColor: "bg-emerald-500",
      image: VOLUNTEERS
    },
    {
      id: 6,
      title: "Policy Reform Progress",
      excerpt: "Updates on our recent legislative victories and what they mean for community development funding.",
      date: "March 1, 2024",
      category: "Advocacy",
      categoryColor: "bg-indigo-500",
      image: ADVOCACY
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
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10 opacity-10"
      >
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -right-32 top-1/3 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </motion.div>

      {/* Floating Header Section */}
      <motion.header
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-center mb-24 relative"
      >
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute -top-24 left-1/2 -translate-x-1/2 text-9xl opacity-10 pointer-events-none"
        >
          ✨
        </motion.div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent mb-6">
          Community Chronicles
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Dive into inspiring stories from our network of change-makers
        </motion.p>
      </motion.header>

      {/* Interactive Post Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {placeholderPosts.map((post, index) => (
          <motion.article 
            key={post.id}
            variants={itemVariants}
            className="relative group cursor-pointer bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.03, zIndex: 10 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          >
            <Link to={`/blog/${post.id}`} className="block h-full">
              {/* Image Container with Parallax Effect */}
              <motion.div 
                className="relative h-72 overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <motion.img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Date Badge */}
                <motion.time
                  className="absolute top-6 left-6 backdrop-blur-sm bg-white/80 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {post.date}
                </motion.time>
              </motion.div>

              {/* Content Container */}
              <div className="p-6 relative">
                {/* Animated Category Chip */}
                <motion.span
                  className={`inline-block ${post.categoryColor} text-white px-4 py-1 rounded-full text-sm font-medium mb-4`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                >
                  {post.category}
                </motion.span>

                <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  {post.title}
                </h2>
                
                {/* Animated Excerpt */}
                <motion.p
                  className="text-gray-600 mb-6 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {post.excerpt}
                </motion.p>

                {/* Interactive Read More Button */}
                <div className="flex items-center gap-3 text-blue-800 group-hover:text-blue-700 transition-colors">
                  <span className="font-semibold">Read Full Story</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </Link>

            {/* Decorative Border Animation */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500 pointer-events-none" />
          </motion.article>
        ))}
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};

export default Blog;