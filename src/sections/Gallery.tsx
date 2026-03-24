import React from 'react';
import { Section } from '../components/layout/Section';
import img1 from '../assets/images/escritorio/s1.jpg';
import img2 from '../assets/images/escritorio/s2.jpg';
import img3 from '../assets/images/escritorio/s3.jpg';
import img4 from '../assets/images/escritorio/s4.jpg';
import img5 from '../assets/images/escritorio/s5.jpg';
import img6 from '../assets/images/escritorio/s6.jpg';
import img7 from '../assets/images/escritorio/s7.jpg';

const images = [
  { src: (img1 as any).src, alt: 'Escritório - Vista 1', className: 'lg:col-span-2 lg:row-span-2' },
  { src: (img2 as any).src, alt: 'Escritório - Vista 2', className: '' },
  { src: (img3 as any).src, alt: 'Escritório - Vista 3', className: '' },
  { src: (img4 as any).src, alt: 'Escritório - Vista 4', className: '' },
  { src: (img5 as any).src, alt: 'Escritório - Vista 5', className: '' },
  { src: (img6 as any).src, alt: 'Escritório - Vista 6', className: 'lg:col-span-2' },
  { src: (img7 as any).src, alt: 'Escritório - Vista 7', className: 'lg:col-span-2' },
];

export const Gallery: React.FC = () => {
  return (
    <Section id="escritorio" className="bg-brand-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brand-black mb-4">Ambiente Exclusivo</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p className="font-sans text-brand-gray font-light max-w-lg mx-auto">
          Um espaço planejado para o conforto, discrição e excelência no atendimento.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-2xl shadow-lg ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
