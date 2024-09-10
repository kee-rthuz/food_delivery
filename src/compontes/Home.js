

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Reservation from './reservation';
import  TestimonialPage from './testimonial';



const Home = () => {
    const [ref1] = useInView({ triggerOnce: true, threshold: 0.1 });

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



    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.5,
            },
        }),
    };

    return (
        <div>
            {/* Hero Section */}
            {/* <div
                className="min-h-[95vh] flex flex-col items-center justify-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            > */}
                {/* Blackish Overlay */}
                {/* <div className="absolute inset-0 bg-black opacity-90"></div> */}

                {/* Action Button */}
                {/* <div className="absolute inset-y-0 left-0 z-10 max-w-full text-white px-8 lg:px-16 pt-12 lg:pt-28"> 
                    <div className="relative">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            Enjoy Our Delicious Meal
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.<br />
                            Aliqu diam amet diam et eos.
                            Clita erat ipsum et lorem et sit,<br /> sed stet lorem sit clita duo justo magna dolore erat amet.
                        </p>
                        <button className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600">
                            BOOK A TABLE
                        </button>
                    </div>
                </div> */}

                {/* Image Section with increased size */}
                {/* <div className="absolute bottom-0 right-0 mr-8 lg:mr-16 w-full max-w-lg lg:max-w-2xl flex justify-end">
                    <img
                        src={mealImage}
                        alt="Delicious Meal"
                        className="w-full h-auto object-cover rounded-lg shadow-lg opacity-80 animate-spin-slow"
                    />
                </div>
            </div> */}





            {/* Service Section */}
            <div ref={ref1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mx-auto max-w-screen-xl mt-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        className="bg-white p-6 shadow-lg flex flex-col items-center group hover:bg-[#FEA116] transition-colors duration-300"
                    >
                        <div className="text-4xl text-[#FEA116] mb-4 group-hover:text-white">{service.icon}</div>
                        <h3 className="text-xl font-semibold group-hover:text-white">{service.title}</h3>
                        <p className="mt-2 text-center group-hover:text-white">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            <Reservation />
            <TestimonialPage />
        </div>
    );
};

export default Home;
