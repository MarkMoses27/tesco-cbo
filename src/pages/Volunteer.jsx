import React, { useState } from 'react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: ''
  });

  const volunteerOpportunities = [
    {
      title: "Child Care Support",
      description: "Assist in daily care and activities for children with special needs",
      commitment: "4-8 hours/week",
      requirements: ["Patience", "Basic care training", "Background check"]
    },
    {
      title: "Education Assistant",
      description: "Support our special education teachers in classroom activities",
      commitment: "2-5 hours/week",
      requirements: ["Teaching experience", "Subject knowledge", "Creativity"]
    },
    {
      title: "Community Outreach",
      description: "Help organize awareness campaigns and fundraising events",
      commitment: "Flexible hours",
      requirements: ["Communication skills", "Event planning", "Local language"]
    },
    {
      title: "Professional Skills",
      description: "Offer your expertise (medical, legal, therapy, etc.)",
      commitment: "Project-based",
      requirements: ["Professional certification", "Relevant experience"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Become a TESCO Volunteer</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join our compassionate community and make a lasting difference in the lives of children with disabilities
        </p>
      </div>

      {/* Why Volunteer Section */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Why Volunteer With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="text-blue-800 text-4xl mb-4">🤝</div>
            <h3 className="font-medium mb-2">Community Impact</h3>
            <p className="text-gray-600">Directly improve lives in your local community</p>
          </div>
          <div className="text-center p-4">
            <div className="text-blue-800 text-4xl mb-4">🎓</div>
            <h3 className="font-medium mb-2">Skill Development</h3>
            <p className="text-gray-600">Gain experience in special needs care and support</p>
          </div>
          <div className="text-center p-4">
            <div className="text-blue-800 text-4xl mb-4">❤️</div>
            <h3 className="font-medium mb-2">Personal Growth</h3>
            <p className="text-gray-600">Experience the joy of making a difference</p>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-8 text-center">Current Opportunities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {volunteerOpportunities.map((opportunity, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{opportunity.title}</h3>
            <p className="text-gray-600 mb-4">{opportunity.description}</p>
            <div className="text-sm text-blue-800 mb-3">
              <strong>Commitment:</strong> {opportunity.commitment}
            </div>
            <div className="border-t pt-3">
              <h4 className="font-medium mb-2">Requirements:</h4>
              <ul className="list-disc pl-4 text-gray-600">
                {opportunity.requirements.map((req, i) => (
                  <li key={i} className="mb-1">{req}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Process */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Our Volunteer Process</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-start mb-6">
              <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
              <div>
                <h3 className="font-medium mb-2">Application</h3>
                <p className="text-gray-600">Complete our volunteer interest form</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
              <div>
                <h3 className="font-medium mb-2">Orientation</h3>
                <p className="text-gray-600">Attend a virtual information session</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
              <div>
                <h3 className="font-medium mb-2">Training</h3>
                <p className="text-gray-600">Receive role-specific training</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="/volunteer-process.jpg" 
              alt="Volunteer team" 
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Volunteer Application Form</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Availability</label>
              <select
                className="w-full p-3 border rounded-lg"
                value={formData.availability}
                onChange={(e) => setFormData({...formData, availability: e.target.value})}
                required
              >
                <option value="">Select Availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-gray-700 mb-2">Skills & Experience</label>
            <textarea
              className="w-full p-3 border rounded-lg h-32"
              placeholder="Describe your relevant skills, experience, and why you want to volunteer with us"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              required
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;