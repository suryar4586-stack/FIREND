import React, { useState } from 'react';
import { QuestionItem } from '../data/content';
import { HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface QuestionCardProps {
  item: QuestionItem;
  isOpenDefault?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ item, isOpenDefault = false }) => {
  const [isRevealed, setIsRevealed] = useState(isOpenDefault);

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 ${item.colorScheme.cardBg} border-2 ${item.colorScheme.border} shadow-2xl transition-all duration-500 hover:scale-[1.01]`}
    >
      {/* Category Tag & Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <span
          className={`px-3.5 py-1 rounded-full text-[11px] font-sans-modern uppercase tracking-widest font-medium ${item.colorScheme.tagBg}`}
        >
          {item.categoryTag}
        </span>
        <span className="text-white/40 text-xs font-mono">Question 0{item.id}</span>
      </div>

      {/* Question Title */}
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 rounded-xl bg-white/10 text-rose-400 shrink-0 mt-0.5">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="text-xl sm:text-2xl font-serif-editorial text-white leading-snug font-medium">
          {item.question}
        </h3>
      </div>

      {/* Reveal Answer Button */}
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="w-full flex items-center justify-between px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/15 text-white/90 text-xs sm:text-sm font-sans-modern tracking-wider uppercase transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2
            className={`w-4 h-4 ${isRevealed ? 'text-emerald-400' : 'text-amber-400'}`}
          />
          <span className="font-medium">
            {isRevealed ? 'Hide Answer' : 'Click to Reveal Answer'}
          </span>
        </div>
        {isRevealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Answer Expand Area */}
      <div
        className={`transition-all duration-500 ease-out overflow-hidden ${
          isRevealed ? 'max-h-96 opacity-100 mt-6 pt-6 border-t border-white/15' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative pl-4 border-l-2 border-rose-400/60">
          <p className="text-base sm:text-lg font-serif-editorial italic text-white/95 leading-relaxed whitespace-pre-line font-light">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};
