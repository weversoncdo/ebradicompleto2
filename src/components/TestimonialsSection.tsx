import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, Award, CheckCircle2, MessageSquareQuote, ThumbsUp, Sparkles, UserCheck } from 'lucide-react';
import { NewsletterSection } from './NewsletterSection';

interface TestimonialsSectionProps {
  onOpenTerms?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenTerms }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredTestimonials = activeFilter === 'todos'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => {
        if (activeFilter === 'tributario') return t.course.toLowerCase().includes('tributário');
        if (activeFilter === 'trabalho') return t.course.toLowerCase().includes('trabalho');
        if (activeFilter === 'civil') return t.course.toLowerCase().includes('cível');
        if (activeFilter === 'digital') return t.course.toLowerCase().includes('digital');
        if (activeFilter === 'oab') return t.tag.toLowerCase().includes('oab');
        return true;
      });

  return (
    <section id="comentarios-section" className="bg-white border-b border-slate-200">
      
      {/* DIV PRINCIPAL DE COMENTÁRIOS DE ALUNOS COM FOTOS E TEXTOS ITÁLICOS */}
      <div 
        id="comentarios-alunos" 
        className="w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider border border-red-200 shadow-xs">
            <MessageSquareQuote className="w-4 h-4 text-red-600" />
            <span>Comentários & Depoimentos de Alunos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1b36] tracking-tight leading-tight">
            O Que Dizem os Advogados e Estudantes da EBRADI
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Relatos verídicos de profissionais que aceleraram sua prática advocatícia, conquistaram a aprovação no Exame de Ordem e conquistaram novas oportunidades no mercado jurídico.
          </p>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'todos', label: 'Todos os Comentários' },
              { id: 'tributario', label: 'Pós Tributário' },
              { id: 'trabalho', label: 'Pós Trabalho' },
              { id: 'civil', label: 'Pós Civil' },
              { id: 'digital', label: 'Direito Digital & IA' },
              { id: 'oab', label: 'Aprovados OAB' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs sm:text-sm px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0b1b36] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 border-2 border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-red-500/50 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                
                {/* Rating & Verified Student Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <UserCheck className="w-3 h-3 text-emerald-600" />
                    Aluno Verificado
                  </span>
                </div>

                {/* Tag & Course Badge */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                  {t.tag}
                </div>

                {/* TEXTO EM ITÁLICO (conforme solicitado pelo usuário) */}
                <div className="pt-1">
                  <p className="text-base sm:text-lg text-slate-800 italic font-serif leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

              </div>

              {/* Student Author Information with Photo */}
              <div className="pt-6 mt-4 border-t border-slate-200 flex items-center gap-4">
                {/* Foto do Aluno */}
                <div className="relative shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-red-600 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Nome, Cargo e Curso */}
                <div className="text-xs sm:text-sm">
                  <span className="font-extrabold text-[#0b1b36] block text-sm sm:text-base font-cinzel">
                    {t.name}
                  </span>
                  <span className="text-slate-600 font-medium block text-xs">
                    {t.role}
                  </span>
                  <span className="text-red-600 font-bold block text-xs mt-0.5">
                    {t.course}
                  </span>
                  <span className="text-slate-400 text-[11px] block">
                    {t.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Newsletter Curadoria Jurídica (substitui a div de selos de segurança) */}
        <NewsletterSection className="mt-12 sm:mt-16" onOpenTerms={onOpenTerms} />

      </div>

    </section>
  );
};
