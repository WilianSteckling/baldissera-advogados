'use client';

import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Modal } from '../components/ui/Modal';

interface Area {
  title: string;
  description: string;
  atuacao: string;
}

const areas: Area[] = [
  {
    title: 'Direito Civil',
    description: 'É o principal ramo do direito privado, que trata do conjunto de normas reguladoras dos direitos e obrigações de ordem privada concernentes às pessoas, aos seus bens e às suas relações.',
    atuacao: 'Indenizações por danos morais e materiais, responsabilidade civil, direito de vizinhança, posse e propriedade.',
  },
  {
    title: 'Direito Securitário',
    description: 'Regula as relações entre seguradoras, corretores e consumidores, tratando de questões relacionadas a contratos de seguro.',
    atuacao: 'Negativa de cobertura de seguro (vida, automóvel, residencial ou saúde), atraso no pagamento de indenização, cláusulas abusivas e cancelamento indevido de contrato.',
  },
  {
    title: 'Direito de Família e Sucessões',
    description: 'Trata das relações familiares e da partilha de bens após a morte, regulando aspectos como casamentos, divórcios, guarda de filhos e heranças.',
    atuacao: 'Divórcio, guarda de filhos, pensão alimentícia, inventário e testamento.',
  },
  {
    title: 'Direito Médico e da Saúde',
    description: 'Defende os direitos de pacientes e profissionais da saúde, abrangendo responsabilidades médicas, acesso a tratamentos e questões de planos de saúde.',
    atuacao: 'Erro médico, negativa de plano de saúde, cirurgias urgentes não autorizadas e responsabilidade hospitalar.',
  },
  {
    title: 'Direito Tributário',
    description: 'Regula a arrecadação de tributos e a relação entre Fisco e contribuinte, buscando a justa aplicação das leis fiscais.',
    atuacao: 'Contestação de impostos indevidos, recuperação de créditos tributários e planejamento tributário.',
  },
  {
    title: 'Direito do Trabalho',
    description: 'Disciplina as relações entre empregados e empregadores, garantindo direitos e deveres de ambas as partes.',
    atuacao: 'Verbas rescisórias, horas extras, vínculo empregatício, assédio moral e defesa de ambas as partes.',
  },
  {
    title: 'Direito Contratual',
    description: 'Especializado na elaboração, revisão e interpretação de contratos, assegurando a validade e o cumprimento das cláusulas.',
    atuacao: 'Contratos de prestação de serviços, compra e venda, distratos e análise de cláusulas abusivas.',
  },
  {
    title: 'Direito Societário',
    description: 'Regula a constituição, organização e funcionamento das sociedades empresariais, incluindo fusões, aquisições e dissoluções.',
    atuacao: 'Abertura e encerramento de empresas, acordos entre sócios, resolução de conflitos, exclusão de sócio e reorganizações (fusão, cisão).',
  },
  {
    title: 'Direito Empresarial',
    description: 'Abrange as normas que regulam a atividade das empresas, desde sua criação até a proteção de seus interesses comerciais.',
    atuacao: 'Contratos comerciais, recuperação judicial, falência, responsabilidade de sócios e registro de marcas.',
  },
  {
    title: 'Direito Previdenciário',
    description: 'Voltado à proteção social do trabalhador e de seus dependentes, assegurando o acesso a benefícios da Previdência Social.',
    atuacao: 'Aposentadoria (idade ou invalidez), pensão por morte, auxílio-doença e BPC/LOAS.',
  },
  {
    title: 'Direito Imobiliário',
    description: 'Envolve as relações jurídicas relativas a bens imóveis, como compra, venda, aluguel, regularização e disputas de propriedade.',
    atuacao: 'Compra e venda, usucapião, despejo, locação e regularização de imóveis.',
  },
  {
    title: 'Direito Digital e Proteção de Dados',
    description: 'Lida com as questões legais do mundo digital e a privacidade de dados pessoais, como a LGPD e crimes cibernéticos.',
    atuacao: 'LGPD, uso indevido de dados, responsabilidade por publicações na internet e crimes virtuais.',
  },
  {
    title: 'Direito Ambiental',
    description: 'Protege o meio ambiente e regula o uso sustentável dos recursos naturais, combatendo danos e promovendo a sustentabilidade.',
    atuacao: 'Licenciamento ambiental, ações por danos ambientais, loteamentos irregulares e áreas de preservação.',
  },
  {
    title: 'Direito Administrativo',
    description: 'Trata da atuação do Estado e sua relação com os cidadãos, envolvendo licitações, concursos públicos e responsabilidade estatal.',
    atuacao: 'Concursos públicos, licitações, processos administrativos disciplinares e danos causados pelo Estado.',
  },
  {
    title: 'Direito Penal',
    description: 'Regula os crimes e as penas impostas aos infratores, garantindo a defesa e o devido processo legal.',
    atuacao: 'Defesa em processos criminais, crimes contra o patrimônio ou honra e medidas cautelares.',
  },
  {
    title: 'Direito Agrário',
    description: 'Regula as relações jurídicas relativas à atividade rural e à propriedade da terra, incluindo questões de uso e posse da terra.',
    atuacao: 'Arrendamento rural, usucapião rural, regularização fundiária e questões com o INCRA.',
  },
  {
    title: 'Direito Bancário',
    description: 'Trata da relação entre clientes e instituições financeiras, buscando a revisão de contratos e a defesa contra abusos.',
    atuacao: 'Revisão de contratos de financiamento, cobranças indevidas, negativação irregular e juros abusivos.',
  },
  {
    title: 'Direito do Consumidor',
    description: 'Defende os direitos dos consumidores em suas relações com fornecedores, protegendo-os contra práticas abusivas e produtos defeituosos.',
    atuacao: 'Cobrança indevida, propaganda enganosa, vício em produto ou serviço e negativação indevida.',
  },
];

export const Services: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  return (
    <Section id="areas" className="bg-[#fcfcfc]">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-brand-black mb-4">Áreas de Atuação</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map((area) => (
          <div
            key={area.title}
            onClick={() => setSelectedArea(area)}
            className="group p-6 border border-gray-100 rounded-xl bg-white hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-serif text-lg text-brand-black group-hover:text-brand-darkGreen transition-colors">
              {area.title}
            </h3>
            <p className="text-xs text-brand-gray font-light mt-2 line-clamp-2">{area.description}</p>
            <span className="inline-block mt-4 text-[10px] tracking-widest uppercase text-brand-gold font-semibold group-hover:translate-x-1 transition-transform">
              Saiba mais →
            </span>
          </div>
        ))}
      </div>

      {selectedArea && (
        <Modal
          isOpen={!!selectedArea}
          onClose={() => setSelectedArea(null)}
          title={selectedArea.title}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold font-bold mb-2">Descrição</h4>
              <p className="text-brand-gray font-light leading-relaxed">{selectedArea.description}</p>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold font-bold mb-2">Atuação</h4>
              <p className="text-brand-gray font-light leading-relaxed">{selectedArea.atuacao}</p>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};