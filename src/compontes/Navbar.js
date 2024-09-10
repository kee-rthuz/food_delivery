import React, { useState } from 'react';
import { Menu, ChevronDown, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/bg-hero.jpg';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/service':
        return 'Service';
      case '/menu':
        return 'Menu';
      case '/booking':
        return 'Booking';
      case '/our-team':
        return 'Our Team';
      case '/testimonial':
        return 'Testimonial';
      case '/contact':
        return 'Contact Us';
      default:
        return 'Contact Us';
    }
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
            <UtensilsCrossed className="text-[#FEA116] mr-2" size={54} />
              <span className="text-4xl font-bold text-[#FEA116]">Restoran</span>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="/" className="hover:text-[#FEA116]">HOME</a>
              <a href="/about" className="hover:text-[#FEA116]">ABOUT</a>
              <a href="/service" className="hover:text-[#FEA116]">SERVICE</a>
              <a href="/menu" className="hover:text-[#FEA116]">MENU</a>
              <div className="relative">
                <button
                  onClick={togglePagesDropdown}
                  className="flex items-center hover:text-[#FEA116] focus:outline-none"
                >
                  PAGES
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {pagesDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="/booking" className="block px-4 py-2 text-sm text-[#000] hover:text-[#FEA116] hover:bg-gray-100">Booking</a>
                    <a href="/our-team" className="block px-4 py-2 text-sm text-[#000] hover:text-[#FEA116] hover:bg-gray-100">Our Team</a>
                    <a href="/testimonial" className="block px-4 py-2 text-sm text-[#000] hover:text-[#FEA116] hover:bg-gray-100">Testimonial</a>
                  </div>
                )}
              </div>
              <a href="/contact" className="text-[#FEA116]">CONTACT</a>
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
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">HOME</a>
                <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">ABOUT</a>
                <a href="/service" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">SERVICE</a>
                <a href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]">MENU</a>
                <button
                  onClick={togglePagesDropdown}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FEA116]"
                >
                  PAGES
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {pagesDropdownOpen && (
                  <div className="pl-6 space-y-1">
                    <a href="/booking" className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#FEA116]">Booking</a>
                    <a href="/our-team" className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#FEA116]">Our Team</a>
                    <a href="/testimonial" className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#FEA116]">Testimonial</a>
                  </div>
                )}
                <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-[#FEA116]">CONTACT</a>
                <button className="w-full bg-[#FEA116] text-white px-5 py-2 rounded text-sm font-medium">BOOK A TABLE</button>
              </div>
            </div>
          )}

          {/* Page title with slide-down animation */}
          <div className="text-center py-28">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold text-white mb-4"
            >
              {getPageTitle()}
            </motion.h1>
            <div ani className="flex justify-center space-x-2 text-sm text-[#FEA116]">
              <a href="/" className="hover:text-[#FEA116]">HOME</a>
              <span>/</span>
              <a href="#" className="hover:text-[#FEA116]">PAGES</a>
              <span>/</span>
              <span className="text-white">{getPageTitle().toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
















