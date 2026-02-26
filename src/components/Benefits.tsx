import React from 'react';
import { Camera, Coffee, Compass, Zap } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 border-2 border-gray-100 hover:border-gold-400 hover:shadow-xl transition-all duration-300 group text-center md:text-left rounded-lg">
    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-gold-400 bg-navy-900 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-md">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">{title}</h3>
    {/* Alterado para text-gray-800 e font-medium */}
    <p className="text-gray-800 leading-relaxed font-medium text-base">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Camera size={24} />,
      title: 'Essencial Sem Pressa',
      description: 'Em 3 dias, você foca nos ícones mundiais como a Torre Eiffel e o Louvre, vivendo o "crème de la crème" sem exaustão.'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Imersão Cultural Intensa',
      description: '72 horas são perfeitas para se sentir um parisiense: café da manhã no Marais, tarde no Sena e jantar em Montmartre.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Custo-Benefício Ideal',
      description: 'Uma viagem curta permite investir mais em experiências de luxo e gastronomia, maximizando seu orçamento.'
    },
    {
      icon: <Compass size={24} />,
      title: 'Feriado Inesquecível',
      description: 'O formato perfeito para feriados prolongados. Fuja da rotina e recarregue as energias na cidade mais bonita do mundo.'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          {/* Alterado para text-gold-600 para melhor contraste no branco */}
          <span className="text-gold-600 font-black tracking-[0.2em] uppercase text-sm mb-3 block">Por que 3 Dias?</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900">Benefícios do Roteiro de 3 Dias</h2>
          <div className="w-24 h-1.5 bg-gold-400 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;