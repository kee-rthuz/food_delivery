// import React, { useState, useEffect, useRef } from 'react';
// import { useSpring, useTrail, animated } from '@react-spring/web';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Img1 from '../../assets/team-1.jpg'
// import Img2 from '../../assets/team-2.jpg'
// import Img3 from '../../assets/team-3.jpg'
// import Img4 from '../../assets/team-4.jpg'

// const useStaggeredScrollAnimation = (itemsCount, options = {}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: options.threshold || 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [options.threshold]);

//   const trail = useTrail(itemsCount, {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
//     config: { mass: 1, tension: 80, friction: 26 },
//     delay: 200,
//   });

//   return [ref, trail, isVisible];
// };

// const TeamMember = ({ image, name, designation, style }) => (
//   <animated.div style={style} className="w-full md:w-1/2 lg:w-1/4 p-4 h-[400px]">
//     <div className="text-center rounded overflow-hidden shadow-lg group bg-white transition-all duration-300 ease-in-out hover:shadow-xl h-[300px] hover:h-[360px]">
//       <div className="relative">
//         <div className="rounded-full overflow-hidden m-4 inline-block">
//           <img className="w-48 h-48 object-cover hover:scale-110 duration-300 ease-in-out" src={image} alt={name} />
//         </div>
//         <h5 className="text-xl font-bold mb-0">{name}</h5>
//         <small className="text-gray-600 block mb-4">{designation}</small>
//         <div className="overflow-hidden transition-all duration-300 ease-in-out h-28">
//           <div className="flex justify-center py-4">
//             <a className="bg-customYellow text-white p-5 mx-1 rounded-t-3xl transition-colors duration-300" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a className="bg-customYellow text-white p-5 mx-1 rounded-t-3xl transition-colors duration-300" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//             <a className="bg-customYellow text-white p-5 mx-1 rounded-t-3xl transition-colors duration-300" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </animated.div>
// );

// const TeamMembers = () => {
//   const teamMembers = [
//     { image: Img1, name: "Full Name", designation: "Designation" },
//     { image: Img2, name: "Full Name", designation: "Designation" },
//     { image: Img3, name: "Full Name", designation: "Designation" },
//     { image: Img4, name: "Full Name", designation: "Designation" },
//   ];

//   const [ref, trail, isVisible] = useStaggeredScrollAnimation(teamMembers.length);

//   const titleSpring = useSpring({
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
//     config: { mass: 1, tension: 80, friction: 26 },
//   });

//   return (
//     <div ref={ref} className="container mx-auto p-10 pb-0 max-md:p-6 pb-10">
//       <animated.div style={titleSpring} className="text-center mb-12">
//         <h5 className="text-[#FEA116] text-2xl font-[Pacifico] mb-2">Team Members</h5>
//         <h1 className="text-4xl text-gray-800 font-bold mb-10 mt-4">Our Master Chefs</h1>
//       </animated.div>
//       <div className="flex flex-wrap justify-between">
//         {trail.map((style, index) => (
//           <TeamMember key={index} style={style} {...teamMembers[index]} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamMembers;





import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import chef1 from '../../assets/team-1.jpg'
import chef2 from '../../assets/team-2.jpg';
import chef3 from '../../assets/team-3.jpg';
import chef4 from '../../assets/team-4.jpg';

const OurTeam = () => {
  const [activeChef, setActiveChef] = useState(null);

  const chefs = [
    { id: 1, name: 'Full Name', designation: 'Designation', img: chef1 },
    { id: 2, name: 'Full Name', designation: 'Designation', img: chef2 },
    { id: 3, name: 'Full Name', designation: 'Designation', img: chef3 },
    { id: 4, name: 'Full Name', designation: 'Designation', img: chef4 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        className="text-center text-[#FEA116] font-[Pacifico] text-2xl"
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

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {chefs.map((chef) => (
          <motion.div
            key={chef.id}
            className="bg-white rounded-lg overflow-hidden w-full max-w-[300px] group"
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
    </div>
  );
};

export default OurTeam;