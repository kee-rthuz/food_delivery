// import React from "react";
// import backgroundImage from "./assets/bg-hero.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const Contact = () => {
//     return (
//         <div>
//             {/* Hero Section */}
//             <div
//                 className="min-h-[75vh] flex flex-col items-center justify-center bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${backgroundImage})` }}
//             >
//                 {/* Blackish Overlay */}
//                 <div className="absolute inset-0 bg-black opacity-90"></div>

//                 {/* Navbar */}
//                 <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
//                     {/* Logo */}
//                     <div className="text-yellow-500 font-bold text-2xl flex items-center">
//                         <span role="img" aria-label="restaurant" className="mr-2">🍴</span>
//                         <span>Restoran</span>
//                     </div>

//                     {/* Menu Icon for Small Screens */}
//                     <div className="block lg:hidden">
//                         <button className="text-yellow-500 focus:outline-none">
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16m-7 6h7"
//                                 ></path>
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Navbar Links */}
//                     <ul className="hidden lg:flex gap-x-6 text-white">
//                         <li className="hover:text-yellow-500 cursor-pointer">HOME</li>
//                         <li className="hover:text-yellow-500 cursor-pointer">ABOUT</li>
//                         <li className="hover:text-yellow-500 cursor-pointer">SERVICE</li>
//                         <li className="hover:text-yellow-500 cursor-pointer">MENU</li>
//                         <li className="hover:text-yellow-500 cursor-pointer">PAGES</li>
//                         <li className="text-yellow-500 cursor-pointer">CONTACT</li>
//                     </ul>

//                     {/* Action Button */}
//                     <button className="hidden lg:block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
//                         BOOK A TABLE
//                     </button>
//                 </nav>

//                 {/* Main Content */}
//                 <div className="text-center text-white mt-24 z-10">
//                     <h1 className="text-6xl font-bold">CONTACT</h1>
//                     <div className="flex space-x-2 justify-center mt-4 text-sm">
//                         <a href="#" className="text-yellow-500 hover:text-yellow-400">HOME</a>
//                         <span>/</span>
//                         <a href="#" className="text-yellow-500 hover:text-yellow-400">PAGES</a>
//                         <span>/</span>
//                         <span>CONTACT</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Section */}
//             <div className="flex flex-col items-center justify-center py-20"> {/* Increased padding */}
//     <h2 className="text-orange-500 text-2xl font-[Pacifico] mb-2">____Contact Us____</h2>
//     <h1 className="text-5xl font-bold mb-10">Contact For Any Query</h1>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
//         {/* Google Map Embed */}
//         <div className="h-[27rem] md:w-[30rem] md:ml-[-10rem] mb-8"> {/* Adjust margin-bottom */}
//             <iframe
//                 className="w-full h-full border-none"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241647.99009758267!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzI2LjEiTiA3NMKwMDAnMTUuOSJX!5e0!3m2!1sen!2sus!4v1674720977374!5m2!1sen!2sus"
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Google Map"
//             ></iframe>
//         </div>

//         {/* Contact Info */}
//         <div className="md:col-span-2 space-y-8 mt-[-20px]">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
//                 <div>
//                     <h3 className="text-orange-500 font-[Pacifico]">Booking---</h3>
//                     <p className="text-gray-600">book@example.com</p>
//                 </div>
//                 <div>
//                     <h3 className="text-orange-500 font-[Pacifico]">General---</h3>
//                     <p className="text-gray-600">info@example.com</p>
//                 </div>
//                 <div>
//                     <h3 className="text-orange-500 font-[Pacifico]">Technical---</h3>
//                     <p className="text-gray-600">tech@example.com</p>
//                 </div>
//             </div>
//             {/* Contact Form */}
//             <form className="space-y-4 mt-8"> {/* Added margin-top */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                         type="text"
//                         placeholder="Your Name"
//                         className="border border-gray-300 p-2 rounded w-full"
//                         aria-label="Your Name"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Your Email"
//                         className="border border-gray-300 p-2 rounded w-full"
//                         aria-label="Your Email"
//                     />
//                 </div>
//                 <input
//                     type="text"
//                     placeholder="Subject"
//                     className="border border-gray-300 p-2 rounded w-full"
//                     aria-label="Subject"
//                 />
//                 <textarea
//                     placeholder="Message"
//                     className="border border-gray-300 p-2 rounded w-full"
//                     rows="5"
//                     aria-label="Message"
//                 ></textarea>
//                 <button
//                     type="submit"
//                     className="bg-orange-500 text-white py-2 px-4 rounded"
//                 >
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     </div>
// </div>



           
//             {/* Footer */}
//             <footer className="bg-[#0e163b] text-white py-10">
//                 <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//                     {/* Company Section */}
//                     <div>
//                         <h3 className="text-lg font-bold text-[#fdb827] font-[Pacifico]">Company--</h3>
//                         <ul className="mt-4 space-y-2">
//                             <li>About Us</li>
//                             <li>Contact Us</li>
//                             <li>Reservation</li>
//                             <li>Privacy Policy</li>
//                             <li>Terms & Conditions</li>
//                         </ul>
//                     </div>

//                     {/* Contact Section */}
//                     <div>
//                         <h3 className="text-lg font-bold text-[#fdb827] font-[Pacifico]">Contact--</h3>
//                         <ul className="mt-4 space-y-2">
//                             <li>123 Street, New York, USA</li>
//                             <li>+012 345 67890</li>
//                             <li>info@example.com</li>
//                             <li className="flex space-x-4 mt-2">
//                                 <span className="hover:text-[#fdb827] cursor-pointer">
//                                     <FontAwesomeIcon icon={faFacebookF} />
//                                 </span>
//                                 <span className="hover:text-[#fdb827] cursor-pointer">
//                                     <FontAwesomeIcon icon={faTwitter} />
//                                 </span>
//                                 <span className="hover:text-[#fdb827] cursor-pointer">
//                                     <FontAwesomeIcon icon={faInstagram} />
//                                 </span>
//                                 <span className="hover:text-[#fdb827] cursor-pointer">
//                                     <FontAwesomeIcon icon={faLinkedinIn} />
//                                 </span>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Opening Section */}
//                     <div>
//                         <h3 className="text-lg font-bold text-[#fdb827] font-[Pacifico]">Opening--</h3>
//                         <ul className="mt-4 space-y-2">
//                             <li>Monday - Saturday: 09AM - 09PM</li>
//                             <li>Sunday: 10AM - 08PM</li>
//                         </ul>
//                     </div>

//                     {/* Newsletter Section */}
//                     <div>
//                         <h3 className="text-lg font-bold text-[#fdb827] font-[Pacifico]">Newsletter--</h3>
//                         <p className="mt-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
//                         <div className="mt-4 flex">
//                             <input
//                                 type="text"
//                                 className="bg-[#fdb827] px-4 py-2 w-full rounded-l-lg focus:outline-none"
//                                 placeholder="Your Email"
//                             />
//                             <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-[#fdb827] hover:text-black">
//                                 SignUp
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-8 text-center text-sm text-gray-400">
//                     © 2023, Your Site Name. All rights reserved. Designed by HTML Codex
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Contact;
