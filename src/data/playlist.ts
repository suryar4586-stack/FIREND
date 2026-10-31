export interface Song {
  id: string;
  order: number;
  title: string;
  artist: string;
  vibe: string;
  artwork: string;
  audioSrc: string;
  badgeColor: string;
  gradient: string;
}

export const playlistSongs: Song[] = [
  {
    id: 'othayadi-pathayila',
    order: 1,
    title: 'Othayadi Pathayila',
    artist: 'Anirudh Ravichander • Kanaa',
    vibe: 'Soulful & Nostalgic',
    artwork: '/images/playlist/thayadi-pathayila.png',
    audioSrc: '/audio/othayadi-pathayila.mp3',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    gradient: 'from-rose-900/40 via-purple-900/20 to-black/60',
  },
  {
    id: 'brooklyn-baby',
    order: 2,
    title: 'Brooklyn Baby',
    artist: 'Lana Del Rey',
    vibe: 'Dreamy & Vintage Indie',
    artwork: '/images/playlist/brooklyn-baby.png',
    audioSrc: '/audio/brooklyn-baby.mp3',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    gradient: 'from-indigo-900/40 via-blue-900/20 to-black/60',
  },
  {
    id: 'manjal-veilyil',
    order: 3,
    title: 'Manjal Veilyil',
    artist: 'Hariharan & Krish • Vettaiyaadu Vilaiyaadu',
    vibe: 'The Coincidence Anthem',
    artwork: '/images/playlist/manjal-veilyil.png',
    audioSrc: '/audio/manjal-veilyil.mp3',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    gradient: 'from-amber-900/40 via-orange-900/20 to-black/60',
  },
  {
    id: 'ye-tune-kya-kiya',
    order: 4,
    title: 'Ye Tune Kya Kiya',
    artist: 'Javed Bashir • Once Upon a Time in Mumbaai Dobaara',
    vibe: 'Passionate & Melodic Sufi',
    artwork: '/images/playlist/ye-tune-kiya-kiya.png',
    audioSrc: '/audio/ye-tune-kya-kiya.mp3',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    gradient: 'from-emerald-900/40 via-teal-900/20 to-black/60',
  },
  {
    id: 'oxygen',
    order: 5,
    title: 'Oxygen',
    artist: 'Hiphop Tamizha • Kavan',
    vibe: 'Fresh & Feel-Good Rhythm',
    artwork: '/images/playlist/oxygen.png',
    audioSrc: '/audio/oxygen.mp3',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    gradient: 'from-sky-900/40 via-cyan-900/20 to-black/60',
  },
  {
    id: 'perfect',
    order: 6,
    title: 'Perfect',
    artist: 'Ed Sheeran',
    vibe: 'Timeless & Heartfelt Acoustic',
    artwork: '/images/playlist/perfect.png',
    audioSrc: '/audio/perfect.mp3',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    gradient: 'from-fuchsia-900/40 via-pink-900/20 to-black/60',
  },
];
