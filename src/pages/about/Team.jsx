import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiUsers, FiHeart, FiBook, FiX } from 'react-icons/fi';
import TECSO_LOGO from '../../assets/tesco-cbo.png';


//images
import violetOgutu from '../../assets/team/violet-ogutu.jpg'
import richardOlwek from '../../assets/team/richard-olwek.jpg'
import millicentOndule from '../../assets/team/millicent-ondule.jpg'  
import hashma from '../../assets/team/hashma.jpg'
import chambiaWilliam from '../../assets/team/chambia-william.jpg'
import euniceakoth from '../../assets/team/eunice.jpg'


const Team = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Violet Ogutu',
      role: 'Founder & Executive Director',
      image: violetOgutu,
      bio: 'Visionary leader driving inclusive education, GBV response, and climate resilience initiatives across Kenya\'s Coast region.',
      details: {
        qualifications: [
          'Sociology & Community Development background',
          '10+ years community empowerment experience',
          'Disability Rights Advocacy training'
        ],
        achievements: [
          'Founded Testimony CBO in 2015',
          'Established inclusive vocational programs',
          'Pioneered disability-inclusive policies'
        ],
        expertise: ['Program Development', 'Policy Advocacy', 'Community Mobilization']
      }
    },
    {
      id: 2,
      name: 'Richard Olwek',
      role: 'Finance Manager',
      image: richardOlwek,
      bio: 'CPA-certified professional ensuring financial sustainability and compliance.',
      details: {
        qualifications: [
          'CPA from Technical University of Mombasa',
          '20+ years financial management',
          'Budget optimization specialist'
        ],
        achievements: [
          'Maintained 100% audit compliance',
          'Implemented transparent reporting systems',
          'Secured sustainable program funding'
        ],
        expertise: ['Financial Planning', 'Grant Management', 'Regulatory Compliance']
      }
    },
    {
      id: 3,
      name: 'Millicent Ondule',
      role: 'Disability Inclusion Officer',
      image: millicentOndule,
      bio: 'Advocate for disability rights and accessible community services.',
      details: {
        qualifications: [
          'Special Needs Education training',
          'Community mobilization experience',
          'Sign language proficiency'
        ],
        achievements: [
          'Increased accessibility in 15+ communities',
          'Trained 200+ caregivers',
          'Developed inclusive community programs'
        ],
        expertise: ['Accessibility Audits', 'Disability Rights Advocacy', 'Inclusive Programming']
      }
    },
    {
      id: 4,
      name: 'Hashma',
      role: 'SRHR Officer',
      image: hashma,
      bio: 'Promotes sexual/reproductive health rights for vulnerable populations.',
      details: {
        qualifications: [
          'SRHR counseling certification',
          'Community health education training',
          'Gender equality advocacy'
        ],
        achievements: [
          'Conducted 50+ community workshops',
          'Improved access to family planning services',
          'Advanced menstrual health education'
        ],
        expertise: ['Reproductive Health Education', 'GBV Prevention', 'Community Outreach']
      }
    },
    {
      id: 5,
      name: 'Chambia William',
      role: 'MEL Specialist',
      image: chambiaWilliam,
      bio: 'Monitoring & Evaluation expert ensuring program effectiveness.',
      details: {
        qualifications: [
          '7+ years MEL experience',
          'Data analysis certification',
          'Grant writing expertise'
        ],
        achievements: [
          'Developed 15+ program evaluation frameworks',
          'Improved data collection systems',
          'Strengthened partner reporting'
        ],
        expertise: ['Impact Assessment', 'Data Management', 'Program Evaluation']
      }
    },
    {
      id: 6,
      name: 'Eunice Okoth',
      role: 'Pyschologist and Programs Coordinator',
      image: euniceakoth, 
      bio: 'Focuses on GBV prevention and mental health support.',
      details: {
        qualifications: [
          'Social Work degree',
          'Trauma counseling training',
          'GBV response certification'
        ],
        achievements: [
          'Established community support systems',
          'Trained 100+ first responders',
          'Integrated mental health services'
        ],
        expertise: ['GBV Prevention', 'Survivor Support', 'Mental Health Advocacy']
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-8"
          >
            <img 
              src={TECSO_LOGO} 
              alt="Testimony CBO Logo" 
              className="h-28 mx-auto"
            />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Dedicated Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate professionals driving sustainable community empowerment
          </p>
        </motion.header>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                  expandedMember === member.id ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="p-6">
                  <div className={`${expandedMember === member.id ? 'lg:flex gap-8' : ''}`}>
                    {/* Image Section */}
                    <motion.div 
                      layout
                      className={`${
                        expandedMember === member.id 
                          ? 'lg:w-1/3 mb-6 lg:mb-0' 
                          : 'w-full mb-6'
                      }`}
                    >
                      <div className="h-56 w-full rounded-xl relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                      layout
                      className={`${expandedMember === member.id ? 'lg:w-2/3' : ''}`}
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h2>
                        <p className="text-blue-600 font-medium mb-4 flex items-center gap-2">
                          <FiArrowUpRight className="text-xl" />
                          {member.role}
                        </p>
                      </div>

                      <AnimatePresence mode='wait'>
                        {expandedMember === member.id ? (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                          >
                            {/* Detailed Content */}
                            <div className="grid gap-6 md:grid-cols-2">
                              <div className="space-y-4">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                  <FiBook className="text-blue-500" />
                                  Qualifications
                                </h3>
                                <ul className="space-y-2">
                                  {member.details.qualifications.map((q, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                      {q}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="space-y-4">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                  <FiHeart className="text-blue-500" />
                                  Achievements
                                </h3>
                                <ul className="space-y-2">
                                  {member.details.achievements.map((a, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                                      {a}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                <FiUsers className="text-blue-500" />
                                Expertise
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {member.details.expertise.map((e, i) => (
                                  <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                  >
                                    {e}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            <motion.button
                              onClick={() => setExpandedMember(null)}
                              whileHover={{ scale: 1.05 }}
                              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                              <FiX className="text-lg" />
                              Close Profile
                            </motion.button>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <p className="text-gray-600 mb-6 line-clamp-4">
                              {member.bio}
                            </p>
                            <motion.button
                              onClick={() => setExpandedMember(member.id)}
                              whileHover={{ scale: 1.05 }}
                              className="w-full py-3 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-semibold"
                            >
                              View Full Profile
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Collective Impact */}
        {!expandedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 bg-blue-600 text-white rounded-2xl p-8 shadow-xl"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/10 rounded-xl">
                  <FiUsers className="text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">15+ Programs</h3>
                  <p className="text-blue-100">Active community initiatives</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <FiHeart className="text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">10k+ Lives</h3>
                  <p className="text-blue-100">Positively impacted</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <FiBook className="text-3xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">75+ Years</h3>
                  <p className="text-blue-100">Combined experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Team;