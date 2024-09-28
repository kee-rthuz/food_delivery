import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import FoodOrder from './Order';
import TestimonialPage from './testimonial';
import About from '../compontes/about/aboutDetails';
// import Menu from '../compontes/Menu';
import { useInView } from 'react-intersection-observer';


const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


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

    const servicesRef = useRef(null);
    const aboutRef = useRef(null);
    const menuRef = useRef(null);
    const reservationRef = useRef(null);
    const testimonialRef = useRef(null);

    const servicesControls = useAnimation();
    const aboutControls = useAnimation();
    const menuControls = useAnimation();
    const reservationControls = useAnimation();
    const testimonialControls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === servicesRef.current) {
                            servicesControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === aboutRef.current) {
                            aboutControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === menuRef.current) {
                            menuControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === reservationRef.current) {
                            reservationControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === testimonialRef.current) {
                            testimonialControls.start({ opacity: 1, y: 0 });
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (servicesRef.current) observer.observe(servicesRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (menuRef.current) observer.observe(menuRef.current);
        if (reservationRef.current) observer.observe(reservationRef.current);
        if (testimonialRef.current) observer.observe(testimonialRef.current);

        return () => observer.disconnect();
    }, [servicesControls, aboutControls, menuControls, reservationControls, testimonialControls]);

    return (
        <div>
             {/* Service Section */}
             <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 mt-28 lg:grid-cols-4 gap-8 px-8 mx-auto max-w-screen-xl">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white p-8 shadow-lg flex flex-col items-start group hover:bg-[#FEA116] transition-colors duration-300 min-h-[300px] w-full"
                    >
                        <div className="text-5xl text-[#FEA116] mb-6 group-hover:text-white self-start">{service.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white mb-4 text-left">{service.title}</h3>
                        <p className="text-gray-600 mt-2 text-left group-hover:text-white">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                ref={aboutRef}
                initial={{ opacity: 0, y: 50 }}
                animate={aboutControls}
                transition={{ duration: 0.5 }}
            >
                <About />
            </motion.div>

            {/* <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: 50 }}
                animate={menuControls}
                transition={{ duration: 0.5 }}
            >
                <Menu/>
            </motion.div> */}

            <motion.div
                ref={reservationRef}
                initial={{ opacity: 0, y: 50 }}
                animate={reservationControls}
                transition={{ duration: 0.5 }}
            >
                <FoodOrder />
            </motion.div>

            <motion.div
                ref={testimonialRef}
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialControls}
                transition={{ duration: 0.5 }}
            >
                <TestimonialPage />
            </motion.div>
        </div>
    );
};

export default Home;