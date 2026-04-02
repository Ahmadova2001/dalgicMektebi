import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const SocialIcons = () => {
  const links = [
    { id: 1, icon: <FaFacebookF size={18} />, url: "https://facebook.com" },
    { id: 2, icon: <FiTwitter size={18} />, url: "https://twitter.com" },
    { id: 3, icon: <FaInstagram size={18} />, url: "https://instagram.com" },
    { id: 4, icon: <CgProfile size={20} />, url: "/profile" },
  ];

  return (
    <div className="flex items-center gap-5">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#FFD700] transition-all duration-300 transform hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;