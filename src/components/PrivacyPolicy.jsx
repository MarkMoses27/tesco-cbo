import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Effective Date: [Insert Date]
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              [Your Organization Name] ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website [website URL] and use our services.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal Identification Information (Name, Email, etc.)</li>
                <li>Demographic Information</li>
                <li>Technical Data (IP Address, Browser Type)</li>
                <li>Usage Data (Pages Visited, Time Spent)</li>
              </ul>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Use of Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">We use your information to:</h3>
                <ul className="space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Improve user experience</li>
                  <li>Communicate with users</li>
                  <li>Process donations</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">We do not:</h3>
                <ul className="space-y-2">
                  <li>Sell personal information</li>
                  <li>Share data with third-party advertisers</li>
                  <li>Use data for unrelated purposes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance your experience. You can control cookies
              through your browser settings. Learn more in our{' '}
              <Link to="/cookie-policy" className="text-[var(--accent-color)] hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['Access', 'Correction', 'Deletion', 'Objection'].map((right) => (
                <div key={right} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">{right}</h3>
                  <p className="text-sm text-gray-600">
                    You have the right to request {right.toLowerCase()} of your data
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For privacy-related inquiries, please contact our Data Protection
              Officer at:
              <br />
              <a href="mailto:privacy@yourorganization.org" className="text-[var(--accent-color)] hover:underline">
                privacy@yourorganization.org
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last Updated: [Date]
              <br />
              [Your Organization Name] is a registered charity in [Country]
              (Registration Number: [Number])
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;