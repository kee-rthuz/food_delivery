import React from 'react';
import { animated } from '@react-spring/web';
import useScrollAnimation from './hooks/useScrollAnimation';


function withAnimation(
  WrappedComponent,
  direction
) {
  return function WithAnimation(props) {
    const [ref, animationProps] = useScrollAnimation(props.direction || direction);

    return (
      <animated.div ref={ref} style={animationProps}>
        <WrappedComponent {...props} />
      </animated.div>
    );
  };
}

export default withAnimation;