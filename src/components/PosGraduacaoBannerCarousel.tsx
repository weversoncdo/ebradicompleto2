import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Percent,
  Zap
} from 'lucide-react';

interface PosGraduacaoBannerProps {
  onOpenEnrollment: (courseId?: string) => void;
  onSelectCategory?: (category: string, area?: string) => void;
  selectedCategory?: string;
}

export const PosGraduacaoBannerCarousel: React.FC<PosGraduacaoBannerProps> = ({
  onOpenEnrollment,
}) => {
  const handleEnroll = () => {
    onOpenEnrollment();
  };

  return (
    <section 
      id="banner-principal-pos-graduacao"
      className="relative w-full bg-[#071326] text-white overflow-hidden border-b border-slate-800 shadow-2xl"
      aria-label="Banner institucional e de vendas de Pós-Graduação e MBA em Direito EBRADI"
    >
      {/* Background Graphic Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80" 
          alt="Direito e Justiça EBRADI"
          className="w-full h-full object-cover object-center opacity-10 filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#0d1e3a] to-[#14284d] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        
        {/* Top Header Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Escola Brasileira de Direito • Tradição e Excelência Jurídica</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
              <Percent className="w-3.5 h-3.5" />
              Bolsas de Estudo Especiais
            </span>
          </div>
        </div>

        {/* Sales Pitch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting institucional persuasivo sobre as qualidades da EBRADI */}
          <div className="lg:col-span-8 space-y-6">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Pós-Graduação e MBA em Direito com a Maior Autoridade Acadêmica do País
            </h1>

            {/* Persuasive Sales Copy */}
            <div className="space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-white font-semibold">EBRADI (Escola Brasileira de Direito)</strong> é referência nacional na formação de advogados e operadores do Direito, unindo o rigor científico à prática forense do dia a dia. Aprenda diretamente com os maiores nomes da doutrina e jurisprudência brasileira através de cursos 100% digitais concebidos para transformar a sua carreira.
              </p>
              <p className="text-slate-300 text-sm">
                Nossos programas de <strong className="text-amber-300 font-semibold">Pós-Graduação e MBA</strong> são certificados com <strong className="text-emerald-300 font-semibold">Nota Máxima 5 no MEC</strong> em parceria universitária oficial com a Universidade São Judas Tadeu (USJT), garantindo prestígio e reconhecimento imediato no mercado.
              </p>
            </div>

          </div>

          {/* Right Column: Card Destaques da Pós com o CTA Oficial "Matricule-se" */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0d203f]/95 border-2 border-amber-500/40 shadow-2xl backdrop-blur-md space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                    Destaques da Pós
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                  MEC Nota 5
                </span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3.5 text-xs">
                
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Modalidade & Início
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-300 font-bold mt-0.5">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Início Imediato após confirmação</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Trabalho de Conclusão (TCC)
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-100 font-bold mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>TCC 100% Opcional</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Duração Flexível
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-100 font-bold mt-0.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>6 a 12 meses • 100% Online</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Condição Exclusiva
                  </span>
                  <span className="text-amber-300 font-extrabold text-sm block mt-0.5">
                    Até 50% de Bolsa de Estudos
                  </span>
                  <span className="text-slate-300 text-[11px] block mt-0.5">
                    Parcelamento em até 18x sem juros no cartão
                  </span>
                </div>

              </div>

              {/* Destaque CTA: "Matricule-se" */}
              <div className="pt-2 border-t border-slate-700/80">
                <button
                  onClick={handleEnroll}
                  id="cta-matriculese-destaque-card"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2 group"
                  title="Matricule-se agora na Pós-Graduação ou MBA EBRADI"
                >
                  <span>Matricule-se</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Institutional Seal */}
            <div className="px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Certificação Universitária USJT
              </span>
              <span className="text-amber-400 font-bold">100% Digital</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
