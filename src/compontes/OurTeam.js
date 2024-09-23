import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Assume these imports are correct in your project structure
import chef1 from '../assets/team-1.jpg';
import chef2 from '../assets/team-2.jpg';
import chef3 from '../assets/team-3.jpg';
import chef4 from '../assets/team-4.jpg';

// Custom hook for intersection observer
const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

const OurTeam = () => {
  const [activeChef, setActiveChef] = useState(null);

  const chefs = [
    { id: 1, name: 'Full Name', designation: 'Designation', img: chef1 },
    { id: 2, name: 'Full Name', designation: 'Designation', img: chef2 },
    { id: 3, name: 'Full Name', designation: 'Designation', img: chef3 },
    { id: 4, name: 'Full Name', designation: 'Designation', img: chef4 },
    { id: 5, name: 'Full Name', designation: 'Designation', img: chef4 },
    { id: 6, name: 'Full Name', designation: 'Designation', img: chef1 },
    { id: 7, name: 'Full Name', designation: 'Designation', img: chef2 },
    { id: 8, name: 'Full Name', designation: 'Designation', img: chef3 },
  ];

  // Organize chefs into rows
  const rows = [
    chefs.slice(0, 4),
    chefs.slice(4, 8),
  ];

  const handleChefActive = (chefId) => {
    setActiveChef(chefId);
  };

  const handleChefInactive = () => {
    setActiveChef(null);
  };

  return (
    <div className="bg-gray-100 py-16 mx-auto max-w-screen-xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[#FEA116] font-[Pacifico] text-2xl mt-6"
      >
        ____Team Members____
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-10 mt-4"
      >
        Our Master Chefs
      </motion.h2>

      <div className="space-y-16">
        {rows.map((row, rowIndex) => (
          <AnimatedRow key={rowIndex} row={row} rowIndex={rowIndex} activeChef={activeChef} handleChefActive={handleChefActive} handleChefInactive={handleChefInactive} />
        ))}
      </div>
    </div>
  );
};

const AnimatedRow = ({ row, rowIndex, activeChef, handleChefActive, handleChefInactive }) => {
  const controls = useAnimation();
  const rowRef = useRef(null);
  const isVisible = useIntersectionObserver(rowRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [isVisible, controls]);

  const rowVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 22,
      },
    },
  };

  return (
    <motion.div
      ref={rowRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-4"
      variants={rowVariants}
      initial="hidden"
      animate={controls}
    >
      {row.map((chef) => (
        <motion.div
          key={chef.id}
          className="bg-white rounded-lg overflow-hidden w-[300px] group mt-4"
          variants={itemVariants}
          onMouseEnter={() => handleChefActive(chef.id)}
          onMouseLeave={handleChefInactive}
          onTouchStart={() => handleChefActive(chef.id)}
          onTouchEnd={handleChefInactive}
        >
          <div className="h-48 w-48 mx-auto mt-4 overflow-hidden rounded-full">
            <img
              src={chef.img}
              alt={chef.name}
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out
                ${activeChef === chef.id ? 'scale-105' : 'group-hover:scale-105'}`}
            />
          </div>
          <div className="text-center py-4">
            <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
            <p className="text-gray-500">{chef.designation}</p>
            
            {/* social icons */}
            <div 
              className={`flex justify-center mt-4 space-x-4 transition-opacity duration-300 ease-in-out
                ${activeChef === chef.id ? 'opacity-100' : 'opacity-0'}`}
            >
              <a href="#" className="text-[#fff] transition-colors duration-200 bg-[#FEA116] hover:bg-[#f59402] rounded-full p-2 inline-flex items-center justify-center w-10 h-10">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-[#fff] transition-colors duration-200 bg-[#FEA116] hover:bg-[#f59402] rounded-full p-2 inline-flex items-center justify-center w-10 h-10">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-[#fff] transition-colors duration-200 bg-[#FEA116] hover:bg-[#f59402] rounded-full p-2 inline-flex items-center justify-center w-10 h-10">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OurTeam;