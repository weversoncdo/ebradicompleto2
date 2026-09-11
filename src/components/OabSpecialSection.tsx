import React, { useRef, useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  BarChart3, 
  FileText, 
  Sparkles, 
  Clock, 
  ArrowRight,
  Flame,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { Course } from '../types';

interface OabSpecialSectionProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
}

export const OabSpecialSection: React.FC<OabSpecialSectionProps> = ({
  onSelectCourse,
  onEnrollCourse,
}) => {
  const oabCourses = COURSES.filter(c => c.category === 'oab');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

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
    <section id="oab-section" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-red-600" />
            <span>Método EBRADI de Aprovação OAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b36] tracking-tight">
            Conquiste a sua Carteira Vermelha da OAB na Primeira Tentativa
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Mais de 87% de aprovação comprovada. Um ecossistema de estudos que mapeia a banca FGV, identifica suas lacunas e garante seu nome na lista dos aprovados.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-red-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b1b36]">
              Raio-X Estatístico da Banca FGV
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mapeamento de todas as provas dos últimos 10 anos. Você foca 80% do seu tempo nas matérias e artigos que historicamente respondem por 90% dos pontos da 1ª fase.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-red-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b1b36]">
              Correção Individualizada na 2ª Fase
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Professores examinadores corrigem cada linha da sua peça prático-profissional e questões discursivas de acordo com o rigoroso espelho de notas oficial da FGV.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover:border-red-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b1b36]">
              Garantia de Aprovação EBRADI
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Temos tanta certeza na eficácia do nosso método que, se você cumprir 85% do cronograma e não for aprovado, seu acesso é renovado gratuitamente para o próximo Exame!
            </p>
          </div>

        </div>

        {/* Highlighted OAB Courses Grid / Carousel on Mobile */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
            <h3 className="text-xl font-bold text-[#0b1b36]">
              Cursos Preparatórios Disponíveis
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Início Imediato com Cronograma Atualizado
            </span>
          </div>

          <div>
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex md:grid md:grid-cols-3 gap-0 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar w-full py-2"
            >
              {oabCourses.map((course) => (
                <div 
                  key={course.id}
                  className="w-full shrink-0 md:shrink md:w-auto snap-center bg-white border-2 border-slate-200 hover:border-red-600 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                        {course.badge || 'Exame de Ordem'}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {course.hours}
                      </span>
                    </div>

                    <h4 
                      onClick={() => onSelectCourse(course)}
                      className="text-base font-bold text-[#0b1b36] hover:text-red-600 transition-colors cursor-pointer"
                    >
                      {course.title}
                    </h4>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Investimento</span>
                      <span className="text-lg font-bold text-[#0b1b36]">
                        {course.installments}x de R$ {course.promotionalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <button
                      onClick={() => onEnrollCourse(course)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Matricular
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Manual Slider Carousel Controls */}
            {oabCourses.length > 1 && (
              <div className="flex md:hidden items-center justify-center gap-3.5 mt-5">
                <button
                  type="button"
                  onClick={() => handleScrollStep('left')}
                  disabled={!canScrollLeft}
                  aria-label="Voltar para curso preparatório anterior"
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
                  aria-label="Avançar para próximo curso preparatório"
                  className={`w-11 h-11 rounded-full bg-white text-[#0b1b36] shadow-md border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer ${
                    !canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:bg-slate-100 active:scale-95'
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-[#0b1b36] stroke-[2.5]" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
