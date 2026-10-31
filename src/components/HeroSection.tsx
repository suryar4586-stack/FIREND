import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../data/content';
import { heroPhoto } from '../data/photos';
import { Sparkles, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Opening entrance timeline
      const tl = gsap.timeline();

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.25, opacity: 0 },
        { scale: 1.08, opacity: 1, duration: 2.2, ease: 'power2.out' }
      )
        .fromTo(
          contentRef.current?.querySelectorAll('.hero-anim'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3, stagger: 0.22, ease: 'power3.out' },
          '-=1.2'
        )
        .fromTo(
          indicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.5'
        );

      // ScrollTrigger: background slowly zooms out and content fades as user scrolls
      gsap.to(bgImageRef.current, {
        scale: 0.96,
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -70,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '70% top',
          scrub: true,
        },
      });

      gsap.to(indicatorRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '30% top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToExplore = () => {
    const target = document.getElementById('moments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0C0E14]"
    >
      {/* Fullscreen Paris Background Image with Cinematic Lighting & Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={bgImageRef}
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          className="w-full h-full object-cover object-center will-change-transform transform origin-center"
        />

        {/* Cinematic Colour Grading Overlays */}
        {/* Soft Paris twilight gradient (blue, purple, warm gold) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-[#0C0E14]/40 to-[#0C0E14]/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#181124]/30 to-[#0C0E14]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20112A]/30 via-transparent to-[#10192A]/30 mix-blend-color-dodge pointer-events-none" />

        {/* Film grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none opacity-30" />
      </div>

      {/* Main Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center select-none"
      >
        <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-sans-modern uppercase tracking-[0.3em] mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>A Story in Paris Atmosphere</span>
        </div>

        <h1 className="hero-anim text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-italiana font-normal text-white tracking-[0.06em] leading-[1.05] mb-6 drop-shadow-2xl">
          {siteContent.hero.greeting}
        </h1>

        <div className="hero-anim w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent my-3" />

        <p className="hero-anim text-lg sm:text-2xl md:text-3xl font-serif-editorial italic font-light text-white/95 tracking-wide max-w-2xl leading-relaxed mb-10 drop-shadow-md text-balance-editorial">
          "{siteContent.hero.subheading}"
        </p>

        {/* Animated "Let's Explore ↓" button */}
        <button
          onClick={scrollToExplore}
          className="hero-anim group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500/90 via-amber-500/90 to-rose-500/90 hover:from-rose-500 hover:to-amber-500 text-white text-xs sm:text-sm font-sans-modern uppercase tracking-[0.25em] font-medium shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-white/30"
        >
          <span className="relative z-10">{siteContent.hero.ctaButton}</span>
          <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </button>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-8 inset-x-0 z-10 flex flex-col items-center justify-center gap-2.5 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans-modern text-white/70">
          {siteContent.hero.scrollHint}
        </span>
        <div className="w-[1.5px] h-10 bg-white/20 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 bg-amber-300 rounded-full absolute top-0 animate-[heroScrollDown_2s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes heroScrollDown {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 1; }
          80% { transform: translateY(200%); opacity: 0; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
