const MissionVisionValues = () => {
    return (
      <div className="bg-[var(--secondary-color)] text-[var(--primary-color)]">
        {/* Hero Section */}
        <div className="relative bg-[var(--primary-color)] text-white">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url("/mission-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Purpose</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Guiding principles that drive our work and shape our impact
            </p>
          </div>
        </div>
  
        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-[var(--accent-color)] text-white p-12 flex items-center">
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              <div className="md:w-3/5 p-12">
                <p className="text-lg leading-relaxed">
                  To empower and uplift vulnerable children, young mothers, persons with disabilities, 
                  and elderly persons by providing holistic support systems that enhance their well-being, 
                  dignity, and future opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Vision Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-2/5 bg-[var(--primary-color)] text-white p-12 flex items-center">
                <h2 className="text-4xl font-bold">Our Vision</h2>
              </div>
              <div className="md:w-3/5 p-12">
                <p className="text-lg leading-relaxed">
                  A resilient and empowered society where all individuals thrive with dignity, 
                  equality, and opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Core Values Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              The principles that guide our decisions, actions, and relationships
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professionalism",
                description: "We uphold ethics, competence, and commitment to delivering high-quality services to the community.",
                icon: "👔",
                color: "bg-blue-100"
              },
              {
                title: "Passion",
                description: "We work with dedication and enthusiasm to create a positive impact.",
                icon: "🔥",
                color: "bg-red-100"
              },
              {
                title: "Compassion",
                description: "We demonstrate empathy and care for the most vulnerable.",
                icon: "❤️",
                color: "bg-pink-100"
              },
              {
                title: "Inclusivity",
                description: "We ensure that all individuals, especially persons with disabilities, are valued and included.",
                icon: "🤝",
                color: "bg-green-100"
              },
              {
                title: "Accountability",
                description: "We maintain transparency, integrity, and responsibility in all our actions.",
                icon: "⚖️",
                color: "bg-yellow-100"
              },
              {
                title: "Justice",
                description: "We advocate for fairness, equality, and human rights for all.",
                icon: "🏛️",
                color: "bg-purple-100"
              }
            ].map((value, index) => (
              <div key={index} className={`rounded-lg p-8 shadow-lg ${value.color} hover:shadow-xl transition-shadow duration-300`}>
                <div className="text-4xl mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Commitment Section */}
        <div className="bg-[var(--primary-color)] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment in Action</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-gray-700 bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Ethical Practice</h3>
                <p>
                  We uphold the highest standards of integrity in all our programs, ensuring
                  that resources reach those who need them most.
                </p>
              </div>
              <div className="bg-white text-gray-700 bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
                <p >
                  We regularly evaluate our programs and seek feedback to better serve
                  our community&apos;s evolving needs.
                </p>
              </div>
              <div className="bg-white text-gray-700 bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Community Participation</h3>
                <p>
                  We involve community members in decision-making processes, ensuring
                  that our initiatives are relevant and sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Impact Goals Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Translating Our Mission into Impact</h2>
            <p className="text-lg max-w-3xl mx-auto">
              How our mission, vision, and values guide our strategic goals and measurable outcomes
            </p>
          </div>
  
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--accent-color)]">Short-term Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[var(--accent-color)] mr-2 mt-1">✓</span>
                    <span>Expand Outreach & Awareness Campaigns </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-color)] mr-2 mt-1">✓</span>
                    <span>Increase Access to Essential Services </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-color)] mr-2 mt-1">✓</span>
                    <span>Enhance Education & Skills Training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-color)] mr-2 mt-1">✓</span>
                    <span>Strengthen Organizational Capacity                    </span>
                  </li><li className="flex items-start">
                    <span className="text-[var(--accent-color)] mr-2 mt-1">✓</span>
                    <span>Pilot Climate Resilience Initiatives
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">Long-term Vision</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2 mt-1">✓</span>
                    <span>Establish a Resource & Rehabilitation Center
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2 mt-1">✓</span>
                    <span>Build a fully equipped center offering therapy, counseling, vocational training, and safe shelter for vulnerable individuals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2 mt-1">✓</span>
                    <span>Scale Up Education & Economic Empowerment Programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2 mt-1">✓</span>
                    <span>Advocate for Policy Change & Systemic Reforms
                    </span>
                  </li>  <li className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2 mt-1">✓</span>
                    <span>Expand Healthcare & Mental Health Support
                    </span>
                  </li>  <li className="flex items-start">
                    <span className="text-[var(--primary-color)] mr-2 mt-1">✓</span>
                    <span>Develop Sustainable Climate & Disaster Resilience Programs.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MissionVisionValues;