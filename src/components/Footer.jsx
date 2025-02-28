import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/share/1AC1haRd6o/',
      label: 'Facebook'
    },
    {
      icon: FaTwitter,
      url: 'https://x.com/TestimonyCbo',
      label: 'X (Twitter)'
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/testimonycbo',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About TESCO</h3>
            <p className="text-sm opacity-80">
              Empowering communities through inclusive action and sustainable development.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: 'var(--accent-color)' }}
                  className="text-xl transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Get Involved', 'Blog'].map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: 'var(--accent-color)' }}
                    className="text-sm opacity-80 hover:opacity-100 transition-all"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>Mariakani, next to the MP CDF office</p>
              <p>Kalalani Village, Kwale County</p>
              <p>Kenya</p>
              <p>Phone: +254 702 706 056</p>
              <p>Phone: +254 735 655 044</p>
              <p>Email: <a href="mailto:Info@testimonycbo.com" className="hover:text-[var(--accent-color)]">Info@testimonycbo.com</a></p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--accent-color)] text-white px-6 py-2 rounded-lg text-sm font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} TESCO. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/privacy-policy" className="opacity-80 hover:opacity-100">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/terms" className="opacity-80 hover:opacity-100">
                  Terms of Use
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/accessibility" className="opacity-80 hover:opacity-100">
                  Accessibility
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-[var(--accent-color)] p-3 rounded-full shadow-lg"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-white text-xl" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;