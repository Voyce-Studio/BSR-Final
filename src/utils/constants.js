
export const routesMeta = [
  { path: '/', title: 'Bliss Sound Records — Techno & House with an angelic vibe', description: 'A boutique label for melodic techno, hard techno, afro-house and deep house.' },
  { path: '/releases', title: 'BSR Releases — Melodic Techno, Hard Techno, Afro-House, Deep House', description: 'Explore curated releases built for dance floors and celestial rooms.' },
  { path: '/artists', title: 'BSR Artists — New voices in electronic music', description: 'Meet the Bliss Sound roster pushing club culture forward.' },
  { path: '/mixes', title: 'BSR Mixes — Curated sets & radio', description: 'Stream rotating resident mixes and guest features.' },
  { path: '/events', title: 'BSR Events — Club culture, reimagined', description: 'Find uplifting listening rooms and club takeovers.' },
  { path: '/submissions', title: 'Submit Your Demo — Bliss Sound Records', description: 'Send your melodic, hard, afro, or deep house demos to Bliss Sound.' },
  { path: '/catalogue', title: 'BSR Catalogue — IDs & streaming links', description: 'Browse Bliss Sound catalogue IDs with quick jumps to DSPs.' },
  { path: '/about', title: 'About Bliss Sound Records', description: 'What drives the Bliss Sound aesthetic and curatorial approach.' },
  { path: '/contact', title: 'Contact Bliss Sound Records', description: 'Reach the label team for press, syncs, or partnerships.' },
  { path: '/press-kits', title: 'Press & Brand Assets — BSR', description: 'Access the Bliss Sound Records press kit and visuals.' },
  { path: '/collaborate', title: 'Collaborate with BSR — Industry & Partners', description: 'Request collaborations, remixes, or joint events.' },
  { path: '/newsletter', title: 'Subscribe — Bliss Sound Records', description: 'Join the monthly Bliss Sound signal for premieres and stories.' },
  { path: '/visual-diary', title: 'BSR Visual Diary — Label Toolkit & Brand Kit', description: 'Download the Bliss Sound brand kit, roster press assets, and artwork inspiration.' },
  { path: '/sitemap', title: 'Site Map — Bliss Sound Records', description: 'HTML overview of every public Bliss Sound Records page.' },
  { path: '/legal/privacy', title: 'Privacy — Bliss Sound Records', description: 'Privacy commitments for submissions and contact forms.' },
  { path: '/legal/terms', title: 'Terms — Bliss Sound Records', description: 'Usage terms for the Bliss Sound Records website.' }
];

export const featuredReleases = [
  { id: 'release-1', title: 'Silver Halo', artists: 'Mira Lúmen', date: 'Oct 2024', formats: ['Digital', '12"'], cover: '/assets/images/release-1.webp' },
  { id: 'release-2', title: 'Garden of Phase', artists: 'Tari Bloom', date: 'Jul 2024', formats: ['Digital'], cover: '/assets/images/release-2.webp' },
  { id: 'release-3', title: 'High Tide Choir', artists: 'MOONLOX', date: 'Jan 2025', formats: ['Digital'], cover: '/assets/images/release-3.webp' }
];

const placeholderSummary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus vitae elit sodales rutrum.';

const MISS_BLISS_MIX_LINK = 'https://youtu.be/YmFKM8oeOW8?si=26w3tqNW0IG92nAg';

