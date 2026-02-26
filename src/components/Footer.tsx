import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-navy-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Description */}
          <div className="max-w-lg">
            {/* LOGO DO FOOTER COM LINK PARA HOME */}
            <a href="/" className="inline-block mb-8 hover:opacity-80 transition-opacity group">
              <div className="text-2xl font-serif font-bold tracking-widest text-gold-400 whitespace-nowrap">
                VIVA<span className="text-white text-lg ml-2 font-bold tracking-normal uppercase">O Roteiro</span>
              </div>
              {/* Linha decorativa opcional que aparece no hover para dar feedback visual */}
              <div className="h-0.5 bg-gold-400 w-0 group-hover:w-full transition-all duration-300"></div>
            </a>
            
            <p className="text-gray-200 leading-relaxed font-medium text-lg">
              No Viva o Roteiro você encontra roteiros completos, guias práticos e dicas essenciais para aproveitar Paris em 3 dias. Conteúdo claro, atualizado e confiável para planejar passeios, transporte, alimentação e hospedagem com eficiência e economia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <h4 className="font-serif text-xl font-bold mb-8 text-white">Informações de Contato</h4>
            <div className="text-gray-200 text-base leading-loose space-y-4 font-medium">
              <p className="font-bold text-white text-lg">Murilo</p>
              <p>Empresa/Projeto: Projetos Mautex / Viva o Roteiro</p>
              <div className="flex items-start gap-3">
                 <MapPin size={20} className="text-gold-400 mt-1 shrink-0" />
                 <span>Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE – CEP 56300-000</span>
              </div>
              <div className="flex items-center gap-3">
                 <Phone size={20} className="text-gold-400 shrink-0" />
                 <span>(87) 99751-8420</span>
              </div>
              <div className="flex items-center gap-3">
                 <Mail size={20} className="text-gold-400 shrink-0" />
                 <a href="mailto:projetosmautex@gmail.com" className="hover:text-white transition-colors underline decoration-gold-400 decoration-1 underline-offset-4">projetosmautex@gmail.com</a>
              </div>
              <p className="pt-2 text-sm italic text-gray-400 font-normal">(Atendimento de segunda a sexta, das 9h às 18h)</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300 font-medium">
          <p>© 2026 Projetos Mautex. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
             <a href="/termos" className="text-white hover:text-gold-400 transition-colors uppercase tracking-widest font-bold">Termos de Uso</a>
             <span className="text-white/40">|</span>
             <a href="/politicas" className="text-white hover:text-gold-400 transition-colors uppercase tracking-widest font-bold">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;