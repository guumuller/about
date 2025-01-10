import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold">Gustavo Müller</h1>
    
    <div className="flex space-x-4 items-center">
      <a href="https://github.com/guumuller" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/gustavo-m%C3%BCller-leonini-machado-aaa542264/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
  </header>
);

export default Header;
