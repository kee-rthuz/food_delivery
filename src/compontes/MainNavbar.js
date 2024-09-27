import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [restaurantDropdownOpen, setRestaurantDropdownOpen] = useState(false);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  const toggleRestaurantDropdown = () => {
    setRestaurantDropdownOpen(!restaurantDropdownOpen);
  };

  const handleRestoranClick = () => {
    navigate('/');
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
        <span 
          className="text-4xl font-bold text-[#FEA116] cursor-pointer hover:text-[#FFA500]"
          onClick={handleRestoranClick}
        >
          Restoran
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="/service" className="hover:text-[#FEA116]">SERVICE</a>
        {/* <a href="/restorant" className="hover:text-[#FEA116]">RESTORANT</a> */}



        <div className="relative">
          <button
            onClick={toggleRestaurantDropdown}
            className="flex items-center hover:text-[#FEA116] focus:outline-none"
          >
            RESTAURANT
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {restaurantDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <a href="/dine-in" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dine In</a>
              <a href="/orders-online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders Online</a>
              <a href="/add-restaurant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Add Restaurant</a>
            </div>
          )}
        </div>



{/* ------------------------------------------------------------------------- */}
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
              <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
              <a href="/order" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Order</a>
              <a href="/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</a>
              <a href="/testimonial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Testimonial</a>
            </div>
          )}
        </div>


        <a href="/contact" className="hover:text-[#FEA116]">CONTACT</a>
        <a href="/login" className="hover:text-[#FEA116]">LOGIN</a>
        <button className="bg-[#FEA116] text-white px-4 py-2 rounded hover:bg-[#FFA500]">
          ORDER NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;