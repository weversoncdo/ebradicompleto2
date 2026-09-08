import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube
} from 'lucide-react';

interface FooterProps {
  onOpenStudentPortal?: () => void;
  onOpenEnrollment?: () => void;
  onSelectCategory?: (category: string) => void;
  onToggleAccessibility?: () => void;
  isAccessibilityOpen?: boolean;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStudentPortal,
  onOpenEnrollment,
  onSelectCategory,
  onToggleAccessibility,
  isAccessibilityOpen,
  onOpenPrivacy,
}) => {
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 3000);
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
      className="w-full bg-[#0b1b36] text-white font-sans border-t border-slate-800 relative select-none sm:select-auto"
      style={{ backgroundColor: '#0b1b36', color: 'white' }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
          
          {/* LEFT COLUMN: 3 Navigation Sections */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col space-y-9">
            
            {/* 1. A Anhembi */}
            <div className="space-y-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                A Anhembi
              </h3>
              
              <div className="space-y-1.5 text-[13px] sm:text-[14px] text-white">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#institucional"
                    onClick={(e) => handleLinkClick(e, 'Institucional')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Institucional</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#unidade"
                    onClick={(e) => handleLinkClick(e, 'Unidades')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Unidade</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#ouvidoria"
                    onClick={(e) => handleLinkClick(e, 'Ouvidoria')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Ouvidoria</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#compliance"
                    onClick={(e) => handleLinkClick(e, 'Compliance')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Compliance</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                </div>

                {/* Row 2 */}
                <div>
                  <a 
                    href="#descadastramento"
                    onClick={(e) => handleLinkClick(e, 'Descadastramento de comunicação')}
                    className="inline-flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Descadastramento de comunicação</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Faça parte */}
            <div className="space-y-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                Faça parte
              </h3>

              <div className="space-y-1.5 text-[13px] sm:text-[14px] text-white">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#anima-solucoes"
                    onClick={(e) => handleLinkClick(e, 'Ânima Soluções')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Ânima Soluções</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#sou-empregador"
                    onClick={(e) => handleLinkClick(e, 'Sou empregador')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Sou empregador</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#cursos-section"
                    onClick={(e) => handleLinkClick(e, 'cursos')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Cursos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#modalidades"
                    onClick={(e) => handleLinkClick(e, 'Modalidades')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Modalidades</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#bolsas-section"
                    onClick={(e) => handleLinkClick(e, 'bolsas')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Bolsas e Financiamentos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#formas-de-entrada"
                    onClick={(e) => handleLinkClick(e, 'Formas de Entrada')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Formas de Entrada</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#trabalhe-conosco"
                    onClick={(e) => handleLinkClick(e, 'Trabalhe Conosco')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Trabalhe Conosco</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Alunos, Ex-Alunos e Candidatos */}
            <div className="space-y-2.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                Alunos, Ex-Alunos e Candidatos
              </h3>

              <div className="space-y-1.5 text-[13px] sm:text-[14px] text-white">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <a 
                    href="#calendarios"
                    onClick={(e) => handleLinkClick(e, 'Calendários')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Calendários</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#editais"
                    onClick={(e) => handleLinkClick(e, 'Editais')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Editais</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#resultados"
                    onClick={(e) => handleLinkClick(e, 'Resultados')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Resultados</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#napi"
                    onClick={(e) => handleLinkClick(e, 'NAPI')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>NAPI</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>

                  <a 
                    href="#consulta-diploma"
                    onClick={(e) => handleLinkClick(e, 'Consulta Publica ao Diploma')}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Consulta Publica ao Diploma</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                </div>

                {/* Row 2 */}
                <div>
                  <a 
                    href="#ulife"
                    onClick={(e) => handleLinkClick(e, 'portal')}
                    className="inline-flex items-center gap-1 text-white hover:text-cyan-300 hover:underline transition-colors"
                  >
                    <span>Troca senha Ulife - Ex-alunos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* CENTER DIVIDER with Logo (E.png) */}
          <div className="hidden lg:flex flex-col items-center self-stretch justify-start shrink-0 px-2 xl:px-4">
            {/* Top vertical line */}
            <div className="w-[1.5px] h-12 bg-slate-700" />
            
            {/* Logo: E.png */}
            <div className="my-3 py-1 flex items-center justify-center">
              <img 
                src="./E.png" 
                alt="Logo EBRADI" 
                id="footer-logo-e"
                className="w-7 h-10 sm:w-8 sm:h-11 object-contain select-none transition-transform hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/E.png';
                }}
              />
            </div>

            {/* Bottom vertical line stretching down */}
            <div className="w-[1.5px] flex-1 min-h-[240px] bg-slate-700" />
          </div>

          {/* Mobile Center Logo Separator */}
          <div className="flex lg:hidden items-center justify-center w-full my-3 gap-4">
            <div className="h-[1px] flex-1 bg-slate-700" />
            <img 
              src="./E.png" 
              alt="Logo EBRADI" 
              className="w-6 h-9 object-contain select-none"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/E.png';
              }}
            />
            <div className="h-[1px] flex-1 bg-slate-700" />
          </div>

          {/* RIGHT COLUMN: Central de Atendimento & Redes Sociais */}
          <div className="w-full lg:w-[38%] xl:w-[36%] flex flex-col space-y-7">
            
            {/* Central de Atendimento */}
            <div className="space-y-3.5">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                Central de Atendimento
              </h3>

              <div className="space-y-3 text-[13px] sm:text-[14px]">
                {/* Item 1: Graduação e Pós */}
                <div>
                  <p className="text-[12px] sm:text-[13px] text-slate-300 font-normal leading-tight">
                    Graduação e Pós Graduação
                  </p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=551140071192" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 transition-colors block mt-0.5"
                  >
                    Somente WhatsApp - (11) 4007-1192
                  </a>
                </div>

                {/* Item 2: EAD */}
                <div>
                  <p className="text-[12px] sm:text-[13px] text-slate-300 font-normal leading-tight">
                    EAD
                  </p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=551151080481" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 transition-colors block mt-0.5"
                  >
                    Somente WhatsApp -(11) 5108-0481
                  </a>
                </div>

                {/* Item 3: Fale com a gente */}
                <div>
                  <a 
                    href="#fale-conosco"
                    onClick={(e) => handleLinkClick(e, 'Fale com a gente')}
                    className="text-[12px] sm:text-[13px] text-white underline hover:text-cyan-300 transition-colors"
                  >
                    Fale com a gente
                  </a>
                </div>

                {/* Item 4: Parcerias corporativas */}
                <div className="pt-1">
                  <p className="text-[12px] sm:text-[13px] text-slate-300 font-normal leading-tight mb-0.5">
                    Parcerias corporativas
                  </p>
                  <p className="font-bold text-white leading-tight">
                    Convênio Corporativo:
                  </p>
                  <a 
                    href="mailto:contato@animaeducacao.com.br"
                    className="font-bold text-white hover:underline hover:text-cyan-300 transition-colors block leading-tight mt-0.5"
                  >
                    contato@animaeducacao.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-3 pt-1">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                Redes Sociais
              </h3>

              <div className="space-y-2.5 text-[13px] sm:text-[14px]">
                {/* Row 1: Facebook and Instagram */}
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2">
                  <a 
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-cyan-300 font-semibold transition-colors group"
                  >
                    <Facebook className="w-4 h-4 fill-current shrink-0 text-white group-hover:text-cyan-300" />
                    <span>Facebook</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a 
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-pink-400 font-semibold transition-colors group"
                  >
                    <Instagram className="w-4 h-4 shrink-0 text-white group-hover:text-pink-400" />
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
                    className="flex items-center gap-1.5 text-white hover:text-cyan-300 font-semibold transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 fill-current shrink-0 text-white group-hover:text-cyan-300" />
                    <span>Linkedin</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a 
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-cyan-300 font-semibold transition-colors group"
                  >
                    <Twitter className="w-4 h-4 fill-current shrink-0 text-white" />
                    <span>Twitter</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a 
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white hover:text-red-400 font-semibold transition-colors group"
                  >
                    <Youtube className="w-4 h-4 fill-current shrink-0 text-white group-hover:text-red-400" />
                    <span>YouTube</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Legal & Accessibility Strip (conforme imagem em anexo) */}
      <div className="bg-[#d2d6dc] text-slate-700 py-3.5 px-4 sm:px-6 lg:px-8 border-t border-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Botão de Acessibilidade copiado conforme proposto + Informações legais */}
          <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
            <button
              id="accessibility-menu"
              type="button"
              role="button"
              title="Abrir Menu de Acessibilidade"
              aria-disabled="false"
              aria-label="Abrir Menu de Acessibilidade"
              aria-hidden="false"
              aria-expanded={isAccessibilityOpen ? "true" : "false"}
              onClick={onToggleAccessibility}
              className="_11y_Button_button_3b44e   _11y_MenuIcon_icon_10c15 _11y_MenuIcon_left-bottom_010f2 false false  _11y_MenuIcon_z-index-max_0c692 _11y_Button_fadeUp_94261 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-300 shadow-sm hover:shadow-md flex items-center justify-center shrink-0 hover:scale-105 transition-all cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center select-none">
                <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" stroke="#1e293b" strokeWidth="3" />
                  <circle cx="50" cy="28" r="8" fill="#00BCD4" stroke="#0f172a" strokeWidth="2" />
                  <line x1="22" y1="46" x2="78" y2="46" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="36" x2="50" y2="64" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="62" x2="26" y2="82" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                  <line x1="50" y1="62" x2="74" y2="82" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="22" cy="46" r="3.5" fill="#00BCD4" />
                  <circle cx="78" cy="46" r="3.5" fill="#00BCD4" />
                  <circle cx="26" cy="82" r="3.5" fill="#00BCD4" />
                  <circle cx="74" cy="82" r="3.5" fill="#00BCD4" />
                </svg>
              </div>
            </button>

            <div className="text-[11px] sm:text-xs text-slate-700 leading-snug">
              <p className="font-semibold text-slate-800">Escola Brasileira de Direito.</p>
              <p>CNPJ 05.648.257/0031-93 - Rua Taquari, 546 - Mooca, São Paulo/SP - CEP 03166-000</p>
              <p>© Copyright 2026 EBRADI. Todos os direitos reservados.</p>
            </div>
          </div>

          {/* Right: Canal de Privacidade */}
          <div className="flex items-center gap-4 text-xs font-medium self-end md:self-center shrink-0">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-slate-700 hover:text-slate-950 transition-colors underline cursor-pointer"
            >
              Canal de Privacidade
            </button>
          </div>

        </div>
      </div>

      {/* Temporary feedback toast */}
      {feedbackToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900/95 text-white text-xs font-semibold rounded-full shadow-lg border border-slate-700 animate-in fade-in duration-150">
          {feedbackToast}
        </div>
      )}

    </footer>
  );
};
