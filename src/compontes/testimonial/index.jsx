import React from 'react';
import Image1 from '../../assets/testimonial-1.jpg';
import Image2 from '../../assets/testimonial-2.jpg';
import Image3 from '../../assets/testimonial-3.jpg';
import Image4 from '../../assets/testimonial-4.jpg';
import withAnimation from '../../withAnimation';
import TestimonialCarousel from './Carousal';



const testimonials = [
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    image: Image1,
    name: 'Client Name 1',
    profession: 'Profession 1',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    image: Image2,
    name: 'Client Name 2',
    profession: 'Profession 2',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    image: Image3,
    name: 'Client Name 3',
    profession: 'Profession 3',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    image: Image4,
    name: 'Client Name 4',
    profession: 'Profession 4',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    image: Image1,
    name: 'Client Name 5',
    profession: 'Profession 5',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    image: Image2,
    name: 'Client Name 6',
    profession: 'Profession 6',
  },
];


function Testimonial() {

  return (
    <div  className="py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h5 className="text-[#FEA116] text-2xl font-[Pacifico] mb-2">
            Testimonial
          </h5>
          <h1 className="text-4xl text-gray-800 font-bold mb-10">Our Clients Say!!!</h1>
        </div>
   
      <TestimonialCarousel testimonials={testimonials} />

      </div>
    </div>
  );
}
export default withAnimation(Testimonial, 'up');;
