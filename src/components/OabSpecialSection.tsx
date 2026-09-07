import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  CheckCircle, 
  BarChart3, 
  FileText, 
  Sparkles, 
  Clock, 
  ArrowRight,
  Flame,
  Award
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

        {/* Highlighted OAB Courses Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#0b1b36]">
              Cursos Preparatórios Disponíveis
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Início Imediato com Cronograma Atualizado
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oabCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white border-2 border-slate-200 hover:border-red-600 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
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

                  <p className="text-xs text-slate-600 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {course.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
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
        </div>

      </div>
    </section>
  );
};
