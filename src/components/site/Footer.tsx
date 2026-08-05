import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Music2 } from "lucide-react";
import { memo } from "react";

import { SOCIAL_LINKS } from "../../lib/site-config";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/find-us", label: "Find Us" },
  { to: "/journey", label: "The Journey" },
  { to: "/contact", label: "Contact" },
] as const;

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-ink text-cream" role="contentinfo">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo variant="stacked" size="sm" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Health-forward shawarma, made fresh on the stall at Rochdale Pioneers Market, Greater
            Manchester.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="eyebrow text-sky">Explore</h2>
          <ul className="mt-4 space-y-2" role="list">
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link text-sm text-cream/75">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-sky">Say Hello</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/75" role="list">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <span>Rochdale Pioneers Market, Rochdale, Greater Manchester, UK</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <Link to="/contact" className="footer-link">
                Message us via the contact page
              </Link>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Bel3afiya on Instagram"
                className="social-icon"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow Bel3afiya on TikTok"
                className="social-icon"
              >
                <Music2 size={18} aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Connect with Yasser Hussainey on LinkedIn"
                className="social-icon"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Bel3afiya. Founded by Yasser Hussainey.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link text-cream/80 underline decoration-sky/60 underline-offset-4"
            >
              The Innovations (https://theinnovations.tech/)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});
