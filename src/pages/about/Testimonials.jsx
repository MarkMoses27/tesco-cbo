import { useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialCard from './TestimonialCard';
import TestimonialModal from './TestimonialModal';


//images
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
  
  Testimony CBO provided:
  - Specialized physical therapy sessions
  - Medical equipment loans (wheelchair, feeding tubes)
  - Nutritional supplements and meal plans
  - Education sponsorship for both girls
  - Parental training workshops
  
  The transformation has been miraculous. Where we once saw only burden, we now celebrate small victories - Binti's first intentional smile, her sister's improved grip strength. Our marriage has been reborn through shared purpose. We've even become advocates, speaking at community meetings to combat disability stigma. As my wife says: "We went from hiding our girls to celebrating their unique light."`,
      category: 'family-support',
      author: 'Rajab Abdalla',
      date: '2024-03-15'
    },
    {
      id: 2,
      image: brighton,
      title: "Brighton's Battle: A Story of Hope and Healing",
      excerpt: "Emergency surgery gives infant a fighting chance",
      content: `When Brighton was born with rapidly progressing hydrocephalus, his young parents faced every parent's worst nightmare. His head circumference grew at alarming rates - 2cm per week - threatening brain damage. Traditional herbal remedies failed, and local hospitals lacked neurosurgical capacity.
  
  Testimony CBO's emergency response:
  1. Rushed referral to Bethany Kids Hospital
  2. Funded VP shunt surgery (3.2 million KES)
  3. Provided 6-month post-op care package
  4. Connected family to parent support group
  
  The 8-hour surgery was successful. At 18 months old, Brighton is hitting developmental milestones - sitting unaided, babbling, and recognizing family members. His mother Mary now volunteers as a TESCO parent ambassador: "That shunt isn't just medical plastic - it's a lifeline. TESCO didn't just save Brighton; they saved our family from disintegration. We're paying it forward by helping 7 other families access care."`,
      category: 'medical',
      author: 'Medical Team',
      date: '2024-02-10'
    },
    {
      id: 3,
      image: Rehema,
      title: "Rehema's Triumph: Breaking Barriers",
      excerpt: "Blind girl's educational triumph against all odds",
      content: `Rehema lost her sight to measles at age 3. When her father abandoned the family, blaming her disability, she dropped out of school after just one year. For a decade, she remained homebound - until Testimony CBO's community scouts identified her case during a door-to-door survey.
  
  Our comprehensive intervention:
  ✓ Braille literacy training (now reading Grade 2 level)
  ✓ Orientation & mobility training with white cane
  ✓ Family counseling to reconcile parents
  ✓ Community sensitization workshops
  
  At 17, Rehema excels academically (top 10% class rank) and leads the school choir. Her mother Wanjiku shares: "I cried when she read me braille letters. My daughter who I carried like a baby now teaches me!" Rehema aims to become Kenya's first blind Supreme Court Justice, proving disability ≠ inability.`,
      category: 'education',
      author: 'Education Team',
      date: '2024-01-20'
    },
    {
      id: 4,
      image: Khadija,
      title: "Khadija: From Stigma to Empowerment",
      excerpt: "Breaking myths about mental health and epilepsy",
      content: `Khadija's epilepsy and intellectual disability made her a target for abuse. Her mother exhausted their savings on witch doctors who declared her "possessed." Neighbors barred their children from playing with her, and local schools refused admission.
  
  TESCO's holistic approach:
  1. Medical: Proper diagnosis & anticonvulsant regimen
  2. Educational: Ndiohivyo Special School placement
  3. Social: Stigma reduction workshops
  4. Economic: Mother's tailoring microgrant
  
  Transformative results:
  - 22 months seizure-free
  - Reads at 3rd-grade level
  - Leads class in math drills
  - Mother employs 3 other parents
  
  Khadija proudly states: "I'm not sick - I'm special. My brain just dances differently!" Her success inspired 7 families to seek help for disabled children.`,
      category: 'stigma',
      author: 'Community Team',
      date: '2023-11-15'
    },
    {
      id: 5,
      image: rajab,
      title: "A Village Reborn in Inclusion",
      excerpt: "Community rejects stigma, embraces diversity",
      content: `In coastal region, 72% of disabled children were hidden in homes. TESCO launched:
  • Monthly mobile disability clinics
  • Interfaith leader training program
  • School inclusion initiatives
  • Parent advocate network
  
  Remarkable outcomes:
  → 312 children enrolled in schools
  → 15 churches/mosques established special needs units
  → Traditional healers became referral partners
  → Disability birth registrations increased 400%
  
  Village elder Mwangi summarizes: "We thought disability meant uselessness. Now we see these children as teachers of patience. Our blind children read braille, our deaf youth dance to vibrations - they've shown us new ways to experience the world."`,
      category: 'community',
      author: 'Advocacy Team',
      date: '2023-10-20'
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

      {/* Filters remain unchanged */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            onOpenModal={setSelectedStory}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-blue-50 rounded-xl py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Be Part of the Next Miracle</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
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

export default Testimonials;