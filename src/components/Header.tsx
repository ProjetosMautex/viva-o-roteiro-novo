import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setSearchQuery('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navLinks = [
    { name: 'Página Inicial', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-white">
          
          {/* LOGO COM LINK PARA HOME */}
          <a href="/" className="z-20 hover:opacity-80 transition-opacity">
            <div className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-gold-400 whitespace-nowrap">
              VIVA<span className="text-white text-lg md:text-xl ml-2 font-light tracking-normal uppercase">O Roteiro</span>
            </div>
          </a>

          {/* PC Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* BARRA DE PESQUISA PC */}
            <div className="relative flex items-center">
              <form 
                onSubmit={handleSearch}
                className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-sm ${
                  isSearchOpen ? 'w-72 opacity-100 mr-2 px-2' : 'w-0 opacity-0'
                }`}
              >
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="w-full bg-transparent text-navy-900 py-2 text-sm font-medium focus:outline-none placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery.length > 0 && (
                  <button type="submit" className="text-gold-600 hover:text-navy-900 transition-colors">
                    <ArrowRight size={18} />
                  </button>
                )}
              </form>
              
              <button
                onClick={toggleSearch}
                className="text-white hover:text-gold-400 transition-colors focus:outline-none p-1"
              >
                {isSearchOpen ? <X size={22} /> : <Search size={22} />}
              </button>
            </div>
          </nav>

          <button onClick={toggleMenu} className="md:hidden text-sm font-bold tracking-[0.2em] border border-white/20 px-3 py-1">
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-navy-900/95 z-50 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white"><X size={32} /></button>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-8">
          
          {/* LOGO MOBILE COM LINK PARA HOME */}
          <a href="/" onClick={toggleMenu} className="text-3xl font-serif font-bold text-gold-400 mb-8 tracking-widest text-center">
            VIVA <span className="text-white">O ROTEIRO</span>
          </a>

          {/* Mobile Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-xs relative group mb-8">
            <input
              type="text"
              placeholder="PESQUISAR"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/30 py-3 text-lg text-white placeholder-white/40 focus:outline-none focus:border-gold-400 pr-10 uppercase tracking-widest font-light"
            />
            {searchQuery.length > 0 && (
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-400 animate-pulse">
                <ArrowRight size={24} />
              </button>
            )}
          </form>

          <nav className="flex flex-col space-y-6 text-center w-full">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={toggleMenu} className="text-2xl font-serif text-white hover:text-gold-400">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;