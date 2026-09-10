import React from 'react';

interface EbradiLogoProps {
  className?: string;
  variant?: 'dark' | 'light'; // 'dark' = white text for dark backgrounds (like image.png), 'light' = navy text for light backgrounds
  size?: 'sm' | 'md' | 'lg';
}

export const EbradiLogo: React.FC<EbradiLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#081A36';

  const heightClass = 
    size === 'sm' ? 'h-8' :
    size === 'lg' ? 'h-14' :
    'h-10 sm:h-11';

  return (
    <div className={`inline-flex items-center select-none ${heightClass} ${className}`}>
      <svg 
        viewBox="0 -14 375 116" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto max-w-full drop-shadow-xs overflow-visible" 
        aria-label="EBRADI 10 Anos - Escola Brasileira de Direito"
      >
        <defs>
          <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DEB371" />
            <stop offset="50%" stopColor="#C59B5F" />
            <stop offset="100%" stopColor="#A67B40" />
          </linearGradient>
        </defs>

        {/* Cyan horizontal pill underline under the letter E */}
        <rect x="6" y="70" width="46" height="9" rx="4.5" fill="#00A3C4" />

        {/* EBRADI Main Brand Text */}
        <text
          x="6"
          y="60"
          fontFamily="'Plus Jakarta Sans', 'Montserrat', -apple-system, sans-serif"
          fontWeight="800"
          fontSize="52"
          letterSpacing="-1"
          fill={textColor}
        >
          EBRADI
        </text>

        {/* 10 ANOS Emblem */}
        <g transform="translate(242, 4)">
          {/* Serif italic Roman numeral 10 */}
          <text
            x="0"
            y="62"
            fontFamily="'Playfair Display', 'Cinzel', 'Didot', 'Bodoni MT', Georgia, serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="76"
            fill={`url(#goldGrad-${variant})`}
          >
            10
          </text>

          {/* ANOS label positioned at the bottom right */}
          <text
            x="60"
            y="70"
            fontFamily="'Plus Jakarta Sans', 'Montserrat', sans-serif"
            fontWeight="800"
            fontSize="13"
            letterSpacing="0.8"
            fill={textColor}
          >
            ANOS
          </text>
        </g>
      </svg>
    </div>
  );
};
