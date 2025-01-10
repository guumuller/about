import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaAndroid, FaApple } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiTailwindcss } from "react-icons/si";

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center max-w-3xl"
    >
      Hi, I'm a Software Developer
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-4 text-xl text-center max-w-2xl"
    >
      Web and Mobile
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="mt-8 text-center"
    >
      <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 text-5xl text-blue-400">
        <div className="flex flex-col items-center">
          <FaReact />
          <p className="text-sm text-white mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript />
          <p className="text-sm text-white mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiFirebase />
          <p className="text-sm text-white mt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center">
          <FaApple />
          <p className="text-sm text-white mt-2">iOS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaAndroid />
          <p className="text-sm text-white mt-2">Android</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss />
          <p className="text-sm text-white mt-2">Tailwind CSS</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
