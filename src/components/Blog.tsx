import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, category, image, link, description }) => (
  <article className="group bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-100 h-full">
    {/* Image Section */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-900/10"></div>
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
      <a href={link} className="inline-flex items-center text-navy-900 text-sm font-bold uppercase tracking-widest hover:text-gold-600 transition-colors mt-auto">
        Ler Artigo <ArrowRight size={18} className="ml-2 stroke-[3]" />
      </a>
    </div>
  </article>
);

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const allPosts = [
    {
      title: 'O que fazer em Paris em 3 dias',
      category: 'Roteiros',
      // Caminho atualizado conforme print da pasta /public/images/blog/
      image: '/images/blog/o-que-fazer-em-paris-em-3-dias/o-que-fazer-em-paris-em-3-dias.webp', 
      link: '/blog/o-que-fazer-em-paris-em-3-dias',
      description: 'Um guia completo dia a dia para otimizar sua visita à Cidade Luz, cobrindo Torre Eiffel, Louvre e Montmartre com logística impecável.'
    },
    {
      title: 'Onde comer em Paris',
      category: 'Gastronomia',
      // Caminho atualizado conforme print da pasta /public/images/blog/
      image: '/images/blog/onde-comer-em-paris/onde-comer-em-paris.webp', 
      link: '/blog/onde-comer-em-paris',
      description: 'Os melhores bistrôs, boulangeries e restaurantes que não são armadilhas para turistas. Experiências gastronômicas autênticas.'
    }
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 border border-gold-400 text-gold-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4 bg-navy-900/80 backdrop-blur-md">
            Nosso Blog
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Dicas e <span className="text-gold-400 italic">Inspirações</span>
          </h1>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border ${currentPage === 1 ? 'border-gray-300 text-gray-300 cursor-not-allowed' : 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors'}`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-colors ${
                  currentPage === i + 1
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-900 border border-gray-300 hover:border-gold-400 hover:text-gold-600'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border ${currentPage === totalPages ? 'border-gray-300 text-gray-300 cursor-not-allowed' : 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;