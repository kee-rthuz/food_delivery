import { useState, useEffect, useRef } from 'react';
import { useSpring } from '@react-spring/web';

const useScrollAnimation = (direction = 'up', threshold = 0.1, distance = 100) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransform = (dir) => {
    switch (dir) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      default: return 'translate3d(0, 0, 0)';
    }
  };

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : getTransform(direction),
    config: { 
      tension: 10, 
      friction: 60,
      duration: 400,
    },
  });

  return [ref, animationProps];
};

export default useScrollAnimation;