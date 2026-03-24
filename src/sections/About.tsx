import React from 'react';
import { Section } from '../components/layout/Section'; 

export const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-brand-white">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-brand-gold"></div>
          <div className="w-8 h-px bg-brand-gold"></div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-brand-black">Sobre o escritório</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto"></div>

        <div className="space-y-6 pt-4">
          <p className="text-brand-gray font-light leading-relaxed">
            SILVÉRIO BALDISSERA ADVOGADOS é um escritório de advocacia com mais de 30 anos de experiência, comprometido com a excelência na prestação de serviços jurídicos nas mais diversas áreas do Direito. Atuamos de forma estratégica e personalizada, sempre pautados pelos pilares que nos definem: compromisso, ética e resultado.
          </p>
          <p className="text-brand-gray font-light leading-relaxed">
            Nosso time é formado por advogados experientes e atualizados, prontos para oferecer soluções eficazes e seguras, seja no consultivo, no contencioso ou na mediação de conflitos. Atendemos clientes em todo o território nacional, com dedicação, clareza e foco nos interesses do cliente.
          </p>
          <p className="text-brand-gray font-light leading-relaxed">
            Mais do que assessoria jurídica, oferecemos confiança, agilidade e responsabilidade em cada etapa da nossa atuação. O diferencial está em entender a necessidade de cada cliente e entregar, com integridade, os melhores caminhos para seus objetivos.
          </p>
        </div>
      </div>
    </Section>
  );
};