import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      if (totalScroll > 450) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Top progress line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#C99A9E] via-[#EADCCB] to-[#C99A9E] transition-all duration-150 ease-out"
          style={{ width: `${Math.min(scrollProgress * 100, 100)}%` }}
        />
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-[#FFF9F3]/90 backdrop-blur-md border border-[#EADCCB] text-[#493B36] shadow-lg hover:bg-[#F3DDE1] hover:border-[#C99A9E] transition-all duration-500 ease-out transform ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4 stroke-[1.75]" />
      </button>
    </>
  );
};
