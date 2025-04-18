import React from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl text-gray-200 font-semibold mb-4">Athul Krishna</h3>
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a href="http://wa.me/9526077436" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 hover:text-green-400 transition" />
            </a>
            <a href="https://www.instagram.com/invites/contact/?igsh=hsi86cj7mpa6&utm_content=22643e4"
              target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-400 transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100012380791989" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-500 hover:text-blue-400 transition" />
            </a>
            <a href="mailto:athul8741@gmail.com">
              <FaEnvelope className="text-red-500 hover:text-red-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/athul-krishna-6b8a69273" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-500 transition" />
            </a>
            <a href="https://github.com/Athul2530" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="hover:text-gray-300 transition" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <p className="text-sm md:text-base text-center md:text-right">
          &copy; {new Date().getFullYear()} Athul Krishna. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
