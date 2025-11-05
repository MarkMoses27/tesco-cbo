// TechForChange.jsx
import React from "react";
import tech1 from "../assets//tech-1.png";  // Replace with actual image paths
import tech2 from "../assets/tech-2.png";
import tech3 from "../assets/tech-3.png";
import tech4 from "../assets/tech-4.png";

const TechForChange = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech for Change: Digital Inclusion & Empowerment for Girls and Women</h1>
          <p className="text-lg text-gray-600">
            Empowering marginalized girls and women with essential digital skills to bridge the gender gap in the tech industry.
          </p>
        </div>

        {/* Project Details Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-6">
            <h3 className="font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              This initiative equips young women and girls from underserved communities with digital skills like marketing, e-commerce, and content creation to help them access job opportunities and build digital businesses.
            </p>
          </div>

          {/* Project Gallery */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <img src={tech1} alt="Digital Marketing Training" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Digital Marketing Training</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={tech2} alt="E-Commerce Skills" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">E-Commerce Skills</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={tech3} alt="Content Creation Workshop" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Content Creation Workshop</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={tech4} alt="Online Branding" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Online Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechForChange;
