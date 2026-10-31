import React from 'react';
import { playlistSongs, Song } from '../data/playlist';
import { siteContent } from '../data/content';
import { MusicCard } from './MusicCard';
import { Headphones, Sparkles } from 'lucide-react';

interface PlaylistSectionProps {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlaySong: (song: Song) => void;
  onPauseSong: () => void;
  onSeekSong?: (fraction: number) => void;
}

export const PlaylistSection: React.FC<PlaylistSectionProps> = ({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  onPlaySong,
  onPauseSong,
  onSeekSong,
}) => {
  return (
    <section
      id="playlist"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#FAF4FB] via-[#F4ECF8] to-[#FFF9F6] text-[#2D2422] overflow-hidden"
    >
      {/* Background ambient lighting blobs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-800 text-[11px] font-sans-modern uppercase tracking-[0.25em] font-medium">
            <Headphones className="w-3.5 h-3.5 text-purple-600" />
            <span>Soundtrack of Memories</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-italiana text-[#2D2422] tracking-wide mb-4">
            {siteContent.playlist.heading}
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 mx-auto my-4" />
          <p className="text-sm sm:text-base font-serif-editorial italic text-[#2D2422]/75">
            "{siteContent.playlist.subheading}"
          </p>
        </div>

        {/* Vertically scrollable grid: 1 col on mobile, 2 on tablet/laptop, 3 on wide desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {playlistSongs.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              isActive={currentSong?.id === song.id}
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              onPlay={onPlaySong}
              onPause={onPauseSong}
              onSeek={onSeekSong}
            />
          ))}
        </div>

        {/* Bottom playlist note */}
        <div className="mt-16 text-center text-xs font-sans-modern uppercase tracking-widest text-[#2D2422]/50 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Click any track to immerse in the original music</span>
        </div>
      </div>
    </section>
  );
};
