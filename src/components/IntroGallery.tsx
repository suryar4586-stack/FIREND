import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryPhotos } from '../data/photos';
import { siteContent } from '../data/content';
import { Maximize2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface IntroGalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const IntroGallery: React.FC<IntroGalleryProps> = ({ onOpenLightbox }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.fromTo(
        '.intro-gallery-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Staggered asymmetrical card reveals from different directions
      if (card1Ref.current) {
        gsap.fromTo(
          card1Ref.current,
          { x: -60, y: 40, opacity: 0, rotate: -3 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: -1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card1Ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (card2Ref.current) {
        gsap.fromTo(
          card2Ref.current,
          { y: 80, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card2Ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (card3Ref.current) {
        gsap.fromTo(
          card3Ref.current,
          { x: 60, y: 40, opacity: 0, rotate: 3 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 1,
            duration: 1.4,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card3Ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="moments"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EC] to-[#F7EEEC] text-[#3D312E] overflow-hidden"
    >
      {/* Decorative Pastel Backdrops */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="intro-gallery-header text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-rose-500 font-sans-modern text-[11px] uppercase tracking-[0.3em] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Memories in Focus</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-italiana text-[#3D312E] tracking-wide mb-4">
            {siteContent.photoIntro.heading}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-rose-400 to-amber-300 mx-auto my-4" />
          <p className="text-sm sm:text-base font-serif-editorial italic text-[#3D312E]/75">
            "{siteContent.photoIntro.subtitle}"
          </p>
        </div>

        {/* Asymmetrical Masonry Grid with Colorful Borders and Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Card 1: Portrait Selfie (Left column) */}
          <div ref={card1Ref} className="md:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenLightbox(0)}
              className="group relative w-full max-w-sm rounded-3xl p-3 sm:p-4 bg-white/90 shadow-xl border-2 border-pink-300/80 hover:border-pink-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-pink-50">
                <img
                  src={galleryPhotos[0].src}
                  alt={galleryPhotos[0].alt}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-pink-600 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-pink-500/80 text-white text-[10px] uppercase tracking-widest font-sans-modern backdrop-blur-md">
                  Moment 01
                </div>
              </div>

              <div className="pt-4 pb-2 px-1 text-center">
                <h3 className="font-serif-editorial italic text-xl text-[#3D312E]">
                  {galleryPhotos[0].title}
                </h3>
                <p className="text-xs font-sans-modern text-[#3D312E]/60 mt-1">
                  {galleryPhotos[0].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Center Highlight (Larger presence) */}
          <div ref={card2Ref} className="md:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenLightbox(1)}
              className="group relative w-full max-w-sm rounded-3xl p-3 sm:p-4 bg-white/90 shadow-2xl border-2 border-amber-300/80 hover:border-amber-400 transition-all duration-500 hover:shadow-3xl hover:scale-[1.03] cursor-pointer z-10"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-amber-50">
                <img
                  src={galleryPhotos[1].src}
                  alt={galleryPhotos[1].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-amber-600 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500/80 text-white text-[10px] uppercase tracking-widest font-sans-modern backdrop-blur-md">
                  Moment 02
                </div>
              </div>

              <div className="pt-4 pb-2 px-1 text-center">
                <h3 className="font-serif-editorial italic text-xl text-[#3D312E]">
                  {galleryPhotos[1].title}
                </h3>
                <p className="text-xs font-sans-modern text-[#3D312E]/60 mt-1">
                  {galleryPhotos[1].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Staircase & Sunlight (Right column) */}
          <div ref={card3Ref} className="md:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenLightbox(2)}
              className="group relative w-full max-w-sm rounded-3xl p-3 sm:p-4 bg-white/90 shadow-xl border-2 border-rose-300/80 hover:border-rose-400 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-rose-50">
                <img
                  src={galleryPhotos[2].src}
                  alt={galleryPhotos[2].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-rose-600 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-500/80 text-white text-[10px] uppercase tracking-widest font-sans-modern backdrop-blur-md">
                  Moment 03
                </div>
              </div>

              <div className="pt-4 pb-2 px-1 text-center">
                <h3 className="font-serif-editorial italic text-xl text-[#3D312E]">
                  {galleryPhotos[2].title}
                </h3>
                <p className="text-xs font-sans-modern text-[#3D312E]/60 mt-1">
                  {galleryPhotos[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
