
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="flex items-center gap-3">
        {/* Simplified SVG Logo based on Page 18/20 */}
        <div className="w-10 h-10 flex items-center justify-center relative">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="65" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="75" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="4" />
            </svg>
        </div>
        <span className="font-outfit text-2xl lowercase tracking-tighter font-medium">áurea</span>
      </div>
      
      <nav className="hidden md:flex gap-8 font-inter font-semibold uppercase text-xs tracking-widest text-gray-300">
        <a href="#trilhas" className="hover:text-tangerine transition-colors">Trilhas</a>
        <a href="#descontos" className="hover:text-electricBlue transition-colors">Simulador</a>
        <a href="#" className="hover:text-white transition-colors">Contato</a>
      </nav>

      <a 
        href="#trilhas"
        className="bg-tangerine hover:bg-tangerine/90 text-white font-inter font-bold px-6 py-2 rounded-full text-sm transition-transform active:scale-95"
      >
        COMEÇAR AGORA
      </a>
    </header>
  );
};

export default Header;
