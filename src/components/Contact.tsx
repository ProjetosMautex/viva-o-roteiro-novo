import React from 'react';
import { Mail, Clock, User, MapPin, HelpCircle, AlertCircle, Lightbulb, Handshake } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Compacto */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4 bg-navy-900/80 backdrop-blur-md">
            Fale Conosco
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Entre em <span className="text-gold-400 italic">Contato</span>
          </h1>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Informações de Texto */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Estamos à disposição</h2>
              <p className="text-gray-800 text-lg font-medium leading-relaxed">
                Se você tem dúvidas, sugestões, deseja colaborar ou entrar em contato conosco, estamos à disposição. No <strong className="text-navy-900">Viva o Roteiro</strong>, levamos a sério a qualidade das informações. Nosso objetivo é ajudar você a planejar sua viagem de forma prática, clara e segura.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                <HelpCircle className="text-gold-600" /> Como Podemos Ajudar?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <HelpCircle className="text-gold-600 shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">Dúvidas sobre os roteiros e planejamento</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <AlertCircle className="text-gold-600 shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">Relatar erros ou informações desatualizadas</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Lightbulb className="text-gold-600 shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">Sugerir novos guias ou tópicos de interesse</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Handshake className="text-gold-600 shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">Propostas de parcerias e publicidade</span>
                </li>
              </ul>
            </div>

            <div className="bg-navy-900 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-serif font-bold mb-6 text-gold-400">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="text-gold-400 shrink-0" size={20} />
                  <span className="font-medium">Murilo</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-gold-400 shrink-0" size={20} />
                  <span className="font-medium">Projeto: Viva o Roteiro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-gold-400 shrink-0" size={20} />
                  <a href="mailto:projetosmautex@gmail.com" className="font-medium hover:text-gold-400 transition-colors underline decoration-gold-400 decoration-1 underline-offset-4">
                    projetosmautex@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-white/10 mt-4">
                  <Clock className="text-gold-400 shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-300 italic">Atendimento de segunda a sexta, das 9h às 18h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Transparência e Compromisso</h3>
              <p className="text-gray-800 font-medium leading-relaxed">
                Somos um projeto editorial independente focado na experiência do viajante e no melhor custo-benefício. Nossas recomendações são baseadas em pesquisas aprofundadas e feedback real, sem vínculos ocultos que comprometam nossa isenção.
              </p>
            </div>
          </div>

          {/* Google Forms */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex justify-center items-start">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1F8q9EcCaobCa1xOnSym8LUgywyAD6XVWLkZcIm4ZEKIkMA/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Formulário de Contato"
              className="w-full"
            >
              Carregando…
            </iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
