import { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import rajab from '../../assets/testimonials/rajab.png';
import brighton from '../../assets/testimonials/Brighton.png';
import Rehema from '../../assets/testimonials/Rehema.png';
import Father from '../../assets/testimonials/Father.png';
import Khadija from '../../assets/testimonials/Khadija.png';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);

  const testimonials = [
    {
      id: 1,
      image: Father,
      title: "A Father's Journey: From Pain to Hope",
      excerpt: "How counseling and support saved a family from disintegration",
      content: `I am Rajab Abdalla, father of two daughters called Binti and Rajab Murabu. Both my girls were born with multiple congenital conditions that left them completely dependent. Binti cannot grow, speak, walk, or even communicate. Her younger sister faces similar challenges, requiring round-the-clock care that left our family in perpetual crisis.

      For years, we lived in shame and isolation. My wife and I blamed each other constantly, trapped in a cycle of anger and despair. Our community spread vicious rumors that the disabilities resulted from incest, claiming I had relations with my sisters. The stigma destroyed our family relationships and social standing. We stopped attending church, markets, even family gatherings. The stress became so overwhelming that our home became a battleground of shouted accusations and broken dishes.
      
      Everything changed when Testimony CBO's outreach team visited our village. They approached us with compassion, not judgment. Through weekly counseling sessions, they helped us understand these were medical conditions, not curses. They taught us how to work together as a team in caregiving. 
      
      Testimony CBO provided specialized physical therapy sessions, medical equipment loans including wheelchairs and feeding tubes, nutritional supplements and meal plans, education sponsorship for both girls, and parental training workshops.
      
      The transformation has been miraculous. Where we once saw only burden, we now celebrate small victories - Binti's first intentional smile, her sister's improved grip strength. Our marriage has been reborn through shared purpose. We've even become advocates, speaking at community meetings to combat disability stigma. As my wife says: "We went from hiding our girls to celebrating their unique light."`,
      category: 'family-support',
      author: 'Rajab Abdalla',
      date: '2022-03-15'
    },
    {
      id: 2,
      image: brighton,
      title: "Brighton's Battle: A Story of Hope and Healing",
      excerpt: "Emergency surgery gives infant a fighting chance",
      content: `When Brighton was born with rapidly progressing hydrocephalus, his young parents faced every parent's worst nightmare. His head circumference grew at alarming rates - 2cm per week - threatening brain damage. Traditional herbal remedies failed, and local hospitals lacked neurosurgical capacity.
      
      Testimony CBO's emergency response included rushing him to Bethany Kids Hospital,, providing a 6-month post-op care package, and connecting the family to a parent support group.
      
      The 8-hour surgery was successful. At 18 months old, Brighton is hitting developmental milestones - sitting unaided, babbling, and recognizing family members. His mother Mary now volunteers as a TESCO parent ambassador: "That shunt isn't just medical plastic - it's a lifeline. TESCO didn't just save Brighton; they saved our family from disintegration. We're paying it forward by helping 7 other families access care."`,
      category: 'medical',
      author: 'Medical Team',
      date: '2022-02-10'
    },
    {
      id: 3,
      image: Rehema,
      title: "Rehema's Triumph: Breaking Barriers",
      excerpt: "Blind girl's educational triumph against all odds",
      content: `Bright young Rehema, a totally blind young girl, faced a lot of hardship in life at the beginning. This ordeal caused a great deal of pain when her parents were separated owing to this stigma of disability at home. Though once admitted to school, she had to dropout just one year into her studies due to financial hardships.

For a full decade, Rehema remained out of school-ed until Testimony Community Based Organization intervened. This time, it was not her domestic violence survivor of a mother but through the counselling, psychosocial support, and intervention that we gave when she contacted us. Out of these efforts, we even managed to return Rehema to school on full sponsorship but also involved her family members to demystify the stigma associated with disability.

Currently, we have Rehema doing well in school, and her mother is very thankful to Testimony CBO for restoring hope and the second chance for her daughter with regards to education and future.

Together, we are creating an inclusive environment- breaking barriers and touching lives!.`,
      category: 'education',
      author: 'Education Team',
      date: '2023-01-20'
    },
    {
      id: 4,
      image: Khadija,
      title: "Khadija: From Stigma to Empowerment",
      excerpt: "Breaking myths about mental health and epilepsy",
      content: `Khadija's epilepsy and intellectual disability made her a target for abuse. Her mother exhausted their savings on witch doctors who declared her "possessed." Neighbors barred their children from playing with her, and local schools refused admission.
      
      TESCO's holistic approach included proper medical diagnosis and anticonvulsant regimen, placement at Ndiohivyo Special School, stigma reduction workshops, and a tailoring microgrant for her mother.
      
      The transformative results: 22 months seizure-free, reading at 3rd-grade level, leading class in math drills, and her mother now employs 3 other parents. Khadija proudly states: "I'm not sick - I'm special. My brain just dances differently!" Her success inspired 7 families to seek help for disabled children.`,
      category: 'stigma',
      author: 'Community Team',
      date: '2022-11-15'
    },
    {
      id: 5,
      image: rajab,
      title: "A Village Reborn in Inclusion",
      excerpt: "Community rejects stigma, embraces diversity",
      content: `Transforming Lives with Education and Care
At Testimony Community Based Organization, we consider education and inclusion as powerful enablers of lives to change. One of our most remarkable successes was when we met an 18-year-old boy with mental disabilities, who had never been to school because of the condition and severely lacked support-feeding on his own waste. The situation was tears patronizing, yet potential was spotted, and we acted.

He has been enrolled in a special school with sponsorship, and he is now significantly better. Learning life skills, gaining more confidence, and making progress not thought possible. This journey provides hope for a brighter future.

There is also a 13-year-old sibling who has multiple disabilities and had also never been to school. Now, she is being educated and provided with the care that she rightfully deserved. We have paid for her whole education with all the necessary support in place for her optimum growth and development.

This is just a glimpse of how many lives we are changing through our mission of disability inclusive education and empowerment. The organization does not stop creating an opportunity for every child irrespective of ability to realize their full development."`,
      category: 'community',
      author: 'Advocacy Team',
      date: '2022-10-20'
    }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Stories of Hope & Resilience</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Witness the transformative journeys made possible by compassionate support
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        {['all', 'family-support', 'medical', 'education', 'stigma', 'community'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              selectedCategory === cat
                ? 'bg-blue-800 text-white'
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
            } transition-colors capitalize`}
          >
            {cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            onOpenModal={setSelectedStory}
          />
        ))}
      </div>

      <div className="mt-16 text-center bg-blue-50 rounded-xl py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Be Part of the Next Miracle</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
          Your support writes new chapters of hope. Choose your impact:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/get-involved/donate"
            className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2zm6-8h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z" clipRule="evenodd" />
            </svg>
            Donate Now
          </Link>
          <Link
            to="/get-involved/volunteer"
            className="bg-white text-blue-800 px-8 py-3 rounded-lg border-2 border-blue-800 hover:bg-blue-50 transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Join as Volunteer
          </Link>
        </div>
      </div>

      {selectedStory && (
        <TestimonialModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

const TestimonialCard = ({ testimonial, onOpenModal }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
    <div className="relative aspect-video bg-gray-50 flex items-center justify-center">
      <img 
        src={testimonial.image} 
        alt={testimonial.title} 
        className="w-full h-full object-contain p-2"
        loading="lazy"
      />
      <span className="absolute top-2 right-2 bg-white/80 px-2 py-1 text-sm rounded-full">
        {new Date(testimonial.date).toLocaleDateString()}
      </span>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
          {testimonial.category.replace('-', ' ')}
        </span>
        <span className="text-sm text-gray-500">By {testimonial.author}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{testimonial.excerpt}</p>
      <button
        onClick={() => onOpenModal(testimonial)}
        className="text-blue-800 font-semibold hover:underline flex items-center self-start"
      >
        Read Full Story
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const TestimonialModal = ({ story, onClose }) => {
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed text-lg">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="bg-gray-50 p-4 flex items-center justify-center">
            <img 
              src={story.image} 
              alt={story.title} 
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">{story.title}</h2>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <span className="font-medium">By {story.author}</span>
              <span className="text-sm">•</span>
              <span className="text-sm">{new Date(story.date).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            {formatContent(story.content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;