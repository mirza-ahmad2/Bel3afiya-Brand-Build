import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site-config";

type PageSeoOptions = {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogType?: string;
};

export function createPageMeta({
  path,
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: PageSeoOptions) {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" || title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonical },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `${SITE_NAME} — ${description.slice(0, 120)}` },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: `${SITE_NAME} — health-forward shawarma in Rochdale` },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
