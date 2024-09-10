import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos > 10;
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } bg-gray-900 text-white py-4 px-6 hidden md:flex md:items-center md:justify-between`}>
      <div className="flex items-center">
        <UtensilsCrossed className="text-[#FEA116] mr-2" size={54} />
        <span className="text-4xl font-bold text-[#FEA116]">Restoran</span>
      </div>
      <div className="flex items-center space-x-6">
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
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <a href="/booking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Booking</a>
              <a href="/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</a>
              <a href="/testimonial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Testimonial</a>
            </div>
          )}
        </div>
        <a href="/contact" className="hover:text-[#FEA116]">CONTACT</a>
        <button className="bg-[#FEA116] text-white px-4 py-2 rounded">
          BOOK A TABLE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;