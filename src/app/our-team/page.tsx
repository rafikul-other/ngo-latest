// app/page.tsx

import Image from "next/image";

function OurTeam() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="https://picsum.photos/1200/600"
          alt="Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            United by passion, our trustees, advisors, and management team
            ensure the mission to transform education reaches every child.
          </p>
        </div>
      </section>

      {/* Executive Trustees */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Director & Founder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="flex flex-col items-center text-center">
            <Image
              src="/Manjeet.png"
              alt="Manjeet"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Manjeet Singh</h3>
            <p className="text-gray-600 text-lg">Director & CEO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/Sourabh.png"
              alt="Sourabh"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Sourabh</h3>
            <p className="text-gray-600 text-lg">Director & CA, Finance officer</p>
          </div>

        </div>

      </section>

      {/* Trustees */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Trustees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-xl mx-auto">
          <div
            className="bg-gray-50 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <Image
              src="/Anil.png"
              alt="Anil"
              width={200}
              height={250}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Anil Kumar </h3>
              <p className="text-gray-600 text-lg">Trustee & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Principal & Vice-Principal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="flex flex-col items-center text-center">
            <Image
              src="/Balbir.png"
              alt="Balbir"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Principal Balbir Singh</h3>
            <p className="text-gray-600 text-lg">M.Sc, B.ed, HTET, CTET Mathematics - More Than 16 Years of Experience.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/Neha.png"
              alt="Neha"
              width={200}
              height={50}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Vice Principal Neha Singh</h3>
            <p className="text-gray-600 text-lg">M.Sc, M.ed, CTET, STET, Zoology - 10 Years of Experience.</p>
          </div>

        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Reagent Core Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">

          <div className="flex flex-col items-center text-center">
            <Image
              src="/Manjeet.png"
              alt="Manjeet Bhardwaj"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Manjeet Bhardwaj</h3>
            <p className="text-gray-600 text-lg">Department of Chemistry - 15 Years of Experience.</p>
           
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/Parveen.png"
              alt="Parveen"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Dr. Parveen Pippal</h3>
            <p className="text-gray-600 text-lg">NEET Head - 12 Years of Experience.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Hemant.png"
              alt="Hemant"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Hemant Dhillon</h3>
            <p className="text-gray-600 text-lg">H.O.D Physics, M.Sc B.Ed - 5 Years of Experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Himanshu.png"
              alt="Himanshu Kaushik"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Himanshu Kaushik</h3>
            <p className="text-gray-600 text-lg">H.O.D Chemistry JEE (Mains+Adv.) - 6 Years of Experience</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Rajneesh.png"
              alt="Rajneesh"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Rajneesh Kumar</h3>
            <p className="text-gray-600 text-lg">H.O.D Mathematics - 4 Years of Experience</p>
          
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Rishav.png"
              alt="Rishav"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Rishav Garg </h3>
            <p className="text-gray-600 text-lg">H.O.D Chemistry NEET, M.Sc B.Ed - 10 Years of Experience</p>
           
          </div>


          <div className="flex flex-col items-center text-center">
            <Image
              src="/Shubham.png"
              alt="Shubham"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">Shubham Rao</h3>
            <p className="text-gray-600 text-lg">JEE Head - 6 Years of Experience</p>
          </div>

         

        </div>
      </section>

    </main>
  );
}


export default OurTeam;