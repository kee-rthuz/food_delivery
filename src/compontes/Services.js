import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Services = () => {
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
        },
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

    // Animation variants for the service cards
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
            {/* Our Services Section */}
            <div className="flex flex-col items-center justify-center py-20 mt-4 ">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#FEA116] text-2xl font-[Pacifico] mb-2"
                >
                    ____Our Services____
                </motion.h2>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl text-gray-800 font-bold mb-10 mt-4"
                >
                    Explore Our Services
                </motion.h1>

                {/* Animated Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-4 gap-8 px-8 mx-auto max-w-screen-xl ">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            className="bg-white p-8 shadow-lg flex flex-col items-start group hover:bg-[#FEA116] transition-colors duration-300 min-h-[300px] w-full"
                        >
                            <div className="text-5xl text-[#FEA116] mb-6 group-hover:text-white self-start">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-4 text-left">{service.title}</h3>
                            <p className="text-gray-600 mt-2 text-left group-hover:text-white">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
