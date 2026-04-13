'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoHeader from '../../assets/images/logo-cabecalho.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
        
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={(logoHeader as any).src}
            alt="Logo Silvério Baldissera"
            className="h-12 w-auto transition-all duration-300"
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-xs tracking-widest uppercase hover:text-brand-gold transition-all duration-300 ${isScrolled ? 'text-brand-black' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-300 ${isScrolled ? 'bg-brand-darkGreen text-white hover:bg-brand-black' : 'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-brand-gold'}`}
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {/* Mobile Menu Open State */}
        {isOpen && (
            <div className={`md:hidden font-sans tracking-wider text-xs uppercase px-6 py-6 flex flex-col gap-6 ${isScrolled ? 'bg-white/95 backdrop-blur-md text-gray-900' : 'bg-black/90 backdrop-blur-sm text-white'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-brand-gold transition-colors duration-300"
                    >
                        {link.name}
                    </a>
                ))}
                 <a
                    href="#contato"
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-300 text-center ${isScrolled ? 'bg-[#033b40] text-white hover:bg-[#1a1a1a]' : 'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-[#caaa8a]'}`}
                >
                    Agendar Consulta
                </a>
            </div>
        )}
    </nav>
  );
};