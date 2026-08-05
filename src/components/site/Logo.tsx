import { Link } from "@tanstack/react-router";

import { LogoIcon } from "./LogoIcon";

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark" | "wordmark";
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
  onClick?: () => void;
};

const sizes = {
  sm: { icon: 28, text: "text-lg", circle: "h-9 w-9", stacked: "h-14 w-14" },
  md: { icon: 34, text: "text-xl", circle: "h-10 w-10", stacked: "h-16 w-16" },
  lg: { icon: 44, text: "text-2xl", circle: "h-12 w-12", stacked: "h-20 w-20" },
} as const;

function LogoContent({
  variant,
  size,
  className,
}: {
  variant: NonNullable<LogoProps["variant"]>;
  size: NonNullable<LogoProps["size"]>;
  className: string;
}) {
  const s = sizes[size];

  if (variant === "mark") {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-ink ring-1 ring-sky/20 ${s.circle} ${className}`}
      >
        <LogoIcon size={s.icon * 0.55} className="text-sky" />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={`font-brand lowercase tracking-tight text-sky ${s.text} ${className}`}>
        bel3afiya
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <span
          className={`inline-flex items-center justify-center rounded-full bg-ink ring-1 ring-sky/25 ${s.stacked}`}
        >
          <LogoIcon size={s.icon} className="text-sky" />
        </span>
        <span className="font-brand text-lg lowercase tracking-tight text-sky">bel3afiya</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-ink/80 ring-1 ring-sky/20 backdrop-blur-sm ${s.circle}`}
      >
        <LogoIcon size={s.icon * 0.55} className="text-sky" />
      </span>
      <span className={`font-brand truncate lowercase tracking-tight text-sky ${s.text}`}>
        bel3afiya
      </span>
    </span>
  );
}

export function Logo({
  variant = "horizontal",
  size = "md",
  className = "",
  asLink = false,
  onClick,
}: LogoProps) {
  const content = <LogoContent variant={variant} size={size} className={className} />;

  if (asLink) {
    return (
      <Link
        to="/"
        onClick={onClick}
        aria-label="Bel3afiya — Home"
        className="group inline-flex transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        {content}
      </Link>
    );
  }

  return content;
}
