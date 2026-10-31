import React from 'react';
import { Song } from '../data/playlist';
import { Play, Pause, Radio } from 'lucide-react';

interface MusicCardProps {
  song: Song;
  isActive: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlay: (song: Song) => void;
  onPause: () => void;
  onSeek?: (fraction: number) => void;
}

export const MusicCard: React.FC<MusicCardProps> = ({
  song,
  isActive,
  isPlaying,
  currentTime,
  duration,
  onPlay,
  onPause,
  onSeek,
}) => {
  const isCurrentPlaying = isActive && isPlaying;
  const progressPercent =
    isActive && duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  const handleToggle = () => {
    if (isCurrentPlaying) {
      onPause();
    } else {
      onPlay(song);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onSeek) return;
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
    <div
      className={`group relative rounded-3xl p-5 sm:p-6 bg-white/80 backdrop-blur-xl border-2 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between ${
        isActive
          ? 'border-rose-400 ring-2 ring-rose-300/40 shadow-rose-200/50'
          : 'border-white/80 hover:border-rose-200'
      }`}
    >
      <div>
        {/* Album Artwork & Play overlay */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-md mb-5 group-hover:shadow-lg transition-all duration-500">
          <img
            src={song.artwork}
            alt={song.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
              isCurrentPlaying ? 'scale-105' : 'group-hover:scale-105'
            }`}
          />

          {/* Gradient Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Song Order Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-sans-modern tracking-widest uppercase text-white font-medium">
            Track 0{song.order}
          </div>

          {/* Center Play / Pause Floating Button */}
          <button
            onClick={handleToggle}
            aria-label={isCurrentPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
            className={`absolute inset-0 m-auto w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
              isCurrentPlaying
                ? 'bg-rose-500 text-white scale-100 opacity-100'
                : 'bg-white/90 text-neutral-900 hover:bg-rose-500 hover:text-white opacity-85 group-hover:opacity-100 group-hover:scale-105'
            }`}
          >
            {isCurrentPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </button>

          {/* Animated Equalizer Waves when active */}
          {isCurrentPlaying && (
            <div className="absolute bottom-3 right-3 flex items-end gap-1 px-2.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20">
              <span className="w-1 bg-rose-400 rounded-full h-4 animate-[bounce_0.6s_ease-in-out_infinite]" />
              <span className="w-1 bg-rose-300 rounded-full h-2 animate-[bounce_0.8s_ease-in-out_infinite]" />
              <span className="w-1 bg-rose-400 rounded-full h-5 animate-[bounce_0.5s_ease-in-out_infinite]" />
              <span className="w-1 bg-rose-300 rounded-full h-3 animate-[bounce_0.7s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* Vibe badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className={`px-3 py-0.5 rounded-full text-[10px] font-sans-modern uppercase tracking-wider font-semibold border ${song.badgeColor}`}
          >
            {song.vibe}
          </span>
          {isActive && (
            <span className="flex items-center gap-1 text-[10px] font-sans-modern text-rose-500 font-medium">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>Playing Now</span>
            </span>
          )}
        </div>

        {/* Title & Artist */}
        <h4 className="text-xl sm:text-2xl font-serif-editorial text-[#2D2422] font-semibold leading-tight line-clamp-1 mb-1">
          {song.title}
        </h4>
        <p className="text-xs sm:text-sm font-sans-modern text-[#2D2422]/65 mb-4 line-clamp-1">
          {song.artist}
        </p>
      </div>

      {/* Progress & Duration Bar */}
      <div>
        <div
          onClick={handleProgressBarClick}
          className="relative w-full h-2 bg-neutral-200/80 rounded-full overflow-hidden cursor-pointer group/bar mb-2"
        >
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#2D2422]/50">
          <span>{isActive ? formatTime(currentTime) : '0:00'}</span>
          <span>{isActive && duration > 0 ? formatTime(duration) : 'Track Audio'}</span>
        </div>
      </div>
    </div>
  );
};
