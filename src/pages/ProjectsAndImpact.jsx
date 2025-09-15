import React from "react";
import { motion } from "framer-motion";

// Import images correctly
import farm1 from "../assets/blog/farm1.png";
import farm2 from "../assets/blog/farm2.png";
import farm3 from "../assets/blog/farm3.png";

export default function ProjectsAndImpact() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const projects = [
    {
      id: "poultry",
      title: "Poultry Farming Project",
      status: `Ongoing (Updated: ${today})`,
      category: "Poultry / Livelihoods",
      heroImage: farm1,
      images: [
        { src: farm1, alt: "Starter chicks — brooders", caption: "Starter chicks — brooders" },
        { src: farm2, alt: "Layer hens — egg production", caption: "Layer hens — egg production" },
        { src: farm3, alt: "Community coop and training site", caption: "Community coop and training site" },
      ],
      short:
        "The Poultry Farming Project is an initiative by Testimony Community Based Organization (CBO) designed to create sustainable livelihood opportunities while promoting environmental conservation. By establishing a community-based poultry unit, we aim to improve food security, generate income for vulnerable households, and provide organic manure to support our climate-smart kitchen garden projects.",
      rationale: `Many families in our community struggle with limited income and food`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects & Impact</h1>
          <p className="text-lg text-gray-600">
            Community-driven initiatives creating lasting change
          </p>
        </div>

        {/* Project Card */}
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
          >
            {/* Hero Section */}
            <div className="relative h-72">
              <img
                src={p.heroImage}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500 text-white">
                  {p.status}
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-black bg-opacity-50 text-white">
                  {p.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-bold text-white mb-2">{p.title}</h2>
                <p className="text-white text-opacity-90">{p.short}</p>
              </div>
            </div>

            {/* Always expanded content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-6 pb-6"
            >
              {/* Content */}
              <div className="py-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Project Rationale
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {p.rationale}
                </p>
              </div>

              {/* Gallery */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Project Gallery</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {p.images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden shadow">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-3 bg-gray-50">
                        <p className="text-sm text-gray-600 text-center">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
