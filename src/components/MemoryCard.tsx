import React from 'react';
import { Sparkles, Music, Smile, Frown } from 'lucide-react';

interface MemoryCardProps {
  memory: {
    id: string;
    number: string;
    tag: string;
    heading: string;
    story: string;
    closingNote?: string;
    design: {
      theme: string;
      bgClass: string;
      accentColor: string;
      badgeBg: string;
      gradientBg: string;
      icon: string;
    };
  };
  index: number;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory }) => {

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto my-16 sm:my-24 p-6 sm:p-10 rounded-3xl ${memory.design.bgClass} border-2 border-black/5 shadow-2xl transition-all duration-500 hover:shadow-3xl`}
    >
      {/* Top Header Tag */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{memory.design.icon}</span>
          <span
            className={`px-3.5 py-1 rounded-full text-[11px] font-sans-modern uppercase tracking-widest font-semibold border ${memory.design.badgeBg}`}
          >
            {memory.tag}
          </span>
        </div>
        <span className="text-3xl font-italiana font-bold opacity-30">
          {memory.number}
        </span>
      </div>

      {/* Main Heading */}
      <h3 className="text-2xl sm:text-4xl font-italiana text-[#2D2422] tracking-wide mb-6">
        {memory.heading}
      </h3>

      {/* Memory Specific Creative Illustrations & Treatments */}
      {memory.id === 'memory-pongal' && (
        <div className="mb-6 p-5 rounded-2xl bg-amber-100/70 border border-amber-200 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-200 flex items-center justify-center text-3xl shadow-inner shrink-0">
            🍲
          </div>
          <div>
            <span className="text-xs font-sans-modern font-semibold uppercase tracking-wider text-amber-900 block mb-1">
              Priority: 100% Focused on the Pongal
            </span>
            <p className="text-xs sm:text-sm text-amber-950/80 font-sans-modern">
              Not even a glance! When the food is that delicious, visitors simply don't exist.
            </p>
          </div>
        </div>
      )}

      {memory.id === 'memory-april11' && (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Expression 1: Happy */}
          <div className="p-4 rounded-2xl bg-emerald-100/80 border border-emerald-300/60 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-200 text-emerald-800">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-sans-modern tracking-wider font-bold text-emerald-900 block">
                Expression 1: Happy 😊
              </span>
              <span className="text-xs text-emerald-800">"Because of the waffle 🧇"</span>
            </div>
          </div>

          {/* Expression 2: Angry */}
          <div className="p-4 rounded-2xl bg-rose-100/80 border border-rose-300/60 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-200 text-rose-800">
              <Frown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-sans-modern tracking-wider font-bold text-rose-900 block">
                Expression 2: Angry 😠
              </span>
              <span className="text-xs text-rose-800">"Because of the Dairy Milk 🍫"</span>
            </div>
          </div>
        </div>
      )}

      {memory.id === 'memory-manja' && (
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-purple-100/80 via-indigo-100/80 to-purple-100/80 border border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-purple-900">
              <Music className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-xs uppercase font-sans-modern tracking-wider font-semibold">
                Song: Manja Veilyil (Synchronized)
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-purple-600 bg-purple-200/60 px-2 py-0.5 rounded-md">
              Same exact line
            </span>
          </div>

          {/* Equalizer animation */}
          <div className="flex items-end gap-1.5 h-7 py-1">
            {[40, 80, 50, 95, 65, 30, 85, 60, 100, 45, 75, 55, 90, 40].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-full animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1.2s',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Story narrative */}
      <div className="pl-4 sm:pl-6 border-l-2 border-black/15">
        <p className="text-lg sm:text-2xl font-serif-editorial italic text-[#3D312E] leading-relaxed whitespace-pre-line font-light">
          "{memory.story}"
        </p>
      </div>

      {memory.closingNote && (
        <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs sm:text-sm font-sans-modern tracking-wider uppercase text-purple-800 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{memory.closingNote}</span>
        </div>
      )}
    </div>
  );
};
