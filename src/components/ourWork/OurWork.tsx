

"use client";

import React, { useState } from "react";

const OurWork: React.FC = () => {
  const resources = [
    { name: "Free JEE/NEET Content", color: "from-red-600 to-red-800" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPdf = (path: string) => {
    window.open(path, "_blank");
  };

  const handleResourceClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);


  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
        Our Work
      </h1>

      {/* Video Section */}
      <div className="w-full max-w-7xl mx-auto mb-16 shadow-2xl">
        <div className="relative w-full h-0 pb-[56.25%] shadow-xl rounded-2xl overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Our Work Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Resources Section */}
      <div className="max-w-xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
          Free Coaching / Student Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
          {resources.map((resource, index) => (
            <button
              key={index}
              className={`w-full py-7 px-2 text-white font-semibold rounded-xl shadow-md bg-gradient-to-r ${resource.color} hover:scale-105 transition-transform duration-300  cursor-pointer`}
              onClick={handleResourceClick}
            >
              {resource.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="w-[80%] overflow-hidden border-2 border-red-500 mx-auto py-3 relative">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-4 text-black text-lg md:text-xl font-semibold">
            Reagent Core provides free coaching, mentorship, and career support to help high school students enter top Science and Technology colleges and build a future beyond poverty ~ Reagent Core provides free coaching, mentorship, and career support to help high school students enter top Science and Technology colleges and build a future beyond poverty ~
          </span>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          {/* Modal content */}
          <div className="relative z-10 w-full max-w-2xl  bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg shadow-2xl rounded-2xl border border-white/20 dark:border-gray-700/40 overflow-hidden animate-fadeInUp  p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Choose Your Subject
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-red-500 transition rounded-full p-2 hover:bg-white/40 dark:hover:bg-gray-700 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <p className="text-sm md:text-base text-gray-200 mb-6">
              Access free high‑quality JEE/NEET content of various subject.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
              <button
                onClick={() => openPdf("./physics.pdf")}
                className="w-full cursor-pointer py-3 px-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white text-sm md:text-base font-semibold shadow-md hover:scale-105 transition-transform animate-pulse"
              >
                Physics
              </button>
              <button
                onClick={() => openPdf("./chemistry.pdf")}
                className="w-full cursor-pointer py-3 px-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white text-sm md:text-base font-semibold shadow-md hover:scale-105 transition-transform  animate-pulse"
              >
                Chemistry
              </button>
              <button
                onClick={() => openPdf("./math.pdf")}
                className="w-full cursor-pointer py-3 px-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white text-sm md:text-base font-semibold shadow-md hover:scale-105 transition-transform   animate-pulse"
              >
                Math
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Inject marquee animation */}
      <style jsx>{`
         @keyframes marquee {
           0% {
             transform: translateX(0%);
           }
           100% {
             transform: translateX(-50%);
           }
         }
         .animate-marquee {
           animation: marquee 30s linear infinite;
         }
       `}</style>
    </section>
  );
};

export default OurWork;



