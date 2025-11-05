// FosteringInclusion.jsx
import React from "react";
import disability1 from "../assets/disability-1.png";  // Replace with actual image paths
import disability2 from "../assets/disability-2.png";
import disability3 from "../assets/disability-3.png";
import disability4 from "../assets/disability-4.png";

const FosteringInclusion = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fostering Inclusion Through Disability Registration and Advocacy</h1>
          <p className="text-lg text-gray-600">
            Supporting individuals with disabilities to access their rights and opportunities through registration and awareness.
          </p>
        </div>

        {/* Project Details Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-6">
            <h3 className="font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              This initiative helps community members obtain disability certificates through the NCPWD and promotes awareness about the rights and benefits that come with registration.
            </p>
          </div>

          {/* Project Gallery */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <img src={disability1} alt="Disability Registration Assistance" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Disability Registration Assistance</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={disability2} alt="Awareness Campaigns" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Awareness Campaigns</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={disability3} alt="Community Outreach" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Community Outreach</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={disability4} alt="Disability Rights Training" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Disability Rights Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FosteringInclusion;
