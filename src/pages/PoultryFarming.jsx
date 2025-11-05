// PoultryFarming.jsx
import React from "react";
import poultry1 from "../assets/blog/farm1.png";  // Replace with actual image paths
import poultry2 from "../assets/blog/farm2.png";
import poultry3 from "../assets/blog/farm3.png";
import poultry4 from "../assets/blog/farm1.png";

const PoultryFarming = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Poultry Farming Project</h1>
          <p className="text-lg text-gray-600">
            Empowering local communities through sustainable poultry farming.
          </p>
        </div>

        {/* Project Details Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-6">
            <h3 className="font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              This Poultry Farming Project aims to enhance food security and create income-generating opportunities for local communities by providing poultry farming solutions.
            </p>
          </div>

          {/* Project Gallery */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <img src={poultry1} alt="Starter chicks" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Starter chicks</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={poultry2} alt="Egg production" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Egg production</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={poultry3} alt="Training site" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Community training site</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src={poultry4} alt="Farm setup" className="w-full h-64 object-cover" />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">Farm setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoultryFarming;