export const latestDrops = [
  {
    id: 'drop-1',
    title: 'Te Quero',
    artist: 'Miss Bliss',
    release: 'BSR001 · Te Quero',
    genre: 'Melodic Techno',
    vibe: 'Cinematic Pulse',
    description:
      'Track Bio: “Te Quiero” captures Miss Bliss’s signature blend of warmth and seduction — a deep, hypnotic groove wrapped in cinematic emotion. A love letter set to rhythm, it moves between intimacy and pulse. Artist Description: Miss Bliss is a DJ and producer with an ear for sensual, story-driven sound. Her sets and productions merge deep house textures, melodic currents, and a quiet intensity that turns every moment into a feeling.',
    platform: 'Spotify',
    url: 'https://open.spotify.com/track/0placeholder',
    artwork: '/artwork/miss-bliss/BSR001 - Te Quero - Miss Bliss - Promotional Artwork.png',
    length: '6:47'
  },
  {
    id: 'drop-2',
    title: 'Drowning in the Dark',
    artist: 'Miss Space',
    release: 'BSR002 · Drowning in the Dark',
    genre: 'Melodic Techno',
    vibe: 'Portal Current',
    description:
      'Track Bio: “Drowning in the Dark” is the sound of inner transformation — when you surrender not out of weakness, but to be reborn. When darkness stops being the enemy and becomes a portal to your next self.',
    platform: 'YouTube',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    artwork: '/artwork/miss-space/BSR002 - Drowning in the Dark - Miss Space - Promotional Artwork.png',
    length: '7:05'
  }
];

export const artistList = [
  {
    slug: 'miss-bliss',
    name: 'Miss Bliss',
    style: 'Melodic Techno',
    summary: placeholderSummary,
    focus: 'Te Quiero · Dec 12',
    status: 'Resident',
    spotify: 'https://open.spotify.com/track/0placeholder',
    pressKit: '/press_kit/miss-bliss/miss-bliss-press-kit.pdf',
    palette: { glow: 'rgba(255,158,243,0.35)', accent: '#ff8ef3' },
    image: '/artwork/miss-bliss/profile_miss_bliss.PNG',
    orbitPortrait: '/orbit/miss-bliss.png',
    tags: ['Vocal lead', 'Sunrise sets']
  },
  {
    slug: 'miss-space',
    name: 'Miss Space',
    style: 'Melodic Techno',
    summary: placeholderSummary,
    focus: 'Drowning in the Dark · Dec 19',
    status: 'Resident',
    spotify: 'https://open.spotify.com/track/1placeholder',
    pressKit: '/press_kit/miss-space/miss-space-press-kit.pdf',
    palette: { glow: 'rgba(92,184,255,0.35)', accent: '#5cb8ff' },
    image: '/artwork/miss-space/profile_miss_space.JPG',
    orbitPortrait: '/orbit/miss-space.jpg',
    tags: ['Modular live', 'Warehouse']
  },
  {
    slug: 'tyss',
    name: 'TYSS',
    style: 'Melodic Techno',
    summary: placeholderSummary,
    focus: 'Debut tape · production lock',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/tyss/tyss-press-kit.pdf',
    palette: { glow: 'rgba(255,211,185,0.35)', accent: '#fdd8b5' },
    image: '/artwork/tyss/profile_tyss.PNG',
    orbitPortrait: '/orbit/tyss.png',
    tags: []
  },
  {
    slug: 'yulia-leya',
    name: 'Yulia Leya',
    style: 'Melodic Techno',
    summary: placeholderSummary,
    focus: 'Studio residency',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/yulia-leya/yulia-leya-press-kit.pdf',
    palette: { glow: 'rgba(180,215,255,0.35)', accent: '#b4d7ff' },
    image: '/artwork/yulia-leya/profile_yulia_leya.PNG',
    orbitPortrait: '/orbit/yulia-leya.png',
    tags: []
  },
  {
    slug: 'kama-way',
    name: 'Kama Way',
    style: 'Melodic Techno',
    summary: placeholderSummary,
    focus: 'First EP · lining up',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/kama-way/kama-way-press-kit.pdf',
    palette: { glow: 'rgba(255,233,170,0.3)', accent: '#ffe278' },
    image: null,
    orbitPortrait: null,
    tags: []
  },
  {
    slug: 'daria-bluur',
    name: 'Daria Bluur',
    style: 'Melodic Techno',
    summary: placeholderSummary,
    focus: 'Live AV sketches',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/daria-bluur/daria-bluur-press-kit.pdf',
    palette: { glow: 'rgba(204,190,255,0.32)', accent: '#ccbfff' },
    image: null,
    orbitPortrait: null,
    tags: []
  }
];

