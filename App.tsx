
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import DiscountSimulator from './components/DiscountSimulator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ebony overflow-x-hidden selection:bg-tangerine selection:text-white">
      {/* Background Decorative Elements - Inspired by Page 17/25 of the PDF */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-circle-blue rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-circle-orange rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />

          <section id="trilhas" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-anton text-4xl md:text-6xl uppercase tracking-wider mb-4">
                Inscreva-se nas <span className="text-tangerine">Trilhas do Áurea</span>
              </h2>
              <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
                Escolha o caminho que melhor se adapta aos seus objetivos para 2026.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <CategorySection
                type="sisu"
                title="Categoria 1: Alunos Sisu"
                description="Para os alunos que vão iniciar a trajetória das vagas pelo Sisu."
                highlight="Receba uma super assessoria diária com a nossa especialista em Sisu e Enem, Bárbara Layane. Ninguém entende mais de Sisu do que ela... A gente pode apostar!!!"
                buttonLabel="ENTRAR NO GRUPO SISU"
                buttonColor="bg-green-600"
                icon="🟢"
                link="https://chat.whatsapp.com/HCt8dNnW8ur48VdrcFNXVV"
              />

              <CategorySection
                type="preparacao"
                title="Categoria 2: Preparação 2026"
                description="Para os alunos que vão começar a sua preparação para os vestibulares de 2026…"
                highlight="Inscreva-se na nossa turma diagnóstica, para iniciar o seu planejamento de estudos do ano: Simulado, Relatório Diagnóstico e Planejamento Fevereiro-Março de Preparação."
                buttonLabel="INSCREVER NA TURMA DIAGNÓSTICA"
                buttonColor="bg-amber-800"
                icon="🟤"
              />

              <CategorySection
                type="redacao"
                title="Categoria 3: Trilha da Redação"
                description="Domine as competências de escrita exigidas no ENEM e Unimontes."
                highlight="Correções detalhadas e personalizadas com o prof. Alysson. Envie suas redações e receba o feedback necessário para alcançar a nota 1000."
                buttonLabel="QUERO ESSA TRILHA"
                buttonColor="bg-rose-700"
                icon="✍️"
              />
            </div>
          </section>

          <DiscountSimulator />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
