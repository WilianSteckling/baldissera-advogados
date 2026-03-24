import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 ${dark ? 'bg-[#1a1a1a] text-[#f8fafc]' : 'bg-[#f8fafc] text-[#1a1a1a]'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};