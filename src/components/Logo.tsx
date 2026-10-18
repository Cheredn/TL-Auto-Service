interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'badge' | 'inline' | 'icon';
}

export function Logo({ className = '', size = 'md', variant = 'inline' }: LogoProps) {
  // Dimensions based on size
  const iconDimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 42, height: 42 },
    lg: { width: 56, height: 56 },
    xl: { width: 84, height: 84 },
  }[size];

  // The authentic circular red emblem with mechanic under raised vehicle
  const RedMedallion = (
    <svg
      viewBox="0 0 110 110"
      width={iconDimensions.width}
      height={iconDimensions.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 select-none drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="tlMedallionRed" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FF4D4D" />
          <stop offset="35%" stop-color="#DE1B1B" />
          <stop offset="75%" stop-color="#9C0A0A" />
          <stop offset="100%" stop-color="#550303" />
        </radialGradient>
        <linearGradient id="tlMedallionBezel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4D0C0C" />
          <stop offset="50%" stop-color="#1A0202" />
          <stop offset="100%" stop-color="#5E1010" />
        </linearGradient>
        <linearGradient id="tlMedallionGloss" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.4" />
          <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </linearGradient>
      </defs>

      {/* Outer metallic bezel */}
      <circle cx="55" cy="55" r="53" fill="url(#tlMedallionBezel)" stroke="#800D0D" strokeWidth="2" />
      {/* Red inner sphere */}
      <circle cx="55" cy="55" r="49" fill="url(#tlMedallionRed)" />
      {/* Specular gloss highlight arc */}
      <path d="M 16,40 A 44,44 0 0,1 94,40 A 47,40 0 0,0 16,40 Z" fill="url(#tlMedallionGloss)" />

      {/* White Mechanic + Car On Lift Graphic */}
      <g fill="#FFFFFF" transform="translate(55, 55)">
        {/* Two-post Lift Column */}
        <path d="M -34,34 L -20,34 L -22,31 L -32,31 Z" />
        <rect x="-29" y="-28" width="6" height="60" rx="1.5" />
        <rect x="-31" y="-13" width="10" height="7" rx="0.5" />
        <path d="M -23,-10 L 18,-10 L 18,-7 L -23,-7 Z" />

        {/* Vehicle Silhouette Raised on Lift */}
        <g transform="translate(1, -25)">
          <path d="M -14,4 L -10,-7 L 10,-7 L 14,4 Z" />
          <path d="M -9,3 L -6,-5 L 6,-5 L 9,3 Z" fill="#9C0A0A" />
          <path d="M -21,4 C -21,3 -18,1 -14,1 L 14,1 C 18,1 21,3 21,4 L 22,12 C 22,13 20.5,13.5 19,13.5 L -19,13.5 C -20.5,13.5 -22,13 -22,12 Z" />
          <circle cx="-15" cy="8.5" r="2.2" fill="#9C0A0A" />
          <circle cx="15" cy="8.5" r="2.2" fill="#9C0A0A" />
          <rect x="-8" y="7.5" width="16" height="2.5" rx="0.5" fill="#9C0A0A" />
          <rect x="-22.5" y="10.5" width="4" height="6" rx="1.5" />
          <rect x="18.5" y="10.5" width="4" height="6" rx="1.5" />
        </g>

        {/* Mechanic Figure Under Vehicle */}
        <g transform="translate(4, 14)">
          <circle cx="0" cy="-13" r="4" />
          <path d="M -4,-8 L 4,-8 L 3.5,8 L -3.5,8 Z" />
          <path d="M -4,-7 L -10,-18 L -7.5,-19 L -2.5,-8 Z" />
          <circle cx="-9" cy="-19.5" r="1.5" />
          <path d="M 4,-7 L 8,-16 L 10.5,-15 L 3,-6 Z" />
          <circle cx="9.5" cy="-16" r="1.5" />
          <rect x="-3.5" y="8" width="3" height="12" rx="0.5" />
          <rect x="0.5" y="8" width="3" height="12" rx="0.5" />
          <path d="M -5,20 L 0,20 L 0,21.5 L -5.5,21.5 Z" />
          <path d="M 0.5,20 L 5.5,20 L 6,21.5 L 0.5,21.5 Z" />
        </g>
      </g>
    </svg>
  );

  // If variant is just the icon
  if (variant === 'icon') {
    return <div className={`inline-flex shrink-0 ${className}`}>{RedMedallion}</div>;
  }

  // If variant is the authentic circular white badge with cut out background (from the photo!)
  if (variant === 'badge') {
    const badgeSizes = {
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-36 h-36',
      xl: 'w-48 h-48',
    }[size];

    return (
      <div className={`relative inline-block shrink-0 ${badgeSizes} ${className}`}>
        <img
          src="/tl_logo_badge.svg"
          alt="T & L Auto Service Inc. official badge"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>
    );
  }

  // Default: Streamlined inline lockup (red medallion + bold T&L + AUTO SERVICE INC.)
  const isSm = size === 'sm';
  const isLg = size === 'lg';
  const isXl = size === 'xl';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {RedMedallion}

      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-tight text-white font-sans ${
            isSm ? 'text-lg' : isLg ? 'text-2xl' : isXl ? 'text-3xl' : 'text-xl'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          T &amp; L
        </span>
        <span
          className={`font-extrabold tracking-[0.18em] text-neutral-300 uppercase ${
            isSm ? 'text-[8.5px]' : isLg ? 'text-[11px]' : isXl ? 'text-xs' : 'text-[9.5px]'
          }`}
        >
          Auto Service Inc.
        </span>
      </div>
    </div>
  );
}
