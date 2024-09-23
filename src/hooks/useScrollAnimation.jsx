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

  const getTransformValues = (dir) => {
    switch (dir) {
      case 'up': return { y: inView ? 0 : distance, x: 0 };
      case 'down': return { y: inView ? 0 : -distance, x: 0 };
      case 'left': return { x: inView ? 0 : distance, y: 0 };
      case 'right': return { x: inView ? 0 : -distance, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const { x, y } = getTransformValues(direction);

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    x,
    y,
    config: { 
      mass: 1,
      tension: 120, 
      friction: 44,
    },
  });

  return [ref, animationProps];
};

export default useScrollAnimation;