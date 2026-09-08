import React from 'react';

interface SecuritySealsBarProps {
  className?: string;
}

export const SecuritySealsBar: React.FC<SecuritySealsBarProps> = ({ className = '' }) => {
  return (
    <div
      id="security-seals-banner"
      className={`bg-[#07162c] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        
        {/* Norton Secured Seal */}
        <div className="flex items-center justify-center hover:opacity-95 transition-opacity py-1">
          <svg
            viewBox="0 0 170 54"
            className="h-10 sm:h-12 w-auto select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Norton Secured"
          >
            {/* Pill Border */}
            <rect
              x="1.5"
              y="2"
              width="156"
              height="50"
              rx="25"
              stroke="#475569"
              strokeWidth="1.5"
              fill="rgba(15, 23, 42, 0.4)"
            />
            
            {/* Yellow Check Circle */}
            <g transform="translate(14, 11)">
              <circle cx="16" cy="16" r="14" fill="#FBBF24" />
              {/* Checkmark */}
              <path
                d="M10 16.5 L14.5 21 L23.5 10.5"
                stroke="#0F172A"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            
            {/* Typography Norton SECURED */}
            <text
              x="54"
              y="25"
              fill="#FFFFFF"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="800"
              fontSize="16.5"
              letterSpacing="-0.3"
            >
              Norton
            </text>
            <text
              x="54"
              y="39"
              fill="#94A3B8"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="600"
              fontSize="10"
              letterSpacing="1.8"
            >
              SECURED
            </text>
            
            {/* TM Superscript */}
            <text
              x="159"
              y="12"
              fill="#94A3B8"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="500"
              fontSize="7.5"
            >
              TM
            </text>
          </svg>
        </div>

        {/* Vertical Divider 1 */}
        <div className="hidden sm:block h-10 md:h-12 w-[1px] bg-slate-700/70" />

        {/* ACTALIS Seal */}
        <div className="flex items-center justify-center hover:opacity-95 transition-opacity py-1">
          <svg
            viewBox="0 0 175 54"
            className="h-10 sm:h-12 w-auto select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="ACTALIS"
          >
            {/* Geometric Triangle / Prism Logo */}
            <g transform="translate(6, 9)">
              {/* Deep Blue Base / Left Wing */}
              <path
                d="M18 2 L2 34 L36 34 L30 22 L16 22 L18 16 L23 22 L27 14 Z"
                fill="#0284C7"
              />
              <path
                d="M18 2 L2 34 L12 34 L21 16 L18 2 Z"
                fill="#0369A1"
              />
              {/* Silver Center Polygon */}
              <path
                d="M13 22 L23 22 L29 34 L19 34 Z"
                fill="#94A3B8"
              />
            </g>

            {/* Typography ACTALIS */}
            <text
              x="48"
              y="35"
              fill="#F8FAFC"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontStyle="italic"
              fontSize="23"
              letterSpacing="0.8"
            >
              ACTALIS
            </text>
          </svg>
        </div>

        {/* Vertical Divider 2 */}
        <div className="hidden sm:block h-10 md:h-12 w-[1px] bg-slate-700/70" />

        {/* SiteLock. Seal */}
        <div className="flex items-center justify-center hover:opacity-95 transition-opacity py-1">
          <svg
            viewBox="0 0 180 54"
            className="h-10 sm:h-12 w-auto select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="SiteLock"
          >
            {/* Padlock Icon */}
            <g transform="translate(8, 7)">
              {/* Padlock Shackle / Handle */}
              <path
                d="M13 15 V9 C13 4.5 16.5 1 21 1 C25.5 1 29 4.5 29 9 V15"
                stroke="#F8FAFC"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Padlock Body */}
              <rect
                x="5"
                y="15"
                width="32"
                height="24"
                rx="2"
                stroke="#F8FAFC"
                strokeWidth="3.2"
                fill="#07162c"
              />
              {/* Red Checkmark Box inside lock */}
              <rect
                x="11"
                y="20"
                width="14"
                height="14"
                rx="1.5"
                fill="#DC2626"
              />
              {/* White Checkmark */}
              <path
                d="M14 27 L17 30 L22 23"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Typography SiteLock. */}
            <text
              x="52"
              y="35"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="23"
              letterSpacing="-0.3"
            >
              <tspan fill="#F8FAFC" fontWeight="800">Site</tspan>
              <tspan fill="#DC2626" fontWeight="900">Lock.</tspan>
            </text>
          </svg>
        </div>

      </div>
    </div>
  );
};
