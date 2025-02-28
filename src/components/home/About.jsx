import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

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
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              From <span className="text-[var(--accent-color)]">Pain</span> to{" "}
              <span className="text-[var(--accent-color)]">Purpose</span>
            </h1>
            <p className="text-lg md:text-xl">
              The Inspiring Journey of Testimony CBO (TESCO)
            </p>
          </div>
          <img 
            src="/violet-portrait.jpg" 
            alt="Violet Ogutu, TESCO Founder"
            className="rounded-lg shadow-2xl h-96 w-full object-cover"
          />
        </div>
      </div>

      {/* Founding Story */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--primary-color)]">
              A Legacy of Resilience
            </h2>
            <p className="text-lg leading-relaxed">
              Founded in 2017 by Violet Ogutu, TESCO emerged from personal tragedy 
              and transformation. At 17, Violet faced loss of parents, teenage motherhood, 
              poverty, and GBV. From these ashes rose determination to create change.
            </p>
            <div className="p-6 bg-[var(--secondary-color)] rounded-lg">
              <blockquote className="text-xl italic">
                "My pain became fuel for purpose. Every struggle taught me 
                what our community needs - compassion, opportunity, and hope."
              </blockquote>
              <p className="mt-4 font-bold">- Violet Ogutu, Founder</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-[var(--primary-color)] text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why TESCO Matters</h3>
              <p className="leading-relaxed">
                In marginalized communities, cycles persist:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">▸</span>
                  68% of teenage mothers lack support
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">▸</span>
                  Children with disabilities face 3x abandonment
                </li>
                <li className="flex items-center">
                  <span className="text-[var(--accent-color)] mr-2">▸</span>
                  12% of GBV survivors get rehabilitation
                </li>
              </ul>
            </div>

            <img 
              src="/community-outreach.jpg" 
              alt="TESCO community work"
              className="rounded-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission & Focus */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Transformative Approach
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Holistic programs creating sustainable change through:
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {icon: '📚', title: 'Education', text: 'Scholarships & training'},
            {icon: '♿', title: 'Disability Inclusion', text: 'Care & advocacy'},
            {icon: '❤️', title: 'GBV Recovery', text: 'Counseling & support'},
            {icon: '💼', title: 'Empowerment', text: 'Business training'},
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Impact Stats */}
      <div className="bg-[var(--primary-color)] text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 text-center gap-8">
          <Counter value={5000} suffix="+" label="Lives Impacted" />
          <Counter value={120} label="Teen Mothers Supported" />
          <Counter value={300} suffix="+" label="GBV Survivors Helped" />
          <Counter value={85} suffix="%" label="Program Success Rate" />
        </div>
      </div>
    </div>
  );
};

export default AboutTesco;