import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required').min(20, 'Minimum 20 characters')
});

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-color)] text-[var(--primary-color)]">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, partnerships, or support
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-xl">
            <Formik
              initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium">Full Name *</label>
                      <Field
                        name="name"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent-color)]"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium">Email *</label>
                      <Field
                        name="email"
                        type="email"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent-color)]"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium">Phone Number</label>
                      <Field
                        name="phone"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent-color)]"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium">Subject *</label>
                      <Field
                        name="subject"
                        as="select"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent-color)]"
                      >
                        <option value="">Select a subject</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="support">Support Request</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                      </Field>
                      <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium">Message *</label>
                    <Field
                      name="message"
                      as="textarea"
                      rows="5"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent-color)]"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[var(--accent-color)] text-white py-3 rounded-lg font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[var(--secondary-color)] rounded-full">
                    <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Headquarters</h3>
                    <p className="text-gray-600">
                      Mariakani, next to the MP CDF office in Kalalani Village, Kwale County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[var(--secondary-color)] rounded-full">
                    <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Contact Numbers</h3>
                    <p className="text-gray-600">+254 702 706 056</p>
                    <p className="text-gray-600">+254 735 655 044</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[var(--secondary-color)] rounded-full">
                    <svg className="w-6 h-6 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email Addresses</h3>
                    <p className="text-gray-600">Info@testimonycbo.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-2xl shadow-xl overflow-hidden">
              <MapContainer
                center={[-4.15, 39.55]} // Updated coordinates for Mariakani, Kwale County, Kenya
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-4.15, 39.55]}>
                  <Popup>
                    TESCO Headquarters<br />Mariakani, Kwale County, Kenya
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
