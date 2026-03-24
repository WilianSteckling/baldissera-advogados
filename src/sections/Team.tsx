import React from 'react';
import { Section } from '../components/layout/Section';
import advSilverio from '../assets/images/adv-silverio.jpeg';
import advLeandra from '../assets/images/adv-leandra.jpeg';
import advVicenzo from '../assets/images/adv-vicenzo.jpeg';

const lawyers = [
  {
    name: 'SILVÉRIO BALDISSERA',
    oab: 'OAB/SC 10.533',
    image: advSilverio,
    bio: 'Advogado com 30 anos de experiência, especialista em Direito Empresarial e Processual pela UNOESC e MBA pela FGV. Foi Vice-Presidente da OAB Joaçaba e Membro do Tribunal de Ética da OAB/SC.'
  },
  {
    name: 'LEANDRA BOGONI',
    oab: 'OAB/SC 18.797',
    image: advLeandra,
    bio: 'Advogada com mais de 24 anos de atuação, especialista em Direito de Família e Sucessões. Focada em inventários, divórcios e resoluções estratégicas e humanizadas.'
  },
  {
    name: 'VICENZO BALDISSERA',
    oab: 'OAB/SC 74.246',
    image: advVicenzo,
    bio: 'Especialista em Direito Securitário e Responsabilidade Civil. Atua na análise de apólices e disputas envolvendo seguros de vida, saúde, automotivos e responsabilidade civil.'
  }
];

export const Team: React.FC = () => {
  return (
    <Section id="equipe" className="bg-brand-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brand-black">Nossa Equipe</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {lawyers.map((lawyer, idx) => (
          <div key={idx} className="group flex flex-col items-center text-center">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-4/5 w-full max-w-[320px]">
              <img 
                src={(lawyer.image as any).src} 
                alt={lawyer.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <h3 className="font-serif text-xl text-brand-black uppercase tracking-wider">{lawyer.name}</h3>
            <p className="text-brand-gold text-[10px] tracking-[0.2em] font-bold mb-4">{lawyer.oab}</p>
            <p className="text-brand-gray text-sm font-light leading-relaxed px-4">{lawyer.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};