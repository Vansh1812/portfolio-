import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail } from 'lucide-react';

const headerPhrases = ["hire|vansh", "debug|vansh", "build|vansh"];

const Header: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((c) => (headerPhrases && headerPhrases.length > 0 ? (c + 1) % headerPhrases.length : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 right-0 z-40 flex items-center gap-6 p-6 md:p-10">
      <div className="flex items-center gap-4">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="font-mono text-sm tracking-[0.2em] text-white glow-text-white md:text-base"
          >
            {headerPhrases[index]}
          </motion.span>
        </AnimatePresence>
        
        <motion.a
          href="mailto:vansh18saxena@gmail.com"
          whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
          className="glow-border flex h-10 w-10 items-center justify-center rounded-lg bg-black/50 text-white backdrop-blur-sm"
        >
          <Mail size={20} />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
