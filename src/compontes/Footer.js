import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    const icons = [faTwitter, faFacebook, faYoutube, faLinkedin];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mx-auto max-w-screen-xl mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-[Pacifico] text-[#FEA116] mb-4">Company</h4>
            <ul className="space-y-2 text-white">
              {['About Us', 'Contact Us', 'Order', 'Privacy Policy', 'Terms & Condition'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FEA116] flex items-center">
                    <span className="text-[#FEA116] mr-2">▸</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-[Pacifico] text-[#FEA116] mb-4">Contact</h4>
            <p className="mb-2 flex items-start text-white">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-1 text-[#FEA116]" />
              <span>123 Street, New York, USA</span>
            </p>
            <p className="mb-2 flex items-center text-white">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#FEA116]" />
              <span>+012 345 67890</span>
            </p>
            <p className="mb-2 flex items-center text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#FEA116]" />
              <span>info@example.com</span>
            </p>
            <div className="flex space-x-4 pt-2">
      {icons.map((icon, index) => (
        <a
          key={index}
          href="#"
          className="relative p-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#FEA116] transition-colors duration-300"
        >
          <FontAwesomeIcon icon={icon} className="w-6 h-5  " />
        </a>
      ))}
    </div>
          </div>
          <div>
            <h4 className="text-2xl font-[Pacifico] text-[#FEA116] mb-4">Opening</h4>
            <p className="mb-2 text-white">Monday - Saturday</p>
            <p className="mb-4 text-white">09AM - 09PM</p>
            <p className="mb-2 text-white">Sunday</p>
            <p className='text-white'>10AM - 08PM</p>
          </div>
          <div>
            <h4 className="text-2xl font-[Pacifico] text-[#FEA116] mb-4">Newsletter</h4>
            <p className="mb-4 text-white">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative border border-[#FEA116]">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-4 px-6 bg-white text-gray-900 rounded-"
              />
              
              <button className="absolute right-0 top-2 w-[90px] h-[40px] mr-2  bg-[#FEA116]  text-white py-2 px-4 rounded-sm">
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-1xl">
            <div className="mb-4 md:mb-0">
              <p className="mb-2 text-white ">
                © <a href="#" className="text-[#FEA116]">Your Site Name</a>, All Right Reserved. Designed By HTML Codex
              </p>

              <p className='text-white'>
                Distributed By <a href="#" className="text-[#FEA116]">ThemeWagon</a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 text-white">
              {['Home', 'Cookies', 'Help', 'FAQs'].map((item) => (
                <a key={item} href="#" className="hover:text-[#FEA116]">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
