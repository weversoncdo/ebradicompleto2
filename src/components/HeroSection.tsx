import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  BookOpenCheck
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnrollment: () => void;
  onFilterCourses?: (category: string, area?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnrollment,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08152c] via-[#0d2146] to-[#071329] text-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d1a153_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Tag Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-amber-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Inscrições Abertas 2025/2026 • Nota Máxima 5 no MEC</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
          A maior e mais renomada{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-cinzel">
            Escola de Direito
          </span>{' '}
          do Brasil.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          Pós-Graduação Jurídica 100% online chancelada pela <strong>Universidade São Judas Tadeu (USJT)</strong> e preparatórios para a OAB ministrados diretamente pelos maiores juristas e autores do país.
        </p>

        {/* Key Advantages List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 text-sm text-slate-200 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Nota 5 no MEC (Conceito Máximo Institucional)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Patrono Regente Ives Gandra da Silva Martins</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Início Imediato com Aulas 100% Online</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Módulo Exclusivo de Inteligência Artificial no Direito</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenEnrollment}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-900/40 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Garantir Minha Vaga com Bolsa</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#cursos-section"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-sm border border-slate-700 text-center transition-all hover:text-white"
          >
            Explorar Catálogo de Cursos
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Certificação Reconhecida pelo MEC</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>+40.000 Advogados Formados</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-4 h-4 text-amber-400" />
            <span>Chancela Oficial USJT / Ânima</span>
          </div>
        </div>

      </div>
    </section>
  );
};
