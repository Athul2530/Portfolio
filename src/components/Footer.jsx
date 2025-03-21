import React from 'react';
import { FaGithubSquare, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center p-6 md:p-20 text-sm md:text-lg mt-12 text-gray-400'>

     
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Athul Krishna</h3>
        <div className='flex flex-row gap-6 text-4xl'>

     
          <a href="http://wa.me/9526077436" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 hover:text-green-400 transition duration-300" />
          </a>

          <a href="https://www.instagram.com/invites/contact/?igsh=hsi86cj7mpa6&utm_content=22643e4" 
             target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-400 transition duration-300" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100012380791989" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-400 transition duration-300" />
          </a>

          <a href="mailto:athul8741@gmail.com">
            <FaEnvelope className="text-red-500 hover:text-red-400 transition duration-300" />
          </a>

          <a href="https://www.linkedin.com/in/athul-krishna-6b8a69273" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-500 transition duration-300" />
          </a>

          <a href="https://github.com/Athul2530" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="text-gray-400 hover:text-gray-300 transition duration-300" />
          </a>

        </div>
      </div>

      <p className='text-gray-400'>&copy; 2025 Athul Krishna</p>

    </div>
  );
};

export default Footer;
