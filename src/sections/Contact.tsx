'use client';
import React from 'react';
import { Section } from '../components/layout/Section';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contato" className="bg-brand-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brand-black mb-4">Entre em Contato</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p className="text-brand-gray font-light max-w-md mx-auto">
          Estamos prontos para oferecer a melhor estratégia jurídica para o seu caso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        <div className="flex flex-col items-center text-center space-y-3 p-8 border border-gray-100 rounded-xl">
          <div className="p-3 border border-gray-100 rounded-lg text-brand-gold">
            <Phone size={20} />
          </div>
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold font-bold">Telefone / WhatsApp</p>
          <p className="text-brand-black font-light text-sm">(49) 3521-3777</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-3 p-8 border border-gray-100 rounded-xl">
          <div className="p-3 border border-gray-100 rounded-lg text-brand-gold">
            <Mail size={20} />
          </div>
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold font-bold">E-mail</p>
          <p className="text-brand-black font-light text-sm">contato@silverio.adv.br</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-3 p-8 border border-gray-100 rounded-xl">
          <div className="p-3 border border-gray-100 rounded-lg text-brand-gold">
            <MapPin size={20} />
          </div>
          <p className="font-sans text-xs tracking-widest uppercase text-brand-gold font-bold">Localização</p>
          <p className="text-brand-black font-light text-sm">Joaçaba, SC</p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/554935213777"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-darkGreen text-brand-white font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-brand-black transition-all duration-300 group"
        >
          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
          Agendar Consulta Via WhatsApp
        </a>
      </div>
    </Section>
  );
};