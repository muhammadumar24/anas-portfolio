// components/Experience.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
console.log(motion);

const Experience = () => {
  const scrollRef = useRef(null);

  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Brandora Design Agency",
      period: "Present, 2020 to 2023",
      icon: "🎨",
      color: "bg-orange-100",
      borderColor: "border-orange-400",
      description:
        "In Brandora I've worked hands-on with diverse client projects, ensuring intuitive and thoughtful design. User research is at the heart of my process, from wireframes to high-fidelity interfaces. From wireframes to prototypes, I focus on flow, usability, and user-centric design. I've collaborated with cross-functional teams, adapting quickly to new tools and systems. Every project sharpened my skills in creating accessible and remarkable design systems. I define client feedback and report design impact, reflect my reliability and design impact. I'm passionate about delivering value through design and collaborate with global teams.",
    },
    {
      title: "UI/UX Designer",
      company: "DevA System",
      period: "Present, 2024",
      icon: "💻",
      color: "bg-blue-100",
      borderColor: "border-blue-400",
      description:
        "At DevA System, I've worked as a Product Designer across end-to-end projects. I've led design efforts for blockchain platforms, ensuring secure interfaces. For eCommerce solutions, I focused on conversion-driven design, optimizing checkout and payment processes. Understanding user behavior through research and journey mapping was key to creating seamless user flows. I created personas, wireframes, and high-fidelity prototypes aligned with both user needs and business goals. From ideation to delivery, I collaborated with developers, stakeholders, and clients. As a Product Designer, I take ownership of the entire design process, delivering products that are both functional and delightful.",
    },
    {
      title: "UI/UX Internship",
      company: "Brandora",
      period: "Present, 2019",
      icon: "🚀",
      color: "bg-green-100",
      borderColor: "border-green-400",
      description:
        "Completed a 6-month intensive UI/UX design internship at Brandora, where I worked on real client projects. I gained hands-on experience in user research, information architecture, wireframing, prototyping, and crafting intuitive user flows. This experience helped me build a strong design foundation, solve real-world problems, and collaborate effectively with cross-functional teams to deliver user-centered solutions.",
    },
  ];

  const stats = [
    { value: "50+", label: "Project Completed", icon: "📊" },
    { value: "65+", label: "Happy Clients", icon: "😊" },
    { value: "20+", label: "Profile Views", icon: "👁️" },
  ];

  const skills = [
    "DESIGNING",
    "USER RESEARCH",
    "DASHBOARD",
    "MOBILE APP",
    "WIREFRAME",
  ];

  return (
    <section id="experience" className="py-16" ref={scrollRef}>
      <motion.h2
        className="text-orange-500 text-2xl font-bold uppercase mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="h-[5px] bg-orange-600 w-full mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      ></motion.div>

      {/* Timeline Experience */}
      <div className="relative mb-20">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ marginLeft: "-1px" }}
        ></motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <motion.div
              className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full ${exp.color} border-4 ${exp.borderColor} flex items-center justify-center text-2xl z-10`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.2 + 0.3,
              }}
              style={{ transform: "translateX(-50%)" }}
            >
              {exp.icon}
            </motion.div>

            {/* Content - Improved layout */}
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
              {/* Left side content */}
              <div
                className={`pl-16 md:pl-0 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                }`}
              >
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500 h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center mb-3 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <div className="flex items-center mb-4 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500">{exp.period}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Empty space for alternating layout - now filled with decorative elements */}
              <div
                className={`hidden md:block ${
                  index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                }`}
              >
                <motion.div
                  className={`h-full flex items-center justify-center opacity-10`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div
                    className={`text-9xl ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    } font-bold text-orange-500 opacity-20`}
                  >
                    {index + 1}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-100"
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-4xl mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                delay: index * 0.1,
              }}
            >
              {stat.icon}
            </motion.div>
            <motion.p
              className="text-5xl font-bold text-orange-500 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {stat.value}
            </motion.p>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Tags */}

      <motion.div
        className="flex flex-wrap gap-3 justify-center text-orange-500 font-bold mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-orange-50 px-3 py-1 rounded-full text-sm"
            whileHover={{
              backgroundColor: "#FDBA74",
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            {skill}
            {index < skills.length - 1 && <span className="ml-3 mr-0">+</span>}
          </motion.span>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a href="#education" className="text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Experience;
