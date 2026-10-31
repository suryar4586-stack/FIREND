export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: 'hero' | 'gallery' | 'memory' | 'closing';
  aspect?: 'tall' | 'square' | 'wide';
  accent?: string;
  borderColor?: string;
}

export const heroPhoto = {
  src: '/images/hero/tower.png',
  alt: 'Paris Eiffel Tower glowing at twilight along the Seine river',
  title: 'Parisian Dreams',
};

export const galleryPhotos: PhotoItem[] = [
  {
    id: 'portrait-radiant',
    src: '/images/gallery/portrait-radiant.png',
    alt: 'Harshitha radiant smiling portrait in dark blue dress',
    title: 'Pure Radiance',
    subtitle: 'A warm smile that brightens any ordinary day.',
    category: 'gallery',
    aspect: 'tall',
    accent: '#F3DDE1',
    borderColor: 'border-pink-300',
  },
  {
    id: 'cafe-aesthetic',
    src: '/images/gallery/cafe-aesthetic.jpg',
    alt: 'Café reflection with warm arched window and aesthetic ambiance',
    title: 'Café Reflections',
    subtitle: 'Quiet corners, gentle shadows, and warm tones.',
    category: 'gallery',
    aspect: 'tall',
    accent: '#EADCCB',
    borderColor: 'border-amber-300',
  },
  {
    id: 'staircase-serene',
    src: '/images/gallery/staircase-serene.jpg',
    alt: 'Sunlit rooftop staircase with lush plants and yellow architecture',
    title: 'Sunlit Steps',
    subtitle: 'Golden sunlight, calm steps, and quiet breezes.',
    category: 'gallery',
    aspect: 'tall',
    accent: '#C99A9E',
    borderColor: 'border-rose-300',
  },
];

export const closingPhoto = {
  src: '/images/gallery/portrait-radiant.png',
  alt: 'Radiant closing portrait of Harshitha',
  title: 'Keep Smiling',
};
