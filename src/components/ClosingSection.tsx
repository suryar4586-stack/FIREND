import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { closingPhoto } from '../data/photos';
import { siteContent } from '../data/content';
import { Heart, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ClosingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow cinematic zoom animation
      gsap.fromTo(
        bgImageRef.current,
        { scale: 1.18 },
        {
          scale: 1.02,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Fade-in typography
      gsap.fromTo(
        textRef.current?.querySelectorAll('.closing-fade'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.22,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-[#1A1215]"
    >
      {/* Fullscreen Photo with Warm Golden Sunset Cinematic Gradient */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={bgImageRef}
          src={closingPhoto.src}
          alt={closingPhoto.alt}
          className="w-full h-full object-cover object-top will-change-transform"
        />

        {/* Cinematic Soft Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1215] via-[#1A1215]/50 to-[#1A1215]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#251019]/30 to-[#1A1215]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-rose-950/40 pointer-events-none" />

        {/* Film grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none opacity-30" />
      </div>

      {/* Top Spacer */}
      <div className="relative z-10 pt-20" />

      {/* Main Closing Typography */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center select-none"
      >
        <div className="closing-fade inline-flex items-center gap-2 mb-6 text-amber-300 font-sans-modern text-[11px] uppercase tracking-[0.35em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Epilogue</span>
        </div>

        <h2 className="closing-fade text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-italiana font-normal text-white tracking-[0.06em] leading-[1.1] mb-6 drop-shadow-xl text-balance-editorial">
          {siteContent.closing.mainHeading}
        </h2>

        <div className="closing-fade w-20 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300 to-transparent my-4" />

        <p className="closing-fade text-base sm:text-xl md:text-2xl font-serif-editorial italic font-light text-white/90 tracking-wide max-w-xl text-balance-editorial mb-8">
          "{siteContent.closing.subheading}"
        </p>

        {/* Final Text Highlight */}
        <div className="closing-fade px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans-modern tracking-[0.2em] uppercase text-xs sm:text-sm font-semibold shadow-lg">
          {siteContent.closing.finalText}
        </div>
      </div>

      {/* Bottom Footer Signature */}
      <div className="relative z-10 pb-16 pt-24 px-6 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-sm font-sans-modern tracking-[0.3em] uppercase text-white/80 mb-3">
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <span>{siteContent.closing.footerSignature}</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.25em] font-sans-modern text-white/40">
          A Personal Storytelling Experience for Harshitha
        </p>
      </div>
    </section>
  );
};
