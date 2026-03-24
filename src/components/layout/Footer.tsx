'use client';

import React from 'react';
import logoFooter from '../../assets/images/logo-rodape.png';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={(logoFooter as any).src} alt="Logo Rodapé" className="h-40 w-auto mb-8" />
        </div>

        {/* Links Rápidos */}
        <div className="flex flex-wrap justify-center gap-8 border-t border-white/5 pt-8 w-full max-w-2xl">
          {['Início', 'Sobre', 'Serviços', 'Equipe', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] tracking-widest uppercase text-brand-gray hover:text-brand-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[10px] tracking-[0.2em] uppercase text-brand-gray/50 pt-8">
          © {year} Silvério Baldissera Advogados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};