import React from 'react';
import { ShieldCheck, Map, Heart, Users, MapPin, Mail, CheckCircle, DollarSign, Clock, Phone } from 'lucide-react';

const TeamMember: React.FC<{ name: string; role: string; bio: string; image: string; position?: string }> = ({ name, role, bio, image, position = "object-cover" }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full">
    <div className="h-64 overflow-hidden relative">
      <img 
        src={image} 
        alt={name} 
        className={`w-full h-full ${position}`} 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-navy-900/10"></div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-serif font-bold text-navy-900 mb-1">{name}</h3>
      <span className="text-gold-600 text-xs font-black tracking-widest uppercase mb-4 block h-auto">{role}</span>
      <p className="text-gray-800 font-medium leading-relaxed text-sm flex-grow">{bio}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Header Compacto */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4 bg-navy-900/80 backdrop-blur-md">
            Quem Somos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Sobre o <span className="text-gold-400 italic">Viva o Roteiro</span>
          </h1>
        </div>
      </section>

      {/* Introdução - Texto Completo */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-navy-900">Seja bem-vindo ao Viva o Roteiro!</h2>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Aqui, nosso objetivo é ajudar viajantes a planejarem experiências inesquecíveis de forma prática, clara e sem complicação — especialmente quando o assunto é o que fazer em Paris em 3 dias.
          </p>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Se você está organizando sua primeira viagem à cidade, quer otimizar o tempo, evitar erros comuns, economizar ou simplesmente montar um roteiro bem estruturado, este é o lugar certo. Estamos aqui para orientar você de forma objetiva, honesta e baseada em experiência real.
          </p>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Cada artigo do site é produzido a partir de pesquisa aprofundada, análise de fontes confiáveis e vivência prática em viagens. Nosso foco é simples: ajudar você a aproveitar Paris da melhor forma possível em pouco tempo, com base em custo-benefício, logística, relevância dos passeios e experiência do viajante.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* O que você encontrará - Texto Completo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-serif font-bold text-navy-900">O que você encontrará no site?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-t-4 border-gold-400 bg-slate-50 shadow-md">
              <Map className="w-12 h-12 text-navy-900 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Roteiros práticos e bem estruturados</h3>
              <p className="text-gray-800 font-medium leading-relaxed">Planejamentos detalhados para quem tem pouco tempo na cidade, com organização por dias, regiões e prioridades.</p>
            </div>
            <div className="p-8 border-t-4 border-gold-400 bg-slate-50 shadow-md">
              <CheckCircle className="w-12 h-12 text-navy-900 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Dicas diretas de viagem</h3>
              <p className="text-gray-800 font-medium leading-relaxed">Informações sobre transporte, alimentação, ingressos, economia, horários, deslocamentos e erros comuns que você pode evitar.</p>
            </div>
            <div className="p-8 border-t-4 border-gold-400 bg-slate-50 shadow-md">
              <ShieldCheck className="w-12 h-12 text-navy-900 mb-6" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Guias objetivos e completos</h3>
              <p className="text-gray-800 font-medium leading-relaxed">Conteúdos claros para ajudar você a decidir onde ir, o que vale a pena, como se locomover e como otimizar cada dia da sua viagem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe - Texto Completo Detalhado */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-black tracking-[0.2em] uppercase text-sm mb-3 block">Quem Faz Acontecer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Nossa Equipe</h2>
            <p className="max-w-3xl mx-auto mt-4 text-gray-800 font-medium text-lg">
              O Viva o Roteiro é um projeto editorial independente, criado por pessoas apaixonadas por viagens e planejamento. Nosso compromisso é oferecer informações confiáveis, atualizadas e realmente úteis para quem deseja conhecer Paris de forma organizada, sem perder tempo nem dinheiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <TeamMember 
              name="Murilo"
              role="Fundador e Especialista em SEO para Turismo de Nicho"
              image="/images/autores/murilo.webp"
              bio="Sou o Murilo, fundador do Viva o Roteiro e especialista em SEO aplicado a projetos de turismo em micronichos. Meu trabalho é estruturar conteúdos que realmente ajudem o viajante, ao mesmo tempo em que constroem autoridade temática nos mecanismos de busca. Atuo com planejamento editorial, organização de silos de conteúdo e interligação estratégica entre páginas, sempre focado na intenção real de quem está planejando uma viagem. No Viva o Roteiro, sou responsável por definir a arquitetura do site, revisar a consistência dos textos e garantir que cada conteúdo entregue respostas práticas, sem superficialidade."
            />
            <TeamMember 
              name="Lucas Almeida"
              role="Especialista em Roteiros e Logística Urbana em Paris"
              image="/images/autores/Lucas Almeida.webp"
              position="object-[center_top]"
              bio="Sou o Lucas Almeida, especialista em planejamento de roteiros e logística urbana em Paris. Minha atuação é voltada para transformar a cidade em um espaço fácil de navegar, mesmo para quem está visitando pela primeira vez. Trabalho com organização de deslocamentos, integração entre atrações e escolha das melhores rotas para otimizar tempo, custo e conforto. No Viva o Roteiro, contribuo com conteúdos que ajudam o viajante a se locomover com autonomia, entender o funcionamento do transporte público e planejar passeios de forma eficiente."
            />
            <TeamMember 
              name="Camila Torres"
              role="Especialista em Viagens em Família e Experiências Gastronômicas"
              image="/images/autores/Camila Torres.webp"
              position="object-[center_top]"
              bio="Sou a Camila Torres, especialista em viagens em família, experiências na Disneyland Paris e gastronomia em Paris. Meu trabalho é ajudar viajantes que buscam conforto, organização e boas experiências, especialmente famílias com crianças e pessoas que desejam aproveitar a cidade de forma leve e sem estresse. No Viva o Roteiro, produzo conteúdos voltados para planejamento de dias mais equilibrados, escolha de atrações adequadas para diferentes perfis de viajantes e orientação sobre alimentação, costumes e experiências locais."
            />
            <TeamMember 
              name="Rafael Monteiro"
              role="Especialista em Hospedagem, Planejamento Financeiro e Serviços ao Turista"
              image="/images/autores/Rafael Monteiro.webp"
              bio="Sou o Rafael Monteiro, especialista em hospedagem, planejamento financeiro e serviços ao turista em Paris. Minha atuação é focada em ajudar o viajante a tomar decisões inteligentes sobre onde ficar, quanto gastar e como lidar com os aspectos práticos da viagem de forma segura e consciente. No Viva o Roteiro, contribuo com conteúdos que orientam sobre tipos de acomodação, custo-benefício, organização de orçamento e serviços essenciais para quem visita a cidade."
            />
          </div>
        </div>
      </section>

      {/* Confiança e Sustentabilidade - Texto Completo */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Por que confiar */}
            <div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Por que confiar no Viva o Roteiro?</h2>
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="mt-1 p-2 bg-gold-400 rounded-full h-fit text-navy-900"><Clock size={20} /></div>
                   <div>
                     <h4 className="font-bold text-lg text-gold-400">Especialização em roteiros curtos</h4>
                     <p className="text-gray-100 font-medium leading-relaxed text-sm">Nosso foco é ajudar viajantes a aproveitarem Paris em pouco tempo. Estudamos a cidade em profundidade para criar roteiros realmente viáveis.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 p-2 bg-gold-400 rounded-full h-fit text-navy-900"><Users size={20} /></div>
                   <div>
                     <h4 className="font-bold text-lg text-gold-400">Experiência real</h4>
                     <p className="text-gray-100 font-medium leading-relaxed text-sm">Nossos conteúdos são baseados em experiência de viagem. Não criamos roteiros genéricos: avaliamos o que realmente cabe no dia.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 p-2 bg-gold-400 rounded-full h-fit text-navy-900"><Heart size={20} /></div>
                   <div>
                     <h4 className="font-bold text-lg text-gold-400">Independência editorial</h4>
                     <p className="text-gray-100 font-medium leading-relaxed text-sm">Quando indicamos atrações ou serviços, fazemos isso com base em relevância para o viajante e custo-benefício, nunca por interesses comerciais ocultos.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1 p-2 bg-gold-400 rounded-full h-fit text-navy-900"><CheckCircle size={20} /></div>
                   <div>
                     <h4 className="font-bold text-lg text-gold-400">Atualizações constantes</h4>
                     <p className="text-gray-100 font-medium leading-relaxed text-sm">Revisamos nossos conteúdos com frequência para acompanhar mudanças de preços, novas regras e horários.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Sustentabilidade e Contato */}
            <div className="space-y-8">
                <div className="bg-navy-800 p-8 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="text-gold-400" size={24} />
                        <h3 className="text-2xl font-serif font-bold text-white">Como o site se sustenta</h3>
                    </div>
                    <p className="text-gray-200 font-medium leading-relaxed">
                        Para manter a independência e a qualidade do conteúdo, utilizamos links de afiliado em alguns artigos. Quando você faz uma reserva ou compra através desses links, recebemos uma pequena comissão — sem nenhum custo extra para você. Esse modelo nos permite continuar oferecendo conteúdo imparcial e atualizado.
                    </p>
                </div>

                <div className="bg-white text-navy-900 p-8 rounded-lg shadow-2xl border-2 border-gold-400">
                    <h3 className="text-2xl font-serif font-bold mb-6 border-b-2 border-gray-100 pb-4">Informações de Contato</h3>
                    <div className="space-y-4 font-medium text-gray-800">
                        <p><strong className="text-navy-900 font-bold">Empresa/Projeto:</strong> Viva o Roteiro / Projetos Mautex</p>
                        <p className="flex items-start gap-3">
                            <MapPin className="shrink-0 text-gold-600" size={20} />
                            <span>Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE – CEP 56300-000</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone className="shrink-0 text-gold-600" size={20} />
                            <span>(87) 99751-8420</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="shrink-0 text-gold-600" size={20} />
                            <a href="mailto:projetosmautex@gmail.com" className="hover:text-gold-600 transition-colors underline">projetosmautex@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-16 bg-gold-400 text-navy-900 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-2">Obrigado por fazer parte do Viva o Roteiro!</h2>
            <p className="font-serif italic text-xl italic">Roteiros práticos e guias essenciais para Paris</p>
        </div>
      </section>
    </div>
  );
};

export default About;