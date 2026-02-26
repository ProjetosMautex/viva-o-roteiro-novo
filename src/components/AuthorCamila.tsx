import React from 'react';

const AuthorCamila: React.FC = () => {
  const name = "Camila Torres";
  const role = "Especialista em Viagens em Família e Experiências Gastronômicas";
  const bio = "Sou a Camila Torres, especialista em viagens em família, experiências na Disneyland Paris e gastronomia em Paris. Meu trabalho é ajudar viajantes que buscam conforto, organização e boas experiências, especialmente famílias com crianças e pessoas que desejam aproveitar a cidade de forma leve e sem estresse. No Viva o Roteiro, produzo conteúdos voltados para planejamento de dias mais equilibrados, escolha de atrações adequadas para diferentes perfis de viajantes e orientação sobre alimentação, costumes e experiências locais.";

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4 bg-navy-900/80 backdrop-blur-md">
            Especialista
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-4">
            {name}
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-4"></div>
          <p className="text-gold-400 font-medium tracking-widest text-sm md:text-base uppercase max-w-2xl mx-auto">
            {role}
          </p>
        </div>
      </section>

      <section className="pb-20 container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-navy-900 font-serif text-2xl font-bold mb-6 border-b border-gray-50 pb-4">
              Sobre a Especialista
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="whitespace-pre-line text-lg italic text-gray-700">
                {bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorCamila;