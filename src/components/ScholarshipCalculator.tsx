import React, { useState, useMemo } from 'react';
import { COURSES } from '../data/courses';
import { Course } from '../types';
import { Calculator, Percent, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ScholarshipCalculatorProps {
  onEnrollWithDiscount: (course: Course, discountPercentage: number, discountLabel: string) => void;
}

export const ScholarshipCalculator: React.FC<ScholarshipCalculatorProps> = ({
  onEnrollWithDiscount,
}) => {
  const [selectedAffiliation, setSelectedAffiliation] = useState<string>('oab');
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES[0].id);

  const affiliations = [
    { id: 'oab', label: 'Inscrito na OAB / Jovem Advogado', discount: 35, note: 'Convênio com seccionais e subseções da OAB' },
    { id: 'ex-aluno', label: 'Ex-Aluno Ânima / USJT / EBRADI', discount: 45, note: 'Benefício especial para comunidade acadêmica' },
    { id: 'antecipacao', label: 'Matrícula Antecipada Promocional', discount: 40, note: 'Condição válida para inscrições nesta semana' },
    { id: 'empresa', label: 'Empresa ou Escritório Conveniado', discount: 30, note: 'Parcerias corporativas e escritórios associados' },
  ];

  const currentAffiliation = affiliations.find(a => a.id === selectedAffiliation) || affiliations[0];
  const currentCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  const calculation = useMemo(() => {
    const originalMonthly = currentCourse.originalPrice;
    const discountRate = currentAffiliation.discount / 100;
    const discountedMonthly = originalMonthly * (1 - discountRate);
    const totalOriginal = originalMonthly * currentCourse.installments;
    const totalDiscounted = discountedMonthly * currentCourse.installments;
    const totalEconomy = totalOriginal - totalDiscounted;

    return {
      originalMonthly,
      discountedMonthly,
      totalOriginal,
      totalDiscounted,
      totalEconomy,
      discountPercentage: currentAffiliation.discount,
      label: currentAffiliation.label,
    };
  }, [currentCourse, currentAffiliation]);

  return (
    <section id="bolsas-section" className="py-20 lg:py-28 bg-[#0b1b36] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador de Bolsas EBRADI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Descubra o Valor da Sua Bolsa de Estudos
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Calcule seu desconto personalizado em tempo real com base em convênios com a OAB, histórico acadêmico ou condições promocionais de início imediato.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left form controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Select Affiliation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Selecione seu Perfil ou Convênio
                </label>
                <div className="space-y-2">
                  {affiliations.map(aff => (
                    <label
                      key={aff.id}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedAffiliation === aff.id
                          ? 'bg-red-950/40 border-red-500 text-white'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="affiliation"
                        value={aff.id}
                        checked={selectedAffiliation === aff.id}
                        onChange={() => setSelectedAffiliation(aff.id)}
                        className="mt-1 text-red-600 focus:ring-red-600"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm">{aff.label}</span>
                          <span className="font-extrabold text-emerald-400">-{aff.discount}%</span>
                        </div>
                        <span className="text-slate-400 text-[11px] block mt-0.5">{aff.note}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Select Course */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Selecione o Curso Desejado
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {COURSES.map(course => (
                    <option key={course.id} value={course.id} className="bg-slate-900 text-white">
                      {course.title} ({course.category === 'pos' ? 'Pós-Graduação' : course.category === 'oab' ? 'OAB' : 'Curso Livre'})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0c2249] to-[#08152e] p-6 sm:p-8 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Bolsa Aplicada
                  </span>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {calculation.discountPercentage}% OFF
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="text-xs text-slate-400">
                    Mensalidade de Tabela:
                    <span className="line-through ml-1 text-slate-500">
                      R$ {calculation.originalMonthly.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-300 block">Sua mensalidade com bolsa:</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm font-semibold text-slate-300">
                        {currentCourse.installments}x de
                      </span>
                      <span className="text-3xl font-extrabold text-white">
                        R$ {calculation.discountedMonthly.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Economia total no curso:</span>
                    </div>
                    <span className="text-base font-extrabold text-emerald-200 block pl-5">
                      R$ {calculation.totalEconomy.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onEnrollWithDiscount(currentCourse, calculation.discountPercentage, calculation.label)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Garantir Esta Bolsa Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-slate-400 text-center block">
                  Vagas limitadas por polo e condições sujeitas à disponibilidade.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
