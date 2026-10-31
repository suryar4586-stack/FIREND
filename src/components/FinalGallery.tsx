import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryPhotos } from '../data/photos';
import { siteContent } from '../data/content';
import { Camera, Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FinalGalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const FinalGallery: React.FC<FinalGalleryProps> = ({ onOpenLightbox }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.final-gallery-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#FFF9F6] via-[#FDF5F2] to-[#FBF0EC] text-[#2D2422] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-800 text-[11px] font-sans-modern uppercase tracking-[0.25em] font-medium">
            <Camera className="w-3.5 h-3.5 text-rose-500" />
            <span>Visual Keepsakes</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-italiana text-[#2D2422] tracking-wide mb-4">
            {siteContent.finalGallery.heading}
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-rose-400 to-amber-300 mx-auto my-4" />
          <p className="text-sm sm:text-base font-serif-editorial italic text-[#2D2422]/75">
            "{siteContent.finalGallery.subtitle}"
          </p>
        </div>

        {/* Pinterest-style Masonry Layout with Asymmetrical Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Item 1: Large Café Perspective (Left) */}
          <div className="final-gallery-item md:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenLightbox(1)}
              className="group relative w-full max-w-md bg-white p-4 pb-6 rounded-3xl shadow-xl border border-amber-200/80 -rotate-1 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-amber-50">
                <img
                  src={galleryPhotos[1].src}
                  alt={galleryPhotos[1].alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-3 bg-white/95 rounded-full shadow-lg text-amber-800">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-serif-editorial italic text-lg text-[#2D2422]">
                  {galleryPhotos[1].title}
                </h4>
                <p className="text-[11px] font-sans-modern text-[#2D2422]/60">
                  {galleryPhotos[1].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: Centerpiece Radiant Portrait (Center) */}
          <div className="final-gallery-item md:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenLightbox(0)}
              className="group relative w-full max-w-md bg-white p-5 pb-8 rounded-3xl shadow-2xl border-2 border-rose-300 rotate-1 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer z-10"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-rose-50">
                <img
                  src={galleryPhotos[0].src}
                  alt={galleryPhotos[0].alt}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-3 bg-white/95 rounded-full shadow-lg text-rose-800">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-[10px] font-sans-modern uppercase tracking-widest text-rose-500 font-semibold block mb-1">
                  Featured Moment
                </span>
                <h4 className="font-serif-editorial italic text-2xl text-[#2D2422]">
                  {galleryPhotos[0].title}
                </h4>
                <p className="text-xs font-sans-modern text-[#2D2422]/60 mt-1">
                  {galleryPhotos[0].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Sunlit Staircase (Right) */}
          <div className="final-gallery-item md:col-span-4 flex justify-center">
            <div
              onClick={() => onOpenLightbox(2)}
              className="group relative w-full max-w-md bg-white p-4 pb-6 rounded-3xl shadow-xl border border-pink-200/80 -rotate-2 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-pink-50">
                <img
                  src={galleryPhotos[2].src}
                  alt={galleryPhotos[2].alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-3 bg-white/95 rounded-full shadow-lg text-pink-800">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-serif-editorial italic text-lg text-[#2D2422]">
                  {galleryPhotos[2].title}
                </h4>
                <p className="text-[11px] font-sans-modern text-[#2D2422]/60">
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
