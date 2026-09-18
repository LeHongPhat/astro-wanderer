/** A link shown in the hero and footer.
 *  `icon` is any name from src/components/Icon.astro */
export interface SocialLink {
  url: string;
  label: string;
  icon?:
    | 'facebook'
    | 'linkedin'
    | 'email'
    | 'download'
    | 'arrow-right'
    | 'arrow-left'
    | 'sun'
    | 'moon';
}

/**
 * ─────────────────────────────────────────────────────────────
 *  Site identity — the one file you must edit first.
 *  Everything on the site (titles, meta tags, footer, hero
 *  social links) reads from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Your full name — used for <title> and meta tags */
  title: 'Phat Le Hong',
  /** Short handle used after the dot in page titles ("About · rowanhale") */
  shortTitle: 'Phat Le',
  /** Default meta description for pages that don't set their own */
  description: 'Sales Man & Day Trader.',
  /** Your production URL — no trailing slash. Used for canonical URLs, OG tags and sitemap */
  url: 'https://lehongphat.com',
  author: {
    name: 'Phat Le',
    email: 'lehongphat2009@gmail.com',
    location: 'Vietnam',
    /** Ảnh đại diện — đặt file vào public/img/ và cập nhật đường dẫn ở đây */
    avatar: '/img/avatar.jpg',
    /** Optional: link to a PDF résumé served from /public */
    resume: '/resume/Resume.pdf',
  },
  /** Shown in the hero and footer. Delete a line to remove it from both places.
   *  `icon` is any name from src/components/Icon.astro */
  socials: {
    facebook: { url: 'https://www.facebook.com/le.hongphat.773/', label: 'FaceBook', icon: 'facebook' },
    linkedin: { url: 'https://www.linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
    email: { url: 'mailto:lehongphat2009@gmail.com', label: 'Email', icon: 'email' },
  } satisfies Record<string, SocialLink>,
};

export type SocialKey = keyof typeof site.socials;

/**
 * Prefix a root-relative path ("/img/x.jpg") with the configured base
 * path (`base` in astro.config.mjs). Anything else — external URLs,
 * mailto:/tel: links, already-prefixed paths — passes through
 * untouched. Use it for every internal link and public/ asset so the
 * site works at a subpath (e.g. GitHub Pages project sites) as well as
 * at the domain root.
 */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) return path;
  if (path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
};