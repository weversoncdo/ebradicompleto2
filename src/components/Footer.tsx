import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Check,
  X
} from 'lucide-react';

interface FooterProps {
  onOpenStudentPortal?: () => void;
  onOpenEnrollment?: () => void;
  onOpenGithubModal?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStudentPortal,
  onOpenEnrollment,
  onOpenGithubModal,
  onSelectCategory,
}) => {
  const [showAccessibilityModal, setShowAccessibilityModal] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0); // -1, 0, 1, 2
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 3000);
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    document.documentElement.classList.toggle('high-contrast-mode', next);
    showToast(next ? 'Modo de alto contraste ativado' : 'Alto contraste desativado');
  };

  const adjustFontSize = (delta: number) => {
    const newLevel = Math.max(-1, Math.min(2, fontSizeLevel + delta));
    setFontSizeLevel(newLevel);
    const scale = 1 + newLevel * 0.1;
    document.documentElement.style.fontSize = `${scale * 100}%`;
    showToast(`Tamanho da fonte: ${Math.round(scale * 100)}%`);
  };

  const resetAccessibility = () => {
    setHighContrast(false);
    setFontSizeLevel(0);
    document.documentElement.classList.remove('high-contrast-mode');
    document.documentElement.style.fontSize = '';
    showToast('Preferências de acessibilidade redefinidas');
  };

  const handleLinkClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === 'cursos' && onSelectCategory) {
      onSelectCategory('all');
      const el = document.getElementById('cursos-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'bolsas') {
      const el = document.getElementById('bolsas-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'portal' && onOpenStudentPortal) {
      onOpenStudentPortal();
    } else if (type === 'matricula' && onOpenEnrollment) {
      onOpenEnrollment();
    } else {
      showToast(`Acessando ${type}...`);
    }
  };

  return (
    <footer 
      id="institutional-footer" 
      className="w-full bg-[#d4dadb] text-[#1a1a1a] font-sans border-t border-[#c2cbcd] relative select-none sm:select-auto"
      style={{ backgroundColor: '#d4dadb' }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
          
          {/* LEFT COLUMN: 3 Navigation Sections */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col space-y-9">
            
            {/* 1. A Anhembi */}
            <div className="space-y-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] tracking-tight">
                A Anhembi
              </h3>
              
              <div className="space-y-1.5 text-[13px] sm:text-[14px] text-[#222222]">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#institucional"
                    onClick={(e) => handleLinkClick(e, 'Institucional')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Institucional</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#unidade"
                    onClick={(e) => handleLinkClick(e, 'Unidades')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Unidade</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#ouvidoria"
                    onClick={(e) => handleLinkClick(e, 'Ouvidoria')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Ouvidoria</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#compliance"
                    onClick={(e) => handleLinkClick(e, 'Compliance')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Compliance</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>
                </div>

                {/* Row 2 */}
                <div>
                  <a 
                    href="#descadastramento"
                    onClick={(e) => handleLinkClick(e, 'Descadastramento de comunicação')}
                    className="inline-flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Descadastramento de comunicação</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Faça parte */}
            <div className="space-y-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] tracking-tight">
                Faça parte
              </h3>

              <div className="space-y-1.5 text-[13px] sm:text-[14px] text-[#222222]">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#anima-solucoes"
                    onClick={(e) => handleLinkClick(e, 'Ânima Soluções')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Ânima Soluções</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#sou-empregador"
                    onClick={(e) => handleLinkClick(e, 'Sou empregador')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Sou empregador</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#cursos-section"
                    onClick={(e) => handleLinkClick(e, 'cursos')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Cursos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#modalidades"
                    onClick={(e) => handleLinkClick(e, 'Modalidades')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Modalidades</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#bolsas-section"
                    onClick={(e) => handleLinkClick(e, 'bolsas')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Bolsas e Financiamentos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#formas-de-entrada"
                    onClick={(e) => handleLinkClick(e, 'Formas de Entrada')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Formas de Entrada</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#trabalhe-conosco"
                    onClick={(e) => handleLinkClick(e, 'Trabalhe Conosco')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Trabalhe Conosco</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Alunos, Ex-Alunos e Candidatos */}
            <div className="space-y-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] tracking-tight">
                Alunos, Ex-Alunos e Candidatos
              </h3>

              <div className="space-y-1.5 text-[13px] sm:text-[14px] text-[#222222]">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#calendarios"
                    onClick={(e) => handleLinkClick(e, 'Calendários')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Calendários</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#editais"
                    onClick={(e) => handleLinkClick(e, 'Editais')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Editais</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#resultados"
                    onClick={(e) => handleLinkClick(e, 'Resultados')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Resultados</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#napi"
                    onClick={(e) => handleLinkClick(e, 'NAPI')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>NAPI</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>

                  <a 
                    href="#consulta-diploma"
                    onClick={(e) => handleLinkClick(e, 'Consulta Publica ao Diploma')}
                    className="flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Consulta Publica ao Diploma</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>
                </div>

                {/* Row 2 */}
                <div>
                  <a 
                    href="#ulife"
                    onClick={(e) => handleLinkClick(e, 'portal')}
                    className="inline-flex items-center gap-1 hover:text-black hover:underline transition-colors"
                  >
                    <span>Troca senha Ulife - Ex-alunos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Accessibility Icon at Bottom Left */}
            <div className="pt-2">
              <button
                type="button"
                id="btn-accessibility"
                onClick={() => setShowAccessibilityModal(!showAccessibilityModal)}
                className="w-10 h-10 rounded-full bg-white border border-[#b8c2c4] shadow-sm hover:shadow-md flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
                title="Acessibilidade e Recursos Visuais"
                aria-label="Acessibilidade"
              >
                {/* Stylized accessibility icon with cyan head matching image.png */}
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {/* Outer circle */}
                  <circle cx="12" cy="12" r="9.5" stroke="#718096" strokeWidth="1.4" />
                  {/* Head with cyan fill */}
                  <circle cx="12" cy="7.2" r="1.6" fill="#00b4cc" stroke="#0096aa" strokeWidth="0.8" />
                  {/* Arms & Torso */}
                  <path d="M7.5 10.2 C 9.5 9.8, 14.5 9.8, 16.5 10.2" stroke="#2d3748" strokeLinecap="round" strokeWidth="1.6" />
                  <path d="M12 10.2 L12 14.8" stroke="#2d3748" strokeLinecap="round" strokeWidth="1.6" />
                  {/* Legs */}
                  <path d="M10 18.2 L12 14.8 L14 18.2" stroke="#2d3748" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </button>
            </div>

          </div>

          {/* CENTER DIVIDER with Logo (E.png) */}
          <div className="hidden lg:flex flex-col items-center self-stretch justify-start shrink-0 px-2 xl:px-4">
            {/* Top vertical line */}
            <div className="w-[1.5px] h-12 bg-[#9ba3a8]" />
            
            {/* Logo: E.png */}
            <div className="my-3 py-1 flex items-center justify-center">
              <img 
                src="/E.png" 
                alt="Logo" 
                id="footer-logo-e"
                className="w-7 h-12 object-contain select-none"
                loading="lazy"
              />
            </div>

            {/* Bottom vertical line stretching down */}
            <div className="w-[1.5px] flex-1 min-h-[240px] bg-[#9ba3a8]" />
          </div>

          {/* Mobile Center Logo Separator */}
          <div className="flex lg:hidden items-center justify-center w-full my-3 gap-4">
            <div className="h-[1px] flex-1 bg-[#9ba3a8]" />
            <img 
              src="/E.png" 
              alt="Logo" 
              className="w-6 h-10 object-contain"
            />
            <div className="h-[1px] flex-1 bg-[#9ba3a8]" />
          </div>

          {/* RIGHT COLUMN: Central de Atendimento & Redes Sociais */}
          <div className="w-full lg:w-[38%] xl:w-[36%] flex flex-col space-y-7">
            
            {/* Central de Atendimento */}
            <div className="space-y-3.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] tracking-tight">
                Central de Atendimento
              </h3>

              <div className="space-y-3 text-[13px] sm:text-[14px]">
                {/* Item 1: Graduação e Pós */}
                <div>
                  <p className="text-[12px] sm:text-[13px] text-[#4a5568] font-normal leading-tight">
                    Graduação e Pós Graduação
                  </p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=551140071192" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#1a1a1a] hover:text-emerald-700 transition-colors block mt-0.5"
                  >
                    Somente WhatsApp - (11) 4007-1192
                  </a>
                </div>

                {/* Item 2: EAD */}
                <div>
                  <p className="text-[12px] sm:text-[13px] text-[#4a5568] font-normal leading-tight">
                    EAD
                  </p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=551151080481" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-[#1a1a1a] hover:text-emerald-700 transition-colors block mt-0.5"
                  >
                    Somente WhatsApp -(11) 5108-0481
                  </a>
                </div>

                {/* Item 3: Fale com a gente */}
                <div>
                  <a 
                    href="#fale-conosco"
                    onClick={(e) => handleLinkClick(e, 'Fale com a gente')}
                    className="text-[12px] sm:text-[13px] text-[#4a5568] hover:text-[#1a1a1a] underline transition-colors"
                  >
                    Fale com a gente
                  </a>
                </div>

                {/* Item 4: Parcerias corporativas */}
                <div className="pt-1">
                  <p className="text-[12px] sm:text-[13px] text-[#4a5568] font-normal leading-tight mb-0.5">
                    Parcerias corporativas
                  </p>
                  <p className="font-bold text-[#1a1a1a] leading-tight">
                    Convênio Corporativo:
                  </p>
                  <a 
                    href="mailto:contato@animaeducacao.com.br"
                    className="font-bold text-[#1a1a1a] hover:underline hover:text-blue-900 transition-colors block leading-tight mt-0.5"
                  >
                    contato@animaeducacao.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-3 pt-1">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] tracking-tight">
                Redes Sociais
              </h3>

              <div className="space-y-2.5 text-[13px] sm:text-[14px]">
                {/* Row 1: Facebook and Instagram */}
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2">
                  <a 
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-blue-700 font-semibold transition-colors group"
                  >
                    <Facebook className="w-4 h-4 fill-current shrink-0 text-[#1a1a1a] group-hover:text-blue-700" />
                    <span>Facebook</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a 
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-pink-600 font-semibold transition-colors group"
                  >
                    <Instagram className="w-4 h-4 shrink-0 text-[#1a1a1a] group-hover:text-pink-600" />
                    <span>Instagram</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Row 2: Linkedin, Twitter, YouTube */}
                <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2">
                  <a 
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-blue-800 font-semibold transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 fill-current shrink-0 text-[#1a1a1a] group-hover:text-blue-800" />
                    <span>Linkedin</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a 
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-black font-semibold transition-colors group"
                  >
                    <Twitter className="w-4 h-4 fill-current shrink-0 text-[#1a1a1a]" />
                    <span>Twitter</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a 
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-red-600 font-semibold transition-colors group"
                  >
                    <Youtube className="w-4 h-4 fill-current shrink-0 text-[#1a1a1a] group-hover:text-red-600" />
                    <span>YouTube</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Accessibility Popover Modal */}
      {showAccessibilityModal && (
        <div 
          id="accessibility-modal"
          className="absolute bottom-20 left-6 sm:left-10 lg:left-16 z-50 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00b4cc]" />
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Acessibilidade Digital
              </h4>
            </div>
            <button
              onClick={() => setShowAccessibilityModal(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 text-xs">
            {/* Contrast toggle */}
            <button
              onClick={toggleContrast}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-colors cursor-pointer ${
                highContrast 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Alto Contraste</span>
              </div>
              {highContrast && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            {/* Font size adjustments */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <button
                onClick={() => adjustFontSize(1)}
                disabled={fontSizeLevel >= 2}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
                title="Aumentar Fonte"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Aumentar A+</span>
              </button>

              <button
                onClick={() => adjustFontSize(-1)}
                disabled={fontSizeLevel <= -1}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
                title="Diminuir Fonte"
              >
                <ZoomOut className="w-3.5 h-3.5" />
                <span>Diminuir A-</span>
              </button>
            </div>

            {/* Reset */}
            <button
              onClick={resetAccessibility}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-slate-500 hover:text-slate-800 text-[11px] transition-colors cursor-pointer pt-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Redefinir Padrões</span>
            </button>
          </div>
        </div>
      )}

      {/* Temporary feedback toast */}
      {feedbackToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900/95 text-white text-xs font-semibold rounded-full shadow-lg border border-slate-700 animate-in fade-in duration-150">
          {feedbackToast}
        </div>
      )}

    </footer>
  );
};
