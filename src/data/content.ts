export interface QuestionItem {
  id: number;
  question: string;
  answer: string;
  categoryTag: string;
  colorScheme: {
    cardBg: string;
    border: string;
    tagBg: string;
    textColor: string;
    accentGlow: string;
  };
}

export const siteContent = {
  hero: {
    greeting: "HEY, HARSHITHA!",
    subheading: "A little website, a few memories, and some things I wanted to tell you.",
    ctaButton: "Let's Explore ↓",
    scrollHint: "SCROLL TO EXPLORE",
  },
  photoIntro: {
    heading: "Some Little Moments...",
    subtitle: "Collected in one little corner of the internet.",
  },
  overthinking: {
    buttonText: "MY OVERTHINKING ZONE ⚠️",
    warningText: "Warning: A few questions that have been running through my mind.",
    sectionTitle: "CLEARING THE THOUGHTS",
    sectionSubtitle: "Honest explanations from my side, straight from the heart.",
    questions: [
      {
        id: 1,
        question: "Did you ever think that I was in love with you?",
        answer:
          "Yeah, initially, I did have those feelings. But when you told me that you weren't interested, I changed my perspective. I was happy to continue as friends. That's something I want you to understand.",
        categoryTag: "Honest Truth",
        colorScheme: {
          cardBg: "bg-gradient-to-br from-[#2D1B22] to-[#1C1418]",
          border: "border-rose-500/40 hover:border-rose-400",
          tagBg: "bg-rose-500/20 text-rose-300",
          textColor: "text-rose-100",
          accentGlow: "shadow-rose-950/50",
        },
      },
      {
        id: 2,
        question: "Why did I change my Instagram username to suryaaaa._.13?",
        answer:
          "In our college group, we had 15 members. We decided that everyone would change their private Instagram IDs into a format like their name followed by a number from 1 to 15.\n\nRandomly, I got number 13.\n\nHonestly, I wasn't particularly interested in using a private ID because I mainly used Instagram for watching reels. That's the actual reason!",
        categoryTag: "The Real Reason",
        colorScheme: {
          cardBg: "bg-gradient-to-br from-[#1C2030] to-[#111624]",
          border: "border-blue-500/40 hover:border-blue-400",
          tagBg: "bg-blue-500/20 text-blue-300",
          textColor: "text-blue-100",
          accentGlow: "shadow-blue-950/50",
        },
      },
      {
        id: 3,
        question: "Does talking to you every day mean you are giving me hope?",
        answer:
          "No. I spend time talking to my friends because I enjoy their company and want to know them better.\n\nAnd one thing I want to make clear: regardless of what anyone says or assumes, I don't love you romantically.\n\nI promise. I hope this clears things up.",
        categoryTag: "A Promise",
        colorScheme: {
          cardBg: "bg-gradient-to-br from-[#1F2B20] to-[#131E14]",
          border: "border-emerald-500/40 hover:border-emerald-400",
          tagBg: "bg-emerald-500/20 text-emerald-300",
          textColor: "text-emerald-100",
          accentGlow: "shadow-emerald-950/50",
        },
      },
    ] as QuestionItem[],
    exitNotice: "That's all the overthinking. Let's move to some memories.",
    exitButton: "Explore Our Memories ↓",
  },
  memories: {
    heading: "THREE LITTLE MEMORIES",
    subtitle: "Not everything needs a big story. Sometimes little moments are enough.",
    items: [
      {
        id: 'memory-pongal',
        number: '01',
        tag: 'THE FIRST VISIT',
        heading: 'THE PONGAL INCIDENT',
        story:
          "I came to your house for a function. But at that time, you didn't even notice me because you were busy eating pongal!",
        design: {
          theme: 'yellow',
          bgClass: 'bg-[#FFFDF4]',
          accentColor: '#D97706',
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
          gradientBg: 'from-amber-100/60 via-yellow-50 to-white',
          icon: '🍲',
        },
      },
      {
        id: 'memory-april11',
        number: '02',
        tag: 'APRIL 11',
        heading: 'THE WAFFLE & DIARY MILK MOMENT',
        story:
          "On April 11, I saw you and gifted you a waffle.\n\nI remember seeing two expressions at the same time.\n\nHappy because of the waffle.\n\nAngry because of the Dairy Milk!",
        design: {
          theme: 'pink-chocolate',
          bgClass: 'bg-[#FDF6F7]',
          accentColor: '#BE185D',
          badgeBg: 'bg-pink-100 text-pink-800 border-pink-300',
          gradientBg: 'from-pink-100/60 via-rose-50 to-white',
          icon: '🧇',
        },
      },
      {
        id: 'memory-manja',
        number: '03',
        tag: 'THE SONG COINCIDENCE',
        heading: 'WHAT A COINCIDENCE!',
        story:
          "We both had the same song, 'Manja Veilyil', playing at the same time.\n\nAnd the funny part?\n\nWe were listening to the exact same line!",
        closingNote: 'Some coincidences are just interesting.',
        design: {
          theme: 'purple-blue',
          bgClass: 'bg-[#F8F7FF]',
          accentColor: '#7C3AED',
          badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
          gradientBg: 'from-purple-100/60 via-indigo-50 to-white',
          icon: '🎵',
        },
      },
    ],
  },
  playlist: {
    heading: "HARSHITHA'S PLAYLIST ♡",
    subheading: "Six songs, six different vibes.",
  },
  finalGallery: {
    heading: "AND HERE ARE SOME MORE MOMENTS...",
    subtitle: "A collection of pictures worth keeping.",
  },
  closing: {
    mainHeading: "THAT'S THE LITTLE STORY.",
    subheading: "Just a few memories, a few explanations, and a little corner dedicated to them.",
    finalText: "Keep smiling and stay happy!",
    footerSignature: "Made with care ♡",
  },
  nav: [
    { label: "PARIS", href: "#hero" },
    { label: "MOMENTS", href: "#moments" },
    { label: "QUESTIONS", href: "#overthinking" },
    { label: "MEMORIES", href: "#memories" },
    { label: "PLAYLIST", href: "#playlist" },
    { label: "GALLERY", href: "#gallery" },
  ],
};
