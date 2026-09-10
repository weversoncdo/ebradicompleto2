import React, { useState } from 'react';
import { FACULTY } from '../data/faculty';
import { FacultyMember } from '../types';
import { ArrowRight, BookMarked, CheckCircle2, Quote, Sparkles, X, Award } from 'lucide-react';

interface PatronosSectionProps {
  onOpenEnrollment: () => void;
}

export const PatronosSection: React.FC<PatronosSectionProps> = ({ onOpenEnrollment }) => {
  const [selectedPatron, setSelectedPatron] = useState<FacultyMember | null>(null);
  const [showAllFacultyModal, setShowAllFacultyModal] = useState(false);

  return (
    <section id="patronos-section" className="py-16 sm:py-24 bg-[#051120] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Exact User Request */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Os maiores nomes do país estão aqui
          </h2>
        </div>

        {/* The 8 Patrons Grid - 2 per row on mobile, 4 on desktop */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {FACULTY.map((patron, index) => {
              const isBottomRow = index >= 4;
              return (
                <div
                  key={patron.id}
                  onClick={() => setSelectedPatron(patron)}
                  className={`group relative bg-gradient-to-b from-[#0e273c] via-[#091b2c] to-[#061422] rounded-xl sm:rounded-2xl border border-teal-900/50 hover:border-amber-400/60 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 ${
                    isBottomRow ? 'hover:z-20' : ''
                  }`}
                >
                  {/* Patron Portrait */}
                  <div className="h-40 sm:h-64 w-full relative overflow-hidden bg-slate-950">
                    <img
                      src={patron.photo}
                      alt={patron.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark gradient fade from bottom to blend with card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061422] via-transparent to-black/30 pointer-events-none" />
                  </div>

                  {/* Patron Details */}
                  <div className="p-3 sm:p-5 pt-2 sm:pt-3 pb-3 sm:pb-6 flex flex-col items-center text-center flex-1 justify-between">
                    {/* Badge PATRONO */}
                    <div className="-mt-5 sm:-mt-7 mb-2 sm:mb-3 relative z-10">
                      <span className="bg-[#f3dfbf] text-[#1c1917] text-[9px] sm:text-[11px] font-black tracking-widest uppercase px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded shadow-md border border-amber-200/50 block">
                        PATRONO
                      </span>
                    </div>

                    {/* Patron Name */}
                    <h3 className="text-white font-extrabold text-xs sm:text-base tracking-tight uppercase leading-tight font-cinzel min-h-[2.2rem] sm:min-h-[2.8rem] flex items-center justify-center">
                      {patron.name}
                    </h3>

                    {/* Patron Area */}
                    <p className="text-slate-300 text-[11px] sm:text-sm font-normal mt-1 leading-tight sm:leading-relaxed min-h-[2.2rem] sm:min-h-[2.5rem] flex items-center justify-center line-clamp-2">
                      {patron.area}
                    </p>

                    {/* Hover Hint */}
                    <span className="mt-2 text-[10px] sm:text-[11px] text-amber-400/80 font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>Ver biografia</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Overlay / Banner Over the Bottom Row (As seen in the image, improved with interactive readability) */}
          <div className="mt-8 lg:mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950/95 via-[#081b2d]/95 to-slate-950/95 border border-cyan-500/30 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center gap-5 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              <span className="text-cyan-400 font-extrabold tracking-wide">Na EBRADI, </span>
              <span className="text-white font-bold">
                você terá a oportunidade de estudar com profissionais renomados para enriquecer sua formação acadêmica e profissional.
              </span>
            </p>

            <button
              onClick={() => setShowAllFacultyModal(true)}
              className="px-6 py-3.5 rounded-xl bg-[#0d2238] hover:bg-[#122e4c] border border-cyan-500/50 hover:border-cyan-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Conhecer Corpo Docente</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* MODAL: Single Patron Bio & Works Details */}
      {selectedPatron && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPatron(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Photo */}
              <div className="w-36 h-44 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-950">
                <img
                  src={selectedPatron.photo}
                  alt={selectedPatron.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Header Info */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="inline-block">
                  <span className="bg-[#f3dfbf] text-[#1c1917] text-xs font-black tracking-widest uppercase px-3 py-1 rounded shadow-xs">
                    PATRONO
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-cinzel uppercase">
                  {selectedPatron.name}
                </h3>
                <span className="text-amber-400 font-semibold text-sm sm:text-base block">
                  {selectedPatron.area}
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  {selectedPatron.role}
                </p>
              </div>
            </div>

            {/* Quote if available */}
            {selectedPatron.quote && (
              <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border-l-4 border-amber-400 text-amber-100 text-sm sm:text-base italic flex items-start gap-3">
                <Quote className="w-6 h-6 text-amber-400/60 shrink-0" />
                <p>"{selectedPatron.quote}"</p>
              </div>
            )}

            {/* Trajectory Bio */}
            <div className="mt-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Trajetória Acadêmica & Atuação
              </span>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {selectedPatron.bio}
              </p>
            </div>

            {/* Notable Works */}
            {selectedPatron.notableWorks && selectedPatron.notableWorks.length > 0 && (
              <div className="mt-6 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <BookMarked className="w-4 h-4 text-amber-400" />
                  <span>Principais Obras Publicadas</span>
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {selectedPatron.notableWorks.map((work, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/60 border border-slate-700 text-xs sm:text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{work}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Aulas e orientações exclusivas nas pós-graduações EBRADI.
              </span>
              <button
                onClick={() => {
                  setSelectedPatron(null);
                  onOpenEnrollment();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inscreva-se na Pós-Graduação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL: All Faculty Members Overview */}
      {showAllFacultyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0b1b36] border border-cyan-500/40 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setShowAllFacultyModal(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Corpo Docente EBRADI</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel">
                Os Maiores Juristas e Mestres do Brasil
              </h3>
              <p className="text-sm text-slate-300">
                Conheça os patronos, desembargadores, doutores e ministros que ministram as disciplinas da EBRADI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FACULTY.map((f) => (
                <div
                  key={f.id}
                  onClick={() => {
                    setShowAllFacultyModal(false);
                    setSelectedPatron(f);
                  }}
                  className="bg-slate-900/90 rounded-xl p-4 border border-slate-700 hover:border-cyan-400 transition-all flex flex-col items-center text-center gap-3 cursor-pointer group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-amber-400/60 bg-slate-950">
                    <img src={f.photo} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white uppercase block line-clamp-1">
                      {f.name}
                    </span>
                    <span className="text-[11px] font-semibold text-cyan-400 block line-clamp-1 mt-0.5">
                      {f.area}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-6 border-t border-slate-800">
              <button
                onClick={() => {
                  setShowAllFacultyModal(false);
                  onOpenEnrollment();
                }}
                className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Quero Estudar com Este Corpo Docente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
