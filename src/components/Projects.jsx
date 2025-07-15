// components/Projects.jsx
import { motion } from 'framer-motion';
console.log(motion);

const projects = [
  {
    id: 1,
    title: "Nomad Spot Web Application",
    image: "/images/project1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Talkative Science Website",
    image: "/images/project2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Tip Now Trade Dashboard",
    image: "/images/project3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Tip Offer Mobile App",
    image: "/images/project4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Tip ZK Website",
    image: "/images/project5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Tip Enhance Website",
    image: "/images/project6.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <motion.h2 
        className="text-orange-500 text-2xl font-bold uppercase mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="h-[5px] bg-orange-600 w-full mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Overlay that appears on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Content that slides up on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20, opacity: 0.8 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A beautiful and functional design showcasing my skills in UI/UX design and development.
                </p>
                
                <motion.a
                  href={project.link}
                  className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-500/20 z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-orange-500 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;