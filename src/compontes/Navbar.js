import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/bg-hero.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="min-h-[43vh] flex flex-col items-center justify-center bg-cover bg-center relative mx-auto max-w-screen-xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-90"></div>

        {/* Header content */}
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
          {/* Navigation bar */}
          <nav className="flex items-center justify-between py-6 text-white">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#FEA116]">Restoran</span>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#" className="hover:text-[#FEA116]">HOME</a>
              <a href="#" className="hover:text-[#FEA116]">ABOUT</a>
              <a href="#" className="hover:text-[#FEA116]">SERVICE</a>
              <a href="#" className="hover:text-[#FEA116]">MENU</a>
              <a href="#" className="hover:text-[#FEA116]">PAGES</a>
              <a href="#" className="text-[#FEA116]">CONTACT</a>
              <button className="bg-[#FEA116] text-white px-6 py-3 -mt-3 rounded text-sm font-medium">BOOK A TABLE</button>
            </div>
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">HOME</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">ABOUT</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">SERVICE</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">MENU</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">PAGES</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#FEA116]">CONTACT</a>
                <button className="w-full bg-[#FEA116] text-white px-5 py-2 rounded text-sm font-medium">BOOK A TABLE</button>
              </div>
            </div>
          )}

          {/* Page title with slide-down animation for "Contact Us" */}
          <div className="text-center py-28">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Contact Us
            </motion.h1>
            <div className="flex justify-center space-x-2 text-sm text-[#FEA116]">
              <a href="#" className="hover:text-[#FEA116]">HOME</a>
              <span>/</span>
              <a href="#" className="hover:text-[#FEA116]">PAGES</a>
              <span>/</span>
              <span className="text-white">CONTACT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
