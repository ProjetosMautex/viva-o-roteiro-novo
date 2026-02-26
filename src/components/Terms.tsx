import React from 'react';
import { FileText, Mail, Calendar } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Compacto */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4 bg-navy-900/80 backdrop-blur-md">
            Legal
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
            Termos de <span className="text-gold-400 italic">Uso</span>
          </h1>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100">
          
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="lead text-xl font-medium mb-8">
              Bem-vindo ao <strong>Viva o Roteiro</strong>! Antes de utilizar nosso site, pedimos que leia atentamente os seguintes Termos de Uso. Ao acessar ou utilizar este site, você concorda com estes termos.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar o Viva o Roteiro, você concorda com estes Termos de Uso, nossa Política de Privacidade e as leis aplicáveis no Brasil. Caso não concorde com algum dos termos, recomendamos que não utilize o site.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">2. Uso do site</h3>
            <p>Você se compromete a utilizar o site apenas para fins legais. É proibido:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Publicar conteúdos ilegais, ofensivos, difamatórios ou que violem direitos de terceiros;</li>
              <li>Tentar acessar áreas restritas do site sem autorização;</li>
              <li>Introduzir vírus, malwares ou qualquer código nocivo;</li>
              <li>Utilizar o site para práticas de spam, fraudes ou atividades prejudiciais a terceiros.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">3. Conteúdo do site</h3>
            <p>
              Todo o conteúdo do site é protegido por direitos autorais e pertence ao Viva o Roteiro ou a parceiros licenciados. É permitido compartilhar o conteúdo apenas para fins pessoais ou educativos, desde que a fonte seja citada. Não é permitido reproduzir, modificar, vender ou distribuir qualquer conteúdo sem autorização expressa.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">4. Links de afiliados e terceiros</h3>
            <p>
              O site pode conter links de afiliados e de terceiros. Podemos receber comissão por vendas ou reservas realizadas por meio desses links, sem custo adicional para o usuário. Não nos responsabilizamos por políticas ou conteúdos de sites de terceiros.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">5. Isenção de responsabilidade</h3>
            <p>
              As informações disponibilizadas no site possuem caráter informativo e educativo. O Viva o Roteiro não se responsabiliza por danos diretos ou indiretos decorrentes do uso das informações. Valores, condições e regras de atrações podem ser alterados sem aviso prévio.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">6. Modificações nos termos</h3>
            <p>
              Podemos atualizar estes Termos de Uso a qualquer momento. O uso continuado do site após alterações implica concordância com os novos termos.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">7. Privacidade</h3>
            <p>
              O uso do site está sujeito à nossa Política de Privacidade, que descreve como coletamos, utilizamos e protegemos os dados dos usuários.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">8. Legislação aplicável e foro</h3>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca do domicílio do responsável pelo site.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">9. Contato</h3>
            <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:</p>
            
            <div className="flex items-center gap-3 mt-4 p-4 bg-slate-50 rounded-lg border border-gray-200">
              <Mail className="text-gold-600" size={20} />
              <a href="mailto:projetosmautex@gmail.com" className="text-navy-900 font-bold hover:text-gold-600 transition-colors">projetosmautex@gmail.com</a>
            </div>

            <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
              <Calendar size={16} />
              <span>Última atualização: 12 de janeiro de 2026</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
