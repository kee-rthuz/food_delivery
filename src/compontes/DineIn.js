import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import menu1 from '../assets/res1.avif';
import menu2 from '../assets/res2.avif';
import menu3 from '../assets/res3.avif';
import menu4 from '../assets/res4.avif';
// import menu5 from '../assets/res5.avif';
// import menu6 from '../assets/menu-6.jpg';
// import menu7 from '../assets/menu-7.jpg';
// import menu8 from '../assets/menu-8.jpg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Menu items array with categories
  const menuItems = [
    { id: 1, opening_timing: "9pm",closing_timing:"12am", name: 'Golden Redish', price: 115, image: menu1, location: 'Ernakulam' },
    { id: 2, opening_timing: "8am",closing_timing:"12am", name: 'Lighzz', price: 115, image: menu2, location: 'Palarivattam' },
    { id: 3, opening_timing: "1pm",closing_timing:"2am", name: 'Pice of Slice', price: 115, image: menu3, location: 'Vytila' },
    { id: 4, opening_timing: "10am",closing_timing:"8am", name: 'Paradize', price: 115, image: menu4, location: 'North Paravur' },
    // { id: 5, category: 'dinner', name: 'Chicken Burger', price: 115, image: menu5, description: 'Ipsum clita erat justo amet diam dolor' },
    // { id: 6, category: 'dinner', name: 'Chicken Burger', price: 115, image: menu6, description: 'Clita justo diam amet dolor' },
    // { id: 7, category: 'dinner', name: 'Chicken Burger', price: 115, image: menu7, description: 'Justo diam amet ipsum dolor clita erat' },
    // { id: 8, category: 'breakfast', name: 'Chicken Burger', price: 115, image: menu8, description: 'Amet ipsum dolor justo clita erat' },
  ];

  const categoryButtons = [
    { id: 'all', icon: (
      <div className="w-6 h-6 mr-3 grid grid-cols-2 gap-1">
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
      </div>
    ), subLabel: 'All Category' },
    { id: 'southindian', icon: <FontAwesomeIcon icon={faCoffee} className="text-[#FEA116] w-8 h-8 mr-3" />,  subLabel: 'South Indian' },
    { id: 'northindian', icon: <FontAwesomeIcon icon={faUtensils} className="text-[#FEA116] w-8 h-8 mr-3" />, subLabel: 'North Indian' },
    { id: 'europe', icon: <FontAwesomeIcon icon={faWineGlassAlt} className="text-[#FEA116] w-8 h-8 mr-3" />,  subLabel: 'Europe' },
  ];

  // Filter menu items based on the selected category
  const filteredMenuItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto max-w-screen-xl mt-16 p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[#FEA116] font-[Pacifico] text-2xl"
      >
        ____Dine In Table____
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-10 mt-4"
      >
        Most Popular Restaurant
      </motion.h2>

      {/* Category Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {categoryButtons.map((button) => (
          <motion.span
            key={button.id}
            onClick={() => setSelectedCategory(button.id)}
            className={`flex items-center cursor-pointer pb-2 ${
              selectedCategory === button.id ? 'border-b-2 border-[#FEA116]' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.icon}
            <div className="flex flex-col">
              <span className="text-gray-600">{button.label}</span>
              <h1 className='text-[#000] font-bold'>{button.subLabel}</h1>
            </div>
          </motion.span>
        ))}
      </motion.div>

      {/* Menu Items */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
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
              className="flex items-start space-x-4 py-4"
            >
              <img src={item.image} alt={item.name} className="w-18 h-[180px] object-cover flex-shrink-0" />
              <div className="flex-grow">
                <div className="flex justify-between items-start border-b mt-2">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>

                    <div className="flex flex-col">
                    <div className="text-[#FEA116] font-bold text-1xl">{item.opening_timing}</div>
                    <div className="text-[#000]  font-bold text-1xl mt-1">{item.closing_timing}</div>
                    </div>

                </div>
                <p className="text-gray-500 mt-1 text-1xl font-bold mt-2">{item.location}</p>
              </div>
            </motion.div>
          ))}

            {/* <button className="bg-[#FEA116] text-white px-8 py-4 hover:bg-yellow-600">
            MORE
            </button> */}
        </AnimatePresence>
      </motion.div>
        <div className="flex justify-center">
            <button className="bg-[#FEA116] text-white px-8 mt-8 w-[200px] py-4 hover:bg-yellow-600">
                MORE
            </button>
        </div>
    </div>
  );
};

export default Menu;