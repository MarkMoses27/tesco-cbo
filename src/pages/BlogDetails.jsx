import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import BeachCleanup from "../assets/blog/cleaning-msa.png";
import DianiCP from "../assets/blog/dianicp.png";
import Awareness from "../assets/blog/awareness.png";
import Symposium from "../assets/blog/symposium.png";
import Disability from "../assets/blog/disability.png";
import OFFICE_LAUNCH from "../assets/blog/launch.png";

// Sample blog posts data with consistent string IDs. To add another blog post, include another object here.
const BLOG_POSTS = [
  {
    id: "1",
    title: "Mombasa Beach Cleanup: A Day of Collective Impact",
    category: "Volunteering",
    categoryColor: "bg-emerald-500",
    date: "February 28, 2025",
    image: BeachCleanup,
    excerpt: "Community unites to preserve Kenya's coastline through massive cleanup initiative",
    content: `
      <h2>A Strong Start to a Meaningful Day</h2>
      <p>As the sun rose over the Indian Ocean, over 120 volunteers gathered at the designated meeting point on Mombasa Beach. Armed with reusable gloves, eco-friendly bags, and unwavering enthusiasm, participants from all walks of life—local residents, students, corporate teams, and environmental advocates—set out to reclaim the beauty of our shores.</p>
      
      <blockquote><em>"Seeing the community come together so early in the morning was truly uplifting. It's a reminder that every small effort counts toward a greater good,"</em> shared one of the dedicated volunteers.</blockquote>
      
      <h2>The Impact: Beyond Just a Cleanup</h2>
      <p>Throughout the morning, volunteers worked diligently to remove plastic, debris, and other pollutants that threatened marine life and the health of our coastal ecosystem. Here are some highlights from the day:</p>
      
      <ul>
        <li><strong>Tons of Waste Removed:</strong> Volunteers collectively cleared out an impressive amount of waste, helping to reduce plastic pollution and protect local wildlife.</li>
        <li><strong>Community Engagement:</strong> The event fostered strong community ties and raised awareness about the importance of sustainable living.</li>
        <li><strong>Environmental Education:</strong> Alongside the physical cleanup, educational sessions helped participants understand effective waste management and recycling practices.</li>
      </ul>
      
      <p>These achievements underscore the importance of local initiatives in addressing global environmental challenges. Every piece of trash collected was a step toward a cleaner, healthier environment for both people and marine life.</p>
      
      <h2>Stories from the Shore</h2>
      <p>Participants shared their heartfelt experiences during the cleanup. A local fisherman remarked:</p>
      
      <blockquote><em>"A clean beach means healthy fish and a better livelihood for us. Today, we all witnessed the power of community action."</em></blockquote>
      
      <p>Another volunteer added:</p>
      
      <blockquote><em>"I left with a renewed sense of purpose. This event showed me that when we unite for a cause, even the smallest efforts can create big change."</em></blockquote>
      
      <p>These voices reflect the spirit of collaboration and collective responsibility that defined the day.</p>
      
      <h2>A Roadmap for the Future</h2>
      <p>While the cleanup on 25th February 2025 was a resounding success, it's only the beginning. The event has set the stage for more community-driven environmental initiatives in the future. Here's what's next:</p>
      
      <ul>
        <li><strong>Upcoming Cleanups:</strong> Plans are already in motion for additional beach and coastal cleanup drives.</li>
        <li><strong>Ongoing Education:</strong> Workshops and seminars on sustainability and waste management will continue to empower the community.</li>
        <li><strong>Stronger Partnerships:</strong> By partnering with local organizations and authorities, future events will expand their reach and impact.</li>
      </ul>
      
      <h2>Join the Movement</h2>
      <p>Even if you couldn't be there on the day, you can still contribute to the cause. Adopt sustainable practices, reduce plastic use, and spread awareness about the importance of keeping our beaches clean. Together, we can ensure that Mombasa's coastline remains a thriving and beautiful natural resource for generations to come.</p>
      
      <p><strong>Thank you to everyone who participated and supported the Mombasa Beach Cleanup.</strong> Let's keep the momentum going for a greener, cleaner future!</p>
      
      <p>#MombasaBeachCleanup #CommunityAction #SustainableFuture</p>
    `
  },
  {
    id: "2",
    title: "A Heartfelt Celebration: World Cerebral Palsy Day at Diani CP Center",
    category: "Events",
    categoryColor: "bg-rose-500",
    date: "October 3, 2023",
    image: DianiCP,
    excerpt: "Empowering children with CP and their families through education and advocacy",
    content: `
      <h2>Empowering Children, Celebrating Abilities</h2>
      <p>On a sunny morning in Diani, the <strong>Diani Cerebral Palsy Center</strong> was abuzz with excitement and joy. Families, educators, and community members gathered to celebrate <strong>World Cerebral Palsy Day</strong> and honor the strength and resilience of children with CP.</p>
      
      <blockquote><em>"This event is a testament to the incredible spirit of these children and their families. It's a day of celebration, awareness, and advocacy for a more inclusive society,"</em> remarked the center's director.</blockquote>
      
      <h2>A Day of Inspiration and Education</h2>
      <p>The day's program featured a variety of activities designed to engage, educate, and uplift attendees:</p>
      
      <ul>
        <li><strong>Art Exhibition:</strong> Children showcased their artistic talents through paintings, drawings, and crafts, highlighting their creativity and unique perspectives.</li>
        <li><strong>Interactive Workshops:</strong> Parents and caregivers participated in workshops on caregiving, therapy techniques, and community resources to support children with CP.</li>
        <li><strong>Outdoor Games:</strong> Kids enjoyed fun games and activities that promoted physical activity, social interaction, and teamwork.</li>
      </ul>
      
      <p>These activities not only provided a platform for children to express themselves but also fostered a sense of community and understanding among attendees.</p>
      
      <h2>Advocacy and Awareness</h2>
      <p>World Cerebral Palsy Day is more than just a celebration—it's an opportunity to raise awareness and advocate for the rights and well-being of individuals with CP. The event featured:</p>
      
      <ul>
        <li><strong>Guest Speakers:</strong> Experts in the field of cerebral palsy shared insights on the latest research, therapies, and inclusive practices for children with CP.</li>
        <li><strong>Parent Testimonials:</strong> Families shared their experiences, challenges, and triumphs, inspiring others and fostering a sense of solidarity.</li>
        <li><strong>Community Engagement:</strong> Local organizations and volunteers pledged their support for ongoing initiatives to promote inclusivity and accessibility.</li>
      </ul>
      
      <p>By coming together to celebrate World Cerebral Palsy Day, the Diani community reaffirmed its commitment to creating a more inclusive and supportive environment for all.</p>
    `
  },
  {
    id: "3",
    title: "Empowering Voices: SRHR Training for the Deaf at Kwale School for the Deaf",
    category: "Education",
    categoryColor: "bg-indigo-500",
    date: "September 22, 2023",
    image: Awareness,
    excerpt: "Breaking barriers to sexual health education for the deaf community in Kenya",
    content:`<h2>Breaking Barriers, Building Knowledge</h2>

  <p>On 22nd September 2023, the Kwale School for the Deaf buzzed with energy and inspiration during a very special training session on Sexual and Reproductive Health and Rights (SRHR). The day was dedicated to empowering the deaf community with essential knowledge, practical skills, and a platform to share experiences—all delivered in a supportive and inclusive environment.</p>

  <h2>A Day of Learning and Empowerment</h2>
  <p>From the very start, the training set a warm and engaging tone. Participants arrived eager to learn and connect, with trainers ensuring that every session was accessible and tailored to the unique needs of the deaf community. Using skilled sign language interpreters and interactive teaching methods, the facilitators broke down complex SRHR topics into clear, relatable concepts.</p>
  
  <p>The training covered a wide range of topics—from understanding personal health and well-being to discussions about safe practices, rights, and self-advocacy. It wasn’t just about imparting information; it was about building confidence and ensuring that everyone left with a stronger voice to express their health needs.</p>
  
  <h2>Interactive Sessions and Real Conversations</h2>
  <p>One of the highlights of the day was the series of interactive sessions. These weren’t your typical lectures—participants were encouraged to ask questions, share personal experiences, and engage in open discussions. This approach created a comfortable space where everyone felt heard and respected.</p>
  
  <ul >
    <li><strong>Clear Communication:</strong> Expert trainers used visual aids and real-time sign language interpretation to make sure that everyone could follow along without missing a detail.</li>
    <li><strong>Q&A Sessions:</strong> The open forum allowed participants to ask questions and clarify doubts, turning the training into a vibrant dialogue rather than a one-way lecture.</li>
    <li><strong>Practical Insights:</strong> Trainers shared everyday tips on managing personal health, understanding body rights, and accessing local resources, which were especially valuable for those navigating the complexities of the healthcare system.</li>
  </ul>
  
  <h2>Celebrating Community and Resilience</h2>
  <p>What truly made the day memorable was the spirit of community that shone through every interaction. The training was not just about health education—it was a celebration of the resilience and determination of the deaf community. Participants bonded over shared experiences and came away feeling more connected, supported, and ready to advocate for their rights.</p>
  
  <blockquote>
    <p>“Today was not just about learning, but about realizing that we have the power to take control of our health and our futures. I left feeling confident and empowered.”</p>
  </blockquote>
  
  <p>These heartfelt words echoed throughout the day, reinforcing the belief that when knowledge meets compassion, incredible transformations occur.</p>
  
  <h2>Looking to the Future</h2>
  <p>As the training concluded, the energy in the room was palpable. Participants expressed their gratitude for the opportunity to gain valuable insights into SRHR, and many looked forward to future sessions that would continue to build on this foundation.</p>`
  },
  {
    id: "4",
    title: "Celebrating the 10th National Symposium on Disaster and Risk Reduction in Kilifi County",
    date: "March 10, 2025",
    category: "Events",
    categoryColor: "bg-rose-500",
    image: Symposium,
    excerpt: "Stakeholders gather to discuss strategies for disaster preparedness and response",
    content: `
      <h2>Building Resilience Through Collective Action</h2>
      <p>In a world where disasters pose increasing threats to communities, empowering and educating youth has never been more crucial. As we mark the 10th National Symposium on Disaster and Risk Reduction in Kilifi County, the spotlight is on the role of education in protecting and empowering youth for disaster preparedness and resilience.</p>
  
      <blockquote>
        <em>"This symposium represents a decade of progress in disaster management and sets the stage for youth-led solutions in climate resilience."</em>
        <footer>- Kilifi County Governor</footer>
      </blockquote>
  
      <h2>Key Symposium Highlights</h2>
      <p>This year's gathering brought together 500+ participants from diverse sectors:</p>
      <ul>
        <li><strong>Government Representatives:</strong> National Disaster Operations Centre, County Executive members</li>
        <li><strong>International Partners:</strong> UN agencies, Red Cross movement, WHO consultants</li>
        <li><strong>Academic Institutions:</strong> Researchers from 15 Kenyan universities</li>
        <li><strong>Youth Delegates:</strong> 200+ young leaders from across East Africa</li>
      </ul>
  
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-xl font-semibold mb-4">Core Discussion Themes</h3>
        <ul class="list-disc pl-6">
          <li>Youth engagement in disaster preparedness frameworks</li>
          <li>Climate change adaptation strategies</li>
          <li>Technology integration in early warning systems</li>
          <li>Policy reform for inclusive disaster management</li>
        </ul>
      </div>
  
      <h2>Transformative Outcomes</h2>
      <p>The symposium yielded concrete action points:</p>
      <ul>
        <li><strong>Education Integration:</strong> Commitment to embed DRR in national school curricula by 2026</li>
        <li><strong>Youth Innovation Fund:</strong> Launch of KSh 50M grant program for youth-led climate solutions</li>
        <li><strong>Community Early Warning:</strong> Deployment of 200 weather stations in high-risk counties</li>
        <li><strong>Policy Framework:</strong> Draft legislation for mandatory youth representation in disaster committees</li>
      </ul>
  
      <blockquote class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
        <em>"This symposium taught me that disaster management isn't just about response - it's about empowering communities with knowledge and tools for prevention."</em>
        <footer>- Aisha Mohamed, Youth Delegate from Lamu</footer>
      </blockquote>
  
      <h2>Looking Ahead</h2>
      <p>The closing ceremony unveiled an ambitious 3-year roadmap:</p>
      <ol class="list-decimal pl-6">
        <li>Establish regional youth disaster response teams</li>
        <li>Develop mobile app for real-time risk reporting</li>
        <li>Train 10,000 community first responders</li>
        <li>Implement school safety certification program</li>
      </ol>
  
      <div class="bg-yellow-50 p-6 rounded-lg my-8">
        <h3 class="text-xl font-semibold mb-4">Call to Action</h3>
        <p>Join Kenya's resilience movement:</p>
        <ul class="list-disc pl-6">
          <li>Volunteer with local disaster management committees</li>
          <li>Participate in community preparedness drills</li>
          <li>Advocate for climate-smart policies</li>
          <li>Support youth innovation through the DRR Fund</li>
        </ul>
      </div>
  
      <p class="font-semibold mt-8">As we commemorate this milestone, let's renew our commitment to building disaster-resilient communities through education, innovation, and youth empowerment. Together, we can create a safer future for all Kenyans.</p>
    `
  },
  // Add to your BLOG_POSTS array:
  {
    id: "5",
    title: "Celebrating Our Office Launch – April 29, 2024",
    excerpt: "A new chapter begins with the official opening of our headquarters",
    date: "April 29, 2024",
    category: "Events",
    categoryColor: "bg-rose-500",
    image: OFFICE_LAUNCH, // Make sure to import this image
    content: `
      <h2>A New Home for Innovation</h2>
      <p>We are thrilled to announce the official launch of our office on April 29, 2024! This milestone represents years of dedication, growth, and our unwavering commitment to making a meaningful impact in our community.</p>
  
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-xl font-semibold mb-4">Event Highlights</h3>
        <ul class="list-disc pl-6">
          <li>Ribbon-cutting ceremony with special guests</li>
          <li>Interactive office tours showcasing our new facilities</li>
          <li>Live demonstrations of our latest projects</li>
          <li>Networking reception with light refreshments</li>
        </ul>
      </div>
  
      <h2>What to Expect</h2>
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold mb-2">Official Ceremonies</h3>
          <ul class="list-disc pl-6">
            <li>Welcome address by our Executive Director</li>
            <li>Keynote speech from Hon. Jane Mwenda</li>
            <li>Time capsule sealing ceremony</li>
          </ul>
        </div>
  
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold mb-2">Facility Features</h3>
          <ul class="list-disc pl-6">
            <li>Collaborative workspace zones</li>
            <li>State-of-the-art training center</li>
            <li>Eco-friendly design elements</li>
            <li>Community meeting spaces</li>
          </ul>
        </div>
      </div>
  
      <blockquote class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
        <em>"This office is more than just a building - it's a hub for innovation and community transformation."</em>
        <footer>- Dr. Samuel Kariuki, Board Chairperson</footer>
      </blockquote>
  
      <h2>Why This Matters</h2>
      <div class="bg-yellow-50 p-6 rounded-lg my-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-2">Enhanced Capacity</h3>
            <ul class="list-disc pl-6">
              <li>Double our training space capacity</li>
              <li>Dedicated innovation lab</li>
              <li>Accessible community resource center</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Sustainable Design</h3>
            <ul class="list-disc pl-6">
              <li>Solar-powered energy system</li>
              <li>Rainwater harvesting</li>
              <li>Native landscaping</li>
            </ul>
          </div>
        </div>
      </div>
  
      <h2>Join the Celebration</h2>
      <p>This launch marks the beginning of an exciting new chapter. We invite you to:</p>
      <ol class="list-decimal pl-6 my-8">
        <li class="mb-4">Tour our new facilities during open house week</li>
        <li class="mb-4">Participate in our inaugural community forum</li>
        <li>Explore partnership opportunities in our innovation hub</li>
      </ol>
  
      <div class="bg-purple-50 p-6 rounded-lg mt-12">
        <p class="font-semibold text-center">Together, let's build a future of endless possibilities from our new home!</p>
      </div>
    `
  },
{
  id: "6",
  title: "Celebrating the International Day of Persons with Disabilities at Ndohivyo Special School",
  excerpt: "Amplifying voices and leadership in the disability community",
  date: "December 3, 2023",
  category: "Events",
  categoryColor: "bg-rose-500", 
  image: Disability, // Add appropriate import
  content: `
    <h2>Championing Inclusive Development</h2>
    <p>On December 3rd, we joined the global community in celebrating the International Day of Persons with Disabilities at Ndohivyo Special School in Samburu. This year's theme focused on amplifying voices and leadership within the disability community.</p>

    <div class="bg-purple-50 p-6 rounded-lg my-8">
      <h3 class="text-xl font-semibold mb-4">Event Highlights</h3>
      <ul class="list-disc pl-6">
        <li>Keynote address by Hon. Fatuma Achani, Governor of Kwale County</li>
        <li>Student-led art and technology exhibitions</li>
        <li>Sign language storytelling sessions</li>
        <li>Community dialogue on accessibility</li>
      </ul>
    </div>

    <h2>Three Pillars of Progress</h2>
    <div class="grid md:grid-cols-3 gap-4 my-8">
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">1. Leadership Development</h3>
        <p>Training programs for persons with disabilities in civic engagement and public service</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">2. Accessibility First</h3>
        <p>Launch of county-wide accessibility audit initiative</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">3. Policy Reform</h3>
        <p>Advocating for inclusive education and employment quotas</p>
      </div>
    </div>

    <blockquote class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
      <em>"Disability is not inability - today we've seen extraordinary talent and leadership from our students."</em>
      <footer>- Mrs. Wanjiku Mwangi, School Principal</footer>
    </blockquote>

    <h2>Education Initiatives</h2>
    <ul class="list-disc pl-6 my-8">
      <li class="mb-4">
        <strong>Adaptive Technology Lab:</strong>
        <p>New computer center with assistive devices</p>
      </li>
      <li class="mb-4">
        <strong>Vocational Training:</strong>
        <p>Partnership with local industries for job placements</p>
      </li>
      <li>
        <strong>Parent Support Network:</strong>
        <p>Monthly workshops on advocacy and rights</p>
      </li>
    </ul>
  `
},
// Add to your BLOG_POSTS array:
{
  id: "5",
  title: "Celebrating the 10th National Symposium on Disaster and Risk Reduction in Kilifi County",
  excerpt: "Empowering youth for disaster resilience through education and collaboration",
  date: "October 13, 2023",
  category: "Events",
  categoryColor: "bg-rose-500",
  image: Symposium,
  content: `
    <h2>Building a Disaster-Resilient Future</h2>
    <p>In a world where disasters pose increasing threats to communities, empowering and educating youth has never been more crucial. As we mark the 10th National Symposium on Disaster and Risk Reduction in Kilifi County, the spotlight is on the role of education in protecting and empowering youth for disaster preparedness and resilience.</p>

    <div class="bg-blue-50 p-6 rounded-lg my-8">
      <h3 class="text-xl font-semibold mb-4">Key Symposium Details</h3>
      <ul class="list-disc pl-6">
        <li><strong>Date:</strong> October 13, 2023</li>
        <li><strong>Location:</strong> Kilifi County Convention Center</li>
        <li><strong>Participants:</strong> 500+ delegates from 15 counties</li>
        <li><strong>Theme:</strong> "Youth Empowerment for Disaster Resilience"</li>
      </ul>
    </div>

    <h2>Collaborative Framework</h2>
    <p>This year's symposium aligns with the International Day for Disaster Risk Reduction, bringing together:</p>
    <ul>
      <li>National Disaster Operations Centre</li>
      <li>Kenya Red Cross and UN agencies</li>
      <li>Academic researchers from 8 universities</li>
      <li>Youth representatives from 23 organizations</li>
      <li>County Government of Kilifi leadership</li>
    </ul>

    <blockquote class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
      <em>"When we equip young people with disaster management skills, we're investing in our nation's resilience backbone."</em>
      <footer>- Dr. Amina Mohamed, Symposium Keynote Speaker</footer>
    </blockquote>

    <h2>Core Focus Areas</h2>
    <div class="grid md:grid-cols-2 gap-6 my-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">1. Youth & DRR Understanding</h3>
        <p>Enhancing engagement in preparedness, response, and mitigation strategies through:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Community mapping exercises</li>
          <li>Simulation drills</li>
          <li>Digital reporting systems</li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">2. Climate Action</h3>
        <p>Addressing climate change as disaster catalyst through:</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Mangrove restoration initiatives</li>
          <li>Renewable energy projects</li>
          <li>Early warning systems</li>
        </ul>
      </div>
    </div>

    <h2>Education Initiatives Launched</h2>
    <ol class="list-decimal pl-6 my-8">
      <li class="mb-4">
        <strong>DRR Curriculum Integration:</strong>
        <p>Pilot program in 50 schools across coastal counties</p>
      </li>
      <li class="mb-4">
        <strong>Youth Innovation Challenge:</strong>
        <p>KSh 10M fund for community-led solutions</p>
      </li>
      <li>
        <strong>Digital Learning Platform:</strong>
        <p>Launch of mDready app for disaster preparedness training</p>
      </li>
    </ol>
  `
},
{
  id: "6",
  title: "Celebrating the International Day of Persons with Disabilities at Ndohivyo Special School",
  excerpt: "Amplifying voices and leadership in the disability community",
  date: "December 3, 2023",
  category: "Events",
  categoryColor: "bg-rose-500", 
  image: Disability, // Add appropriate import
  content: `
    <h2>Championing Inclusive Development</h2>
    <p>On December 3rd, we joined the global community in celebrating the International Day of Persons with Disabilities at Ndohivyo Special School in Samburu. This year's theme focused on amplifying voices and leadership within the disability community.</p>

    <div class="bg-purple-50 p-6 rounded-lg my-8">
      <h3 class="text-xl font-semibold mb-4">Event Highlights</h3>
      <ul class="list-disc pl-6">
        <li>Keynote address by Hon. Fatuma Achani, Governor of Kwale County</li>
        <li>Student-led art and technology exhibitions</li>
        <li>Sign language storytelling sessions</li>
        <li>Community dialogue on accessibility</li>
      </ul>
    </div>

    <h2>Three Pillars of Progress</h2>
    <div class="grid md:grid-cols-3 gap-4 my-8">
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">1. Leadership Development</h3>
        <p>Training programs for persons with disabilities in civic engagement and public service</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">2. Accessibility First</h3>
        <p>Launch of county-wide accessibility audit initiative</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="font-semibold mb-2">3. Policy Reform</h3>
        <p>Advocating for inclusive education and employment quotas</p>
      </div>
    </div>

    <blockquote class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
      <em>"Disability is not inability - today we've seen extraordinary talent and leadership from our students."</em>
      <footer>- Mrs. Wanjiku Mwangi, School Principal</footer>
    </blockquote>

    <h2>Education Initiatives</h2>
    <ul class="list-disc pl-6 my-8">
      <li class="mb-4">
        <strong>Adaptive Technology Lab:</strong>
        <p>New computer center with assistive devices</p>
      </li>
      <li class="mb-4">
        <strong>Vocational Training:</strong>
        <p>Partnership with local industries for job placements</p>
      </li>
      <li>
        <strong>Parent Support Network:</strong>
        <p>Monthly workshops on advocacy and rights</p>
      </li>
    </ul>
  `
},
  
];

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    // Set the current URL for sharing
    setShareUrl(window.location.href);

    // Fetch the blog post based on the ID from the URL
    const fetchPost = async () => {
      try {
        const foundPost = BLOG_POSTS.find(post => post.id === id);
        setPost(foundPost);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Function to handle social media sharing
  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(post?.title || "Check out this blog post");

    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "whatsapp":
        shareLink = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
        break;
      default:
        return;
    }

    // Open share dialog in a new window
    window.open(shareLink, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-start">
        <div className="animate-pulse text-xl font-medium">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-3xl font-bold">Post not found</h2>
        <p className="text-gray-600 mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="text-blue-600 hover:underline mt-6 inline-block">
          ← Back to All Blog Posts
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-4 max-w-3xl mx-auto"
    >
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors font-medium"
        >
          ← Back to All Stories
        </Link>
      </div>

      <article className="prose prose-lg lg:prose-xl mx-auto">
        <header className="mb-12">
          <span className={`${post.categoryColor} text-white px-4 py-1 rounded-full text-sm`}>
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 space-x-4">
            <time>{post.date}</time>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </header>

        {/* Image container with consistent styling */}
        <div className="w-full aspect-video bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Blog post content */}
        <section 
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Share section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold">Share this story</h3>
          <div className="flex space-x-4 mt-4">
            <button 
              onClick={() => handleShare("facebook")} 
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on Facebook"
            >
              Facebook
            </button>
            <button 
              onClick={() => handleShare("twitter")} 
              className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Share on Twitter"
            >
              Twitter
            </button>
            <button 
              onClick={() => handleShare("whatsapp")} 
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Share on WhatsApp"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogDetails;
