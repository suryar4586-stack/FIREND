import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { DangerButton } from './DangerButton';
import { QuestionCard } from './QuestionCard';
import { ArrowDown, ShieldAlert, Sparkles } from 'lucide-react';

export const OverthinkingSection: React.FC = () => {
  const [isZoneActive, setIsZoneActive] = useState(true);

  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="overthinking"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#180C11] via-[#210D16] to-[#160B10] text-white overflow-hidden"
    >
      {/* Background Red / Burgundy Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-rose-300 text-[11px] font-sans-modern uppercase tracking-[0.25em]">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Unfiltered & Honest</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-italiana text-white tracking-wide mb-3">
            {siteContent.overthinking.sectionTitle}
          </h2>
          <p className="text-sm font-serif-editorial italic text-white/70">
            {siteContent.overthinking.sectionSubtitle}
          </p>
        </div>

        {/* Center Danger Button */}
        <DangerButton
          isOpen={isZoneActive}
          onToggle={() => setIsZoneActive(!isZoneActive)}
        />

        {/* Question Cards Grid */}
        <div
          className={`transition-all duration-700 ease-out overflow-hidden ${
            isZoneActive ? 'max-h-[3000px] opacity-100 mt-14' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          <div className="space-y-8">
            {siteContent.overthinking.questions.map((item) => (
              <QuestionCard key={item.id} item={item} isOpenDefault={item.id === 1} />
            ))}
          </div>

          {/* Bottom Transition Prompt */}
          <div className="mt-20 pt-10 border-t border-white/10 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 text-rose-300/80 mb-3 text-xs font-sans-modern uppercase tracking-[0.25em]">
              <Sparkles className="w-4 h-4" />
              <span>Time for Lighter Moments</span>
            </div>
            <p className="text-lg sm:text-2xl font-serif-editorial italic text-white/90 mb-8 max-w-lg">
              "{siteContent.overthinking.exitNotice}"
            </p>

            <button
              onClick={scrollToMemories}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-neutral-900 font-sans-modern font-semibold text-xs uppercase tracking-[0.22em] shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>{siteContent.overthinking.exitButton}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
