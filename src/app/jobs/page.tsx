"use client";

import Image from "next/image";
import React from "react";

const Jobs: React.FC = () => {
    const positions = [
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "Project Manager",
        "Marketing Associate",
        "Operations Coordinator",
    ];
    const images = [
        "/pic19.png",
        "/pic20.jpeg",
        "/pic22.jpeg",
    ];
    return (
        <>
            <section className="relative h-[80vh] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(./img8.jpeg)",
                    }}
                >

                    {/* Overlay Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 flex h-full items-center px-6 pb-10 md:px-12 lg:px-20">
                        <div className="max-w-2xl space-y-4">
                            <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
                                Shaping Futures Through Education
                            </h1>
                            <p className="text-sm text-gray-200 md:text-base lg:text-xl">
                                Reagent Core helps students unlock their potential through access and guidance.At Reagent Core, learning becomes a lifelong catalyst for change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white mt-16">
                <div className="container mx-auto flex flex-col items-center gap-10 px-6 md:flex-row md:gap-16 lg:px-12">
                    {/* Left: Image + Badge */}
                    <div className="flex-1">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/img11.jpeg"
                                alt="Team working"
                                className="w-full h-auto object-cover"
                                
                            />
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="flex-1 space-y-6">
                        <p className="text-lg leading-relaxed text-gray-700">
                            At <span className="font-semibold">Reagent Core</span>, we are supported by a strong and collaborative community beyond our core team. We work closely with district officials, government school educators, and dedicated volunteers who contribute their time and expertise to advance our mission.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            We are always looking for individuals who are passionate about creating meaningful impact through education. If you share our commitment to change, we invite you to explore our open roles and join us in building a better future.
                        </p>
                    </div>
                </div>
                <section className="mt-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {images.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl"
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${idx + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <section className="bg-[#f1f1f1] mt-16 py-16">
                <div className="container mx-auto flex flex-col items-center px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold text-[#b33a28]">
                        Open Positions
                    </h2>


                    {/* Positions List */}
                    <div className="mt-10 grid gap-4 w-full max-w-md">
                        {positions.map((role, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="block rounded-lg bg-white px-5 py-3 text-gray-800 shadow-md transition hover:bg-red-50 hover:text-[#b33a28]"
                            >
                                {role}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="mt-10 rounded-lg bg-[#b33a28] px-8 py-5 font-medium text-white shadow-md transition hover:bg-[#b33a28de] cursor-pointer text-lg">
                        Apply Now
                    </button>
                </div>
            </section>
        </>
    );
};

export default Jobs;
