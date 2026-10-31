import React, { useEffect, useCallback } from 'react';
import { galleryPhotos } from '../data/photos';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ImageLightboxProps {
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [currentIndex, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null) return null;

  const currentPhoto = galleryPhotos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-300"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-6 inset-x-6 sm:inset-x-10 flex items-center justify-between text-white/80 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="text-[11px] font-sans-modern tracking-[0.25em] uppercase text-white/90">
            {currentIndex + 1} of {galleryPhotos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photograph"
        className="absolute left-4 sm:left-8 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photograph"
        className="absolute right-4 sm:right-8 z-20 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image in Original Aspect Ratio */}
      <div
        className="relative max-w-5xl max-h-[85vh] p-4 sm:p-6 flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/60 border border-white/20">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl select-none"
          />
        </div>

        {/* Caption below image */}
        <div className="mt-4 text-center text-white/95 max-w-xl">
          <h3 className="text-xl sm:text-2xl font-italiana tracking-wide mb-1">
            {currentPhoto.title}
          </h3>
          <p className="text-xs sm:text-sm font-serif-editorial italic text-white/80">
            "{currentPhoto.subtitle}"
          </p>
        </div>
      </div>
    </div>
  );
};
