import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image com o caminho correto */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/design/paris-hero.webp')" }}
        aria-hidden="true"
      ></div>
      
      {/* Overlays para leitura e contraste */}
      <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-90"></div>

      {/* Content - Sem animação de delay e sem botão */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center">
        <span className="inline-block py-2 px-4 border-2 border-gold-400 text-gold-400 text-sm md:text-base font-extrabold tracking-[0.2em] uppercase mb-8 bg-navy-900/50 backdrop-blur-sm">
          Guia de Viagem Premium
        </span>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto drop-shadow-2xl">
          Encontre Seu Roteiro Ideal Para <span className="text-gold-400 italic">Paris</span> em 3 Dias
        </h1>
        
        <p className="font-sans text-lg md:text-2xl text-white max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
          Análises profundas e roteiros otimizados para você viver a experiência máxima na Cidade Luz em apenas 72 horas.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white hidden md:block opacity-80">
        <span className="block w-[2px] h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto"></span>
      </div>
    </section>
  );
};

export default Hero;