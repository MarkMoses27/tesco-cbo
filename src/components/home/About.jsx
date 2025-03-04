import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import VIOLET_IMAGE from '../../assets/board-members/violet-ogutu.png';
import COMMUNITY_IMAGE from '../../assets/community.png';

const Counter = ({ value, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="space-y-2">
      <div className="text-4xl font-bold mb-2 text-[var(--accent-color)]">
        {inView ? (
          <CountUp
            end={value}
            duration={3}
            suffix={suffix}
            separator=","
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
};

const AboutTesco = () => {
  return (
    <div className="bg-[var(--secondary-color)] text-[var(--primary-color)]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              From <span className="text-[var(--accent-color)]">Pain</span> to{" "}
              <span className="text-[var(--accent-color)]">Purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              The Inspiring Journey of Testimony CBO (TESCO)
            </p>
          </div>

          {/* Portrait Image */}
          <div className="order-1 md:order-2 relative group">
            <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto shadow-2xl rounded-2xl overflow-hidden">
              <img 
                src={VIOLET_IMAGE} 
                alt="Violet Ogutu, TESCO Founder"
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Founding Story Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">A Legacy of Resilience</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Founded in 2017 by Violet Ogutu, TESCO emerged from personal tragedy 
              and transformation. At 17, Violet faced the devastating loss of both parents, 
              followed by teenage motherhood, extreme poverty, and gender-based violence. 
              Through these trials emerged an unshakable determination to create systemic change.
            </p>
            
            <div className="p-8 bg-[var(--secondary-color)] rounded-2xl">
              <blockquote className="text-2xl italic text-[var(--primary-color)]">
                "My pain became fuel for purpose. Every struggle taught me 
                what our community needs most - compassion, opportunity, 
                and unwavering hope."
              </blockquote>
              <p className="mt-6 font-bold text-[var(--accent-color)]">
                - Violet Ogutu, Founder & Executive Director
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-[var(--primary-color)] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why TESCO Matters</h3>
              <p className="mb-6">
                In marginalized communities, cycles of disadvantage persist:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[var(--accent-color)] mr-3 text-xl">▸</span>
                  <div>
                    <h4 className="font-semibold">68% of Teen Mothers</h4>
                    <p className="text-sm opacity-90">Lack access to basic support systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-color)] mr-3 text-xl">▸</span>
                  <div>
                    <h4 className="font-semibold">3x Higher Risk</h4>
                    <p className="text-sm opacity-90">Children with disabilities face abandonment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent-color)] mr-3 text-xl">▸</span>
                  <div>
                    <h4 className="font-semibold">12% Access</h4>
                    <p className="text-sm opacity-90">GBV survivors receiving comprehensive care</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Community Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={COMMUNITY_IMAGE} 
                alt="TESCO community outreach team"
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl font-bold">Community First Approach</h4>
                <p className="text-sm">Grassroots initiatives creating real change</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Pillars of Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Holistic programs addressing root causes through sustainable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '📚',
              title: 'Inclusive Education',
              description: 'Special needs schooling & vocational training',
              bg: 'bg-blue-100'
            },
            {
              icon: '❤️',
              title: 'GBV Recovery',
              description: 'Counseling & legal support systems',
              bg: 'bg-pink-100'
            },
            {
              icon: '♿',
              title: 'Disability Rights',
              description: 'Advocacy & assistive technology',
              bg: 'bg-green-100'
            },
            {
              icon: '💼',
              title: 'Economic Power',
              description: 'Microfinance & business training',
              bg: 'bg-purple-100'
            }
          ].map((pillar, index) => (
            <div key={index} className={`${pillar.bg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-[var(--primary-color)] text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <Counter value={5000} suffix="+" label="Lives Transformed" />
          <Counter value={120} label="Youth Scholarships" />
          <Counter value={300} suffix="+" label="GBV Survivors Supported" />
          <Counter value={85} suffix="%" label="Program Success Rate" />
        </div>
      </div>
    </div>
  );
};

export default AboutTesco;