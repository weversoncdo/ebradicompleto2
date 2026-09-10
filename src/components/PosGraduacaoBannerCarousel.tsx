import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  BookOpen,
  CheckCircle2,
  Percent
} from 'lucide-react';

interface PosGraduacaoBannerCarouselProps {
  onOpenEnrollment: () => void;
  onSelectCategory?: (category: string) => void;
}

interface BannerSlide {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  patrono: string;
  highlights: string[];
  discount: string;
  duration: string;
  bgGradient: string;
  bgImage: string;
  ctaText: string;
  secondaryCtaText: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 'tributario',
    badge: 'Pós-Graduação Reconhecida pelo MEC • Nota 5',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    title: 'Pós-Graduação em Direito & Processo Tributário',
    subtitle: 'Com o Patrono Regente Prof. Dr. Ives Gandra da Silva Martins. Domine a Reforma Tributária (IBS/CBS) e as teses fiscais mais lucrativas do país.',
    patrono: 'Prof. Dr. Ives Gandra Martins',
    highlights: [
      'Análise aprofundada da Reforma Tributária 2025/2026',
      'Certificação Universitária Oficial USJT (Nota Máxima 5 no MEC)',
      'Módulo exclusivo de Inteligência Artificial aplicada ao Planejamento Tributário',
    ],
    discount: 'Até 50% de Bolsa',
    duration: '6 a 12 meses • 100% Online',
    bgGradient: 'from-[#0b1b36] via-[#112447] to-[#1c3560]',
    bgImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Garantir Bolsa na Pós',
    secondaryCtaText: 'Ver Grade Curricular'
  },
  {
    id: 'trabalhista',
    badge: 'Advocacia Trabalhista de Alta Performance',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    title: 'Pós-Graduação em Direito & Processo do Trabalho',
    subtitle: 'Sob a patronagem do Prof. Renato Saraiva. Aprenda audiências práticas, cálculos trabalhistas complexos e teses consolidadas no TST e STF.',
    patrono: 'Prof. Renato Saraiva',
    highlights: [
      'Oficinas de audiências simuladas e peças recursais práticas',
      'Impactos da jurisprudência recente nos acordos e execuções',
      'Mentoria com os maiores advogados e ex-procuradores do trabalho',
    ],
    discount: 'Bolsa Especial Aniversário 10 Anos',
    duration: '6 a 12 meses • Flexibilidade Total',
    bgGradient: 'from-[#09152b] via-[#162544] to-[#1e3b6a]',
    bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Matricule-se com Desconto',
    secondaryCtaText: 'Falar com Consultor'
  },
  {
    id: 'penal',
    badge: 'Prática Forense Criminalista Avançada',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Pós-Graduação em Direito Penal, Processo Penal & Criminologia',
    subtitle: 'Sob orientação dos ensinamentos do Desembargador Dr. Guilherme de Souza Nucci. Da investigação defensiva e Tribunal do Júri ao Compliance Criminal.',
    patrono: 'Desembargador Dr. Guilherme de Souza Nucci',
    highlights: [
      'Investigação Defensiva e Cadeia de Custódia da Prova',
      'Técnicas de Sustentação Oral nos Tribunais Superiores (STJ e STF)',
      'Aulas com Desembargadores, Promotores e Advogados Criminalistas Renomados',
    ],
    discount: 'Condição Especial para Advogados',
    duration: '6 a 12 meses • Acesso Imediato',
    bgGradient: 'from-[#081324] via-[#10203a] to-[#182f54]',
    bgImage: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Quero me Especializar',
    secondaryCtaText: 'Conhecer Disciplinas'
  },
  {
    id: 'civil',
    badge: 'Cátedra Maria Helena Diniz • Maior Tradição',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    title: 'Pós-Graduação em Advocacia Cível & Família Contemporânea',
    subtitle: 'Cátedra de Honra Profa. Dra. Maria Helena Diniz. Contratos empresariais, responsabilidade civil médica, planejamento sucessório e o Novo CPC.',
    patrono: 'Profa. Dra. Maria Helena Diniz',
    highlights: [
      'Planejamento Sucessório, Holding Familiar e Proteção Patrimonial',
      'Acesso a mais de 10.000 obras digitais das maiores editoras jurídicas',
      'Corpo docente formado pelos principais civilistas e doutores da PUC e USP',
    ],
    discount: 'Até 45% de Bolsa de Estudos',
    duration: '6 a 12 meses • Certificado MEC',
    bgGradient: 'from-[#0b1b36] via-[#152a50] to-[#1d3d75]',
    bgImage: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Simular Minha Mensalidade',
    secondaryCtaText: 'Ver Grade Curricular'
  },
  {
    id: 'digital',
    badge: 'Área com Maior Crescimento e Honorários no Brasil',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    title: 'Pós-Graduação em Direito Digital, Proteção de Dados (LGPD) & IA',
    subtitle: 'Com a pioneira Dra. Patricia Peck Pinheiro. Prepare-se para a revolução tecnológica do Direito: Contratos Tecnológicos, Cibersegurança e Regulação de IA.',
    patrono: 'Dra. Patricia Peck Pinheiro',
    highlights: [
      'Formação Completa para DPO (Data Protection Officer) e Consultor LGPD',
      'Uso Estratégico de Inteligência Artificial Generativa nos Escritórios',
      'Casos reais de resposta a incidentes de segurança e litígios digitais',
    ],
    discount: 'Bolsas com Desconto Especial',
    duration: '6 a 12 meses • 100% EAD Interativo',
    bgGradient: 'from-[#0b182d] via-[#172343] to-[#25325c]',
    bgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Garantir Vaga na Turma 2026',
    secondaryCtaText: 'Falar com Consultor'
  }
];

