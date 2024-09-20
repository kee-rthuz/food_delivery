import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Reservation from './reservation';
import TestimonialPage from './testimonial';

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
        visible: (index) => {
            const animationProps = {
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.2,
                    duration: 0.5,
                },
            };
            console.log('Index:', index);
            console.log('Animation Props:', animationProps);
            return animationProps;
        },
    };

    return (
        <div>

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
