import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroPc from '../assets/images/hero-pc.png';
import heroCelular from '../assets/images/hero-celular.png';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo - Mobile */}
      <img
        src={(heroCelular as any).src}
        alt="Escritório"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      {/* Imagem de fundo - Desktop */}
      <img
        src={(heroPc as any).src}
        alt="Escritório"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Gradient vignette de baixo para cima */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Conteúdo ancorado na parte inferior */}
      <div className="relative z-10 flex items-end justify-center text-center h-full w-full px-6 pb-20 md:pb-32">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight">
            Compromisso, ética e resultado.
          </h1>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="#areas"
              className="flex items-center gap-2.5 font-sans text-sm tracking-widest uppercase border border-white/30 bg-transparent text-white px-8 py-4 rounded hover:bg-white/10 hover:text-brand-gold transition-all duration-300 group"
            >
              Nossas Áreas
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="font-sans text-sm tracking-widest uppercase text-white px-8 py-4 rounded hover:text-brand-gold transition-colors duration-300"
            >
              Conheça o escritório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};