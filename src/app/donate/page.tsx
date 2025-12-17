"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../../styles/common.css";
import DonateModal from "@/components/modals/DonateModal";
import Link from "next/link";


const Donate: React.FC = () => {
    const sections = [
        {
            title: "DUE DILIGENCE",
            links: ["TAN/PAN Card"],
        },
    ];
    const [openModal, setOpenModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openPdf = (path: string) => {
        window.open(path, "_blank");
    };

    const handleResourceClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);


    return (
        <>
            <main className="w-full">
                <section className="relative w-full 
    h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]
    flex items-center justify-center"
                >
                    <Image
                        src="/img18.jpeg"
                        alt="Students"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="flex flex-col gap-20 justify-center items-center p-4 absolute bottom-10">

                        <button onClick={() => setOpenModal(!openModal)} className="bg-[#af392b] z-10 text-lg sm:text-xl md:text-2xl lg:text-[25px] text-white font-bold 
                     py-4 px-10 sm:py-5 sm:px-16 md:py-6 md:px-20 lg:py-8 lg:px-32 
                     rounded-lg hover:bg-[#af382bc5] transition-colors duration-200 cursor-pointer">
                            Donate
                        </button>
                    </div>



                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg
                            className="relative block w-full h-[60px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="#ffffff"
                                d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,176C672,160,768,128,864,144C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224V320H0Z"
                            ></path>
                        </svg>
                    </div>
                </section>

                <section className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-10 items-center">
                    <div className="">
                        <p className="text-xl text-red-600 font-semibold mb-4">
                            At Reagent Core, we believe education should do more than inform—it should transform lives. By equipping students with the skills, confidence, and guidance they need, we help them step into higher education pathways that were once inaccessible, redefining what is possible for their futures.
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            The outcomes ripple far beyond individual success. As students advance into meaningful careers, families experience lasting economic stability.
                        </h2>
                        <button onClick={() => setOpenModal(!openModal)} className="bg-[#af392b] z-10 text-lg sm:text-xl md:text-2xl lg:text-[20px] text-white font-bold 
                     py-4 px-10 sm:py-5 sm:px-16 md:py-6 md:px-20 
                     rounded-lg hover:bg-[#af382bc5] transition-colors duration-200 cursor-pointer mt-10">
                            Donate
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/img17.jpeg"
                            alt="Student"
                            width={450}
                            height={300}
                            className="rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </section>

                <section className="w-full bg-black py-28 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-6xl font-semibold text-white">
                        Financial Transparency & Governance
                    </h2>
                </section>
                <section className="w-full bg-[#f1f1f1] py-28 text-center donate-text-h2-para">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black p-2 sm:p-0">
                        At Reagent Core Fellows, <span className="font-medium">, transparency underpins our mission to remove educational inequity <br /> and create meaningful opportunities for underserved students.</span>

                    </h2>
                </section>

                <section className="bg-yellow-400 flex flex-col md:flex-row justify-center items-center py-5 gap-3">
                    <div className="">
                        <Image
                            src="/key.jpg"
                            alt="Key Icon"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="donate-desc-para">
                        <p className="max-w-3xl mx-auto md:mx-0 text-gray-800 leading-relaxed">
                            Reagent Core Fellows is dedicated to addressing educational inequality at every step of a student’s journey. Through a holistic and self-sustaining approach, we go beyond academic support to provide mentorship, guidance, and access to opportunities that enable underprivileged students to thrive in education and in life.
                        </p>
                    </div>
                </section>
            </main>
            <section className="bg-[#f9f9f9] mt-16 py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-16">
                        {sections.map((section, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold text-[#b33a28] mb-6 uppercase tracking-wide">
                                    {section.title}
                                </h2>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {section.links.map((link, i) => (
                                        <button
                                            key={i}
                                            // href="#"
                                            className="rounded-lg bg-white px-4 py-2 text-gray-800 text-sm md:text-base shadow-md transition hover:bg-red-50 hover:text-[#b33a28] cursor-pointer"
                                            onClick={handleResourceClick}
                                        >
                                            {link}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {
                openModal && (
                    <DonateModal setOpenModal={setOpenModal} openModal={openModal} />
                )
            }
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
                Choose Your Document
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
              Access your required official documents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
              <button
                onClick={() => openPdf("./pan.pdf")}
                className="w-full cursor-pointer py-3 px-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white text-sm md:text-base font-semibold shadow-md hover:scale-105 transition-transform animate-pulse"
              >
                Pan Details
              </button>
              <button
                onClick={() => openPdf("./tan.pdf")}
                className="w-full cursor-pointer py-3 px-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white text-sm md:text-base font-semibold shadow-md hover:scale-105 transition-transform  animate-pulse"
              >
                Tan Details
              </button>
            </div>

          </div>
        </div>
      )}
        </>
    );
};

export default Donate;
