import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 100);
      cursorY.set(e.clientY - 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 h-[200px] w-[200px] rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        background: 'radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, transparent 70%)',
      }}
    />
  );
};

export default CursorGlow;
