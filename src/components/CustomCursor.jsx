import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hoverType, setHoverType] = useState('default'); // 'default', 'pointer', 'text'
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const outerSpringConfig = { damping: 25, stiffness: 200, mass: 0.6 };
  const outerXSpring = useSpring(cursorX, outerSpringConfig);
  const outerYSpring = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      const computedCursor = window.getComputedStyle(target).cursor;
      
      if (computedCursor === 'pointer' || 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a')) {
        setHoverType('pointer');
      } else if (computedCursor === 'text') {
        setHoverType('text');
      } else {
        setHoverType('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: isClicking ? 0.8 : 1,
      width: 10,
      height: 10,
      opacity: 0.5,
      borderWidth: '1px',
    },
    pointer: {
      scale: isClicking ? 1.5 : 2.5,
      width: 40,
      height: 40,
      opacity: 1,
      borderWidth: '2px',
      backgroundColor: 'rgba(var(--primary-rgb), 0.05)',
    },
    text: {
      scale: 1,
      width: 2,
      height: 30,
      borderRadius: '2px',
      opacity: 1,
      backgroundColor: 'var(--primary)',
    }
  };

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: hoverType === 'text' ? 0 : 1,
          scale: isClicking ? 1.5 : 1
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-primary/30 rounded-full z-[9998] pointer-events-none hidden lg:block"
        style={{
          x: outerXSpring,
          y: outerYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={hoverType === 'pointer' ? variants.pointer : hoverType === 'text' ? variants.text : variants.default}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />
    </>
  );
};

export default CustomCursor;
