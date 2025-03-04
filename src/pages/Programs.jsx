import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  HeartIcon, ShieldCheckIcon, ScaleIcon, 
  AcademicCapIcon, HandRaisedIcon, UserGroupIcon,
  BriefcaseIcon, BookOpenIcon, CurrencyDollarIcon,
  BuildingLibraryIcon, DevicePhoneMobileIcon, SunIcon
} from '@heroicons/react/24/outline';

const Programs = () => {
  const focusAreas = [
    {
      title: "Health & Wellbeing",
      icon: HeartIcon,
      points: [
        "Maternal and child healthcare for single/teenage mothers",
        "Therapy and rehabilitation for children with disabilities",
        "Mental health awareness campaigns",
        "Preventive care and community health education",
        "Psychosocial support for emotional challenges"
      ],
      color: "bg-blue-100"
    },
    {
      title: "GBV Protection & Non-Discrimination",
      icon: ShieldCheckIcon,
      points: [
        "GBV prevention and gender equality education",
        "Legal assistance and counseling for survivors",
        "Safe spaces and referral services",
        "Anti-discrimination advocacy programs",
        "Equal rights campaigns across all demographics"
      ],
      color: "bg-pink-100"
    },
    {
      title: "Rights Advocacy",
      icon: ScaleIcon,
      points: [
        "Child protection programs for vulnerable youth",
        "Legal empowerment for adolescents and mothers",
        "Elder rights advocacy against abuse/neglect",
        "Policy reform for social justice",
        "Community legal awareness initiatives"
      ],
      color: "bg-purple-100"
    },
    {
      title: "Disability Inclusion",
      icon: HandRaisedIcon,
      points: [
        "Inclusive policies in education/employment/health",
        "Provision of assistive devices and mobility aids",
        "Community sensitization programs",
        "Disability rights advocacy",
        "Accessible infrastructure development"
      ],
      color: "bg-green-100"
    },
    {
      title: "Inclusive Education & Empowerment",
      icon: AcademicCapIcon,
      points: [
        "Quality education for vulnerable children",
        "Vocational training programs",
        "Scholarships for youth with disabilities",
        "Mentorship and career guidance",
        "Digital literacy initiatives"
      ],
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Our Comprehensive Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Community-driven solutions addressing poverty, inequality, and social exclusion
          </p>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`${area.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <area.icon className="h-12 w-12 text-blue-800 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
              <ul className="space-y-3">
                {area.points.map((point) => (
                  <motion.li 
                    key={point}
                    initial={{ x: -10 }}
                    whileInView={{ x: 0 }}
                    className="flex items-start text-gray-600"
                  >
                    <div className="h-2 w-2 bg-blue-800 rounded-full mt-2 mr-3" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Holistic Approach */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-blue-800 text-white rounded-3xl p-12 mb-24"
        >
          <h3 className="text-3xl font-bold mb-12">Our Holistic Approach</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div className="space-y-12">
              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 p-4 rounded-xl">
                  <UserGroupIcon className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Survivor-Led Solutions</h4>
                  <p className="text-blue-100">
                    Peer support networks and trauma-informed care models developed 
                    with 150+ survivors
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 p-4 rounded-xl">
                  <BuildingLibraryIcon className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Multi-Sector Partnerships</h4>
                  <p className="text-blue-100">
                    Collaborating with 45+ NGOs, government agencies, and private sector partners
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="space-y-12">
              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 p-4 rounded-xl">
                  <CurrencyDollarIcon className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Economic Empowerment</h4>
                  <p className="text-blue-100">
                    92% of program graduates achieve financial independence within 2 years
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 p-4 rounded-xl">
                  <SunIcon className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Climate Resilience</h4>
                  <p className="text-blue-100">
                    Sustainable agriculture training for 500+ households in vulnerable communities
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Target Population */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-12">Target Populations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Youths and children of care", 
                count: "1,200+ Served" 
              },
              { 
                title: "Adolescent & Single Mothers", 
                count: "850+ Empowered" 
              },
              { 
                title: "Persons with Disabilities", 
                count: "600+ Supported" 
              },
              { 
                title: "Elderly Community Members", 
                count: "300+ Protected" 
              }
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-24 w-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="h-16 w-16 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {group.title}
                </h4>
                <p className="text-blue-800 font-medium">{group.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="text-center bg-white rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            Create Lasting Change
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join our movement to empower vulnerable communities and build sustainable futures
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/get-involved/donate">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-blue-800 text-white px-8 py-4 rounded-xl flex items-center gap-2"
      >
        <CurrencyDollarIcon className="h-6 w-6" />
        Support Our Work
      </motion.button>
    </Link>
            <Link to="/get-involved/volunteer">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-white text-blue-800 px-8 py-4 rounded-xl border-2 border-blue-800 flex items-center gap-2"
      >
        <BriefcaseIcon className="h-6 w-6" />
        Join Our Team
      </motion.button>
    </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;