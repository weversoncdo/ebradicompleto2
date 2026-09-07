import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  BookOpenCheck,
  Search,
  ChevronDown
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnrollment: () => void;
  onFilterCourses: (category: string, area?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnrollment,
  onFilterCourses,
}) => {
  const [selectedLevel, setSelectedLevel] = useState('pos');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSearchCourses = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterCourses(selectedLevel, selectedArea || undefined);
    const catalog = document.getElementById('cursos-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08152c] via-[#0d2146] to-[#071329] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d1a153_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Credibility */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-amber-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Inscrições Abertas 2025/2026 • Nota Máxima 5 no MEC</span>
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
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Pós-Graduação Jurídica 100% online chancelada pela <strong>Universidade São Judas Tadeu (USJT)</strong> e preparatórios para a OAB ministrados diretamente pelos maiores juristas e autores do país.
            </p>

            {/* Key Advantages List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 text-sm text-slate-200">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenEnrollment}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-900/40 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Garantir Minha Vaga com Bolsa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#cursos-section"
                className="px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-sm border border-slate-700 text-center transition-all hover:text-white"
              >
                Explorar Catálogo de Cursos
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
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

          {/* Right Column: Interactive Course Search Box & Highlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 relative">
              <div className="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                Simulador Rápido
              </div>

              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-[#0b1b36]">
                  Encontre o Curso Ideal
                </h3>
                <p className="text-xs text-slate-500">
                  Selecione sua modalidade e área de interesse para ver ementas, condições e bolsas disponíveis.
                </p>
              </div>

              <form onSubmit={handleSearchCourses} className="space-y-4">
                {/* Level Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nível / Modalidade
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('pos')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        selectedLevel === 'pos'
                          ? 'bg-[#0b1b36] text-white border-[#0b1b36]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Pós-Graduação (Nota 5)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('oab')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        selectedLevel === 'oab'
                          ? 'bg-[#0b1b36] text-white border-[#0b1b36]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Preparatório OAB
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('extensao')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        selectedLevel === 'extensao'
                          ? 'bg-[#0b1b36] text-white border-[#0b1b36]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Cursos de Extensão
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('digital')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        selectedLevel === 'digital'
                          ? 'bg-[#0b1b36] text-white border-[#0b1b36]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Direito Digital & IA
                    </button>
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Área de Especialização
                  </label>
                  <div className="relative">
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full appearance-none bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    >
                      <option value="">Todas as áreas jurídicas</option>
                      <option value="Civil">Direito Civil e Processual</option>
                      <option value="Empresarial">Direito Empresarial e Societário</option>
                      <option value="Tributário">Direito Tributário e Reforma Fiscal</option>
                      <option value="Penal">Direito Penal e Criminologia</option>
                      <option value="Trabalhista">Direito e Processo do Trabalho</option>
                      <option value="Digital">Direito Digital, LGPD & Inteligência Artificial</option>
                      <option value="Família">Direito de Família e Sucessões</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                {/* Featured Faculty Quick Banner */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 border border-amber-300 font-cinzel text-sm">
                    IG
                  </div>
                  <div>
                    <span className="font-bold text-[#0b1b36] block">Cátedras de Notáveis Juristas</span>
                    <span>Aprenda com Ives Gandra, Maria Helena Diniz, Nucci e Patricia Peck.</span>
                  </div>
                </div>

                {/* Submit Search */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Ver Cursos Disponíveis</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] text-slate-500">
                  Dúvidas sobre sua inscrição? Ligue grátis: <strong className="text-slate-800">0800 006 9000</strong>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
