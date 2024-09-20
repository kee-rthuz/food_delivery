import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import menu1 from '../assets/menu-1.jpg';
import menu2 from '../assets/menu-2.jpg';
import menu3 from '../assets/menu-3.jpg';
import menu4 from '../assets/menu-4.jpg';
import menu5 from '../assets/menu-5.jpg';
import menu6 from '../assets/menu-6.jpg';
import menu7 from '../assets/menu-7.jpg';
import menu8 from '../assets/menu-8.jpg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Menu items array with categories
  const menuItems = [
    { id: 1, category: 'breakfast', name: 'Chicken Burger', price: 115, image: menu1, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
    { id: 2, category: 'breakfast', name: 'Chicken Burger', price: 115, image: menu2, description: 'Dolor justo diam amet clita erat ipsum amet ipsum' },
    { id: 3, category: 'lunch', name: 'Chicken Burger', price: 115, image: menu3, description: 'Justo erat amet ipsum clita ipsum dolor' },
    { id: 4, category: 'lunch', name: 'Chicken Burger', price: 115, image: menu4, description: 'Amet dolor justo diam ipsum' },
    { id: 5, category: 'dinner', name: 'Chicken Burger', price: 115, image: menu5, description: 'Ipsum clita erat justo amet diam dolor' },
    { id: 6, category: 'dinner', name: 'Chicken Burger', price: 115, image: menu6, description: 'Clita justo diam amet dolor' },
    { id: 7, category: 'dinner', name: 'Chicken Burger', price: 115, image: menu7, description: 'Justo diam amet ipsum dolor clita erat' },
    { id: 8, category: 'breakfast', name: 'Chicken Burger', price: 115, image: menu8, description: 'Amet ipsum dolor justo clita erat' },
  ];

  // Filter menu items based on the selected category
  const filteredMenuItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}

      {/* Menu Section */}
      <div className="container mx-auto max-w-screen-xl mt-10 p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#FEA116] font-[Pacifico] text-2xl"
        >
          ____Food Menu____
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold text-center mb-10"
        >
          Most Popular Items
        </motion.h2>
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8">
          <span
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center space-x-2 cursor-pointer pb-2 ${selectedCategory === 'all' ? 'border-b-2 border-[#FEA116]' : ''}`}
          >
            <span className="text-gray-600">All</span> {/* Black text */}
          </span>
          <span
            onClick={() => setSelectedCategory('breakfast')}
            className={`flex items-center space-x-2 cursor-pointer pb-2 ${selectedCategory === 'breakfast' ? 'border-b-2 border-[#FEA116]' : ''}`}
          >
            <FontAwesomeIcon icon={faCoffee} className="text-[#FEA116]" /> {/* Orange icon */}
            <span className="text-gray-600">Popular Breakfast</span> {/* Black text */}
          </span>

          <span
            onClick={() => setSelectedCategory('lunch')}
            className={`flex items-center space-x-2 cursor-pointer pb-2 ${selectedCategory === 'lunch' ? 'border-b-4 border-orange-600' : ''}`}
          >
            <FontAwesomeIcon icon={faUtensils} className="text-[#FEA116]" /> {/* Orange icon */}
            <span className="text-gray-600">Special Lunch</span> {/* Black text */}
          </span>

          <span
            onClick={() => setSelectedCategory('dinner')}
            className={`flex items-center space-x-2 cursor-pointer pb-2 ${selectedCategory === 'dinner' ? 'border-b-4 border-orange-600' : ''}`}
          >
            <FontAwesomeIcon icon={faWineGlassAlt} className="text-[#FEA116]" /> {/* Orange icon */}
            <span className="text-gray-600">Lovely Dinner</span> {/* Black text */}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredMenuItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between border-b-2 py-4"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <h3 className="text-lg font-bold text-black">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
              <div className="text-[#FEA116] font-bold text-xl">${item.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
