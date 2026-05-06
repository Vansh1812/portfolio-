import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Twitter, Download, Terminal } from 'lucide-react';

const phrases = [
  "hi, i'm vansh, a developer.",
  "hi, i'm vansh, a cloud engineer.",
  "hi, i'm vansh, a problem solver.",
  "hi, i'm vansh, i get things done."
];

const socials = [
  { name: 'Code', icon: Github, label: 'GitHub', link: 'https://github.com/Vansh1812' },
  { name: 'Connect', icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/vansh-saxena-a75026362/' },
  { name: 'Social', icon: Twitter, label: 'X', link: 'https://x.com/VanshSaxen60429' },
];

interface HeroProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenProjects, onOpenContact }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (phrases && phrases.length > 0 ? (current + 1) % phrases.length : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 text-center">
      {/* Dynamic Heading - Monospace Style */}
      <div className="relative flex h-24 w-full max-w-4xl items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
              <h1 className="px-4 font-mono text-xl font-light tracking-wide text-white sm:text-2xl md:text-5xl lg:text-6xl">
                {phrases && phrases[index]}
              </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Social Nodes */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-12 md:gap-6">
        {socials.map((social, idx) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, borderColor: '#fff' }}
            className="glow-border flex items-center gap-3 rounded-xl bg-black/60 px-6 py-4 backdrop-blur-sm transition-all"
          >
            <social.icon size={20} className="text-cyber-green" />
            <div className="flex flex-col items-start">
              <span className="font-mono text-[10px] uppercase opacity-50">{social.name}</span>
              <span className="font-sans text-sm font-bold tracking-widest text-white">{social.label}</span>
            </div>
          </motion.a>
        ))}
      </div>
      {/* Command Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="mt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-white hidden md:block"
      >
        Want my resume? <span className="opacity-100 underline decoration-cyber-blue underline-offset-4">"just type"</span>
      </motion.div>
    </div>
  );
};

export default Hero;
