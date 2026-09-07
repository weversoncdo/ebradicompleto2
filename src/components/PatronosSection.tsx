import React, { useState } from 'react';
import { FACULTY } from '../data/faculty';
import { FacultyMember } from '../types';
import { BookMarked, Award, Scale, Quote, Sparkles, ArrowRight } from 'lucide-react';

interface PatronosSectionProps {
  onOpenEnrollment: () => void;
}

export const PatronosSection: React.FC<PatronosSectionProps> = ({ onOpenEnrollment }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember>(FACULTY[0]);

  return (
    <section id="patronos-section" className="py-20 lg:py-28 bg-[#0b1b36] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Corpo Docente e Patronos de Honra</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Aprenda com os Autores dos Livros que Você Consulta nos Tribunais
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Na EBRADI, você não estuda apenas teorias abstratas. Você tem aulas com os juristas, desembargadores e doutores que redigem os manuais clássicos do Direito brasileiro.
          </p>
        </div>

        {/* Featured Spotlight Patron Card */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 mb-14 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Patron Image */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl">
                  <img
                    src={selectedFaculty.photo}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 inset-x-0 flex justify-center">
                  <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow border border-amber-300/30">
                    Cátedra de Honra
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-xl font-bold text-white font-cinzel">
                  {selectedFaculty.name}
                </h3>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {selectedFaculty.title}
                </span>
                <span className="text-xs text-slate-400 block max-w-xs">
                  {selectedFaculty.role}
                </span>
              </div>
            </div>

            {/* Patron Details */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Quote */}
              {selectedFaculty.quote && (
                <div className="relative p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-slate-200 text-sm sm:text-base italic leading-relaxed">
                  <Quote className="w-8 h-8 text-amber-400/30 absolute -top-3 -left-2" />
                  <p className="relative z-10 pl-2">
                    "{selectedFaculty.quote}"
                  </p>
                </div>
              )}

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedFaculty.bio}
              </p>

              {/* Specialities Tags */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Áreas de Destaque
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedFaculty.specialities.map((spec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notable Works */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Principais Obras Publicadas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-300">
                  {selectedFaculty.notableWorks.map((work, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <BookMarked className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{work}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Faculty Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {FACULTY.map((faculty) => {
            const isSelected = selectedFaculty.id === faculty.id;
            return (
              <button
                key={faculty.id}
                onClick={() => setSelectedFaculty(faculty)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col items-center text-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-red-950/40 border-red-500 shadow-md ring-1 ring-red-500'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="w-14 h-14 rounded-full object-cover border border-slate-700 shadow-sm"
                />
                <div>
                  <span className={`text-xs font-bold block line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {faculty.name.split(' ')[faculty.name.split(' ').length - 1]}
                  </span>
                  <span className="text-[10px] text-slate-400 block line-clamp-1">
                    {faculty.title.replace('Patrono da Cátedra de ', '').replace('Patrono Regente da ', '')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-900/80 via-red-800/70 to-slate-900 border border-red-700/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Quer ter estes grandes mestres no seu currículo e na sua formação?
            </h4>
            <p className="text-xs text-slate-300">
              Faça sua pós-graduação online na EBRADI e obtenha titulação reconhecida pelo MEC com a chancela USJT.
            </p>
          </div>
          <button
            onClick={onOpenEnrollment}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-red-900 font-extrabold text-xs uppercase tracking-wider shadow hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Falar com Consultor Acadêmico
          </button>
        </div>

      </div>
    </section>
  );
};
