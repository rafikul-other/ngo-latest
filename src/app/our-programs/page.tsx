
import Image from "next/image";
import { BookOpen, Users, Award, Lightbulb, Target, CheckCircle } from "lucide-react";

function OurPrograms() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center mt-5 px-2">
        <img
          src="./img12.jpeg"
          alt="Programs"
          className="object-cover rounded-3xl"
        />
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          The Problem
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-600 mb-16 leading-relaxed">
          Despite meaningful progress, millions of children across India continue to face challenges in foundational learning, access to quality resources, and preparation for high-stakes examinations. These systemic gaps perpetuate educational inequity and demand urgent, sustained intervention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: BookOpen, title: "Lack of Access", text: "A significant share of rural children in India are denied access to quality schools and learning resources, creating barriers to long-term educational and economic success." },
            { icon: Users, title: "Understaffed Schools", text: "Teacher-to-student ratios remain critically low, severely limiting opportunities for personalized instruction." },
            { icon: Award, title: "Exam Pressure", text: "High-stakes exams in secondary school demand more from students than many are prepared to handle." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center flex flex-col items-center hover:shadow-xl transition"
            >
              <item.icon className="w-14 h-14 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-gray-50 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Approach
        </h2>
        <div className="max-w-6xl mx-auto space-y-24">
          {[
            {
              step: "01",
              title: "Smart Curriculum",
              desc: "We co-develop curriculum in collaboration with subject-matter experts to ensure learning is engaging, contextually relevant, and grounded in real-world application.",
              img: "/img17.jpeg",
              icon: Lightbulb,
            },
            {
              step: "02",
              title: "Skilled Educators",
              desc: "Our training programs empower teachers with modern pedagogical tools, enabling them to effectively support diverse and dynamic classroom environments.",
              img: "/img23.jpg",
              icon: Users,
            },
            {
              step: "03",
              title: "Continuous Progress",
              desc: "Ongoing assessments and technology-enabled tracking systems help monitor progress and keep students aligned with their learning goals.",
              img: "/img13.jpeg",
              icon: CheckCircle,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-8 h-8 text-red-600" />
                  <span className="text-red-600 font-bold">{item.step}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Progress */}
      {/* <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { stat: "1M+", label: "Students Impacted" },
            { stat: "500+", label: "Schools Partnered" },
            { stat: "10K+", label: "Teachers Trained" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/20 transition"
            >
              <h3 className="text-4xl font-extrabold mb-3">{item.stat}</h3>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Program Sections */}
      {/* <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Programs
        </h2>
        {[
          {
            title: "Foundational Learning (Grades 1-8)",
            text: "We focus on literacy, numeracy, and cognitive development during the most formative years, ensuring children develop a strong base for future learning.",
            img: "https://picsum.photos/603/400",
          },
          {
            title: "Well-Prepared for Exams (Grades 9-10)",
            text: "We provide structured interventions that reduce exam anxiety and prepare students with problem-solving skills, logical reasoning, and conceptual clarity.",
            img: "https://picsum.photos/604/400",
          },
          {
            title: "Test Preparation (Grades 11-12)",
            text: "Advanced modules and mentorship guide students preparing for competitive exams, bridging the gap between school learning and higher education aspirations.",
            img: "https://picsum.photos/605/400",
          },
        ].map((program, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-20 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div>
              <Image
                src={program.img}
                alt={program.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-700 leading-relaxed">{program.text}</p>
              <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section> */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Programs
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 leading-relaxed">
          Our programs are designed to support students at every stage of their learning journey—
          from building strong foundations to excelling in high-stakes examinations. Each initiative
          is research-driven scalable and impact-focused.
        </p>

        {[
          {
            title: "Competitive Learning (Grades 11-12)",
            text: "We prioritize literacy, numeracy, and cognitive development during children’s most formative years, building a strong foundation for lifelong learning and academic success.",
            highlights: [
              "Phonics-led literacy instruction",
              "Activity-based numeracy learning",
              "Interactive storytelling and educational games",
              "Parent engagement and capacity-building workshops",
            ],
            stat: "80% of students show measurable improvement within 1 year",
            img: "/img24.png",
          },
          {
            title: "Well-Prepared for Board Exams (Grades 11-12)",
            text: "We deliver structured academic interventions that reduce exam-related anxiety while strengthening problem-solving ability, logical reasoning, and conceptual understanding.",
            highlights: [
              "Targeted exam-preparation sessions",
              "Time-management and stress-management strategies",
              "Collaborative peer-learning groups",
              "Regular diagnostic and progress assessments",
            ],
            stat: "95% of our students pass with first-class distinction",
            img: "/img25.png",
          },
          {
            title: "Test Preparation (Grades 11-12)",
            text: "Our advanced programs and mentorship support students preparing for competitive examinations, bridging the gap between school education and higher academic aspirations.",
            highlights: [
              "Specialized coaching for STEM and Commerce pathways",
              "Mentorship from graduates of leading universities",
              "Adaptive, technology-enabled test-preparation platforms",
              "Scholarship access and career guidance support",
            ],
            stat: "Over 10,000 students admitted to top colleges",
            img: "/img26.png",
          },
        ].map((program, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-24 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image Side */}
            <div className="relative group">
              <Image
                src={program.img}
                alt={program.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl" />
              {/* <div className="absolute bottom-4 left-4 bg-[#af392b] text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
                {program.stat}
              </div> */}
            </div>

            {/* Content Side */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{program.text}</p>

              <ul className="space-y-3 mb-6">
                {program.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#af392b]">
                      ✓
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              {/* <button className="mt-2 px-6 py-3 bg-[#af392b] hover:bg-[#af382bec] text-white rounded-lg shadow-md">
          Learn More
        </button> */}
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}

export default OurPrograms;