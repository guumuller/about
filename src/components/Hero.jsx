import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaAndroid, FaApple } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiTailwindcss } from "react-icons/si";

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-4">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500"
    >
      Hi, I'm a Software Developer
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-4 text-xl text-center max-w-2xl text-gray-400"
    >
      Web and Mobile
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="mt-8 text-center"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-400">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 text-6xl">
        <div className="flex flex-col items-center text-blue-500">
          <FaReact />
          <p className="text-sm text-gray-300 mt-2">React</p>
        </div>
        <div className="flex flex-col items-center text-blue-400">
          <SiTypescript />
          <p className="text-sm text-gray-300 mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-yellow-500">
          <SiFirebase />
          <p className="text-sm text-gray-300 mt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <FaApple />
          <p className="text-sm text-gray-300 mt-2">iOS</p>
        </div>
        <div className="flex flex-col items-center text-green-500">
          <FaAndroid />
          <p className="text-sm text-gray-300 mt-2">Android</p>
        </div>
        <div className="flex flex-col items-center text-cyan-400">
          <SiTailwindcss />
          <p className="text-sm text-gray-300 mt-2">Tailwind CSS</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
