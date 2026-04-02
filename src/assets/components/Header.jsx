import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import SocialIcons from './SocialIcons';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5 text-white bg-black/40 backdrop-blur-md">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-[#FFD700] text-black font-black px-3 py-1 rounded-sm shadow-md text-2xl uppercase">
          AYME
        </div>
        <span className="text-xl font-bold tracking-tight uppercase hidden sm:block">
          DALĞIC MƏKTƏBİ
        </span>
      </div>
      <ul className="hidden md:flex gap-8 text-[15px] font-bold items-center">
        <Link to="/" className="hover:text-[#FFD700] transition duration-300">ANA SƏHİFƏ</Link>
        <Link to="/about" className="hover:text-[#FFD700] transition duration-300">HAQQIMIZDA</Link>
        <Link to="/places" className="hover:text-[#FFD700] transition duration-300">BÖLGƏLƏR</Link>
        <Link to="/services" className="hover:text-[#FFD700] transition duration-300">XİDMƏTLƏR</Link>
        <Link to="/questions" className="hover:text-[#FFD700] transition duration-300">ÇSS</Link>
        <div className="flex items-center gap-4 border-l border-white/20 pl-4 ml-2">
          <SocialIcons />
        </div>
        <Link to="/logIn" className="bg-[#FFD700] text-black px-5 py-2 rounded-full hover:bg-white transition duration-300">
          Giriş
        </Link>
      </ul>
    </nav>
  );
};

export default Header;