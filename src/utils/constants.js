
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
    release: 'BSR010 · Velvet Bloom',
    genre: 'Melodic Techno',
    vibe: 'Velvet Bloom',
    description: 'Analog haze with whispered falsetto and low-end meant for sunrise main stages.',
    platform: 'Spotify',
    url: 'https://open.spotify.com/track/0placeholder',
    artwork: '/artwork/miss-bliss/BSR001 - Te Quero - Miss Bliss - Promotional Artwork.png',
    length: '6:47'
  },
  {
    id: 'drop-2',
    title: 'Drowning in the Dark',
    artist: 'Miss Space',
    release: 'BSR011 · Chrome Tide',
    genre: 'Melodic Techno',
    vibe: 'Chrome Tide',
    description: 'Chrome tide percussion, midnight pads, and modular basslines built for warehouses.',
    platform: 'YouTube',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    artwork: '/artwork/miss-space/BSR002 - Drowning in the Dark - Miss Space - Promotional Artwork.png',
    length: '7:05'
  },
  {
    id: 'drop-3',
    title: 'Sapphire Drift',
    artist: 'Miss Bliss ft. Nova Aurelia',
    release: 'BSR012 · Angelic Bloom',
    genre: 'Melodic House',
    vibe: 'Glass Bloom',
    description: 'A duet of crystalline arps and blissed-out vocal swells, ready for festival sunsets.',
    platform: 'Spotify',
    url: 'https://open.spotify.com/track/2placeholder',
    artwork: '/artwork/miss-bliss/BSR001 - Te Quero - Miss Bliss - Promotional Artwork.png',
    length: '5:58'
  }
];

export const artistList = [
  {
    slug: 'miss-bliss',
    name: 'Miss Bliss',
    style: 'Blooming House',
    summary: placeholderSummary,
    focus: 'Velvet Bloom · Dec 12',
    status: 'Resident',
    spotify: 'https://open.spotify.com/track/0placeholder',
    pressKit: '/press_kit/miss-bliss/miss-bliss-press-kit.pdf',
    palette: { glow: 'rgba(255,158,243,0.35)', accent: '#ff8ef3' },
    image: '/artwork/miss-bliss/profile_miss_bliss.PNG',
    tags: ['Vocal lead', 'Sunrise sets']
  },
  {
    slug: 'miss-space',
    name: 'Miss Space',
    style: 'Textured Techno',
    summary: placeholderSummary,
    focus: 'Chrome Drift · Dec 19',
    status: 'Resident',
    spotify: 'https://open.spotify.com/track/1placeholder',
    pressKit: '/press_kit/miss-space/miss-space-press-kit.pdf',
    palette: { glow: 'rgba(92,184,255,0.35)', accent: '#5cb8ff' },
    image: '/artwork/miss-space/profile_miss_space.JPG',
    tags: ['Modular live', 'Warehouse']
  },
  {
    slug: 'tyss',
    name: 'TYSS',
    style: 'Club Pop',
    summary: placeholderSummary,
    focus: 'Debut tape · production lock',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/tyss/tyss-press-kit.pdf',
    palette: { glow: 'rgba(255,211,185,0.35)', accent: '#fdd8b5' },
    image: '/artwork/tyss/profile_tyss.PNG',
    tags: ['Club pop', 'Vocoder']
  },
  {
    slug: 'yulia-leya',
    name: 'Yulia Leya',
    style: 'Progressive Techno',
    summary: placeholderSummary,
    focus: 'Studio residency',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/yulia-leya/yulia-leya-press-kit.pdf',
    palette: { glow: 'rgba(180,215,255,0.35)', accent: '#b4d7ff' },
    image: '/artwork/yulia-leya/profile_yulia_leya.PNG',
    tags: ['Strings', 'Atmospheric']
  },
  {
    slug: 'kama-way',
    name: 'Kama Way',
    style: 'Deep Tech',
    summary: placeholderSummary,
    focus: 'First EP · lining up',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/kama-way/kama-way-press-kit.pdf',
    palette: { glow: 'rgba(255,233,170,0.3)', accent: '#ffe278' },
    image: null,
    tags: ['Vinyl only', 'Lo-slung']
  },
  {
    slug: 'daria-bluur',
    name: 'Daria Bluur',
    style: 'Ambient Club',
    summary: placeholderSummary,
    focus: 'Live AV sketches',
    status: 'Incoming',
    spotify: null,
    pressKit: '/press_kit/daria-bluur/daria-bluur-press-kit.pdf',
    palette: { glow: 'rgba(204,190,255,0.32)', accent: '#ccbfff' },
    image: null,
    tags: ['AV set', 'Cooldown']
  }
];

export const eventList = [
  {
    name: 'Seaside Dance Ritual',
    date: 'Coming soon · coastline TBA',
    status: 'Upcoming',
    summary: 'Open-air celebration led by the Bliss Sound roster. Full lineup, art direction, and RSVP drop via newsletter first.',
    ticketsUrl: '/newsletter',
    ctaLabel: 'Subscribe'
  },
  {
    name: 'Artist Circle — Demo Exchange',
    date: 'Invite only · Bliss Sound HQ',
    status: 'Private',
    summary: 'Techno and house producers submit demos to join the circle; we shortlist artists aligned with the catalog and reply personally.',
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
  return {
    title: `Miss Bliss Mix ${sequence}`,
    curator: 'Miss Bliss',
    artist: 'Miss Bliss',
    genres: [],
    vibes: [],
    description: placeholderSummary,
    url: MISS_BLISS_MIX_LINK,
    platform: 'YouTube',
    artwork: mixArtworks[index % mixArtworks.length]
  };
});

export const catalogueEntries = [
  {
    catalogId: 'BRC001',
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
    catalogId: 'BRC002',
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
    catalogId: 'BRC003',
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
    catalogId: 'BRC004',
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
  youtube: 'https://www.youtube.com',
  beatport: 'https://www.beatport.com',
  instagram: 'https://www.instagram.com/blisssoundrecords'
};
