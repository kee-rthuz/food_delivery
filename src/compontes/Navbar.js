import React, { useState } from 'react';
import { Menu, ChevronDown, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/bg-hero.jpg';
import mealImage from '../assets/hero.png';
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

  const getBackgroundHeight = () => {
    return location.pathname === '/' ? 'min-h-screen' : 'min-h-[43vh]';
  };

  return (
    <div className="relative">
      <div
        className={`flex flex-col bg-cover bg-center relative mx-auto max-w-screen-xl ${getBackgroundHeight()}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-90"></div>

        {/* Navbar */}
        <nav className="relative z-50 text-white py-4">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <UtensilsCrossed className="text-[#FEA116] mr-2" size={36} />
                <span className="text-3xl font-bold text-[#FEA116]">Restoran</span>
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
                <a href="/contact" className="hover:text-[#FEA116]">CONTACT</a>
                <button className="bg-[#FEA116] text-white px-4 py-2 rounded text-sm font-medium">BOOK A TABLE</button>
              </div>
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-50 bg-gray-900 bg-opacity-90">
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

        {/* Header content */}
        <div className="relative flex-grow flex items-center w-full px-4 md:px-8 lg:px-16">
          {location.pathname === '/' ? (
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="max-w-lg text-white lg:mr-8">
              <h1 className="text-6xl font-bold mb-6 opacity-0 translate-x-[-50px] animate-fadeInLeft">
                Enjoy Our <br /> Delicious Meal
              </h1>
              <p className="mb-8 opacity-0 translate-x-[-50px] animate-fadeInLeft animation-delay-300">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <button className="bg-[#FEA116] text-white px-8 py-4  hover:bg-yellow-600 opacity-0 translate-x-[-50px] animate-fadeInLeft animation-delay-600">
                BOOK A TABLE
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={mealImage}
                alt="Delicious Meal"
                className="w-full h-auto object-cover animate-slowSpin"
              />
            </div>
          </div>

          ) : (
            <div className="text-center w-full py-28">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold text-white mb-4"
              >
                {getPageTitle()}
              </motion.h1>
              <div className="flex justify-center space-x-2 text-sm text-[#FEA116]">
                <a href="/" className="hover:text-[#FEA116]">HOME</a>
                <span>/</span>
                <a href="#" className="hover:text-[#FEA116]">PAGES</a>
                <span>/</span>
                <span className="text-white">{getPageTitle().toUpperCase()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
