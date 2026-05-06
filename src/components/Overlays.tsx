import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Send } from 'lucide-react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects = [
  { title: "Task Management Pro", desc: "A responsive task management application using HTML, CSS, and JavaScript. Implemented modular OOP architecture for scalability.", link: "https://github.com/Vansh1812/gdg-project" },
  { title: "ResearchGPT", desc: "AI-inspired research assistant interface with real-time search simulation and structured report outputs.", link: "https://github.com/Vansh1812/hackathon-1" },
];

export const ProjectsOverlay: React.FC<OverlayProps> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/95 p-4 py-16 backdrop-blur-xl md:items-center md:p-6"
      >
        <div className="relative w-full max-w-4xl">
          <button onClick={onClose} className="fixed top-4 right-4 z-[60] text-cyber-green hover:text-white transition-colors md:absolute md:-top-12 md:right-0">
            <X size={32} />
          </button>
          
          <div className="flex flex-col gap-8">
            <h2 className="glow-text-white font-sans text-3xl font-bold uppercase tracking-widest md:text-5xl text-white">Selected Nodes</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glow-border group flex flex-col justify-between gap-6 rounded-xl bg-white/5 p-6 transition-all hover:bg-white/10"
                >
                  <div>
                    <h3 className="font-sans text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-2 font-mono text-xs leading-relaxed opacity-70 text-white">{p.desc}</p>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-tighter text-white hover:text-cyber-green transition-colors"
                    >
                      <Github size={12} /> Source
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const ContactOverlay: React.FC<OverlayProps> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/98 p-4 py-16 backdrop-blur-2xl md:items-center md:p-6"
      >
        <div className="relative w-full max-w-lg">
          <button onClick={onClose} className="fixed top-4 right-4 z-[60] text-cyber-green hover:text-white transition-colors md:absolute md:-top-12 md:right-0">
            <X size={32} />
          </button>
          
          <div className="glow-border space-y-6 rounded-2xl bg-black px-6 py-8 md:space-y-8 md:px-8 md:py-10">
            <h2 className="glow-text-white text-center font-sans text-2xl font-bold uppercase tracking-widest text-white">Transmit Message</h2>
            <form 
              className="space-y-4" 
              onSubmit={async (e) => { 
                e.preventDefault(); 
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                // IMPORTANT: You MUST replace 'YOUR_FORM_ID' with your actual Formspree ID from https://formspree.io
                // After creating a form on Formspree, you'll receive a unique ID. 
                // Copy and paste that ID below.
                const FORMSPREE_ID = "xrejkgyo"; 
                const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

                try {
                  const response = await fetch(FORMSPREE_URL, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                  });

                  if (response.ok) {
                    alert("Message received! I'll get back to you soon.");
                    form.reset();
                    onClose();
                  } else {
                    alert("Transmission failed. Please ensure you've configured your Formspree URL in src/components/Overlays.tsx");
                  }
                } catch (error) {
                  alert("Error connecting to server. Please try again later.");
                }
              }}
            >
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase opacity-50 text-white">Identity</label>
                <input name="userName" type="text" placeholder="Name" required className="w-full rounded-lg bg-white/5 px-4 py-3 font-mono text-sm text-white outline-none border border-white/10 focus:border-white/40 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase opacity-50 text-white">Frequency (Email)</label>
                <input name="userEmail" type="email" placeholder="Email" required className="w-full rounded-lg bg-white/5 px-4 py-3 font-mono text-sm text-white outline-none border border-white/10 focus:border-white/40 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase opacity-50 text-white">Subject</label>
                <input name="userSubject" type="text" placeholder="Objective" required className="w-full rounded-lg bg-white/5 px-4 py-3 font-mono text-sm text-white outline-none border border-white/10 focus:border-white/40 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase opacity-50 text-white">Payload (Message)</label>
                <textarea name="message" rows={4} placeholder="Type message..." required className="w-full rounded-lg bg-white/5 px-4 py-3 font-mono text-sm text-white outline-none border border-white/10 focus:border-white/40 focus:bg-white/10 transition-all resize-none" />
              </div>
              <button 
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-white py-4 font-sans text-sm font-black text-black hover:bg-cyber-green active:scale-95 transition-all"
              >
                <Send size={16} />
                INITIALIZE SEND
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
