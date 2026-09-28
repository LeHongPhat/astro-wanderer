export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Business Development Specialist',
    company: 'ZeroMarkets',
    companyUrl: 'https://zeromarkets.com',
    location: 'HoChiMinh',
    start: 'Aug 2026',
    end: 'Present',
    current: true,
    summary: 'Offers attractive partnership opportunities for IBs.',
    bullets: [
      'No requotes and no hidden charges.',
      'Fast execution speed & tighter spreads',
    ],
  },
  {
    role: 'Business Development',
    company: 'Nami Exchange.',
    companyUrl: 'https://lehongphat.com',
    location: 'Ho Chi Minh, OR',
    start: 'Jul 2025',
    end: 'Jul 2026',
    summary: 'VietNam CEX since 2018',
    bullets: [
      'Complete crypto asset solutions for Vietnamese people.',
    ],
  },
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [
  { role: 'Sales Leader', company: 'LMC', start: '2025', end: '2025' },
];

export const education: Education[] = [
  {
    field: 'Financial and Banking',
    school: 'Saigon University',
    start: '2018',
    end: '2021',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['English', 'Vietnamese',],
  },
  {
    title: 'Interests',
    skills: ['Problem Solving', 'Value Selling', 'Financial', 'Trading'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'sales man',
  'day trader',
  'poker player',
  'coffee enthusiast',
];
