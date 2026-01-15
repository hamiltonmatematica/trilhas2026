
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1 border border-tangerine text-tangerine font-inter text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-md">
          Áurea: o melhor dos dois mundos
        </div>
        
        <h1 className="font-anton text-6xl md:text-9xl uppercase leading-[0.9] mb-8 tracking-tighter">
          TRILHA DO SISU <br className="hidden md:block"/> 
          <span className="text-electricBlue">&</span> TRILHA <br className="hidden md:block"/> 
          <span className="text-tangerine">DIAGNÓSTICA</span>
        </h1>
        
        <p className="font-inter text-xl md:text-3xl font-semibold text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
          Não importa qual o caminho. <span className="text-white underline decoration-tangerine decoration-4 underline-offset-8">A partir de hoje estamos juntos!</span>
        </p>
        
        <p className="font-inter text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Está na hora de começar os grandes desafios de 2026. Se você vai iniciar a caminhada pelo Sisu ou vai começar a sua preparação e estudos do ano, o Áurea está com você!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#trilhas" 
            className="bg-electricBlue hover:bg-opacity-90 text-white font-anton text-xl px-10 py-5 rounded-sm w-full sm:w-auto tracking-wide transition-all hover:-translate-y-1 shadow-2xl shadow-electricBlue/20"
          >
            INSCREVER-SE NAS TRILHAS
          </a>
          <a 
            href="#descontos" 
            className="bg-transparent border-2 border-white/20 hover:border-white text-white font-anton text-xl px-10 py-5 rounded-sm w-full sm:w-auto tracking-wide transition-all"
          >
            SIMULAR DESCONTO
          </a>
        </div>
      </div>

      {/* Hero Illustration Background elements based on Brand assets */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 opacity-30 select-none">
        <span className="font-anton text-[30rem] leading-none text-white/5 uppercase">A</span>
      </div>
    </section>
  );
};

export default Hero;
