import React from 'react';
import { motion } from 'motion/react';
import { Code2, UserRound, FileText } from 'lucide-react';

interface FloatingNavProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onOpenProjects, onOpenContact }) => {
  const openResume = () => {
    window.open('/resume/resume.pdf', '_blank');
  };

  return (
    <>
      {/* Mobile-Friendly Bottom Nav - Visible on Mobile Only */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden">
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full gap-3">
            <motion.button
              onClick={onOpenProjects}
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-black/80 p-3 text-white backdrop-blur-md border border-white/10 active:bg-cyber-green/20"
            >
              <Code2 size={20} className="text-cyber-green" />
              <span className="font-mono text-[10px] uppercase font-bold">Projects</span>
            </motion.button>

            <motion.button
              onClick={onOpenContact}
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-black/80 p-3 text-white backdrop-blur-md border border-white/10 active:bg-cyber-blue/20"
            >
              <UserRound size={20} className="text-cyber-blue" />
              <span className="font-mono text-[10px] uppercase font-bold">Contact</span>
            </motion.button>
          </div>

          <motion.button
            onClick={openResume}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyber-green/60 active:text-white"
          >
            tap for resume
          </motion.button>
        </div>
      </div>

      {/* Desktop Navigation - Hidden on Mobile */}
      <div className="hidden md:block">
        {/* Bottom Left - Projects */}
        <div className="fixed bottom-0 left-0 z-40 p-10 text-left">
          <motion.button
            onClick={onOpenProjects}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="glow-border group flex flex-col items-start gap-1 rounded-2xl bg-black/60 p-4 px-6 text-left backdrop-blur-md transition-all hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
               <Code2 size={24} className="text-cyber-green" />
               <span className="font-sans text-xl font-black uppercase tracking-tighter text-white">Projects</span>
            </div>
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] group-hover:opacity-100 transition-opacity text-white">
              Access Database
            </span>
          </motion.button>
        </div>

        {/* Bottom Right - Contact */}
        <div className="fixed bottom-0 right-0 z-40 p-10 text-right">
          <motion.button
            onClick={onOpenContact}
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
            className="glow-border group flex flex-col items-end gap-1 rounded-2xl bg-black/60 p-4 px-6 text-right backdrop-blur-md transition-all hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
               <span className="font-sans text-xl font-black uppercase tracking-tighter text-white">Contact Me</span>
               <UserRound size={24} className="text-cyber-blue" />
            </div>
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] group-hover:opacity-100 transition-opacity text-white">
              Request Uplink
            </span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
