import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Container Principal */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4">Let's Connect!</h2>
          <p className="text-lg mb-6">
            Feel free to reach out if you want to talk about technology, innovation, or just have a friendly chat. I'm always open to new opportunities and collaborations!
          </p>

          <a
            href="mailto:gustavomullerleonini@gmail.com"
            className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 text-center mt-10">
        <p className="text-sm text-gray-400">© 2024 Gustavo Müller. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
