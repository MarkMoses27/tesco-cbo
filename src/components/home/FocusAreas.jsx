import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FocusAreas = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const focusSections = [
    {
      title: "Care & Protection",
      icon: "🛡️",
      color: "from-[var(--primary-color)] to-blue-100",
      areas: [
        {
          title: "Health & Wellbeing",
          items: [
            "Maternal/child healthcare programs",
            "Mental health awareness campaigns",
            "Preventive care education",
            "Disability rehabilitation services"
          ]
        },
        {
          title: "GBV Response",
          items: [
            "Survivor support systems",
            "Legal assistance programs",
            "Safe space initiatives",
            "Anti-discrimination campaigns"
          ]
        }
      ]
    },
    {
      title: "Empowerment & Rights",
      icon: "⚡",
      color: "from-[var(--accent-color)] to-pink-50",
      areas: [
        {
          title: "Education & Skills",
          items: [
            "Vocational training",
            "Scholarship programs",
            "Special needs education",
            "Digital literacy courses"
          ]
        },
        {
          title: "Advocacy",
          items: [
            "Child protection systems",
            "Elder rights initiatives",
            "Policy reform advocacy",
            "Legal empowerment workshops"
          ]
        }
      ]
    },
    {
      title: "Inclusion",
      icon: "♿",
      color: "from-green-600 to-green-100",
      areas: [
        {
          title: "Disability Support",
          items: [
            "Assistive devices provision",
            "Inclusive policy advocacy",
            "Community sensitization",
            "Accessibility audits"
          ]
        }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-[var(--secondary-color)] to-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-4">
            Strategic Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Targeted interventions for sustainable community transformation
          </p>
        </motion.div>

        {/* Main Cards Grid */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-20">
          {focusSections.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className={`p-8 bg-gradient-to-br ${section.color}`}>
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{section.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
              </div>
              
              <div className="p-6 space-y-8">
                {section.areas.map((area, areaIndex) => (
                  <div key={areaIndex} className="border-l-4 border-[var(--accent-color)] pl-4">
                    <h4 className="text-lg font-semibold text-[var(--primary-color)] mb-3">
                      {area.title}
                    </h4>
                    <ul className="space-y-2">
                      {area.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex}
                          whileHover={{ x: 5 }}
                          className="text-gray-600 flex items-start"
                        >
                          <span className="text-[var(--accent-color)] mr-2">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Targeted Population */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-8">
            Direct Beneficiaries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Youth", icon: "👫", count: "5K+", desc: "At-risk children & adolescents" },
              { title: "Mothers", icon: "🤱", count: "1.2K+", desc: "Teenage & single mothers" },
              { title: "Disabled", icon: "♿", count: "800+", desc: "Persons with disabilities" },
              { title: "Elderly", icon: "👵", count: "300+", desc: "Senior citizens in need" },
            ].map((group, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{group.icon}</div>
                <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">
                  {group.count}
                </div>
                <h4 className="text-lg font-semibold mb-2">{group.title}</h4>
                <p className="text-gray-600 text-sm">{group.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FocusAreas;