import React from 'react';
import { Heart, Scale } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold-400 font-extrabold tracking-[0.2em] uppercase text-sm mb-4 block">
            Nosso Diferencial
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white">
            Por que nosso roteiro é diferente?
          </h2>
          {/* Removido font-light, alterado para text-white e font-medium */}
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Muitos guias são apenas listas genéricas de monumentos. Nós entregamos uma curadoria baseada na realidade de quem vive Paris, focada na qualidade da sua memória, não na quantidade de selfies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-navy-800/50 p-10 rounded-lg border border-white/10 hover:border-gold-400 transition-colors duration-300 flex flex-col items-center text-center backdrop-blur-sm">
             <div className="p-4 bg-navy-900 rounded-full mb-6 text-gold-400 shadow-lg border border-gold-400/20">
               <Scale size={32} />
             </div>
             <h3 className="text-2xl font-serif font-bold text-white mb-4">Análise 100% Imparcial</h3>
             {/* Removido text-gray-400, usando text-gray-100 e font-medium */}
             <p className="text-gray-100 leading-relaxed font-medium text-lg">
               Não somos patrocinados diretamente por nenhum museu, hotel ou restaurante. Se recomendamos, é porque vale a pena o seu tempo e dinheiro. Focamos exclusivamente na sua experiência.
             </p>
          </div>

          <div className="bg-navy-800/50 p-10 rounded-lg border border-white/10 hover:border-gold-400 transition-colors duration-300 flex flex-col items-center text-center backdrop-blur-sm">
             <div className="p-4 bg-navy-900 rounded-full mb-6 text-gold-400 shadow-lg border border-gold-400/20">
               <Heart size={32} />
             </div>
             <h3 className="text-2xl font-serif font-bold text-white mb-4">Curadoria com Paixão</h3>
             {/* Removido text-gray-400, usando text-gray-100 e font-medium */}
             <p className="text-gray-100 leading-relaxed font-medium text-lg">
               Entendemos que viajar é sobre sentir. Incluímos momentos de pausa para contemplação que a maioria dos roteiros "express" ignora.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;