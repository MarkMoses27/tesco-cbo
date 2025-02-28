import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-color)] text-[var(--primary-color)]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg text-gray-600">Effective Date: [Insert Date]</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms
              of Use and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">You Agree To:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information</li>
                  <li>Use services lawfully</li>
                  <li>Respect intellectual property</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Prohibited Actions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unauthorized access</li>
                  <li>Data scraping</li>
                  <li>Malicious activities</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              TESCO reserves the right to modify or terminate services at any time. We are not
              liable for any indirect damages arising from service use.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;