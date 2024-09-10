
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import thumbnail from '../../assets/thumbnail.jpg';
import { motion } from 'framer-motion';


const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTime: '',
    people: '1',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=6aqQvH162y8', '_blank');
  };

  return (
    <motion.div
    className="p-8 wow fadeInUp w-full"
    data-wow-delay="0.2s"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto max-w-screen-xl lg:py-12 max-lg:py-2  mt-10" data-wow-delay="0.1s">

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div 
            className="relative h-full bg-gray-900 cursor-pointer group overflow-hidden" 
            onClick={handleVideoClick}
          > 
            <img 
              src={thumbnail} 
              alt="Celtic Harp and Flute - Healing Music" 
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out "
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center h-20 w-20">
      {/* Outer Radio Wave effect */}
      <span className="absolute h-full w-full rounded-full bg-[#FEA116] opacity-70 animate-ping"></span>
      <span className="absolute h-20 w-20 rounded-full bg-[#FEA116] opacity-50 animate-ping delay-200"></span>
      <span className="absolute h-24 w-24 rounded-full bg-[#FEA116] opacity-30 animate-ping delay-400"></span>
      
      {/* Main Play Button */}
      <div className="relative bg-[#FEA116] rounded-full h-20 w-20 flex items-center justify-center">
        <FontAwesomeIcon 
          icon={faPlay} 
          className="text-black text-3xl ml-2 transform transition-transform duration-300"
        />
      </div>
    </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-900 flex items-center">
        <motion.div
      className="p-8 wow fadeInUp w-full"
      data-wow-delay="0.2s"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h5 className="text-[#FEA116] text-2xl font-[Pacifico] mb-2">Reservation</h5>
      <h1 className="text-white text-4xl font-bold mb-6">Book A Table Online</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 w-full">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                className="w-full p-3 bg-white text-gray-900 rounded"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="email"
                className="w-full p-3 bg-white text-gray-900 rounded"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <input
                type="datetime-local"
                className="w-full p-3 bg-white text-gray-900 rounded"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <select
                className="w-full p-3 bg-white text-gray-900 rounded"
                name="people"
                value={formData.people}
                onChange={handleChange}
              >
                <option value="1">People 1</option>
                <option value="2">People 2</option>
                <option value="3">People 3</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              className="w-full p-3 bg-white text-gray-900 rounded"
              rows="4"
              placeholder="Special Request"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="w-full bg-[#FEA116] text-white py-4 rounded " type="submit">
              BOOK NOW
            </button>
          </div>
        </div>
      </form>
    </motion.div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Reservation;