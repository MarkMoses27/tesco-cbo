import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <motion.h1
        className="text-4xl font-bold text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet the Dream Team... Soon!
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-600 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        We’re putting together an amazing team. Stay tuned for updates!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-6 py-3 text-white bg-blue-800 rounded-lg shadow-lg"
      >
        Stay Updated
      </motion.button>
    </div>
  );
};

export default OurTeam;
