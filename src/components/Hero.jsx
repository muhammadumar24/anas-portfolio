// components/Hero.jsx
import { motion } from "framer-motion";
console.log(motion);

const Hero = () => {
  return (
    <section className="pt-24 pb-10 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/hero-image.png"
          alt="Anas Qureshi - UI/UX Designer"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
