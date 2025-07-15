// components/About.jsx
import { motion } from "framer-motion";
console.log(motion);

const skills = [
  {
    name: "Figma",
    description: "Interactive prototypes for web & mobile",
    percentage: 99,
    color: "red"
  },
  {
    name: "Illustrator",
    description: "Marketing & social media graphics",
    percentage: 99,
    color: "#054CC4"
  },
  {
    name: "Canva",
    description: "Social media posts & presentations",
    percentage: 80,
    color: "#00C4CC"
  }
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-10">
      <motion.h2
        className="text-orange-500 text-2xl font-bold uppercase mb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.div
        className="h-[5px] bg-orange-500 w-full mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "left" }}
        viewport={{ once: true }}
      />

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.p
            className="text-gray-700 mb-6 text-lg leading-relaxed"
            variants={fadeUp}
            custom={0}
          >
            As a <span className="text-orange-500 font-semibold">UI/UX and Product Designer</span> with 3 years of
            experience, I craft intuitive and visually compelling digital experiences. I specialize in user-centered
            design, blending aesthetics with functionality to enhance engagement.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            variants={fadeUp}
            custom={1}
          >
            My expertise spans web and mobile applications, from research and wireframing to high-fidelity designs.
            Passionate about innovation, I create seamless interactions that drive user satisfaction and business
            success. I leverage industry-leading tools to create visually stunning and user-friendly designs.
          </motion.p>
        </motion.div>

        {/* Skill cards */}
        <div className="space-y-5 ">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="bg-orange-400 p-4 rounded-md shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-bold text-xl text-gray-800">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>

              <div className="mt-3">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${skill.color}, #ffb347)`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p
                  className="text-right mt-1 text-sm font-bold"
                  style={{ color: skill.color }}
                >
                  {skill.percentage}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
