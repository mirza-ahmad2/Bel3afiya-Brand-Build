import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  children,
  priority = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="screen relative isolate overflow-hidden" aria-label="Page hero">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1280}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="hero-image absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 58%, transparent), color-mix(in oklab, var(--ink) 46%, transparent) 45%, color-mix(in oklab, var(--ink) 78%, transparent))",
        }}
      />

      <div className="hero-shell relative z-10 py-32">
        {eyebrow ? (
          <p className="eyebrow reveal mb-6 text-ember" data-shown="true">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mx-auto max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-cream">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children ? (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>
        ) : null}
      </div>
    </section>
  );
}

export function HeroButton({
  to,
  href,
  variant = "solid",
  children,
}: {
  to?: string;
  href?: string;
  variant?: "solid" | "outline";
  children: ReactNode;
}) {
  const cls = variant === "solid" ? "btn-ember" : "btn-hero-outline";
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  const target = (to ?? "/") as "/";
  return (
    <Link to={target} className={cls}>
      {children}
    </Link>
  );
}
