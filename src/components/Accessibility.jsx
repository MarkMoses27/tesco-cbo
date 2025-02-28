import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AccessibilityPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
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
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              TESCO is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying
              relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Implemented Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keyboard navigation support</li>
                  <li>Alt text for images</li>
                  <li>Responsive design</li>
                  <li>ARIA landmarks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Ongoing Efforts</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Regular accessibility audits</li>
                  <li>Staff training programs</li>
                  <li>User testing with assistive technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Feedback & Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you experience any accessibility barriers, please contact us:
              <br />
              <a href="mailto:accessibility@tesco.org" className="text-[var(--accent-color)] hover:underline">
                accessibility@tesco.org
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessibilityPolicy;