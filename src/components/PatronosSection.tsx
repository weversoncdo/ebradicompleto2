import React, { useState } from 'react';
import { FACULTY } from '../data/faculty';
import { FacultyMember } from '../types';
import { BookMarked, Scale, Quote, CheckCircle2, Award, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';

interface PatronosSectionProps {
  onOpenEnrollment: () => void;
}

export const PatronosSection: React.FC<PatronosSectionProps> = ({ onOpenEnrollment }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember>(FACULTY[0]);

  return (
    <section id="patronos-section" className="py-20 lg:py-32 bg-[#0b1b36] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Large High-Contrast Typography */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-950/80 border-2 border-amber-400/50 text-amber-300 text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg">
            <Scale className="w-5 h-5 text-amber-400" />
            <span>Corpo Docente de Notório Saber & Patronos de Honra</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Aprenda Diretamente com os Autores dos Manuais que Você Consulta nos Tribunais
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed font-normal pt-2">
            Na EBRADI, você não estuda apenas teorias abstratas. Você tem aulas exclusivas com os juristas eméritos, desembargadores e doutores que moldam a jurisprudência nacional.
          </p>
        </div>

        {/* Featured Spotlight Patron Card (Large Images & Text for Maximum Accessibility) */}
        <div className="bg-slate-900/95 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 lg:p-14 mb-16 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Patron Image (LARGE HIGH-DEFINITION PORTRAIT) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-64 h-80 sm:w-76 sm:h-96 md:w-84 md:h-[420px] rounded-3xl overflow-hidden border-4 border-amber-400/80 shadow-2xl bg-slate-950 relative">
                  <img
                    src={selectedFaculty.photo}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-4 inset-x-0 flex justify-center">
                  <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 text-sm sm:text-base font-extrabold px-5 py-1.5 rounded-full shadow-xl border-2 border-amber-200 flex items-center gap-1.5 uppercase tracking-wider">
                    <Award className="w-4 h-4 text-slate-950" />
                    Cátedra de Honra
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-cinzel tracking-tight leading-tight">
                  {selectedFaculty.name}
                </h3>
                <span className="text-base sm:text-lg font-bold text-amber-400 uppercase tracking-wide block">
                  {selectedFaculty.title}
                </span>
                <span className="text-sm sm:text-base text-slate-300 block max-w-sm mx-auto font-medium">
                  {selectedFaculty.role}
                </span>
              </div>
            </div>

            {/* Patron Details (LARGE READABLE FONTS) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Prominent Quote */}
              {selectedFaculty.quote && (
                <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/80 border-2 border-amber-400/40 text-amber-100 text-lg sm:text-xl lg:text-2xl italic font-serif leading-relaxed shadow-lg">
                  <Quote className="w-10 h-10 text-amber-400/40 absolute -top-4 -left-3" />
                  <p className="relative z-10 pl-3">
                    "{selectedFaculty.quote}"
                  </p>
                </div>
              )}

              {/* Bio in Large Font */}
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-400 block">
                  Trajetória Acadêmica & Forense
                </span>
                <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-normal">
                  {selectedFaculty.bio}
                </p>
              </div>

              {/* Specialities Tags in Large Font */}
              <div className="space-y-3">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Áreas de Destaque e Ensino</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {selectedFaculty.specialities.map((spec, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 border border-slate-600 text-sm sm:text-base font-semibold shadow-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notable Works in Large Font */}
              <div className="space-y-3 pt-2">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-amber-400" />
                  <span>Principais Obras Publicadas & Referenciadas</span>
                </span>
                <div className="grid grid-cols-1 gap-3 text-base sm:text-lg text-amber-200">
                  {selectedFaculty.notableWorks.map((work, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="font-semibold text-white">{work}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTA to Learn with this Patron */}
              <div className="pt-2">
                <button
                  onClick={onOpenEnrollment}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Estudar com o Patrono {selectedFaculty.name.split(' ')[0]}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Faculty Selector (LARGE CARDS with LARGE IMAGES for Easy Recognition) */}
        <div className="space-y-4">
          <div className="text-center sm:text-left flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <span>Clique no Patrono para Ver Detalhes e Obras:</span>
            </h3>
            <span className="text-xs sm:text-sm text-slate-400 hidden sm:inline">
              Selecione qualquer jurista abaixo
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FACULTY.map((faculty) => {
              const isSelected = selectedFaculty.id === faculty.id;
              return (
                <button
                  key={faculty.id}
                  onClick={() => setSelectedFaculty(faculty)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col items-center text-center gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-red-950/60 border-red-500 shadow-xl ring-2 ring-red-500 scale-102'
                      : 'bg-slate-900/80 border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white hover:border-slate-500'
                  }`}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-md">
                    <img
                      src={faculty.photo}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className={`text-sm sm:text-base font-bold block line-clamp-1 ${isSelected ? 'text-white font-extrabold' : 'text-slate-200'}`}>
                      {faculty.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                    <span className="text-xs font-semibold text-amber-400 block line-clamp-1 mt-0.5">
                      {faculty.title.replace('Patrono da Cátedra de ', '').replace('Patrono Regente da ', '')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Institutional CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-900 via-red-800 to-slate-900 border-2 border-red-600/60 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              Quer ter estes grandes mestres no seu currículo e na sua formação?
            </h4>
            <p className="text-base sm:text-lg text-slate-200">
              Faça sua pós-graduação online na EBRADI e obtenha titulação de especialista reconhecida pelo MEC com a chancela oficial da Universidade São Judas Tadeu (USJT).
            </p>
          </div>
          <button
            onClick={onOpenEnrollment}
            className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-red-950 font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Falar com Consultor Acadêmico</span>
            <ChevronRight className="w-5 h-5 text-red-900" />
          </button>
        </div>

      </div>
    </section>
  );
};
