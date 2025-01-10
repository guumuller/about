import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaHandshake, FaCertificate } from "react-icons/fa";

const About = () => (
  <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500"
    >
      About Me
    </motion.h2>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="max-w-4xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl p-8"
    >
      <div className="flex flex-col gap-10">
        {/* Sessão 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-start gap-6"
        >
          <FaLaptopCode className="text-blue-400 text-8xl sm:text-6xl" />
          <p className="text-lg leading-relaxed">
            I am a passionate Software Developer with a strong dedication to learning and overcoming challenges, both personally and professionally. My career is marked by extensive academic activities, including individual and group-based projects, where I constantly strive to excel and deepen my understanding of technology.
          </p>
        </motion.div>

        {/* Sessão 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-start gap-6"
        >
          <FaHandshake className="text-green-400 text-8xl sm:text-6xl" />
          <p className="text-lg leading-relaxed">
            Currently, I specialize in mobile development focused on digital banking solutions and also work on creating landing pages at GBX Brasil. My role involves designing, developing, and refining applications that provide seamless user experiences, as well as contributing to the innovation of financial technology.
          </p>
        </motion.div>

        {/* Sessão 3 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-start gap-6"
        >
          <FaCertificate className="text-yellow-400 text-8xl sm:text-6xl" />
          <p className="text-lg leading-relaxed">
            With experience in building websites, configuring, and testing applications, I bring a versatile skill set to my work. I believe in fostering open communication and building strong professional relationships with colleagues, as these are key to achieving shared goals.
          </p>
        </motion.div>

        {/* Sessão Educação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-300">
            Education
          </h3>
          <div className="flex flex-col gap-10">
            {/* Educação 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-start gap-6"
            >
              <FaGraduationCap className="text-red-400 text-8xl sm:text-6xl" />
              <p className="text-lg leading-relaxed">
                I graduated from <strong>Senac Distrito Criativo</strong>, where I had my first contact with the world of technology through a technical programming course integrated with my high school education. Currently, I am pursuing a degree in <strong>Systems Analysis and Development</strong> at <strong>Centro Universitário Senac</strong>.
              </p>
            </motion.div>

            {/* Educação 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-start gap-6"
            >
              <FaCertificate className="text-purple-400 text-8xl sm:text-6xl" />
              <p className="text-lg leading-relaxed">
                I participated in the <strong>Geração Caldeira 2024 program</strong>, promoted by <strong>Instituto Caldeira</strong>, where I earned <strong>10 certificates of completion</strong> on the Alura platform in various fields, solidifying my knowledge in different languages, tools, and development methodologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;
