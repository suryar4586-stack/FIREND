import React from 'react';
import { AlertTriangle, Flame } from 'lucide-react';
import { siteContent } from '../data/content';

interface DangerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DangerButton: React.FC<DangerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-6">
      {/* Pulsing Danger Button */}
      <div className="relative group">
        {/* Subtle pulsing outer red glow */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700 animate-pulse pointer-events-none" />

        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative inline-flex items-center gap-3.5 px-8 sm:px-12 py-5 sm:py-6 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-sans-modern font-bold tracking-[0.22em] text-sm sm:text-base uppercase shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-red-300/60 overflow-hidden"
        >
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200 animate-bounce" />
          <span className="drop-shadow-md">{siteContent.overthinking.buttonText}</span>
          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200" />

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </button>
      </div>

      {/* Warning Text Below */}
      <p className="mt-5 text-xs sm:text-sm font-sans-modern tracking-[0.16em] uppercase text-rose-300/80 font-light max-w-md">
        {siteContent.overthinking.warningText}
      </p>
    </div>
  );
};
