import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { galleryPhotos } from './data/photos';
import { playlistSongs, Song } from './data/playlist';

import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { IntroGallery } from './components/IntroGallery';
import { OverthinkingSection } from './components/OverthinkingSection';
import { MemoryTimeline } from './components/MemoryTimeline';
import { PlaylistSection } from './components/PlaylistSection';
import { FinalGallery } from './components/FinalGallery';
import { ClosingSection } from './components/ClosingSection';
import { MusicPlayer } from './components/MusicPlayer';
import { ImageLightbox } from './components/ImageLightbox';

function App() {
  useScrollAnimations();

  // Audio Playback State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Initialize Audio
  const nextSongRef = useRef<() => void>(() => {});

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const onEnded = () => {
      nextSongRef.current();
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
    };
  }, []);

  const handlePlaySong = (song: Song) => {
    if (!audioRef.current) return;

    if (currentSong?.id === song.id) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log('Audio error:', e));
      return;
    }

    audioRef.current.src = song.audioSrc;
    audioRef.current.load();
    audioRef.current
      .play()
      .then(() => {
        setCurrentSong(song);
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Playback prevented:', err);
        setCurrentSong(song);
      });
  };

  const handlePauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = () => {
    if (!currentSong) {
      handlePlaySong(playlistSongs[0]);
      return;
    }

    if (isPlaying) {
      handlePauseSong();
    } else {
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(console.warn);
    }
  };

  const handleNextSong = () => {
    if (!currentSong) {
      handlePlaySong(playlistSongs[0]);
      return;
    }
    const curIdx = playlistSongs.findIndex((s) => s.id === currentSong.id);
    const nextIdx = (curIdx + 1) % playlistSongs.length;
    handlePlaySong(playlistSongs[nextIdx]);
  };

  useEffect(() => {
    nextSongRef.current = handleNextSong;
  });

  const handlePrevSong = () => {
    if (!currentSong) {
      handlePlaySong(playlistSongs[0]);
      return;
    }
    const curIdx = playlistSongs.findIndex((s) => s.id === currentSong.id);
    const prevIdx = (curIdx - 1 + playlistSongs.length) % playlistSongs.length;
    handlePlaySong(playlistSongs[prevIdx]);
  };

  const handleSeek = (fraction: number) => {
    if (audioRef.current && duration > 0) {
      const targetTime = fraction * duration;
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleClosePlayer = () => {
    handlePauseSong();
    setCurrentSong(null);
  };

  // Lightbox handlers
  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0C0E14] text-white selection:bg-rose-500/30 selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar & Back to Top */}
      <ScrollProgress />

      {/* Luxury Navbar with Live Audio State */}
      <Navbar
        currentSong={currentSong}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
      />

      {/* Main Content Sections Following Exact Prompt Sequence */}
      <main className="w-full overflow-x-hidden">
        {/* 01: Paris Hero Section */}
        <HeroSection />

        {/* 02: Photo Introduction Gallery */}
        <IntroGallery onOpenLightbox={handleOpenLightbox} />

        {/* 03 & 04: Danger Button & Three Overthinking Questions */}
        <OverthinkingSection />

        {/* 05, 06, 07: Three Little Memories (Pongal, April 11, Manja Veilyil) */}
        <MemoryTimeline />

        {/* 08: Harshitha's Playlist (6 Songs Scrollable Grid) */}
        <PlaylistSection
          currentSong={currentSong}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onPlaySong={handlePlaySong}
          onPauseSong={handlePauseSong}
          onSeekSong={handleSeek}
        />

        {/* 09: Final Photo Gallery */}
        <FinalGallery onOpenLightbox={handleOpenLightbox} />

        {/* 10: Closing Section */}
        <ClosingSection />
      </main>

      {/* Persistent Bottom Mini Music Player */}
      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onTogglePlay={handleTogglePlay}
        onNext={handleNextSong}
        onPrev={handlePrevSong}
        onClose={handleClosePlayer}
        onSeek={handleSeek}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      <ImageLightbox
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </div>
  );
}

export default App;
