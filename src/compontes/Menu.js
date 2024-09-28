import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

import Bq from '../assets/fud.avif';
import Bw from '../assets/fud-1.avif';
import Be from '../assets/fud-2.avif';
import Br from '../assets/ff.avif';
import Bt from '../assets/fud-4.webp';
import By from '../assets/fud-5.avif';
import Bu from '../assets/fud-6.avif';
import Bi from '../assets/fud-7.avif';

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative max-w-md w-full">
        <input
          type="text"
          placeholder="Search for food"
          className="w-full py-2 px-4 pr-10 border border-[#FEA116] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FEA116] focus:border-[#FEA116]"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

const CombinedMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { restaurantName } = location.state || {};

  const handleBackClick = () => {
    navigate(-1);
  };

  const popularCuisines = [
    { name: 'Biryani', image: Bq },
    { name: 'Rolls', image: Bw },
    { name: 'Pizzas', image: Be },
    { name: 'Burger', image: Br },
    { name: 'Tea', image: Bt },
    { name: 'Chinese', image: By },
    { name: 'Cake', image: Bu },
    { name: 'Dessert', image: Bi },
  ];

  const handleCuisineClick = (cuisineName) => {
    console.log(`Clicked on ${cuisineName}`);
    // Add your logic here, e.g., navigate to a specific page or filter results
  };

  return (
    <div className="container mx-auto max-w-screen-xl mt-4 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <button
          onClick={handleBackClick}
          className="flex items-center text-[#FEA116] hover:text-[#FEA116] transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Dine In
        </button>
        <h1 className="text-3xl font-bold text-center text-[#FEA116]">
          {restaurantName ? `Menu for ${restaurantName}` : 'Restaurant Menu'}
        </h1>
      </div>

      <div className="mb-8">
        <SearchInput />
      </div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Popular Cuisines</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {popularCuisines.map((cuisine, index) => (
            <button
              key={index}
              onClick={() => handleCuisineClick(cuisine.name)}
              className="flex flex-col items-center group transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FEA116] rounded-lg p-2"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-[#FEA116] transition-colors duration-200">
                <img 
                  src={cuisine.image} 
                  alt={cuisine.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center group-hover:text-[#FEA116] transition-colors duration-200">{cuisine.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CombinedMenu;