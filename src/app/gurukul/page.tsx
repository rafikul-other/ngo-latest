"use client";

import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Gurukul() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [emailSent, setEmailSent] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailSent(true);
        const formUrl = 'https://formsubmit.co/Learningyatra369@gmail.com';
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('message', data.message);
        formData.append('_subject', 'New Contact Form Submission');
        formData.append('_replyto', data.email);
        formData.append('_autoresponse', 'Thank you for your message! We will get back to you soon.');
        formData.append("_captcha", "false");
        formData.append("_honey", "");
        formData.append("_template", "table");
        try {
            const response = await fetch(formUrl, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setEmailSent(false);
                toast.success('Form submitted successfully!');
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                setEmailSent(false);
                throw new Error('Submission failed');
            }
        } catch (error) {
            setEmailSent(false);
            console.error('Submission error:', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    const handleClick = () => {
        window.open("https://docs.google.com/forms/d/1Uqp_ADRS6ZNxdS1cCddFWNd_uZsdLZjJGSBa5Fh9u68/edit?ts=690214af", "_blank");
    }

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gray-100  h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <Image
                    src="/img16.jpeg"
                    alt="Hero Background"
                    fill
                    className="object-cover blur-sm opacity-50"
                />
                <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-medium text-black">
                    The Reagent Core Foundation
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-black max-w-2xl">
                    India&apos;s Largest Online TestPrep platform <br />
                    Prepare for IIT JEE, NEET and more with expert guidance
                </p>
                <button
                    onClick={handleClick}
                    className="bg-[#af392b] z-10 text-lg sm:text-xl md:text-2xl lg:text-[25px] text-white font-bold 
                     py-4 px-10 sm:py-5 sm:px-16 md:py-6 md:px-20 lg:py-8 lg:px-32 
                     rounded-lg hover:bg-[#af382bc5] transition-colors duration-200 cursor-pointer mt-6">
                    Register Now
                </button>
            </section>
            <Toaster position="top-center" reverseOrder={false} />

            {/* Video Section */}
            <section className="py-16 px-4 flex flex-col items-center text-center">
                <Image
                    src="https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/de27faa2-9f71-4fb6-b2ff-cdfa3fa770fa/website_DSC4111.jpg?format=2500w"
                    alt="Video Thumbnail"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
                <p className="mt-6 text-lg md:text-2xl font-medium text-gray-700">
                    The Learning Yatra Gurukul app is now LIVE! Stay ahead with the smartest platform.
                </p>
                <button onClick={handleClick} className="bg-[#af392b] z-10 text-lg sm:text-xl md:text-2xl lg:text-[25px] text-white font-bold 
                     py-4 px-10 sm:py-5 sm:px-16 md:py-6 md:px-20 lg:py-8 lg:px-42 
                     rounded-lg hover:bg-[#af382bc5] transition-colors duration-200 cursor-pointer mt-6">
                    Start learning
                </button>
            </section>

            {/* Features Section */}
            <section className="bg-gray-200 py-10 px-4">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-700 mb-16">
                    Discover What&apos;s Inside
                </h2>

                <div className="max-w-[100rem] px-0 md:px-4 py-10 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 md:gap-5">
                        <div className="space-y-2 md:space-y-5">
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img28.jpg" alt="Gallery Masonry Image" />
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img29.jpg" alt="Gallery Masonry Image" />
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img30.jpg" alt="Gallery Masonry Image" />
                        </div>
                        <div className="space-y-2 md:space-y-5">
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img31.jpg" alt="Gallery Masonry Image" />
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img32.jpg" alt="Gallery Masonry Image" />
                        </div>
                        <div className="space-y-2 md:space-y-5">
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img33.jpg" alt="Gallery Masonry Image" />
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img34.jpg" alt="Gallery Masonry Image" />
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img35.jpg" alt="Gallery Masonry Image" />
                        </div>
                        <div className="space-y-2 md:space-y-5">
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img36.jpg" alt="Gallery Masonry Image" />
                            <img className="w-full h-auto object-cover rounded-2xl" src="/img37.jpg" alt="Gallery Masonry Image" />
                        </div>
                    </div>
                </div>


            </section>

            {/* Get Started Section */}
            <section className="py-20 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Get Started Today
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Sign Up (Join) to The Reagent Core Foundation and kickstart your journey to
                            success. Stay connected with top educators and peers anytime,
                            anywhere.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/img27.jpg"
                            alt="App Screenshot"
                            width={700}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Contact / Assistance Section */}
            <section className="py-20 px-6 bg-gray-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
                        Need assistance?
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 rounded-md border border-[#af392b]"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                        <input name="_honey" className="hidden" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-4 rounded-md border border-[#af392b]"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="p-4 rounded-md border border-[#af392b] md:col-span-2"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="p-4 rounded-md border border-[#af392b] md:col-span-2"
                            name="message"
                            value={data.message}
                            onChange={handleChange}
                        />

                        <div className="md:col-span-2 flex justify-center">
                            <button type="submit" className="bg-[#af392b] z-10 text-lg sm:text-xl md:text-xl lg:text-xl text-white font-bold py-4 px-10 rounded-lg hover:bg-[#af382bc5] transition-colors duration-200 cursor-pointer">
                                {emailSent ? "Processing" : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}


export default Gurukul;