export const eventList = [
  {
    name: 'Seaside Dance Ritual',
    date: 'Coming soon · coastline TBA',
    status: 'Upcoming',
    summary: 'Seaside dance ritual hosted by Bliss Sound Residents with curated lighting and bespoke visuals. RSVP windows hit the newsletter first.',
    previewLabel: 'Preview coming soon',
    previewTone: '#ff9ddb',
    ticketsUrl: '/newsletter',
    ctaLabel: 'Subscribe'
  },
  {
    name: 'Artist Circle — Demo Exchange',
    date: 'Invite only · Bliss Sound HQ',
    status: 'Private',
    summary: 'Techno and house creators submit demos to join the circle. Incoming members receive craft feedback and direct mentorship from the roster.',
    previewLabel: 'Preview coming soon',
    previewTone: '#7cc9ff',
    ticketsUrl: '/submissions',
    ctaLabel: 'Send demo'
  }
];

const mixArtworks = [
  '/artwork/miss-bliss/BSR001 - Te Quero - Miss Bliss - Promotional Artwork.png',
  '/artwork/miss-space/BSR002 - Drowning in the Dark - Miss Space - Promotional Artwork.png'
];

export const mixList = Array.from({ length: 24 }, (_, index) => {
  const sequence = String(index + 1).padStart(2, '0');
  const isPublished = index === 0;
  return {
    title: `Miss Bliss Mix ${sequence}`,
    curator: 'Miss Bliss',
    artist: 'Miss Bliss',
    genres: [],
    vibes: [],
    description: placeholderSummary,
    url: isPublished ? MISS_BLISS_MIX_LINK : '',
    platform: isPublished ? 'YouTube' : 'Coming soon',
    artwork: isPublished ? mixArtworks[index % mixArtworks.length] : null,
    comingSoon: !isPublished
  };
});

// Update catalogueEntries whenever a new ID is minted.
// Each entry maps to one table row on /catalogue and should include DSP links.
export const catalogueEntries = [
  {
    catalogId: 'BSR001',
    title: 'Te Quero',
    artist: 'Miss Bliss',
    featuring: '—',
    duration: '6:47',
    links: {
      spotify: 'https://open.spotify.com/track/0placeholder',
      youtube: 'https://youtube.com/watch?v=0placeholder',
      apple: 'https://music.apple.com/us/album/0placeholder'
    }
  },
  {
    catalogId: 'BSR002',
    title: 'Drowning in the Dark',
    artist: 'Miss Space',
    featuring: '—',
    duration: '7:05',
    links: {
      spotify: 'https://open.spotify.com/track/1placeholder',
      youtube: 'https://youtube.com/watch?v=1placeholder',
      apple: 'https://music.apple.com/us/album/1placeholder'
    }
  },
  {
    catalogId: 'BSR003',
    title: 'Sapphire Drift',
    artist: 'Miss Bliss',
    featuring: 'Nova Aurelia',
    duration: '5:58',
    links: {
      spotify: 'https://open.spotify.com/track/2placeholder',
      youtube: 'https://youtube.com/watch?v=2placeholder',
      apple: 'https://music.apple.com/us/album/2placeholder'
    }
  },
  {
    catalogId: 'BSR004',
    title: 'Midnight Garden',
    artist: 'Miss Space',
    featuring: '—',
    duration: '6:22',
    links: {
      spotify: 'https://open.spotify.com/track/3placeholder',
      youtube: 'https://youtube.com/watch?v=3placeholder',
      apple: 'https://music.apple.com/us/album/3placeholder'
    }
  }
];

export const socials = {
  linkedin: 'https://www.linkedin.com',
  soundcloud: 'https://soundcloud.com',
  youtube: 'https://www.youtube.com/channel/UCetKatn1FSCPTdPzWT9viFA',
  beatport: 'https://www.beatport.com',
  instagram: 'https://www.instagram.com/blisssoundrecords'
};
