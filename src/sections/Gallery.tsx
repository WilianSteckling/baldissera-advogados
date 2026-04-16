'use client';

import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import img1 from '../assets/images/escritorio/s1.jpg';
import img3 from '../assets/images/escritorio/s3.jpg';
import img6 from '../assets/images/escritorio/s6.jpg';

interface AccordionImage {
  id: number;
  src: string;
  title: string;
}

const images: AccordionImage[] = [
  { id: 1, src: (img1 as any).src, title: 'Entrada' },
  { id: 3, src: (img3 as any).src, title: 'Corredor' },
  { id: 6, src: (img6 as any).src, title: 'Sala de espera' },
];

interface AccordionItemProps {
  item: AccordionImage;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        h-75 sm:h-100 lg:h-112.5
        ${isActive ? 'flex-4' : 'flex-[0.5]'}
        min-w-10
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.src}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src =
            'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <span
        className={`
          absolute text-white text-sm sm:text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 opacity-100'
              : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-70'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="escritorio" className="bg-brand-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brand-black mb-4">Nosso Escritório</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p className="font-sans text-brand-gray font-light max-w-lg mx-auto">
          Um espaço planejado para o conforto, discrição e excelência no atendimento.
        </p>
      </div>

      <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto p-2">
        {images.map((image, index) => (
          <AccordionItem
            key={image.id}
            item={image}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </Section>
  );
};