export const PosGraduacaoBannerCarousel: React.FC<PosGraduacaoBannerCarouselProps> = ({
  onOpenEnrollment,
  onSelectCategory
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const slideCount = SLIDES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPaused]);

  const active = SLIDES[currentSlide];

  const handleSecondaryAction = () => {
    if (onSelectCategory) {
      onSelectCategory('pos');
    }
    const section = document.getElementById('cursos-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="carrossel-pos-graduacao"
      className="relative w-full bg-[#071326] text-white overflow-hidden border-b border-slate-800 shadow-2xl select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={active.bgImage} 
          alt={active.title}
          className="w-full h-full object-cover object-center opacity-15 transition-opacity duration-700 filter saturate-150"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${active.bgGradient} opacity-95 transition-all duration-700`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Lateral Navigation Arrow - Left */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a182f]/90 hover:bg-[#112444] border border-slate-700/80 text-white flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm group"
        aria-label="Banner anterior"
        title="Banner anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Lateral Navigation Arrow - Right */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a182f]/90 hover:bg-[#112444] border border-slate-700/80 text-white flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm group"
        aria-label="Próximo banner"
        title="Próximo banner"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-16 py-8 sm:py-12 lg:py-16">
        
        {/* Top Carousel Navigation Tabs (Quick Select) */}
        <div className="hidden md:flex flex-wrap items-center gap-2 mb-6 pb-2">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider shrink-0 mr-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Cursos em Destaque:
          </span>
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all shrink-0 cursor-pointer ${
                idx === currentSlide
                  ? 'bg-red-600 text-white shadow-md scale-105 ring-2 ring-red-400/40'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80'
              }`}
            >
              {slide.id === 'tributario' && 'Tributário'}
              {slide.id === 'trabalhista' && 'Trabalhista'}
              {slide.id === 'penal' && 'Penal & Criminologia'}
              {slide.id === 'civil' && 'Civil & Família'}
              {slide.id === 'digital' && 'Direito Digital & IA'}
            </button>
          ))}
        </div>

        {/* Main Banner Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-[360px] sm:min-h-[400px]">
          
          {/* Left / Main Text Column (8 cols) */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 animate-in fade-in duration-300">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs ${active.badgeColor}`}>
                <Award className="w-3.5 h-3.5 shrink-0" />
                {active.badge}
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Certificação USJT
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                <Percent className="w-3.5 h-3.5" />
                {active.discount}
              </span>
            </div>

            {/* Banner Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
              {active.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl font-normal">
              {active.subtitle}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 pt-1">
              {active.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenEnrollment}
                className="px-6 sm:px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer group"
              >
                <span>{active.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleSecondaryAction}
                className="px-5 sm:px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>{active.secondaryCtaText}</span>
              </button>
            </div>

          </div>

          {/* Right / Highlights Badge Card (4 cols) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
            
            {/* Feature Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Destaques da Pós
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
                  MEC Nota 5
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                    Orientação de Honra
                  </span>
                  <span className="text-white font-bold text-sm block mt-0.5 font-cinzel">
                    {active.patrono}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                    Duração & Formato
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-200 font-semibold mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{active.duration}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                    Benefício Exclusivo
                  </span>
                  <span className="text-amber-300 font-bold block mt-0.5">
                    {active.discount} no plano comemorativo
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={onOpenEnrollment}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Consultar Valor Promocional
                </button>
              </div>
            </div>

            {/* Micro Institutional Trust Tag */}
            <div className="px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Matrícula 100% Segura
              </span>
              <span className="text-amber-400 font-bold">Início Imediato</span>
            </div>

          </div>

        </div>

        {/* Carousel Navigation Indicators (Centralizado Embaixo do Banner) */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-center">
          <div className="flex items-center gap-2.5 bg-slate-950/40 px-4 py-2 rounded-full border border-slate-800/60 backdrop-blur-xs">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-9 sm:w-10 h-3 bg-red-600 rounded-full shadow-sm shadow-red-600/50'
                    : 'w-3 h-3 bg-[#3d4b60] hover:bg-slate-400 rounded-full'
                }`}
                aria-label={`Ir para banner ${idx + 1}`}
              />
            ))}
            <span className="ml-3 text-xs sm:text-sm text-slate-300 font-semibold tracking-wide">
              {currentSlide + 1} de {slideCount}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
