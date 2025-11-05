// GreenCoastCleanOceans.jsx
import React from "react";
import greenCoast1 from "../assets/green-coast-1.png";  // Replace with actual image paths
import greenCoast2 from "../assets/green-coast-2.png";
import greenCoast3 from "../assets/green-coast-3.png";
import greenCoast4 from "../assets/green-coast-4.png";

const GreenCoastCleanOceans = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Green Coast, Clean Oceans</h1>
          <p className="text-lg text-gray-600">
            Environmental conservation and community-driven climate action along the coastline.
          </p>
        </div>

        {/* Project Details Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-6">
            <h3 className="font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The Green Coast, Clean Oceans initiative is focused on cleaning the coastlines, raising awareness about marine conservation, and promoting sustainable waste management practices to protect our oceans.
            </p>
          </div>

          {/* Project Gallery */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <img src={greenCoast1} alt="Coastal Cleanup" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Coastal Cleanup</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={greenCoast2} alt="Raising Awareness" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Raising Awareness</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={greenCoast3} alt="Sustainable Waste Management" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Sustainable Waste Management</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={greenCoast4} alt="Volunteers in Action" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Volunteers in Action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCoastCleanOceans;
