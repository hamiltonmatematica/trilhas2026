
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-ebony relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-tangerine fill-current">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="65" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="75" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
            <span className="font-outfit text-3xl lowercase font-medium">áurea</span>
          </div>
          <p className="font-inter text-gray-500 max-w-sm">
            O Áurea é uma empresa do ramo de educação que oferece preparação de alto nível para estudantes de ensino médio e pré-vestibular.
          </p>
        </div>

        <div className="text-sm uppercase font-inter font-bold tracking-widest">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="text-white">Siga-nos</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/aureavestibulares" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all cursor-pointer">IG</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-inter text-gray-600">
        <p>© {new Date().getFullYear()} Áurea Cursos & Pré-Vestibular. Todos os direitos reservados.</p>
        <p className="uppercase tracking-widest">Design by Douglas - Identidade Visual</p>
      </div>
    </footer>
  );
};

export default Footer;
