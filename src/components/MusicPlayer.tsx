import React from 'react';
import { Song } from '../data/playlist';
import { Play, Pause, SkipForward, SkipBack, X } from 'lucide-react';

interface MusicPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onSeek: (fraction: number) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  onTogglePlay,
  onNext,
  onPrev,
  onClose,
  onSeek,
}) => {
  if (!currentSong) return null;

  const progressPercent = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(1, clickX / rect.width));
    onSeek(fraction);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs <= 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed bottom-6 inset-x-4 sm:inset-x-8 md:max-w-2xl md:mx-auto z-40 bg-neutral-900/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 sm:p-4 shadow-2xl text-white transition-all duration-300 animate-slideUp">
      {/* Top Scrub Progress Bar */}
      <div
        onClick={handleProgressBarClick}
        className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer mb-3 group"
      >
        <div
          className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full transition-all duration-100"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Thumbnail & Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10 shadow-md">
            <img
              src={currentSong.artwork}
              alt={currentSong.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h5 className="text-sm font-sans-modern font-semibold truncate leading-tight text-white">
              {currentSong.title}
            </h5>
            <p className="text-[11px] font-sans-modern text-white/60 truncate">
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onPrev}
            aria-label="Previous Track"
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-400 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={onNext}
            aria-label="Next Track"
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Time & Dismiss */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline text-xs font-mono text-white/50">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <button
            onClick={onClose}
            aria-label="Close Music Player"
            className="p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
