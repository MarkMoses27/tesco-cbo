import VIOLET from "../../assets/violet.jpeg";
const History = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our History</h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            The inspiring journey of TESCO and our founder, Violet Ogutu
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Founder Image */}
          <div className="mb-12 flex flex-col md:flex-row items-center md:space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <div className="relative">
                <img 
                  src={VIOLET} 
                  alt="Violet Ogutu, Founder of TESCO" 
                  className="rounded-lg shadow-xl w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded shadow-lg">
                  Founder, 2017
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">About Testimony CBO (TESCO)</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2017 by Violet Ogutu, Testimony CBO (TESCO) was born from a deeply personal journey of resilience, survival, and transformation. Violet's story is one of courage, determination, and the unwavering commitment to uplift those who, like her, have faced unimaginable hardships.
              </p>
              <p className="text-blue-700 font-semibold italic">
                "From pain to purpose, from struggle to strength, TESCO exists to transform lives and communities."
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative py-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline Item 1 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-auto mr-8 md:mr-auto md:ml-8 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">A Personal Journey</h3>
                <p className="text-gray-700 leading-relaxed">
                  At just 17 years old, Violet endured the devastating loss of both parents, leaving her orphaned at a critical stage of her life. With no safety net, she was thrust into an uncertain future, forced to navigate a world that seemed unforgiving.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="mr-auto ml-8 md:ml-auto md:mr-8 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Facing Adversity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Soon after, she became a teenage mother, facing the harsh realities of poverty, rejection, and isolation while struggling to provide for her newborn. She battled hunger, lack of shelter, and the painful absence of emotional and social support.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-auto mr-8 md:mr-auto md:ml-8 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Overcoming Trauma</h3>
                <p className="text-gray-700 leading-relaxed">
                  To make matters worse, she became a survivor of gender-based violence (GBV), an experience that left deep scars but also ignited a fire within her to fight for justice and change.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="mr-auto ml-8 md:ml-auto md:mr-8 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Turning Pain Into Purpose</h3>
                <p className="text-gray-700 leading-relaxed">
                  Despite these overwhelming obstacles, Violet refused to let her past dictate her future. Instead, she turned her pain into purpose. Fueled by a burning desire to protect and empower other vulnerable young people, she founded Testimony CBO (TESCO).
                </p>
              </div>
            </div>
            
            {/* Timeline Item 5 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <div className="ml-auto mr-8 md:mr-auto md:ml-8 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">TESCO Today</h3>
                <p className="text-gray-700 leading-relaxed">
                  What started as a personal mission has grown into a transformative, community-driven organization dedicated to breaking the cycles of poverty, neglect, and abuse. Today, TESCO stands as a lifeline for thousands of individuals, offering holistic support in the form of advocacy, education, psychosocial assistance, and economic empowerment.
                </p>
              </div>
            </div>
          </div>

          {/* Why TESCO Matters */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Why TESCO Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              In marginalized communities, the challenges Violet faced are all too common. Many young mothers, children with disabilities, and vulnerable individuals are left without access to basic needs, education, or opportunities for a better future. TESCO intervenes where others do not, ensuring that no one is left behind.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission Continues</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              TESCO remains committed to being a beacon of hope for orphans, teenage mothers, single mothers, children with disabilities, and elderly persons in need of care, protection, and empowerment.
            </p>
            <div className="mt-8">
              <a href="/about/testimonials" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Read Our Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;