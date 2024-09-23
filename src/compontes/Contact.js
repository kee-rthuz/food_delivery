import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from '@heroicons/react/24/solid';


const Contact = () => {
    return (
        <div>
            {/* Contact Section */}
            <div className="flex flex-col items-center justify-center py-20">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#FEA116] text-2xl font-[Pacifico] mb-2"
                >
                    ____Contact Us____
                </motion.h2>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl text-gray-800 font-bold mb-10 mt-4"
                >
                    Contact For Any Query
                </motion.h1>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-7xl mb-10 mt-4 px-4">


                    <div className="flex flex-col">
                        <h3 className="text-[#FEA116] font-[Pacifico] text-lg mb-1">Booking</h3>
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-5 w-5 text-[#FEA116]" />
                            <p className="text-gray-600">book@example.com</p>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <h3 className="text-[#FEA116] font-[Pacifico] text-lg mb-1">General</h3>
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-5 w-5 text-[#FEA116]" />
                            <p className="text-gray-600">info@example.com</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[#FEA116] font-[Pacifico] text-lg mb-1">Technical</h3>
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-5 w-5 text-[#FEA116]" />
                            <p className="text-gray-600">tech@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto p-4 gap-10">
                    {/* Map Column */}
                    <div className="w-full md:w-1/2 h-[40vh] md:h-[40vh]">
                        <iframe
                            className="w-full h-full border-none"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241647.99009758267!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzI2LjEiTiA3NMKwMDAnMTUuOSJX!5e0!3m2!1sen!2sus!4v1674720977374!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#FEA116] focus:border-2"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#FEA116] focus:border-2"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#FEA116] focus:border-2"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full p-6 border border-gray-300 focus:outline-none focus:border-[#FEA116] focus:border-2"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-[#FEA116] text-white py-4 px-6  a transition duration-300 "
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
