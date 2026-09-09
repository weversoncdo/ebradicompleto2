import React from 'react';

export const SecurityBadges: React.FC = () => {
  return (
    <section 
      id="security-badges-section"
      aria-label="Selos de Segurança e Confiabilidade"
      className="w-full bg-[#061224] border-t border-slate-800/80 py-5 sm:py-6 px-4 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-5 gap-x-6 sm:gap-x-8 md:gap-x-12">
        
        {/* 1. Norton SECURED */}
        <div className="flex items-center gap-1.5 transition-transform hover:scale-105 duration-200">
          <div className="border border-slate-600/70 bg-slate-900/50 rounded-full pl-2.5 pr-3.5 py-1.5 flex items-center gap-2.5 shadow-inner">
            {/* Yellow circle with black checkmark */}
            <div className="w-5 h-5 rounded-full bg-[#fbb034] flex items-center justify-center shrink-0 shadow-xs">
              <svg 
                className="w-3.5 h-3.5 text-slate-950 font-bold" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            {/* Norton SECURED text */}
            <div className="flex flex-col leading-none">
              <span className="text-[13px] sm:text-[14px] font-extrabold text-white tracking-tight">
                Norton
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-bold text-slate-300 tracking-wider uppercase mt-0.5">
                SECURED
              </span>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 self-start -mt-0.5 font-sans select-none">
            ™
          </span>
        </div>

        {/* Divider 1 */}
        <div className="hidden sm:block w-[1px] h-8 bg-slate-700/70" aria-hidden="true" />

        {/* 2. ACTALIS */}
        <div className="flex items-center gap-2.5 transition-transform hover:scale-105 duration-200">
          {/* Actalis Geometric Faceted Pyramid/A Icon */}
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 drop-shadow-xs" 
            viewBox="0 0 32 32" 
            fill="none"
            aria-hidden="true"
          >
            {/* Left facet - Sky Cyan */}
            <path d="M16 3L5 27H12.5L16 19L16 3Z" fill="#00A0DC" />
            {/* Right facet - Deep Blue */}
            <path d="M16 3L16 19L21.5 27H27L16 3Z" fill="#004D8C" />
            {/* Bottom/Center inner reflection facet */}
            <path d="M16 19L11.5 27H20.5L16 19Z" fill="#58B8E8" />
          </svg>
          <span className="text-[15px] sm:text-[17px] font-black italic tracking-wide text-white font-sans">
            ACTALIS
          </span>
        </div>

        {/* Divider 2 */}
        <div className="hidden sm:block w-[1px] h-8 bg-slate-700/70" aria-hidden="true" />

        {/* 3. SiteLock. */}
        <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
          {/* Padlock with red square & white checkmark inside */}
          <div className="relative w-6 h-7 sm:w-7 sm:h-8 flex items-center justify-center shrink-0">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 24 28" 
              fill="none"
              aria-hidden="true"
            >
              {/* Padlock Shackle */}
              <path 
                d="M6 11V7C6 3.686 8.686 1 12 1C15.314 1 18 3.686 18 7V11" 
                stroke="#FFFFFF" 
                strokeWidth="2.4" 
                strokeLinecap="round" 
              />
              {/* Padlock Body Outline */}
              <rect 
                x="3" 
                y="10" 
                width="18" 
                height="16" 
                rx="3.5" 
                stroke="#FFFFFF" 
                strokeWidth="2.2" 
                fill="#061224" 
              />
              {/* Red square indicator */}
              <rect x="7.5" y="14.5" width="9" height="7.5" rx="1.5" fill="#E31B23" />
              {/* White checkmark */}
              <path 
                d="M9.5 18.2L11 19.8L14.5 16.2" 
                stroke="#FFFFFF" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          <div className="text-[15px] sm:text-[17px] font-extrabold tracking-tight leading-none font-sans">
            <span className="text-white">Site</span>
            <span className="text-[#E31B23]">Lock.</span>
          </div>
        </div>

        {/* Divider 3 */}
        <div className="hidden sm:block w-[1px] h-8 bg-slate-700/70" aria-hidden="true" />

        {/* 4. Reclame AQUI */}
        <a 
          href="https://www.reclameaqui.com.br/empresa/ebradi-escola-brasileira-de-direito/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-transform hover:scale-105 duration-200 group py-1 cursor-pointer"
          title="Ver reputação no Reclame AQUI"
          aria-label="Reclame AQUI"
        >
          {/* Logo estilizado conforme imagem do Reclame AQUI */}
          <div className="flex items-center tracking-tight leading-none select-none">
            <span 
              className="text-[17px] sm:text-[19px] font-black italic text-[#8EC63F] group-hover:text-[#9ade45] transition-colors"
              style={{ fontFamily: '"Montserrat", "Arial Black", system-ui, sans-serif' }}
            >
              Reclame
            </span>
            <span 
              className="text-[17px] sm:text-[19px] font-black italic text-[#00A651] group-hover:text-[#00c862] transition-colors ml-0.5 tracking-normal"
              style={{ fontFamily: '"Montserrat", "Arial Black", system-ui, sans-serif' }}
            >
              AQUI
            </span>
          </div>
        </a>

      </div>
    </section>
  );
};
