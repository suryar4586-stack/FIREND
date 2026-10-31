import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Music } from 'lucide-react';
import { siteContent } from '../data/content';
import { Song } from '../data/playlist';

interface NavbarProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSong, isPlaying, onTogglePlay }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-white tracking-[0.2em] text-xs uppercase font-cinzel font-medium transition-all duration-300 hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 p-[1px] flex items-center justify-center shadow-md">
            <div className="w-full h-full rounded-full bg-[#1A161E] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-rose-300 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <span className="font-serif-editorial text-lg tracking-[0.08em] normal-case italic font-normal text-white">
            Harshitha
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteContent.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-sans-modern tracking-[0.24em] uppercase text-white/80 hover:text-white relative py-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}

          {/* Mini active music button in navbar */}
          {currentSong && (
            <button
              onClick={onTogglePlay}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-xs transition-all duration-300"
              title={isPlaying ? 'Pause music' : 'Play music'}
            >
              <Music className={`w-3.5 h-3.5 text-rose-400 ${isPlaying ? 'animate-bounce' : ''}`} />
              <span className="max-w-[100px] truncate text-[11px] text-white/90">
                {currentSong.title}
              </span>
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            </button>
          )}
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {currentSong && (
            <button
              onClick={onTogglePlay}
              aria-label="Toggle audio"
              className="p-2 rounded-full bg-white/10 text-rose-300"
            >
              <Music className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 text-white/90 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 py-6 px-8 shadow-2xl opacity-100' : 'max-h-0 py-0 px-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {siteContent.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs tracking-[0.25em] uppercase text-white/90 hover:text-rose-300 py-1 font-sans-modern transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
