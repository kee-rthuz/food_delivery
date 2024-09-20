import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import chef1 from '../assets/team-1.jpg';
import chef2 from '../assets/team-2.jpg';
import chef3 from '../assets/team-3.jpg';
import chef4 from '../assets/team-4.jpg';

const OurTeam = () => {
  const chefs = [
    { id: 1, name: 'Full Name', designation: 'Designation', img: chef1 },
    { id: 2, name: 'Full Name', designation: 'Designation', img: chef2 },
    { id: 3, name: 'Full Name', designation: 'Designation', img: chef3 },
    { id: 4, name: 'Full Name', designation: 'Designation', img: chef4 },
    { id: 5, name: 'Full Name', designation: 'Designation', img: chef3 },
    { id: 6, name: 'Full Name', designation: 'Designation', img: chef2 },
    { id: 7, name: 'Full Name', designation: 'Designation', img: chef4 },
    { id: 8, name: 'Full Name', designation: 'Designation', img: chef1 },
  ];

  return (
    <div>
      {/* Team Members Section */}
      <div className="bg-white py-16 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h3 className="text-center text-orange-500 font-[Pacifico] text-2xl">_Team Members_</h3>
          <h2 className="text-4xl font-bold text-gray-800">Our Master Chefs</h2>
        </div>

        {/* Responsive Flex Grid for Chefs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center px-4">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full group transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="h-48 w-48 mx-auto mt-4">
                <img
                  src={chef.img}
                  alt={chef.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center py-4">
                <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
                <p className="text-gray-500">{chef.designation}</p>

                {/* Social Media Icons */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-yellow-600">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="text-yellow-600">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="text-yellow-600">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;