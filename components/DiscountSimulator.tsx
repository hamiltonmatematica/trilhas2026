
import React from 'react';

const DiscountSimulator: React.FC = () => {
  return (
    <section id="descontos" className="py-24 px-6 bg-electricBlue relative overflow-hidden">
      {/* Bold background shape */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-tangerine rounded-full opacity-20"></div>
        <div className="absolute right-[-10%] bottom-[-10%] w-[40vw] h-[40vw] bg-white rounded-full opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-anton text-4xl md:text-6xl uppercase leading-none text-white mb-6">
            Seletiva por <br /> Desempenho das <br /> <span className="text-ebony">Notas Enem</span>
          </h2>
          <p className="font-inter text-xl text-white/90 mb-8 font-semibold">
            A sua nota no Enem pode te ajudar a garantir uma bolsa de até <span className="text-ebony bg-white px-2 py-1 text-2xl font-black">80%</span> nas nossas turmas do Áurea em 2026!
          </p>
          <div className="flex items-center gap-4 text-white/70">
            <span className="w-12 h-[2px] bg-white/30"></span>
            <span className="uppercase text-xs font-bold tracking-[0.3em]">Oportunidade Única</span>
          </div>
        </div>

        <div className="bg-ebony p-8 md:p-12 rounded-sm shadow-2xl border-t-8 border-tangerine flex flex-col items-center justify-center min-h-[300px]">
          <div className="text-center mb-8">
            <p className="text-gray-400 font-inter text-sm font-bold uppercase tracking-widest mb-2">
              Pronto para garantir sua bolsa?
            </p>
            <h3 className="font-anton text-2xl text-white uppercase tracking-tight">
              Acesse nosso simulador oficial
            </h3>
          </div>

          <a
            href="https://delicategiantpanda-n8n.cloudfy.live/form/3d4c98de-ad6c-49ec-ac52-1a984cd83bfe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-tangerine hover:bg-opacity-90 text-white font-anton text-2xl py-6 rounded-sm transition-all active:scale-95 shadow-lg shadow-tangerine/20 text-center flex items-center justify-center gap-3 group"
          >
            FAÇA JÁ A SUA SIMULAÇÃO
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <p className="text-gray-500 text-xs mt-6 font-inter text-center uppercase tracking-tighter">
            Você será redirecionado para o nosso portal de matrículas (você pode usar a nota do Enem dos últimos 3 anos)
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscountSimulator;
