import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";

import { Logo } from "./Logo";

const links = [
  { to: "/story", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/find-us", label: "Find Us" },
  { to: "/journey", label: "The Journey" },
  { to: "/contact", label: "Contact" },
] as const;

export const Nav = memo(function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink/95 shadow-[0_8px_32px_rgba(0,0,0,0.32)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:flex md:justify-between"
      >
        <Logo asLink size="md" onClick={closeMenu} />

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7" role="list">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeProps={{ className: "text-sky after:w-full" }}
                  className="nav-link text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream/80"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/menu" className="btn-ember text-[0.78rem]">
            See the Menu
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 justify-self-end rounded-full border border-sky/30 p-2.5 text-sky transition-all duration-300 hover:border-sky hover:bg-sky/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`overflow-hidden border-t border-sky/10 bg-ink transition-all duration-400 ease-out md:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="shell flex flex-col py-4" role="list">
          {links.map((l, i) => (
            <li
              key={l.to}
              className="mobile-nav-item"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <Link
                to={l.to}
                onClick={closeMenu}
                activeProps={{ className: "text-sky" }}
                className="block py-3 font-display text-2xl text-cream transition-colors hover:text-sky"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link to="/menu" onClick={closeMenu} className="btn-ember inline-block text-[0.78rem]">
              See the Menu
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
