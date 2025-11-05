import React from "react";
import { Link } from "react-router-dom";

// Import project images
import poultryImage from "../assets/farm2.png";  // Replace with actual image path
import greenCoastImage from "../assets/green-coast-1.png";  // Replace with actual image path
import disabilityImage from "../assets/disability-1.png";  // Replace with actual image path
import techForChangeImage from "../assets/tech-1.png";  // Replace with actual image path

const ProjectList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600">Community-driven initiatives creating lasting change</p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Poultry Farming Project */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <img
                src={poultryImage}
                alt="Poultry Farming"
                className="w-full h-full object-cover"  // Ensure the image fills the container
              />
              {/* Reduced Overlay Opacity */}
              <div className="absolute inset-0 bg-black bg-opacity-20" /> {/* Overlay with reduced opacity */}
              <div className="absolute bottom-4 left-4 right-4 z-10"> {/* z-10 ensures text is above the overlay */}
                <h2 className="text-2xl font-bold text-white mb-2">Poultry Farming Project</h2>
                <p className="text-white text-opacity-90">
                  A sustainable initiative creating livelihood opportunities while improving food security.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 text-center">
              <Link
                to="/projects/poultry-farming"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Green Coast, Clean Oceans */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <img
                src={greenCoastImage}
                alt="Green Coast, Clean Oceans"
                className="w-full h-full object-cover"
              />
              {/* Reduced Overlay Opacity */}
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h2 className="text-2xl font-bold text-white mb-2">Green Coast, Clean Oceans</h2>
                <p className="text-white text-opacity-90">
                  Promoting environmental stewardship through coastal cleanups and marine conservation.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 text-center">
              <Link
                to="/projects/green-coast-clean-oceans"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Fostering Inclusion Through Disability Registration and Advocacy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <img
                src={disabilityImage}
                alt="Disability Registration"
                className="w-full h-full object-cover"
              />
              {/* Reduced Overlay Opacity */}
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Fostering Inclusion Through Disability Registration and Advocacy
                </h2>
                <p className="text-white text-opacity-90">
                  Empowering individuals with disabilities to access their rights and opportunities.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 text-center">
              <Link
                to="/projects/fostering-inclusion"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                See More
              </Link>
            </div>
          </div>

          {/* Tech for Change: Digital Inclusion & Empowerment for Girls and Women */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-72">
              <img
                src={techForChangeImage}
                alt="Tech for Change"
                className="w-full h-full object-cover"
              />
              {/* Reduced Overlay Opacity */}
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Tech for Change: Digital Inclusion & Empowerment for Girls and Women
                </h2>
                <p className="text-white text-opacity-90">
                  Bridging the gender gap in the digital economy by equipping young women with digital skills.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 text-center">
              <Link
                to="/projects/tech-for-change"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
