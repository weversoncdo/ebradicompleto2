import React from 'react';
import { 
  Laptop, 
  Award, 
  FileCode2, 
  BrainCircuit, 
  CheckCircle, 
  Sparkles,
  BookOpenCheck,
  Building2,
  Users2
} from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia-section" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <BookOpenCheck className="w-3.5 h-3.5 text-slate-700" />
            <span>Diferenciais Pedagógicos EBRADI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1b36] tracking-tight">
            Por que a EBRADI é a Escolha de Quem Quer Liderar na Advocacia?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Aliamos a tradição dos maiores juristas do Brasil à inovação pedagógica do ensino digital contemporâneo.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0b1b36]">
              1. Cátedras de Notáveis
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Você aprende diretamente com os autores e desembargadores cujas decisões e doutrinas norteiam a jurisprudência nos tribunais estaduais e superiores (STF/STJ).
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <FileCode2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0b1b36]">
              2. Prática Forense Aplicada
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nada de teorias desconectadas. Nossos cursos abordam a redação de contratos, petições iniciais complexas, contestações, recursos e atuação em audiências reais.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0b1b36]">
              3. IA e Inovação Jurídica
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Todos os cursos de pós-graduação incluem um módulo exclusivo de ferramentas práticas de Inteligência Artificial generativa, automação e jurimetria forense.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0b1b36]">
              4. Nota Máxima no MEC (5)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Certificação outorgada pela Universidade São Judas Tadeu (USJT), instituição com conceito institucional máximo no MEC e pertencente ao Ecossistema Ânima.
            </p>
          </div>

        </div>

        {/* Academic Endorsement Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0b1b36] text-white flex items-center justify-center font-cinzel text-2xl font-bold shrink-0 shadow">
              USJT
            </div>
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                Chancela de Prestígio Universitário
              </span>
              <h4 className="text-lg font-bold text-[#0b1b36]">
                Universidade São Judas Tadeu & Ânima Educação
              </h4>
              <p className="text-xs text-slate-500 max-w-xl">
                Seu certificado tem validade nacional com a chancela de uma das instituições universitárias mais tradicionais de São Paulo, reconhecida pelas maiores bancas e tribunais do país.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-2xl font-extrabold text-emerald-700 block">5</span>
              <span className="text-[10px] uppercase font-bold text-slate-500">Nota MEC</span>
            </div>
            <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-2xl font-extrabold text-[#0b1b36] block">100%</span>
              <span className="text-[10px] uppercase font-bold text-slate-500">Online</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
