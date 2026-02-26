import React from 'react';
import { Shield, Mail, Calendar } from 'lucide-react';

const Privacy: React.FC = () => {
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
            Políticas de <span className="text-gold-400 italic">Privacidade</span>
          </h1>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100">
          
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="lead text-xl font-medium mb-8">
              No <strong>Viva o Roteiro</strong>, a sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações dos visitantes e usuários do nosso site.
            </p>
            <p className="mb-8">
              Ao acessar ou utilizar nosso conteúdo, você concorda com os termos descritos nesta política.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">1. Informações que coletamos</h3>
            <p>Podemos coletar as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Dados fornecidos voluntariamente:</strong> quando você se cadastra em nossa newsletter, envia mensagens pelo formulário de contato ou entra em contato conosco por e-mail.</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site e cookies.</li>
              <li><strong>Informações de afiliados:</strong> quando você clica em links de parceiros (como serviços de viagem, hospedagem, passeios, ingressos ou plataformas de reserva), podemos receber dados de rastreamento de afiliados.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">2. Como utilizamos suas informações</h3>
            <p>As informações coletadas podem ser usadas para:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Melhorar a experiência do usuário em nosso site.</li>
              <li>Produzir conteúdos mais relevantes de acordo com seus interesses.</li>
              <li>Enviar e-mails com novidades, roteiros, dicas e ofertas (apenas se você se inscreveu voluntariamente).</li>
              <li>Analisar estatísticas de acesso e desempenho do site.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">3. Cookies e tecnologias semelhantes</h3>
            <p>
              Utilizamos cookies e ferramentas de terceiros, como Google Analytics e cookies de afiliados, para entender como o site é utilizado, personalizar anúncios e garantir o funcionamento correto dos links de afiliados. Você pode gerenciar ou desativar cookies nas configurações do seu navegador.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">4. Compartilhamento de informações</h3>
            <p>
              Não vendemos ou trocamos seus dados pessoais. Podemos compartilhar informações apenas com parceiros de afiliados (quando você acessa links externos), ferramentas de análise e marketing, ou autoridades competentes se exigido por lei.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">5. Segurança das informações</h3>
            <p>
              Adotamos medidas técnicas e administrativas para proteger suas informações pessoais contra acessos não autorizados, alteração, divulgação ou destruição.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">6. Seus direitos (LGPD)</h3>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a confirmar se tratamos seus dados, solicitar acesso, correção ou exclusão, e revogar consentimento. Para exercer seus direitos, entre em contato pelo e-mail: projetosmautex@gmail.com.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">7. Links de terceiros</h3>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de cada site visitado.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">8. Alterações nesta política</h3>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-4">9. Contato</h3>
            <p>Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, fale conosco:</p>
            
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

export default Privacy;
