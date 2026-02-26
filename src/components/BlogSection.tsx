import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, category, image, link, description }) => (
  <article className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden flex flex-col border border-gray-100">
    {/* Image Section */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    
    {/* Content Section */}
    <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
      <span className="inline-block text-gold-600 text-xs font-black tracking-widest uppercase mb-3">
        {category}
      </span>
      <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 leading-tight group-hover:text-gold-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-800 font-medium mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      {/* Removido target="_blank" para melhor navegação interna */}
      <a href={link} className="inline-flex items-center text-navy-900 text-sm font-bold uppercase tracking-widest hover:text-gold-600 transition-colors mt-auto">
        Ler Artigo <ArrowRight size={18} className="ml-2 stroke-[3]" />
      </a>
    </div>
  </article>
);

const BlogSection: React.FC = () => {
  const posts = [
    {
      title: 'O que fazer em Paris em 3 dias',
      category: 'Roteiros',
      // Caminho atualizado conforme sua pasta no VS Code
      image: '/images/blog/o-que-fazer-em-paris-em-3-dias/o-que-fazer-em-paris-em-3-dias.webp', 
      link: '/blog/o-que-fazer-em-paris-em-3-dias',
      description: 'Um guia completo dia a dia para otimizar sua visita à Cidade Luz, cobrindo Torre Eiffel, Louvre e Montmartre com logística impecável.'
    },
    {
      title: 'Onde comer em Paris',
      category: 'Gastronomia',
      // Caminho atualizado conforme sua pasta no VS Code
      image: '/images/blog/onde-comer-em-paris/onde-comer-em-paris.webp', 
      link: '/blog/onde-comer-em-paris',
      description: 'Os melhores bistrôs, boulangeries e restaurantes que não são armadilhas para turistas. Experiências gastronômicas autênticas.'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold-600 font-black tracking-[0.2em] uppercase text-xs mb-3 block">Nosso Blog</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Dicas e Inspirações</h2>
          </div>
          <a href="/blog" className="hidden md:flex items-center text-navy-900 font-bold uppercase text-sm tracking-widest hover:text-gold-600 transition-colors mt-4 md:mt-0">
            Ver Todos os Posts <ArrowRight size={18} className="ml-2 stroke-[3]" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="/blog" className="inline-block text-navy-900 font-bold uppercase text-sm tracking-widest border-b-2 border-navy-900 pb-1">
                Ver Todos os Posts
            </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;