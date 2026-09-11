import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Course, CourseCategory } from '../types';
import { COURSES } from '../data/courses';
import { 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Calendar, 
  Award, 
  Search, 
  ArrowUpRight, 
  Sparkles,
  Filter,
  ShieldCheck,
  Zap,
  CreditCard,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// ============================================================================
// ESPAÇO PARA INSERIR LINK DE REDIRECIONAMENTO DA PÁGINA DE PRODUTO:
// Quando tiver a URL da página de produto, preencha a constante abaixo (ex: "https://...")
// ou configure a propriedade `productUrl` em cada curso em src/data/courses.ts.
// ============================================================================
const DEFAULT_PRODUCT_PAGE_URL = "";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories: { id: string; label: string; count: number }[] = [
    { id: 'pos', label: 'PÓS-GRADUAÇÃO', count: COURSES.filter(c => c.category === 'pos').length },
    { id: 'master-class', label: 'PÓS-GRADUAÇÃO MASTER CLASS', count: COURSES.filter(c => c.category === 'master-class').length },
    { id: 'mba', label: 'MBA', count: COURSES.filter(c => c.category === 'mba').length },
    { id: 'essentials', label: 'EBRADI ESSENTIALS', count: COURSES.filter(c => c.category === 'essentials').length },
    { id: 'cursos-livres', label: 'CURSOS LIVRES', count: COURSES.filter(c => c.category === 'cursos-livres' || c.category === 'extensao').length },
    { id: 'internacional', label: 'INTERNACIONAL', count: COURSES.filter(c => c.category === 'internacional').length },
    { id: 'experience', label: 'EBRADI EXPERIENCE', count: COURSES.filter(c => c.category === 'experience').length },
    { id: 'start', label: 'START EBRADI', count: COURSES.filter(c => c.category === 'start').length },
    { id: 'oab', label: 'PREPARATÓRIO OAB', count: COURSES.filter(c => c.category === 'oab').length },
  ];

  const activeCategoryId = useMemo(() => {
    if (categories.some(c => c.id === selectedCategory)) {
      return selectedCategory;
    }
    // Mapping for legacy or external callers
    if (selectedCategory === 'extensao') return 'cursos-livres';
    if (selectedCategory === 'digital') return 'master-class';
    return 'pos';
  }, [selectedCategory, categories]);

  const uniqueAreas = useMemo(() => {
    const areas = new Set<string>();
    const currentCatCourses = COURSES.filter(c => 
      c.category === activeCategoryId || 
      (activeCategoryId === 'cursos-livres' && c.category === 'extensao')
    );
    currentCatCourses.forEach(c => areas.add(c.area));
    return Array.from(areas);
  }, [activeCategoryId]);

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      // Category check
      const matchesCategory = 
        course.category === activeCategoryId || 
        (activeCategoryId === 'cursos-livres' && course.category === 'extensao');
      
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
  }, [activeCategoryId, selectedAreaFilter, searchQuery]);

  // Check scroll boundary state on mobile carousel
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Reset scroll when category or filter changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setCanScrollLeft(false);
      setCanScrollRight(filteredCourses.length > 1);
    }
  }, [activeCategoryId, selectedAreaFilter, searchQuery, filteredCourses.length]);

  // Manual slide control for mobile slider
  const handleScrollStep = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const step = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
  };

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

        {/* Category Tabs - Todos os títulos visíveis sem cortes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pb-2">
          {categories.map((tab) => {
            const isActive = activeCategoryId === tab.id;
            return (
              <button
                key={tab.id}
                id={`cat-tab-${tab.id}`}
                onClick={() => {
                  onSelectCategory(tab.id);
                  setSelectedAreaFilter('all');
                }}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#0b1b36] text-white shadow-md ring-2 ring-slate-800'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
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

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
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

        {/* Course Cards Carousel on Mobile, Responsive Grid on Desktop */}
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
                onSelectCategory('pos');
              }}
              className="px-4 py-2 bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-slate-700 transition-colors"
            >
              Limpar Filtros de Busca
            </button>
          </div>
        ) : (
          <div>
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar w-full py-2"
            >
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  data-course-card
                  className="w-full shrink-0 md:shrink md:w-auto snap-center bg-[#0b1a28] rounded-2xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Card Image Area with Overlaid Badges - Slightly increased vertical height for balanced mobile view */}
                    <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden bg-slate-900">
                      <img
                        src={course.cardImage || course.coordinatorPhoto}
                        alt={course.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Deep gradient fade at the bottom into the card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a28] via-[#0b1a28]/40 to-transparent" />

                      {/* Top Left Badge: ONLINE */}
                      <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10">
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#1d61c6] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded shadow-md">
                          ONLINE
                        </span>
                      </div>

                      {/* Top Right Badge: Discount */}
                      <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10">
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#d92525] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded shadow-md">
                          {course.discountBadge || '35% OFF'}
                        </span>
                      </div>
                    </div>

                    {/* Card Body - Balanced vertical spacing */}
                    <div className="p-4 sm:p-6 pt-3 sm:pt-3 space-y-2.5 sm:space-y-3.5">
                      {/* Category Pill Tag */}
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-[#7e22ce] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                          {course.categoryTag || (course.category === 'pos' ? 'PÓS-GRADUAÇÃO' : course.category === 'oab' ? 'PREPARATÓRIO OAB' : 'LAW CASE')}
                        </span>

                        {course.mecGrade && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[9px] sm:text-[10px] font-bold">
                            <Award className="w-3 h-3 text-emerald-400" />
                            MEC 5
                          </span>
                        )}

                        {course.badge && !course.mecGrade && (
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30 text-[9px] sm:text-[10px] font-bold">
                            {course.badge}
                          </span>
                        )}
                      </div>

                      {/* Course Title */}
                      <h3 
                        onClick={() => onSelectCourse(course)}
                        className="text-base sm:text-lg md:text-xl font-black text-white group-hover:text-red-400 transition-colors cursor-pointer leading-snug uppercase tracking-tight line-clamp-2"
                      >
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Footer: Pricing, Metadata, and Action Buttons */}
                  <div className="p-4 sm:p-6 pt-2.5 sm:pt-3 space-y-3 sm:space-y-4">
                    {/* Pricing Row */}
                    <div className="pt-2 sm:pt-3 border-t border-slate-800 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] sm:text-[11px] text-slate-400 block line-through">
                          De R$ {course.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] sm:text-xs text-slate-400 font-semibold">
                            {course.installments}x de
                          </span>
                          <span className="text-xl sm:text-2xl font-black text-white">
                            R$ {course.promotionalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>

                      <span className="text-[9px] sm:text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
                        Início Imediato
                      </span>
                    </div>

                    {/* Metadata Row: Clock + Credit Card */}
                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 pt-1.5 sm:pt-2 border-t border-slate-800/80">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                        <span>{course.hours}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                        <span>Até {course.installments}x</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-0.5 sm:pt-1">
                      <button
                        onClick={() => onSelectCourse(course)}
                        className="py-2.5 sm:py-2.5 px-2 sm:px-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs text-center transition-colors hover:bg-slate-800/80 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>SAIBA MAIS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {/* INSERIR LINK DA PÁGINA DO PRODUTO AQUI: quando tiver a URL de redirecionamento, preencha DEFAULT_PRODUCT_PAGE_URL acima ou course.productUrl */}
                      <a
                        href={course.productUrl || DEFAULT_PRODUCT_PAGE_URL || "#"}
                        onClick={(e) => {
                          const targetHref = course.productUrl || DEFAULT_PRODUCT_PAGE_URL;
                          if (!targetHref || targetHref === '#') {
                            e.preventDefault();
                          }
                        }}
                        className="py-2.5 sm:py-2.5 px-2 sm:px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                        title="Garantir Vaga"
                      >
                        <span>Garantir Vaga</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Manual Slider Carousel Controls (matching attached reference image) */}
            {filteredCourses.length > 1 && (
              <div className="flex md:hidden items-center justify-center gap-3.5 mt-5">
                <button
                  type="button"
                  onClick={() => handleScrollStep('left')}
                  disabled={!canScrollLeft}
                  aria-label="Voltar para curso anterior"
                  className={`w-11 h-11 rounded-full bg-white text-[#0b1b36] shadow-md border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer ${
                    !canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-100 active:scale-95'
                  }`}
                >
                  <ChevronLeft className="w-6 h-6 text-[#0b1b36] stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollStep('right')}
                  disabled={!canScrollRight}
                  aria-label="Avançar para próximo curso"
                  className={`w-11 h-11 rounded-full bg-white text-[#0b1b36] shadow-md border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer ${
                    !canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-100 active:scale-95'
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-[#0b1b36] stroke-[2.5]" />
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
