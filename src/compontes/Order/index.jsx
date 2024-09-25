import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const FoodOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    foodType: '',
    quantity: '1',
    specialInstructions: ''
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

  return (
    <motion.div
      className="p-8 wow fadeInUp w-full"
      data-wow-delay="0.2s"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-screen-xl lg:py-12 max-lg:py-2 mt-10" data-wow-delay="0.1s">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-full bg-gray-900 overflow-hidden">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=OZzoAw9QHXY"
                width="100%"
                height="100%"
                playing={true}
                loop={true}
                muted={true}
                playsinline={true}
                controls={false}
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 1,
                      loop: 1,
                      controls: 0,
                      modestbranding: 1,
                      playlist: 'OZzoAw9QHXY'
                    }
                  }
                }}
              />
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
              <h5 className="text-[#FEA116] text-2xl font-[Pacifico] mb-2">Quick Order</h5>
              <h1 className="text-white text-4xl font-bold mt-4 mb-6">Delicious Food Delivered</h1>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 w-full">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                      <input
                        type="text"
                        className="w-full p-5 bg-white focus:outline-none focus:border-[#FEA116] focus:border-2"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        type="tel"
                        className="w-full p-5 bg-white focus:outline-none focus:border-[#FEA116] focus:border-2"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full p-5 bg-white focus:outline-none focus:border-[#FEA116] focus:border-2"
                      placeholder="Delivery Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                      <select
                        className="w-full p-5 bg-white focus:outline-none focus:border-[#FEA116] focus:border-2"
                        name="foodType"
                        value={formData.foodType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Food Type</option>
                        <option value="pizza">Pizza</option>
                        <option value="burger">Burger</option>
                        <option value="sushi">Sushi</option>
                        <option value="pasta">Pasta</option>
                        <option value="salad">Salad</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2">
                      <select
                        className="w-full p-5 bg-white focus:outline-none focus:border-[#FEA116] focus:border-2"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                      >
                        <option value="1">1 Item</option>
                        <option value="2">2 Items</option>
                        <option value="3">3 Items</option>
                        <option value="4">4 Items</option>
                        <option value="5">5+ Items</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="w-full p-3 bg-white focus:outline-none focus:border-[#FEA116] focus:border-2"
                      rows="4"
                      placeholder="Special Instructions"
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <button className="w-full bg-[#FEA116] text-white py-4 hover:bg-[#e89208] transition-colors duration-300" type="submit">
                      PLACE ORDER
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

export default FoodOrder;