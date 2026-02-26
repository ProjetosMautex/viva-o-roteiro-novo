import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    // Removido qualquer classe de transição ou animação. O z-index 100 garante que fique sobre o rodapé.
    <div className="fixed bottom-0 left-0 right-0 w-full bg-navy-900 text-white p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-[100] border-t-2 border-gold-400">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-base text-white text-center md:text-left font-medium leading-relaxed max-w-4xl">
          Utilizamos cookies para personalizar conteúdo e melhorar sua experiência. Ao continuar navegando neste site, você concorda com nossa{' '}
          <a href="/politicas" className="text-gold-400 hover:text-white underline decoration-2 underline-offset-4 font-bold">
            Política de Privacidade
          </a>.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold py-4 px-8 rounded-sm uppercase tracking-wide text-sm shadow-lg whitespace-nowrap w-full md:w-auto"
        >
          Concordar e Fechar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;