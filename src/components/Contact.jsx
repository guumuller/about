import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section className="py-16 bg-gray-900 text-white px-6">
    {/* Título da seção */}
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-center mb-8"
    >
      Let's Connect!
    </motion.h2>

    {/* Mensagem de introdução */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-lg text-center max-w-3xl mx-auto mb-12"
    >
      Whether you have a project in mind, want to collaborate, or just say hi, feel free to reach out. I'd love to hear from you!
    </motion.p>

    {/* Opções de contato */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-8 mb-12"
    >
      {/* Email */}
      <a
        href="mailto:gustavomullerleonini@gmail.com"
        className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
      >
        <FaEnvelope className="text-6xl text-blue-400 mb-4" />
        <p className="text-lg font-semibold">Email</p>
        <p className="text-sm">gustavomullerleonini@gmail.com</p>
      </a>

      {/* Telefone */}
      <a
        href="tel:5551989039582"
        className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
      >
        <FaPhone className="text-6xl text-green-400 mb-4" />
        <p className="text-lg font-semibold">Phone</p>
        <p className="text-sm">+55 51 98903-9582</p>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/gustavo-m%C3%BCller-leonini-machado-aaa542264/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
      >
        <FaLinkedin className="text-6xl text-blue-600 mb-4" />
        <p className="text-lg font-semibold">LinkedIn</p>
        <p className="text-sm">/gustavomuller</p>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/guumuller"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
      >
        <FaGithub className="text-6xl text-gray-500 mb-4" />
        <p className="text-lg font-semibold">GitHub</p>
        <p className="text-sm">/guumuller</p>
      </a>
    </motion.div>
  </section>
);

export default Contact;
