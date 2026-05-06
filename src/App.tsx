import { useState, Suspense, useEffect } from 'react';
import MatrixRain from './components/MatrixRain';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import Header from './components/Header';
import FloatingNav from './components/FloatingNav';
import { ProjectsOverlay, ContactOverlay } from './components/Overlays';

export default function App() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [typedBuffer, setTypedBuffer] = useState('');

  // Global Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only capture single characters to build command buffer
      if (e?.key && e.key.length === 1) {
        const currentBuffer = typedBuffer || '';
        const newBuffer = (currentBuffer + e.key).toLowerCase();
        setTypedBuffer(newBuffer);

        if (newBuffer.endsWith('resume')) {
          window.open('/resume/resume.pdf', '_blank');
          setTypedBuffer('');
          return;
        }

        // Prevent buffer from growing infinitely, keep relevant tail
        if (newBuffer && newBuffer.length > 30) setTypedBuffer(newBuffer.slice(-15));
      } else if (e?.key === 'Escape') {
        setIsProjectsOpen(false);
        setIsContactOpen(false);
        setTypedBuffer('');
      } else if (e?.key === 'Backspace') {
        setTypedBuffer(prev => (prev ? prev.slice(0, -1) : ''));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [typedBuffer]);

  return (
    <div className="relative min-h-screen selection:bg-cyber-green selection:text-black">
      {/* Background Layer */}
      <MatrixRain />
      <CursorGlow />

      {/* Header Overlay */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 flex h-screen flex-col items-center justify-center p-4">
        <Hero 
          onOpenProjects={() => setIsProjectsOpen(true)} 
          onOpenContact={() => setIsContactOpen(true)} 
        />
      </main>

      {/* Navigation Layer */}
      <FloatingNav 
        onOpenProjects={() => setIsProjectsOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      {/* Modals/Overlays */}
      <ProjectsOverlay 
        isOpen={isProjectsOpen} 
        onClose={() => setIsProjectsOpen(false)} 
      />
      <ContactOverlay 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Terminal UI Decorations */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none hidden md:block">
        <span className="font-mono text-[8px] uppercase tracking-[1em]">
          System Status: Online | Buffer: Optimized | Link: Established
        </span>
      </div>
    </div>
  );
}
