import React from 'react';
import { Handshake, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Partner {
  id: string;
  tag: string;
  title: string;
  description: string;
  logoType: 'oab' | 'iasp' | 'caamt' | 'caaam' | 'caasc';
}

const PARTNERS: Partner[] = [
  {
    id: 'oab',
    tag: 'OAB',
    title: 'OAB – ORDEM DOS ADVOGADOS DO BRASIL',
    description: 'Órgão do Conselho Federal da Ordem dos Advogados do Brasil.',
    logoType: 'oab',
  },
  {
    id: 'iasp',
    tag: 'IASP',
    title: 'IASP – INSTITUTO DOS ADVOGADOS DE SÃO PAULO',
    description: 'Fundada em 1874, é uma das mais tradicionais e influentes instituições jurídicas do Brasil.',
    logoType: 'iasp',
  },
  {
    id: 'caamt',
    tag: 'CAAMT',
    title: 'CAA/MT – CAIXA DE ASSISTÊNCIA DOS ADVOGADOS',
    description: 'Instituída por deliberação do Conselho Seccional de Mato Grosso da OAB.',
    logoType: 'caamt',
  },
  {
    id: 'caaam',
    tag: 'CAAAM',
    title: 'CAA/AM – CAIXA DE ASSISTÊNCIA DOS ADVOGADOS',
    description: 'Instituída por deliberação do Conselho Seccional de Amazonas da OAB.',
    logoType: 'caaam',
  },
  {
    id: 'caasc',
    tag: 'CAASC',
    title: 'CAA/SC – CAIXA DE ASSISTÊNCIA DOS ADVOGADOS',
    description: 'Instituída por deliberação do Conselho Seccional de Santa Catarina da OAB.',
    logoType: 'caasc',
  },
];

// High-fidelity SVG Logos matching the uploaded images exactly
const PartnerLogo: React.FC<{ type: Partner['logoType'] }> = ({ type }) => {
  switch (type) {
    case 'oab':
      return (
        <div className="flex items-center justify-center h-16 w-36 sm:w-44 select-none">
          <svg viewBox="0 0 160 70" className="w-full h-full max-h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="oabGlobeGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#2c72b8" />
                <stop offset="50%" stopColor="#15427d" />
                <stop offset="100%" stopColor="#081e40" />
              </radialGradient>
              <linearGradient id="oabRedGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e52d2d" />
                <stop offset="100%" stopColor="#b31217" />
              </linearGradient>
            </defs>
            {/* Globe */}
            <circle cx="35" cy="35" r="28" fill="url(#oabGlobeGrad)" />
            {/* Celestial Band */}
            <path
              d="M 8 36 C 18 24, 52 24, 62 36 C 52 28, 18 28, 8 36 Z"
              fill="#ffffff"
              opacity="0.9"
            />
            {/* Stars dots in globe */}
            <circle cx="28" cy="40" r="1.3" fill="#ffffff" />
            <circle cx="34" cy="43" r="1.1" fill="#ffffff" />
            <circle cx="39" cy="41" r="1.2" fill="#ffffff" />
            <circle cx="35" cy="47" r="1" fill="#ffffff" />
            <circle cx="44" cy="44" r="1.1" fill="#ffffff" />
            <circle cx="24" cy="46" r="1" fill="#ffffff" />
            <circle cx="42" cy="38" r="1" fill="#ffffff" />

            {/* Stylized Red "AB" of OAB */}
            {/* Triangular 'A' */}
            <path
              d="M 66 58 L 86 16 L 106 58 L 94 58 L 86 41 L 78 58 Z"
              fill="url(#oabRedGrad)"
            />
            {/* Inner A cutout */}
            <polygon points="86,25 80,36 92,36" fill="#ffffff" />

            {/* Stylized 'B' */}
            <path
              d="M 103 16 L 126 16 C 137 16, 145 22, 145 29 C 145 34, 140 38, 133 39 C 142 41, 148 46, 148 53 C 148 61, 138 66, 124 66 L 103 66 Z"
              fill="url(#oabRedGrad)"
            />
            {/* B cutouts */}
            <path
              d="M 115 24 L 124 24 C 130 24, 134 26, 134 30 C 134 34, 130 36, 124 36 L 115 36 Z"
              fill="#ffffff"
            />
            <path
              d="M 115 44 L 125 44 C 132 44, 136 47, 136 51 C 136 56, 132 58, 125 58 L 115 58 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      );

    case 'iasp':
      return (
        <div className="flex items-center justify-center gap-2.5 h-16 w-44 sm:w-52 select-none">
          {/* Classical IASP Seal */}
          <svg viewBox="0 0 60 60" className="w-12 h-12 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#8b2323" strokeWidth="2.5" fill="#ffffff" />
            <circle cx="30" cy="30" r="24" stroke="#8b2323" strokeWidth="1" strokeDasharray="2 1.5" />
            {/* Classical Pillar / Column */}
            <rect x="25" y="24" width="10" height="22" fill="#8b2323" rx="1" />
            <rect x="22" y="46" width="16" height="4" fill="#8b2323" rx="1" />
            <rect x="23" y="21" width="14" height="3" fill="#8b2323" rx="1" />
            {/* Laurel / Torch light */}
            <path d="M 23 17 Q 30 10 37 17 Q 30 20 23 17 Z" fill="#b03030" />
            <text x="30" y="56" fontSize="5" textAnchor="middle" fill="#8b2323" fontWeight="bold">LEX</text>
          </svg>
          {/* IASP Typography */}
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif font-bold text-[#8b2323] text-xl tracking-tight leading-none mb-1">
              IASP
            </span>
            <span className="text-[#8b2323] text-[8.5px] uppercase tracking-wider font-semibold leading-tight">
              INSTITUTO
            </span>
            <span className="text-[#8b2323] text-[8.5px] uppercase tracking-wider font-semibold leading-tight">
              DOS ADVOGADOS
            </span>
            <span className="text-[#8b2323] text-[8.5px] uppercase tracking-wider font-semibold leading-tight">
              DE SÃO PAULO
            </span>
          </div>
        </div>
      );

    case 'caamt':
      return (
        <div className="flex flex-col items-center justify-center text-center h-16 w-44 sm:w-52 select-none">
          {/* Stylized Wing Swooshes */}
          <svg viewBox="0 0 100 35" className="w-24 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 15 32 Q 55 18 85 4 Q 60 14 30 26 Z" fill="#291e47" />
            <path d="M 22 33 Q 65 24 95 10 Q 70 20 38 29 Z" fill="#d92b34" />
            <path d="M 32 34 Q 72 29 98 18 Q 78 26 48 32 Z" fill="#1c4482" />
          </svg>
          {/* Subtitle Script */}
          <span className="text-[7.5px] text-slate-500 italic -mt-1 block">Cuidando do Advogado</span>
          {/* CAAMT Name */}
          <div className="flex items-center justify-center text-sm font-black tracking-tight leading-none">
            <span className="text-[#13233f]">CAA</span>
            <span className="text-[#d92b34]">MT</span>
          </div>
          <span className="text-[7px] text-slate-600 font-medium tracking-tight">Caixa de Assistência dos Advogados</span>
        </div>
      );

    case 'caaam':
      return (
        <div className="flex items-center justify-center gap-2 h-16 w-44 sm:w-52 select-none">
          {/* OAB Amazonas Lockup */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 45 45" className="w-6 h-6 shrink-0" fill="none">
                <circle cx="22.5" cy="22.5" r="20" fill="#15427d" />
                <path d="M 4 23 C 12 15 33 15 41 23 C 33 17 12 17 4 23 Z" fill="#ffffff" opacity="0.85" />
              </svg>
              <div className="text-red-600 font-black text-xs leading-none">AB</div>
            </div>
            <span className="text-[6.5px] font-bold text-[#15427d] tracking-widest uppercase mt-0.5">
              AMAZONAS
            </span>
          </div>

          {/* Divider */}
          <div className="w-[1.5px] h-9 bg-slate-400/80" />

          {/* CAAAM Name */}
          <span className="text-[#0d6b85] font-black text-sm sm:text-base tracking-wider">
            CAAAM
          </span>
        </div>
      );

    case 'caasc':
      return (
        <div className="flex items-center justify-center gap-2 h-16 w-44 sm:w-52 select-none">
          {/* OAB Santa Catarina Lockup */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 45 45" className="w-6 h-6 shrink-0" fill="none">
                <circle cx="22.5" cy="22.5" r="20" fill="#15427d" />
                <path d="M 4 23 C 12 15 33 15 41 23 C 33 17 12 17 4 23 Z" fill="#ffffff" opacity="0.85" />
              </svg>
              <div className="text-red-600 font-black text-xs leading-none">AB</div>
            </div>
            <span className="text-[6px] font-bold text-[#15427d] tracking-wider uppercase mt-0.5 whitespace-nowrap">
              SANTA CATARINA
            </span>
          </div>

          {/* Divider */}
          <div className="w-[1.5px] h-9 bg-slate-400/80" />

          {/* CAASC Name */}
          <span className="text-[#0e3b68] font-black text-sm sm:text-base tracking-wider">
            CAASC
          </span>
        </div>
      );
  }
};

interface PartnersSectionProps {
  onOpenEnrollment?: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="parceiros-section" className="py-20 lg:py-24 bg-gradient-to-b from-[#08152c] via-[#0b1b36] to-[#071329] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d1a153_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Handshake className="w-4 h-4 text-amber-400" />
            <span>Alianças Institucionais & Convênios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-cinzel">
              Parceiros
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A EBRADI mantém convênios e parcerias com o Conselho Federal da OAB, Seccionais, Caixas de Assistência aos Advogados e as mais tradicionais entidades jurídicas do Brasil, proporcionando benefícios e formação continuada com nota máxima no MEC.
          </p>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {PARTNERS.map((partner, index) => {
            const isLastSingle = index === PARTNERS.length - 1 && PARTNERS.length % 2 !== 0;
            return (
              <div
                key={partner.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between ${
                  isLastSingle ? 'lg:col-span-2 lg:max-w-xl lg:mx-auto w-full' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 h-full">
                  {/* Left Column: Tag, Title and Description */}
                  <div className="flex-1 space-y-2.5">
                    {/* Top Tag Badge */}
                    <div className="inline-block">
                      <span className="bg-[#1ea88e] text-white text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-xs">
                        {partner.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight leading-snug uppercase pt-1">
                      {partner.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                      {partner.description}
                    </p>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-px h-24 bg-slate-200 shrink-0 mx-2" />

                  {/* Right Column: Official Logo */}
                  <div className="shrink-0 flex items-center justify-center p-2 rounded-lg bg-slate-50/50 sm:bg-transparent">
                    <PartnerLogo type={partner.logoType} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Benefit Information */}
        <div className="mt-12 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                É conveniado ou inscrito na OAB / CAAs?
              </h4>
              <p className="text-xs text-slate-400">
                Você e seus dependentes têm direito a descontos exclusivos de até 40% em pós-graduações.
              </p>
            </div>
          </div>

          {onOpenEnrollment && (
            <button
              onClick={onOpenEnrollment}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Consultar Convênio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
