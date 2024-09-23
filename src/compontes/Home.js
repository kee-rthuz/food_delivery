import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Reservation from './reservation';
import TestimonialPage from './testimonial';
import About from '../compontes/about/aboutDetails';
import Menu from './Menu';

const Home = () => {
    const services = [
        {
            title: 'Master Chefs',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            icon: <FontAwesomeIcon icon={faUserLarge} />
        },
        {
            title: 'Quality Food',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            icon: <FontAwesomeIcon icon={faUtensils} />
        },
        {
            title: 'Online Order',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            icon: <FontAwesomeIcon icon={faCartPlus} />
        },
        {
            title: '24/7 Service',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
            icon: <FontAwesomeIcon icon={faHeadset} />
        }
    ];

    return (
        <div>
            {/* Service Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-28 lg:grid-cols-4 gap-8 px-8 mx-auto max-w-screen-xl">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white p-8 shadow-lg flex flex-col items-start group hover:bg-[#FEA116] transition-colors duration-300 min-h-[300px] w-full"
                    >
                        <div className="text-5xl text-[#FEA116] mb-6 group-hover:text-white self-start">{service.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-4 text-left">{service.title}</h3>
                        <p className="text-gray-600 mt-2 text-left group-hover:text-white">{service.description}</p>
                    </motion.div>
                ))}
            </div>
            <About />
            <Menu />
            <Reservation />
            <TestimonialPage />
        </div>
    );
};

export default Home;