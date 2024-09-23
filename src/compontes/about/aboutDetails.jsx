import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { UtensilsCrossed } from 'lucide-react';


import Img1 from '../../assets/about-1.jpg'
import Img2 from '../../assets/about-2.jpg'
import Img3 from '../../assets/about-3.jpg'
import Img4 from '../../assets/about-4.jpg'

const AnimatedImage = ({ src, alt, className, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.8)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 300, friction: 20 },
    delay: delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      <img src={src} alt={alt} className={className} />
    </animated.div>
  );
};

const AnimatedNumber = ({ number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { value } = useSpring({
    from: { value: 0 },
    to: { value: inView ? number : 0 },
    config: { duration: 2000 },
  });

  return (
    <animated.span ref={ref}>
      {value.to((val) => Math.floor(val))}
    </animated.span>
  );
};

const AboutDetails = () => {
  const [containerRef, containerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerProps = useSpring({
    opacity: containerInView ? 1 : 0,
    transform: containerInView ? 'translateY(0px)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div ref={containerRef} style={containerProps} className="mx-auto max-w-screen-xl px-8 mt-24 ">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full lg:w-1/2 px-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <AnimatedImage src={Img1} alt="About 1" className="rounded w-full" delay={0} />
            </div>
            <div className="text-left mt-[25%]">
              <AnimatedImage src={Img2} alt="About 2" className="rounded w-3/4" delay={200} />
            </div>
            <div className="text-right">
              <AnimatedImage src={Img3} alt="About 3" className="rounded w-3/4 ml-auto" delay={400} />
            </div>
            <div className="text-right">
              <AnimatedImage src={Img4} alt="About 4" className="rounded w-full" delay={600} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
          <h5 className="text-[#FEA116] text-2xl font-[Pacifico] mb-2">about Us</h5>
          <h1 className="flex items-center text-5xl mb-4 font-bold max-lg:text-2xl">
            <span className="flex items-center">
              Welcome to
              <i className="ml-2">
                <UtensilsCrossed className="text-[#FEA116]" size={36} />
              </i>
            </span>
            Restoran
          </h1>
          <p className="mb-4 text-gray-500 mb-8 ">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p className="mb-4 text-gray-500 ">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. <br/> Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna <br/> dolore erat amet</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-10">
            <div className="flex items-center border-l-8 border-[#FEA116] border-primary pl-3" >
              <h1 className="text-6xl text-[#FEA116] mb-0 font-extrabold max-lg:text-4xl">
                <AnimatedNumber number={15} />
              </h1>
              <div className="ml-4">
                <p className="mb-0 text-gray-500 text-1xl max-lg:text-lg">Years of</p>
                <h6 className="uppercase mb-0 font-bold text-1xl max-lg:text-lg">Experience</h6>
              </div>
            </div>
            <div className="flex items-center border-l-8 border-[#FEA116] border-primary pl-3">
              <h1 className="text-6xl text-[#FEA116] mb-0 font-extrabold max-lg:text-4xl">
                <AnimatedNumber number={50} />
              </h1>
              <div className="ml-4">
                <p className="mb-0 text-gray-500 text-1xl max-lg:text-lg">Popular</p>
                <h6 className="uppercase mb-0 font-bold text-1xl max-lg:text-lg">Master Chefs</h6>
              </div>
            </div>
          </div>
          <a href="#" className="bg-[#FEA116] text-white py-3 px-10 mt-10 inline-block text-xl">READ MORE</a>
        </div>
      </div>
    </animated.div>
  );
};

export default AboutDetails;