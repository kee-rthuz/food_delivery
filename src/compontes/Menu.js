import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faWineGlassAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Bg from '../assets/menu-1.jpg';
import Bt from '../assets/menu-2.jpg';
import By from '../assets/menu-3.jpg';
import Bz from '../assets/menu-4.jpg';




const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();
  const navigate = useNavigate();
  const { restaurantId, restaurantName } = location.state || {};

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch menu items for the specific restaurant
    const fetchMenuItems = async () => {
      // Replace this with an actual API call in your implementation
      const dummyMenuItems = [
        { id: 1, category: 'breakfast', name: 'Chicken Burger', price: 115, image: Bg, description: 'Delicious chicken burger with fresh vegetables' },
        { id: 2, category: 'lunch', name: 'Vegetarian Pizza', price: 125, image: Bt, description: 'Crispy vegetarian pizza with a variety of toppings' },
        { id: 3, category: 'dinner', name: 'Grilled Salmon', price: 180, image: By, description: 'Fresh grilled salmon with lemon butter sauce' },
        { id: 4, category: 'breakfast', name: 'Pancake Stack', price: 95, image: Bz, description: 'Fluffy pancakes served with maple syrup' },
      ];

      // Filter menu items based on restaurantId if needed
      const filteredItems = restaurantId 
        ? dummyMenuItems.filter(item => item.id % 2 === restaurantId % 2) 
        : dummyMenuItems;

      setMenuItems(filteredItems);
    };

    fetchMenuItems();
  }, [restaurantId]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const categoryButtons = [
    { id: 'all', icon: (
      <div className="w-6 h-6 mr-3 grid grid-cols-2 gap-1">
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
        <div className="bg-[#FEA116] rounded-sm"></div>
      </div>
    ), label: 'All', subLabel: 'Category' },
    { id: 'breakfast', icon: <FontAwesomeIcon icon={faCoffee} className="text-[#FEA116] w-8 h-8 mr-3" />, label: 'Popular', subLabel: 'Breakfast' },
    { id: 'lunch', icon: <FontAwesomeIcon icon={faUtensils} className="text-[#FEA116] w-8 h-8 mr-3" />, label: 'Special', subLabel: 'Lunch' },
    { id: 'dinner', icon: <FontAwesomeIcon icon={faWineGlassAlt} className="text-[#FEA116] w-8 h-8 mr-3" />, label: 'Lovely', subLabel: 'Dinner' },
  ];

  const filteredMenuItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto max-w-screen-xl mt-4 p-6">
      <div className="flex justify-between items-center mb-6">
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
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover flex-shrink-0 rounded-md" />
              <div className="flex-grow">
                <div className="flex justify-between items-start border-b pb-2">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <div className="text-[#FEA116] font-bold text-xl ml-2">${item.price}</div>
                </div>
                <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;