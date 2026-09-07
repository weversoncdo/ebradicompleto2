import React, { useEffect } from 'react';
import { Course } from '../types';
import { 
  X, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  ArrowRight,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0b1b36] text-white p-6 sm:p-8 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 pr-10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-red-600 text-white">
                {course.area}
              </span>

              {course.mecGrade && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <Award className="w-3 h-3 text-emerald-400" />
                  Nota 5 no MEC
                </span>
              )}

              {course.partner && (
                <span className="text-[10px] font-semibold text-slate-300">
                  • {course.partner}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {course.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Duração: {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                Carga Horária: {course.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          
          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span>Visão Geral do Curso</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Coordinator */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
            <img
              src={course.coordinatorPhoto}
              alt={course.coordinator}
              className="w-14 h-14 rounded-full object-cover border-2 border-slate-300 shadow-sm shrink-0"
            />
            <div className="text-xs">
              <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
                Coordenação & Patrono
              </span>
              <span className="text-sm font-bold text-[#0b1b36] block">
                {course.coordinator}
              </span>
              <span className="text-slate-600 text-xs block">
                {course.coordinatorRole}
              </span>
            </div>
          </div>

          {/* Syllabus */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <span>Ementa Pedagógica e Módulos</span>
            </h3>

            <div className="space-y-2">
              {course.syllabus.map((module, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0b1b36] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Differentials */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Diferenciais Inclusos</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Note */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-900 block mb-0.5">
                Certificação de Validade Nacional
              </span>
              <span>
                Certificado outorgado em conformidade com as diretrizes do Ministério da Educação (MEC), chancelado pela Universidade São Judas Tadeu (USJT) e Grupo Ânima Educação.
              </span>
            </div>
          </div>

        </div>

        {/* Footer with Enrollment Action */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 block line-through">
              De R$ {course.originalPrice.toFixed(2).replace('.', ',')}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-slate-600 font-semibold">
                {course.installments}x de
              </span>
              <span className="text-2xl font-extrabold text-[#0b1b36]">
                R$ {course.promotionalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer w-1/2 sm:w-auto"
            >
              Fechar
            </button>

            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-1/2 sm:w-auto"
            >
              <span>Matricular Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
