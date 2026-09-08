import React, { useState, useMemo } from 'react';
import { Course, CourseCategory } from '../types';
import { COURSES } from '../data/courses';
import { 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Calendar, 
  Award, 
  Check, 
  Search, 
  ArrowUpRight, 
  Sparkles,
  Filter,
  ShieldCheck,
  Zap,
  CreditCard
} from 'lucide-react';

interface CourseCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onSelectCourse,
  onEnrollCourse,
}) => {
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<string>('all');

  const categories: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'Todos os Cursos', count: COURSES.length },
    { id: 'pos', label: 'Pós-Graduação (Nota 5 MEC)', count: COURSES.filter(c => c.category === 'pos').length },
    { id: 'oab', label: 'Preparatório OAB', count: COURSES.filter(c => c.category === 'oab').length },
    { id: 'extensao', label: 'Extensão & Prática', count: COURSES.filter(c => c.category === 'extensao').length },
    { id: 'digital', label: 'Direito Digital & IA', count: COURSES.filter(c => c.category === 'digital').length },
  ];

  const uniqueAreas = useMemo(() => {
    const areas = new Set<string>();
    COURSES.forEach(c => areas.add(c.area));
    return Array.from(areas);
  }, []);

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      // Category check
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      
      // Area check
      const matchesArea = selectedAreaFilter === 'all' || course.area === selectedAreaFilter;

      // Query check
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        course.title.toLowerCase().includes(query) ||
        course.area.toLowerCase().includes(query) ||
        course.coordinator.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);

      return matchesCategory && matchesArea && matchesQuery;
    });
  }, [selectedCategory, selectedAreaFilter, searchQuery]);

  return (
    <section id="cursos-section" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200">
            <GraduationCap className="w-4 h-4 text-red-600" />
            <span>Excelência Acadêmica & Prática</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b36] tracking-tight">
            Catálogo de Cursos EBRADI
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Formações completas 100% online, chanceladas pela <strong>Universidade São Judas Tadeu (Nota 5 MEC)</strong> e estruturadas com foco na solução de casos concretos da advocacia brasileira.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {categories.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onSelectCategory(tab.id);
                  setSelectedAreaFilter('all');
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#0b1b36] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isActive ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Area Filter Sub-bar */}
        <div className="mt-6 mb-10 bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Buscar por curso, tema ou professor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Área:</span>
            </span>
            <button
              onClick={() => setSelectedAreaFilter('all')}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedAreaFilter === 'all'
                  ? 'bg-slate-800 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todas
            </button>
            {uniqueAreas.map(area => (
              <button
                key={area}
                onClick={() => setSelectedAreaFilter(area)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedAreaFilter === area
                    ? 'bg-slate-800 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Nenhum curso encontrado
            </h3>
            <p className="text-xs text-slate-500">
              Não encontramos nenhum curso para a busca "{searchQuery}". Tente outros termos como "Civil", "Penal", "Tributário" ou "OAB".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedAreaFilter('all');
                onSelectCategory('all');
              }}
              className="px-4 py-2 bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-slate-700 transition-colors"
            >
              Limpar Filtros de Busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#0b1a28] rounded-2xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Image Area with Overlaid Badges and Smooth Fade */}
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-900">
                    <img
                      src={course.cardImage || course.coordinatorPhoto}
                      alt={course.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Deep gradient fade at the bottom into the card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a28] via-[#0b1a28]/40 to-transparent" />

                    {/* Top Left Badge: ONLINE */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 bg-[#1d61c6] text-white text-[11px] font-black uppercase tracking-wider rounded shadow-md">
                        ONLINE
                      </span>
                    </div>

                    {/* Top Right Badge: Discount */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-3 py-1 bg-[#d92525] text-white text-[11px] font-black uppercase tracking-wider rounded shadow-md">
                        {course.discountBadge || '35% OFF'}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-3 space-y-3.5">
                    {/* Category Pill Tag */}
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1 rounded bg-[#7e22ce] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                        {course.categoryTag || (course.category === 'pos' ? 'PÓS-GRADUAÇÃO' : course.category === 'oab' ? 'PREPARATÓRIO OAB' : 'LAW CASE')}
                      </span>

                      {course.mecGrade && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                          <Award className="w-3 h-3 text-emerald-400" />
                          MEC 5
                        </span>
                      )}

                      {course.badge && !course.mecGrade && (
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Course Title in Bold Uppercase White */}
                    <h3 
                      onClick={() => onSelectCourse(course)}
                      className="text-lg sm:text-xl font-black text-white group-hover:text-red-400 transition-colors cursor-pointer leading-snug uppercase tracking-tight line-clamp-2"
                    >
                      {course.title}
                    </h3>


                    {/* Brief Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {course.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing, Clock & Card Metadata, and Action Buttons */}
                <div className="p-6 pt-3 space-y-4">
                  {/* Pricing Row */}
                  <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block line-through">
                        De R$ {course.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-slate-400 font-semibold">
                          {course.installments}x de
                        </span>
                        <span className="text-2xl font-black text-white">
                          R$ {course.promotionalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
                      Início Imediato
                    </span>
                  </div>

                  {/* Metadata Row matching the attached image: Clock + Credit Card */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-slate-400" />
                      <span>Até {course.installments}x no Cartão</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="py-2.5 px-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs text-center transition-colors hover:bg-slate-800/80 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Ver Ementa</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onEnrollCourse(course)}
                      className="py-2.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Garantir Vaga</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
