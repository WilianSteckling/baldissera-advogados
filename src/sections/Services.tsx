'use client';

import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Scale, Shield, ChevronDown, Quote } from 'lucide-react';

interface Topic {
  title: string;
  text: string;
}

interface Area {
  title: string;
  icon: React.ReactNode;
  description: string;
  topics: Topic[];
  quote: string;
}

const areas: Area[] = [
  {
    title: 'Inventários e Sucessões',
    icon: <Scale className="w-6 h-6" />,
    description:
      'Esta área é dedicada à organização e transferência do patrimônio familiar após o falecimento de um ente querido, garantindo que a vontade da lei e do falecido sejam respeitadas com o mínimo de desgaste para os herdeiros.',
    topics: [
      {
        title: 'Inventários Judiciais e Extrajudiciais',
        text: 'Atuamos na regularização de bens de forma ágil. Quando há consenso entre herdeiros e ausência de menores, priorizamos a via extrajudicial (em cartório), que é consideravelmente mais rápida. Em casos de conflitos ou testamentos, conduzimos o processo judicial com rigor técnico.',
      },
      {
        title: 'Condução de Partilhas com Segurança Jurídica',
        text: 'Planejamos e executamos a divisão de bens de forma estratégica, prevenindo litígios futuros, otimizando a carga tributária (ITCMD) e garantindo que todos os trâmites legais sejam seguidos à risca para evitar nulidades.',
      },
    ],
    quote:
      'Transformamos um momento sensível em um processo célere e seguro, protegendo o legado da sua família.',
  },
  {
    title: 'Direito Securitário',
    icon: <Shield className="w-6 h-6" />,
    description:
      'O foco aqui é garantir que o contrato de seguro seja cumprido integralmente, protegendo o segurado ou beneficiário contra abusos e negativas indevidas das seguradoras.',
    topics: [
      {
        title: 'Indenizações e Coberturas',
        text: 'Assessoria completa para o recebimento de indenizações em diversas modalidades (Vida, Saúde, Automóveis, Imobiliário, Responsabilidade Civil, entre outros). Analisamos minuciosamente as apólices para garantir que o cliente receba exatamente o que contratou.',
      },
      {
        title: 'Litígios Securitários',
        text: 'Atuação incisiva em casos de negativa injustificada de pagamento, atrasos excessivos ou interpretações abusivas de cláusulas contratuais. Defendemos os interesses do segurado em ações judiciais para reverter decisões das seguradoras e garantir a reparação de danos.',
      },
    ],
    quote:
      'Sua apólice deve ser sua segurança, não uma preocupação. Atuamos para que seus direitos frente às seguradoras sejam respeitados.',
  },
];

const ExpandableCard = ({ area }: { area: Area }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        group rounded-2xl border bg-white overflow-hidden
        transition-all duration-500 ease-in-out
        ${isOpen ? 'border-brand-gold/50 shadow-lg shadow-brand-gold/5' : 'border-gray-100 hover:border-brand-gold/30 hover:shadow-md'}
      `}
    >
      {/* Card Header — always visible */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left p-8 flex items-start gap-5 cursor-pointer"
      >
        <div
          className={`
            shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
            transition-colors duration-300
            ${isOpen ? 'bg-brand-darkGreen text-white' : 'bg-brand-gold/10 text-brand-gold'}
          `}
        >
          {area.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl lg:text-2xl text-brand-black leading-tight">
            {area.title}
          </h3>
          <p className="mt-2 text-sm text-brand-gray font-light leading-relaxed">
            {area.description}
          </p>
        </div>

        <ChevronDown
          className={`
            w-5 h-5 shrink-0 text-brand-gold mt-1
            transition-transform duration-500
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        />
      </button>

      {/* Expandable Content */}
      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-0 space-y-6">
            {/* Divider */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-brand-gold/30 to-transparent" />

            {/* Topics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {area.topics.map((topic) => (
                <div key={topic.title} className="space-y-2">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-brand-darkGreen font-bold">
                    {topic.title}
                  </h4>
                  <p className="text-sm text-brand-gray font-light leading-relaxed">
                    {topic.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative border-l-2 border-brand-gold bg-brand-gold/5 rounded-r-xl py-5 px-6">
              <Quote className="absolute -top-2 -left-3 w-6 h-6 text-brand-gold bg-white rounded-full p-0.5" />
              <p className="text-sm italic text-brand-black/80 leading-relaxed">
                {area.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <Section id="areas" className="bg-[#fcfcfc]">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brand-black mb-4">Áreas de Atuação</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p className="font-sans text-brand-gray font-light max-w-lg mx-auto">
          Atuação especializada com foco em resultados e segurança jurídica.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {areas.map((area) => (
          <ExpandableCard key={area.title} area={area} />
        ))}
      </div>
    </Section>
  );
};