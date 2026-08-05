type LogoIconProps = {
  className?: string;
  size?: number;
  title?: string;
};

export function LogoIcon({ className = "", size = 24, title = "Bel3afiya" }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path fill="currentColor" d="M8 44 L32 8 L56 44 L32 36 Z" opacity="0.95" />
      <path fill="currentColor" d="M32 8 L32 36 L56 44 Z" opacity="0.75" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M32 8 L32 36 M32 36 L8 44 M32 36 L56 44"
        opacity="0.35"
      />
      <path fill="currentColor" d="M32 36 L24 52 L32 48 L40 52 Z" opacity="0.85" />
    </svg>
  );
}
