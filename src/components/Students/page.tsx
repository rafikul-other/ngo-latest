// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const Students = () => {
//   return (
//     <section className="w-full bg-gradient-to-b from-black to-gray-900 py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-extrabold text-yellow-400"
//         >
//           Students Speak
//         </motion.h2>

//         <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
//           Hear from our students about their journey with The Learning Yatra Fellows
//         </p>

//         <div className="mt-12 grid md:grid-cols-2 gap-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 transition duration-300"
//           >
//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 title="Student Story"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-5 text-left">
//               <p className="text-gray-300 text-sm">
//                 Shashank H J, a NEET Aspirant from JNV Hassan shares his
//                 experience of learning with The Learning Yatra, and achieving his dreams of
//                 becoming a doctor. He values the learning environment, our
//                 engagement activities as well as our digital outreach during the
//                 Covid-19 lockdown period.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 transition duration-300"
//           >
//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 title="Pooja Jha Story"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-5 text-left">
//               <p className="text-gray-300 text-sm">
//                 Pooja’s story is nothing short of inspirational and is one we
//                 believe will encourage students from all walks of life to never
//                 give up their dreams and to push through despite the odds.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="mt-14">
//           <p className="text-lg font-semibold text-white mb-6">
//             Help support their dreams and gift them the joy of a brighter future.
//           </p>
//           <motion.a
//             href="#donate"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl shadow-md hover:bg-yellow-300 transition"
//           >
//             DONATE NOW
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Students;

"use client";

import Link from "next/link";
import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative py-16 px-6 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-red-600  to-rose-500 p-[1px] shadow-xl">
        <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30">
          <div className="pointer-events-none absolute -top-24 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-40 w-40 rounded-full bg-yellow-300/30 blur-3xl"></div>

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Join the Community
                </h2>
              </div>
              <div className="">
                <Link
                  href="/gurukul"
                  type="button"
                  className="
      inline-flex items-center justify-center
      px-8 py-3
      rounded-xl
      bg-gradient-to-r from-red-600 to-rose-700
      text-sm sm:text-base md:text-lg font-semibold text-white
      shadow-lg shadow-red-500/40
      hover:shadow-xl hover:shadow-red-500/60
      hover:-translate-y-0.5 hover:scale-[1.02]
      active:scale-95
      transition-all duration-200
      cursor-pointer
    "
                >
                  Connect
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
