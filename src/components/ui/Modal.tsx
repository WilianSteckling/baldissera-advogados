import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60">
      <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="font-serif text-2xl text-brand-darkGreen">{title}</h3>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-black transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 font-sans text-brand-black leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};