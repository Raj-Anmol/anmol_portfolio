export function SectionDivider() {
  return (
    <div
      className="relative w-full h-12 sm:h-16 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="divider-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" className="text-primary" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-primary" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q300,10 600,50 T1200,50"
          fill="none"
          stroke="url(#divider-gradient)"
          strokeWidth="1.5"
        />
        <path
          d="M0,50 Q300,90 600,50 T1200,50"
          fill="none"
          stroke="url(#divider-gradient)"
          strokeWidth="0.75"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
