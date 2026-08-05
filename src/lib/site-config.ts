export const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://bel3afiya.com";

export const SITE_NAME = "Bel3afiya";

export const SITE_TAGLINE = "Health-Forward Shawarma in Rochdale";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/_bel3afiya/",
  tiktok: "https://www.tiktok.com/@bel3afiya",
  linkedin: "https://www.linkedin.com/in/yasserhussainey/",
} as const;

export const SITE_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/story", changefreq: "monthly", priority: "0.8" },
  { path: "/menu", changefreq: "weekly", priority: "0.9" },
  { path: "/find-us", changefreq: "monthly", priority: "0.9" },
  { path: "/journey", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
] as const;
