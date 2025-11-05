import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import History from './pages/about/History';
import OurTeam from './pages/about/Team';
import BOARD_MEMBERS from './pages/about/BoardMembers'; // Add BoardMembers component import
import Testimonials from './pages/about/Testimonials';
import Programs from './pages/Programs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import AccessibilityPolicy from './components/Accessibility';
import Volunteer from './pages/Volunteer'; // Add Volunteer component import
import Donate from './pages/Donate'; // Add Donate component import
import Blog from './pages/Blog'; // Add Blog component import
import BlogDetails from './pages/BlogDetails'; // Add BlogDetails component import
import Contact from './pages/Contact'; // Add Contact component import
import ProjectList from './pages/ProjectList';
import PoultryFarming from './pages/PoultryFarming'; // Add PoultryFarming component import
import GreenCoastCleanOceans from './pages/GreenCoastCleanOceans';
import TechForChange from './pages/TechForChange'; // Add TechForChange component import
import FosteringInclusion from './pages/FosteringInclusion'; // Add FosteringInclusion component import



// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Page transition animations
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <Homepage />
            </motion.div>
          }
        />
        <Route
          path="/about/history"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <History />
            </motion.div>
          }
        />
        <Route
          path="/about/board-members"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <BOARD_MEMBERS />
            </motion.div> 
          } 
        />
        <Route
          path="/about/testimonials"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            > 
              <Testimonials />
            </motion.div> 
          }
        />
       <Route
          path="/about/our-team"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit" 
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <OurTeam />
            </motion.div>
          }
        />
     <Route
     path="/programs"
     element={
       <motion.div
         initial="initial"
         animate="animate"
         exit="exit"
         variants={pageVariants}
         transition={{ duration: 0.3 }}
       >
         <Programs />
       </motion.div>
     }
   />
        <Route
          path="/privacy-policy"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <PrivacyPolicy />
            </motion.div>
          }
        />
        <Route
          path="/terms"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <TermsOfUse />
            </motion.div>
          }
        />
        <Route
          path="/accessibility"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <AccessibilityPolicy />
            </motion.div>
          }
        />
        <Route
  path="/get-involved/volunteer"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <Volunteer />
    </motion.div>
  }
/>

<Route
  path="/projects"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <ProjectList />
    </motion.div>
  }
/>

<Route 
  path="/projects/poultry-farming"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <PoultryFarming />
    </motion.div>
  }
/>

<Route
  path="/projects/green-coast-clean-oceans"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <GreenCoastCleanOceans />
    </motion.div>
  }
/>

<Route
  path="/projects/tech-for-change"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <TechForChange />
    </motion.div>
  }
/>
<Route
  path="/projects/fostering-inclusion"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <FosteringInclusion />
    </motion.div>
  }
/>


<Route
  path="/get-involved/donate"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <Donate />
    </motion.div>
  }
/>

<Route
  path="/blog"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <Blog />
    </motion.div>
  }
/>
<Route
  path="/blog/:id"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <BlogDetails />
    </motion.div> 
  }
/>
        {/* Add Contact route */}
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main App component
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col pt-16"> {/* pt-16 for navbar spacing */}
        <ScrollToTop />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;