import React from 'react';
import { ARTICLES } from '../data/testimonials';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

// ============================================================================
// ESPAÇO PARA INSERIR LINK DE REDIRECIONAMENTO DE TODOS OS ARTIGOS:
// Quando tiver a URL, preencha a constante abaixo (ex: "https://...").
// ============================================================================
const ALL_ARTICLES_PAGE_URL = "";

export const ArticlesSection: React.FC = () => {
  return (
    <section id="artigos-section" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-slate-700" />
              <span>EBRADI Notícias & Jurisprudência</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b36] tracking-tight">
              Artigos, Análises e Atualizações Jurídicas
            </h2>
            <p className="text-sm text-slate-600">
              Conteúdos práticos elaborados pelo corpo docente da EBRADI para manter você atualizado com as últimas decisões dos tribunais.
            </p>
          </div>

          {/* INSERIR LINK DA PÁGINA DE TODOS OS ARTIGOS AQUI: quando tiver o link, preencha ALL_ARTICLES_PAGE_URL acima */}
          <a
            href={ALL_ARTICLES_PAGE_URL || "#"}
            onClick={(e) => {
              if (!ALL_ARTICLES_PAGE_URL || ALL_ARTICLES_PAGE_URL === '#') {
                e.preventDefault();
              }
            }}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors shrink-0"
            title="Ver Todos os Artigos"
          >
            <span>Ver Todos os Artigos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art, index) => (
            <article
              key={art.id}
              className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group ${
                index >= 2 ? 'hidden md:flex' : 'flex'
              }`}
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b1b36]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0b1b36] group-hover:text-red-600 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                <span className="text-[11px] font-semibold text-slate-500">
                  Por {art.author}
                </span>

                <span className="text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile: Ver Todos os Artigos below the second card */}
        <div className="mt-8 flex md:hidden justify-start">
          {/* INSERIR LINK DA PÁGINA DE TODOS OS ARTIGOS AQUI: quando tiver o link, preencha ALL_ARTICLES_PAGE_URL acima */}
          <a
            href={ALL_ARTICLES_PAGE_URL || "#"}
            onClick={(e) => {
              if (!ALL_ARTICLES_PAGE_URL || ALL_ARTICLES_PAGE_URL === '#') {
                e.preventDefault();
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors shrink-0"
            title="Ver Todos os Artigos"
          >
            <span>Ver Todos os Artigos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
