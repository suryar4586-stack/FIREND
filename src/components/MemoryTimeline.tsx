import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../data/content';
import { MemoryCard } from './MemoryCard';
import { Bookmark } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const MemoryTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline progress indicator animation
      gsap.fromTo(
        lineProgressRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="memories"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4F0] to-[#F5EFF6] text-[#2D2422] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-[11px] font-sans-modern uppercase tracking-[0.25em] font-medium">
            <Bookmark className="w-3.5 h-3.5 text-amber-600" />
            <span>Cherished Moments</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-italiana text-[#2D2422] tracking-wide mb-4">
            {siteContent.memories.heading}
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 mx-auto my-4" />
          <p className="text-sm sm:text-base font-serif-editorial italic text-[#2D2422]/75">
            "{siteContent.memories.subtitle}"
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative">
          {/* Animated Central Timeline Bar */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-black/5 rounded-full">
            <div
              ref={lineProgressRef}
              className="w-full bg-gradient-to-b from-amber-400 via-rose-400 to-purple-500 rounded-full"
            />
          </div>

          {/* Memory Cards */}
          <div className="space-y-12 relative z-10">
            {siteContent.memories.items.map((memory, index) => (
              <MemoryCard key={memory.id} memory={memory} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
