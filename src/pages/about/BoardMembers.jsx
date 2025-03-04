import { useState } from 'react';

// Import board member images
import Winnie from '../../assets/board-members/winnie.png';
import Violet from '../../assets/board-members/violet-ogutu.png';
import Ruth from '../../assets/board-members/ruth-chege.png';
import Alice from '../../assets/board-members/alice.png';
import Christopher from '../../assets/board-members/mapesa.png';
import Bosire from '../../assets/board-members/bosire.png'

const BoardMembers = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleExpand = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const members = [
    {
      id: 1,
      image: Winnie,
      name: 'Winnie Okoth',
      role: 'Chairperson, Board of Directors',
      bio: `Winnie Okoth is a dedicated leader and advocate with a strong background in education, environmental science, and disaster risk reduction. With over seven years of experience as a Program Coordinator, she has successfully led initiatives focused on climate resilience, disaster advocacy, and sustainable community development.\n\nAs the Chairperson of the Board of Directors at Testimony Community Based Organization, Winnie provides strategic leadership, ensuring strong governance and alignment with the organization’s mission of empowering marginalized communities. She works closely with the board and management team to drive impactful programs in health and well-being, disability inclusion, gender-based violence response, and inclusive education.\n\nHer expertise in environmental sustainability and disaster risk management plays a crucial role in integrating resilience-building strategies into the organization's interventions. Winnie is passionate about creating equitable opportunities for vulnerable groups, advocating for policies that promote social justice, climate action, and disability rights.\n\nWith a vision for a just and empowered society, Winnie continues to champion initiatives that enhance community resilience and improve the lives of persons with disabilities, young mothers, and other underserved populations. Her leadership at Testimony CBO strengthens the organization's ability to deliver sustainable impact and drive meaningful change.`,
    },
    {
      id: 2,
      image: Violet,
      name: 'Violet Ogutu',
      role: 'Executive Director, Founder & Board Secretary',
      bio: `Violet Ogutu is the Executive Director, Founder, and Board Secretary of Testimony Community Based Organization (CBO). A passionate sociologist and disability inclusion advocate, she is dedicated to empowering young people with disabilities and ensuring equal opportunities for all.

With a strong commitment to gender equality and social justice, Violet actively leads initiatives addressing gender-based violence (GBV), disability rights advocacy, and inclusive education. She has been instrumental in developing holistic support programs that provide access to healthcare, psychosocial support, and economic empowerment for survivors of GBV and other marginalized groups.

As Board Secretary, Violet plays a key role in governance, policy formulation, and strategic leadership, working closely with the board and stakeholders to advance Testimony CBO’s mission. Her work continues to shape sustainable solutions for disability inclusion, GBV response, and community empowerment in the Coast region and beyond.

Her unwavering dedication and leadership have positioned Testimony CBO as a champion for justice, equity, and dignity, ensuring that no one is left behind.`,
    },
    {
      id: 3,
      image: Ruth,
      name: 'Ruth Chege',
      role: 'Treasurer',
      bio: ` Ruth Chege serves as the Treasurer of the Board of Directors at Testimony Community Based Organization (CBO), where she plays a pivotal role in overseeing financial management and ensuring transparency in the organization's operations.

She is the founder of FAVIRU Enterprise and holds a Diploma in Business Management from Mount Kenya University (MKU). Additionally, she has successfully completed her Certified Public Accountant (CPA) qualifications, equipping her with extensive expertise in financial planning, budgeting, and accountability.

Ruth is deeply passionate about community service and economic empowerment, dedicating her skills to fostering sustainable development within marginalized communities. As Treasurer, she works closely with the board and management to ensure responsible financial stewardship, enabling Testimony CBO to effectively implement its programs in disability inclusion, health and well-being, gender-based violence response, and inclusive education.

Her dedication to integrity, financial sustainability, and community impact makes her an invaluable asset in driving Testimony CBO’s mission forward. Wewe ends tu na hiyo style yako we will make changes in mbeleni incase of complains of the profiles`,
    },
    {
      id: 4,
      image: Alice,
      name: 'Alice',
      role: 'Board Member',
      bio: `Alice is a dedicated entrepreneur and the founder of Alice Kids Wear, a children's clothing brand known for its commitment to quality and style. Her passion for community service drives her involvement in initiatives that make a significant impact on the lives of others. As a Board Member of Testimony Community Based Organization (CBO), Alice contributes her business acumen and compassionate leadership to support programs focused on disability inclusion, health and well-being, gender-based violence response, and inclusive education. Her presence and dedication play a vital role in advancing Testimony CBO's mission to empower marginalized communities`,
    },
    {
      id: 5,
      image: Christopher,
      name: 'Christopher Mapesa',
      role: 'Board Member',
      bio: `Christopher Mapesa is a Board Member of Testimony Community Based Organization (CBO) and a dedicated Kenya Police Officer. As a passionate disability advocate, he is committed to raising awareness, promoting inclusivity, and fostering safe and supportive environments for individuals with disabilities.

With a strong belief in equal rights and opportunities, Christopher actively works towards breaking societal barriers and advocating for policies that enhance accessibility and inclusion. His role at Testimony CBO strengthens the organization’s mission in disability rights advocacy, health and well-being, gender-based violence response, and community empowerment.

Through his service and leadership, Christopher continues to be a champion for justice and inclusion, ensuring that persons with disabilities are recognized, valued, and fully integrated into society.`,
    },
    {
        id: 6,
        image: Bosire, 
        name: 'Dr. Bosire Duke Otwori',
        role: 'Board Member & Health Program Coordinator',
        bio: `Dr. Bosire Duke Otwori is a dedicated healthcare professional and a passionate advocate for health equity, disability inclusion, and sexual and reproductive health and rights (SRHR). As a Board Member and Health Program Coordinator at Testimony Community Based Organization (CBO), he ensures that children, young people with disabilities, and other marginalized groups receive access to quality healthcare, medical follow-ups, and essential SRHR services.\n\nDr. Bosire holds a Diploma in Clinical Medicine and Surgery and a Certificate in Counseling, complemented by numerous specialized short-course trainings in healthcare. With a strong background in clinical practice, he currently serves at BOMU Hospital, where he provides patient-centered care and advocates for comprehensive health services.\n\nHis leadership in health programs focuses on promoting inclusive healthcare, improving access to SRHR education and services, and ensuring that all individuals, regardless of their abilities or backgrounds, have the support they need to lead healthier and more empowered lives.`,
      }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Leadership That Inspires Change
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leaders steering Testimony CBO towards a more inclusive future
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="relative h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {expandedMember === member.id ? member.bio : `${member.bio.substring(0, 100)}...`}
                </p>
                <button 
                  onClick={() => toggleExpand(member.id)}
                  className="mt-4 text-blue-900 font-semibold hover:underline flex items-center"
                >
                  {expandedMember === member.id ? 'Show Less' : 'Read Full Profile'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;