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

export const artistList = [
  {
    slug: 'miss-bliss',
    name: 'Miss Bliss',
    style: 'Blooming House',
    summary: 'Velvet pulses, analog haze, whispered falsetto loops drifting over warm shimmer percussion.',
    focus: 'Te Quero · warm shimmer',
    status: 'Resident',
    spotify: 'https://open.spotify.com/track/0placeholder',
    palette: { glow: 'rgba(255,158,243,0.4)', accent: '#ff8ef3' }
  },
  {
    slug: 'miss-space',
    name: 'Miss Space',
    style: 'Textured Techno',
    summary: 'Chrome tide arps, midnight pads, and drum programming built for lunar dance floors.',
    focus: 'Drowning in the Dark · chrome hush',
    status: 'Resident',
    spotify: 'https://open.spotify.com/track/1placeholder',
    palette: { glow: 'rgba(92,184,255,0.35)', accent: '#5cb8ff' }
  },
  {
    slug: 'more-coming',
    name: 'More coming soon',
    style: 'Future roster',
    summary: 'Space reserved for the next Bliss Sound texture. Demos welcome—soft light, deep resonance.',
    focus: 'Send your demo · angelic bloom',
    status: 'Incoming',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1MUPbVkm5U3',
    palette: { glow: 'rgba(255,209,160,0.35)', accent: '#ffd199' }
  }
];

export const eventList = [
  { name: 'Aurora Club Takeover', date: 'Feb 22 · Berlin', status: 'Upcoming' },
  { name: 'Skyline Listening Room', date: 'Mar 14 · Mexico City', status: 'Upcoming' },
  { name: 'Afterglow Pop-up', date: 'Apr 06 · Lisbon', status: 'Upcoming' }
];

export const mixList = [
  { title: 'Pulse Bloom 021', curator: 'Lúmen', url: 'https://open.spotify.com/playlist/37i9dQZF1DX1MUPbVkm5U3' },
  { title: 'Afterglow 004', curator: 'BSR Residents', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
];

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
  beatport: 'https://www.beatport.com'
};
