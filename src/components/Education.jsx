// components/Education.jsx
import { motion } from "framer-motion";
console.log(motion);

const Education = () => {
  const education = [
    {
      degree: "FSC In Computer Science",
      institution: "Iqra College Kohat",
      period: "2017 to 2019",
      description:
        "I completed my FSC in Computer Science from Iqra Public College Kohat. During this time, I developed a solid foundation in programming concepts and logical thinking. I gained hands-on experience with basic coding algorithms, and computational problem-solving. This education helped me build a strong technical base early in my journey. It also helped me understand how systems and technology interact with interfaces. This led me to explore UI/UX design and understand the importance of user-centered thinking. These studies played a key role in shaping my approach to design thinking.",
    },
    {
      degree: "Matriculation",
      institution: "Iqra Public School & College Kohat",
      period: "2015 to 2017",
      description:
        "I completed my Matriculation in Computer Science from Iqra Public School Kohat. During this period, I built a strong base in computer systems and logical reasoning. I was introduced to core subjects like programming basics, mathematics, and IT fundamentals. This education developed my curiosity for how digital systems function. I learned the importance of structured thinking and problem-solving. These foundations helped me approach technology with confidence and clarity. This academic phase later transformed my passion for UI/UX design. This academic phase laid the groundwork for my future in digital product design.",
    },
  ];

  const skills = [
    { name: "User Research Design", percentage: 85 },
    { name: "Design Leadership", percentage: 90 },
    { name: "Complete Design", percentage: 90 },
    { name: "Interaction Design", percentage: 97 },
    { name: "User Research", percentage: 85 },
    { name: "Concerned Design", percentage: 80 },
  ];

  const skillss = [
    "DESIGNING",
    "USER RESEARCH",
    "DASHBOARD",
    "MOBILE APP",
    "WIREFRAME",
  ];

  return (
    <section id="education" className="py-16">
      <motion.h2
        className="text-orange-500 text-2xl font-bold uppercase mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="h-[5px] bg-orange-600 w-full mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>

            {/* Content */}
            <div className="pl-8 border-l-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {edu.degree}
              </h3>
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500 mr-2"
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
                <p className="text-gray-500">{edu.period}</p>
              </div>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 className="text-gray-800 font-medium mb-3">{skill.name}</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-orange-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              ></motion.div>
            </div>
            <p className="text-right mt-2 text-2xl font-bold text-orange-500">
              {skill.percentage}%
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-orange-500 mb-2">85%</p>
          <p className="text-gray-700 font-medium">User Research Design</p>
        </motion.div>

        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-5xl font-bold text-orange-500 mb-2">90%</p>
          <p className="text-gray-700 font-medium">Design Leadership</p>
        </motion.div>

        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-5xl font-bold text-orange-500 mb-2">90%</p>
          <p className="text-gray-700 font-medium">Complete Design</p>
        </motion.div>
      </div>

      {/* <motion.div 
        className="flex flex-wrap gap-4 text-orange-500 font-bold mt-12 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>DESIGNING</span>
        <span>+</span>
        <span>USER RESEARCH</span>
        <span>+</span>
        <span>DASHBOARD</span>
        <span>+</span>
        <span>MOBILE APP</span>
        <span>+</span>
        <span>WIREFRAME</span>
      </motion.div> */}

      <motion.div
        className="flex flex-wrap gap-3 justify-center text-orange-500 font-bold mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {skillss.map((skill, index) => (
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
    </section>
  );
};

export default Education;
