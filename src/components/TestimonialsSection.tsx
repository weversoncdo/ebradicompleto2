import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Depoimentos & Histórias Reais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b36] tracking-tight">
            Quem Faz EBRADI Transforma sua Trajetória Profissional
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Confira o que advogados, consultores e aprovados no Exame de Ordem relatam sobre a metodologia e o impacto em suas carreiras.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                    {t.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300 shadow-xs shrink-0"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#0b1b36] block">
                    {t.name}
                  </span>
                  <span className="text-slate-500 text-[11px] block line-clamp-1">
                    {t.role}
                  </span>
                  <span className="text-[10px] text-red-600 font-semibold block mt-0.5">
                    {t.course}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 bg-[#0b1b36] text-white rounded-2xl p-8 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block font-cinzel">
              +40.000
            </span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Alunos Formados
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block font-cinzel">
              Nota 5
            </span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Conceito Máximo MEC
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block font-cinzel">
              87%
            </span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Aprovação na OAB
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white block font-cinzel">
              100%
            </span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Online com Flexibilidade
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
