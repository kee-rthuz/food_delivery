import { useState } from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function TestimonialCarousel({ testimonials }) {
    const [activeSlide, setActiveSlide] = useState(0);  // Start with the middle item highlighted
  
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000, 
      speed: 1000, 
      centerMode: true,
      centerPadding: '0px',
      infinite: true, 
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: (current, next) => setActiveSlide(next),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode: false,  // Disable centerMode for 2 items
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            centerMode: false,  // Disable centerMode for 1 item
          }
        }
      ]
    };
  
    return (
      <div  className="custom-dot mx-auto max-w-screen-xl mb-10">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} style={{ padding: '0 12px' }}>
              <div className='m-2 '
         
              >
                <div 
                  className={`p-6  h-full  flex flex-col justify-between transition-all duration-300  ${
                    activeSlide % testimonials.length === index ? "bg-[#FEA116] text-white " : "border border-gray-200 "
                  }`}
                >
                  <div className={`m-2 text-[#FEA116] ${activeSlide % testimonials.length === index ? "text-white" : "text-[FEA116]"}`}>
                  <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </div>
                              
                  <div>
                    <i className="fas fa-quote-left text-primary text-3xl mb-4"></i>
                    <p className={`mb-4 ${activeSlide % testimonials.length === index ? "text-white" : "text-gray-600"}`}>{item.text}</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="ml-4">
                      <h5 className={`text-lg font-semibold ${activeSlide % testimonials.length === index ? "text-white" : "text-gray-800"}`}>
                        {item.name}
                      </h5>
                      <small className={activeSlide % testimonials.length === index ? "text-white" : "text-gray-800"}>
                        {item.profession}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  