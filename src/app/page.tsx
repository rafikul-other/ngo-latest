import HeaderCarousal from '@/components/headerCarousal/page'
import Statistics from '@/components/statistics/page'
// import Partners from '@/components/partners/page'
// import Awards from '@/components/awards/Awards'
import React from 'react'
import Link from 'next/link'
import OurWork from '@/components/ourWork/OurWork'
import Students from '@/components/Students/page'

const Home = () => {
  return (
    <div>
      <HeaderCarousal />
      <section className="relative bg-[#b33a28]">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#e54901]/80 to-[#ff6f3d]/80 mix-blend-multiply"></div> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <div className="p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg">
            <p className="text-lg md:text-lg lg:text-lg font-medium text-white animate-fade-in">
              At Reagent Core, we guide high-school students on a transformative journey through free test prep, mentorship, and career support. With our help, students gain entry into top Science and Technology colleges and uplift their families by doubling their household income—ending generational poverty with education.
            </p>
            <Link
              href={"/gurukul"}
              className="inline-block rounded-xl bg-[#e54901] px-8 py-3 text-center text-sm font-semibold text-white outline-none transition-all duration-300 ease-in-out hover:bg-[#ff6f3d] hover:scale-105 focus-visible:ring active:bg-[#e54901]/90 md:text-base animate-fade-in-up delay-200 mt-7"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <OurWork />
      <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="flex justify-center">
            <img
              src="./map_education.png" // replace with India map with highlighted states
              alt="Indian Education Map"
              className="rounded-xl shadow-lg w-full max-w-md lg:max-w-full"
            />
          </div>

          {/* Text + Stats */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
              <span className="text-[#af392b]">
                Education has the power to lift families out of poverty within a single generation.
              </span>{" "}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
              At Reagent Core, we partner with government school systems to deliver one of India’s largest free test-preparation initiatives, enabling students to qualify for top-tier undergraduate programs in STEM.
            </p>

            {/* Stats */}
            {/* <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6">
              <div className="bg-white shadow-md rounded-xl px-6 py-4 flex flex-col items-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-extrabold text-red-600">77,000</p>
                <p className="text-gray-700 font-medium">Students</p>
              </div>
              <div className="bg-white shadow-md rounded-xl px-6 py-4 flex flex-col items-center hover:shadow-lg transition duration-300">
                <p className="text-4xl font-extrabold text-[#af392b]">29</p>
                <p className="text-gray-700 font-medium">
                  States & Union Territories
                </p>
              </div>
            </div> */}

            {/* Logos */}
            {/* <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/049e1514-b873-40ec-b948-64886e032028/Emblem_of_Haryana.png?format=750w"
                alt="Partner 1"
                className="h-16 object-contain"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/5bb63df8-b831-4cdd-a194-bbc90f5f053b/HPGovt.png?format=750w"
                alt="Partner 2"
                className="h-16 object-contain"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/117439be-c76f-47b3-8236-cb335cff3120/Jawahar_Navodaya_Vidyalaya_logo.png?format=750w"
                alt="Partner 3"
                className="h-16 object-contain"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/ad9a66dc-78a4-4cdc-8770-16c23b41cf56/TamilNadu_Logo.png?format=750w"
                alt="Partner 4"
                className="h-16 object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>
      {/* <Statistics /> */}
      <section className="w-full px-5  mt-20">        

        <div className="relative container w-full mx-auto h-auto md:h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg">
          <img
            src="./img7.png"
            alt="Stories of Change"
            className="w-full h-auto md:absolute md:inset-0 md:h-full md:w-full md:object-cover md:object-center"
          />
        </div>


        {/* Stats Section */}
        {/* <div className=" py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            The Change Were Bringing
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 text-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-md rounded-xl p-8 hover:shadow-lg transition duration-300">
              <p className="text-5xl font-extrabold text-red-600 mb-2">30%</p>
              <p className="text-gray-700 font-medium">
                of The Learning Yatra students qualify for the JEE Main.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-md rounded-xl p-8 hover:shadow-lg transition duration-300">
              <p className="text-5xl font-extrabold text-red-600 mb-2">15%</p>
              <p className="text-gray-700 font-medium">
                is the national average for students qualifying for the JEE Main.
              </p>
            </div> 
          </div>
        </div> */}
      </section>
      <Students />
      {/* <Partners />
      <Awards /> */}
    </div>
  )
}

export default Home