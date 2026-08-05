export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Bel3afiya",
  description:
    "Health-forward shawarma stall at Rochdale Pioneers Market, Greater Manchester. Fresh prep, bold flavour, founder-led.",
  url: "https://bel3afiya.com",
  image: "https://bel3afiya.com/og-image.jpg",
  founder: {
    "@type": "Person",
    name: "Yasser Hussainey",
    sameAs: "https://www.linkedin.com/in/yasserhussainey/",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rochdale Pioneers Market",
    addressLocality: "Rochdale",
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  servesCuisine: "Shawarma",
  sameAs: [
    "https://www.instagram.com/_bel3afiya/",
    "https://www.tiktok.com/@bel3afiya",
    "https://www.linkedin.com/in/yasserhussainey/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bel3afiya",
  url: "https://bel3afiya.com",
  description: "Health-forward shawarma in Rochdale, Greater Manchester.",
  publisher: {
    "@type": "Organization",
    name: "Bel3afiya",
  },
};
