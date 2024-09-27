import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import menu1 from '../assets/res1.avif';
import menu2 from '../assets/res2.avif';
import menu3 from '../assets/res3.avif';
import menu4 from '../assets/res4.avif';
import { Star, StarHalf } from 'lucide-react';
import RestaurantBookingForm from './BookingForm';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />;
        } else if (index === fullStars && hasHalfStar) {
          return <StarHalf key={index} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />;
        } else {
          return <Star key={index} className="text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />;
        }
      })}
      <span className="ml-1 text-xs sm:text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const menuItems = [
    { id: 1, opening_timing: "9pm", closing_timing: "12am", name: 'Golden Redish', price: 115, image: menu1, location: 'Ernakulam', rating: 4.5 },
    { id: 2, opening_timing: "8am", closing_timing: "12am", name: 'Lighzz', price: 115, image: menu2, location: 'Palarivattam', rating: 4.0 },
    { id: 3, opening_timing: "1pm", closing_timing: "2am", name: 'Pice of Slice', price: 115, image: menu3, location: 'Vytila', rating: 3.5 },
    { id: 4, opening_timing: "10am", closing_timing: "8am", name: 'Paradize', price: 115, image: menu4, location: 'North Paravur', rating: 4.2 },
  ];

  const categoryButtons = [
    { id: 'all', icon: (
      <div className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 grid grid-cols-2 gap-0.5 sm:gap-1">
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
      </div>
    ), subLabel: 'All Category' },
    { id: 'southindian', icon: <FontAwesomeIcon icon={faCoffee} className="text-[#FEA116] w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />,  subLabel: 'South Indian' },
    { id: 'northindian', icon: <FontAwesomeIcon icon={faUtensils} className="text-[#FEA116] w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />, subLabel: 'North Indian' },
    { id: 'europe', icon: <FontAwesomeIcon icon={faWineGlassAlt} className="text-[#FEA116] w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />,  subLabel: 'Europe' },
  ];

  const filteredMenuItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const closeBookingForm = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="container mx-auto max-w-screen-xl mt-8 sm:mt-16 p-4 sm:p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[#FEA116] font-[Pacifico] text-xl sm:text-2xl"
      >
        ____Dine In Table____
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-10 mt-2 sm:mt-4"
      >
        Most Popular Restaurant
      </motion.h2>

      <motion.div 
        className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-8 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {categoryButtons.map((button) => (
          <motion.span
            key={button.id}
            onClick={() => setSelectedCategory(button.id)}
            className={`flex items-center cursor-pointer pb-1 sm:pb-2 ${
              selectedCategory === button.id ? 'border-b-2 border-[#FEA116]' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.icon}
            <div className="flex flex-col">
              <span className="text-gray-600 text-xs sm:text-sm">{button.label}</span>
              <h1 className='text-[#000] font-bold text-sm sm:text-base'>{button.subLabel}</h1>
            </div>
          </motion.span>
        ))}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {filteredMenuItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 py-4 bg-white rounded-lg shadow-md p-4"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full sm:w-24 md:w-32 h-40 sm:h-24 md:h-32 object-cover flex-shrink-0 rounded-md cursor-pointer"
                onClick={() => handleImageClick(item)}
              />
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b pb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-black">{item.name}</h3>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end mt-1 sm:mt-0">
                    <div className="text-[#FEA116] font-bold text-sm sm:text-base mr-2 sm:mr-0">{item.opening_timing}</div>
                    <div className="text-[#000] font-bold text-sm sm:text-base">{item.closing_timing}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm sm:text-base font-bold mt-2">{item.location}</p>
                <div className="mt-2">
                  <RatingStars rating={item.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="bg-[#FEA116] text-white px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-[200px] rounded-md hover:bg-yellow-600 transition duration-300">
          MORE
        </button>
      </div>

      {selectedRestaurant && (
        <RestaurantBookingForm
          restaurant={selectedRestaurant}
          onClose={closeBookingForm}
        />
      )}
    </div>
  );
};

export default Menu;