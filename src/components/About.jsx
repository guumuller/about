import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaHandshake, FaCertificate } from "react-icons/fa";

const About = () => (
  <section className="py-16 bg-gray-800 text-white px-6">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-center mb-8"
    >
      About Me
    </motion.h2>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-6">
          <FaLaptopCode className="text-blue-400 text-9xl sm:text-6xl md:text-6xl" />
          <p className="text-lg leading-relaxed">
            I am a passionate Software Developer with a strong dedication to learning and overcoming challenges, both personally and professionally. My career is marked by extensive academic activities, including individual and group-based projects, where I constantly strive to excel and deepen my understanding of technology.
          </p>
        </div>

        <div className="flex items-start gap-6">
          <FaHandshake className="text-green-400 text-9xl sm:text-6xl md:text-6xl" />
          <p className="text-lg leading-relaxed">
            Currently, I specialize in mobile development focused on digital banking solutions and also work on creating landing pages at GBX Brasil. My role involves designing, developing, and refining applications that provide seamless user experiences, as well as contributing to the innovation of financial technology.
          </p>
        </div>

        {/* Parágrafo 3 */}
        <div className="flex items-start gap-6">
          <FaCertificate className="text-yellow-400 text-9xl sm:text-6xl md:text-6xl" />
          <p className="text-lg leading-relaxed">
            With experience in building websites, configuring, and testing applications, I bring a versatile skill set to my work. I believe in fostering open communication and building strong professional relationships with colleagues, as these are key to achieving shared goals.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Education</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-6">
              <FaGraduationCap className="text-red-400 text-9xl sm:text-6xl md:text-6xl" />
              <p className="text-lg leading-relaxed">
                I graduated from <strong>Senac Distrito Criativo</strong>, where I had my first contact with the world of technology through a technical programming course integrated with my high school education. Currently, I am pursuing a degree in <strong>Systems Analysis and Development</strong> at <strong>Centro Universitário Senac</strong>.
              </p>
            </div>

            <div className="flex items-start gap-6">
              <FaCertificate className="text-purple-400 text-9xl sm:text-6xl md:text-6xl" />
              <p className="text-lg leading-relaxed">
                I participated in the <strong>Geração Caldeira 2024 program</strong>, promoted by <strong>Instituto Caldeira</strong>, where I earned <strong>10 certificates of completion</strong> on the Alura platform in various fields, solidifying my knowledge in different languages, tools, and development methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
