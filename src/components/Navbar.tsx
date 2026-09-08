import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  User, 
  Search, 
  Menu, 
  X, 
  GraduationCap, 
  Scale, 
  Award, 
  BookOpen, 
  ChevronRight,
  ExternalLink,
  Download
} from 'lucide-react';
import { EbradiLogo } from './EbradiLogo';

interface NavbarProps {
  onOpenStudentPortal: () => void;
  onOpenEnrollment: () => void;
  onOpenDownload?: () => void;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenStudentPortal,
  onOpenEnrollment,
  onOpenDownload,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (sectionId: string, category?: string) => {
    setIsMobileMenuOpen(false);
    if (category) {
      onSelectCategory(category);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1b36] shadow-md transition-all">
      {/* Top Notification & Utility Bar */}
      <div className="bg-[#071326] text-slate-200 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-center md:text-left flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white font-semibold uppercase tracking-wider text-[10px]">
              Nota 5 no MEC
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-200 font-medium">
              Matrículas Abertas com Bolsas de até 50% + Módulo de Inteligência Artificial Jurídica
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="tel:08000069000" 
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="Central de Atendimento"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>0800 006 9000</span>
            </a>

            <a 
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20da%20EBRADI." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Consultores</span>
            </a>

            <button 
              onClick={onOpenStudentPortal}
              className="flex items-center gap-1 text-white hover:text-red-400 transition-colors font-medium border-l border-slate-700 pl-3 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-red-500" />
              <span>Área do Aluno</span>
            </button>

            {onOpenDownload && (
              <button 
                onClick={onOpenDownload}
                className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-bold border-l border-slate-700 pl-3 cursor-pointer"
                title="Baixar código HTML, CSS e JS desta página"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Baixar Código da Home</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar (Background #0b1b36 com a Logo EBRADI 10 Anos) */}
      <div className="w-full bg-[#0b1b36] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo EBRADI 10 ANOS */}
            <a 
              href="#" 
              className="flex items-center group focus:outline-none py-1 hover:opacity-95 transition-opacity" 
              title="EBRADI 10 Anos - Escola Brasileira de Direito"
            >
              <EbradiLogo variant="dark" size="md" className="group-hover:scale-102 transition-transform duration-200" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-slate-100">
              <button 
                onClick={() => handleNavClick('cursos-section', 'pos')} 
                className="hover:text-red-400 transition-colors cursor-pointer flex items-center gap-1"
              >
                Pós-Graduação
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>
              </button>
              <button 
                onClick={() => handleNavClick('oab-section', 'oab')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Preparatório OAB
              </button>
              <button 
                onClick={() => handleNavClick('cursos-section', 'extensao')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Extensão & Prática
              </button>
              <button 
                onClick={() => handleNavClick('patronos-section')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Corpo Docente & Patronos
              </button>
              <button 
                onClick={() => handleNavClick('metodologia-section')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Metodologia
              </button>
              <button 
                onClick={() => handleNavClick('bolsas-section')} 
                className="hover:text-amber-300 transition-colors cursor-pointer text-amber-400 font-bold"
              >
                Simulador de Bolsas
              </button>
              <button 
                onClick={() => handleNavClick('artigos-section')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Artigos & Notícias
              </button>
            </nav>

            {/* Actions & Search */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar curso (Civil, Penal, OAB)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-52 xl:w-56 pl-9 pr-3 py-1.5 text-xs bg-slate-900/90 text-white placeholder:text-slate-400 border border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              </div>

              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="px-3.5 py-2 rounded-lg border border-amber-400/60 hover:border-amber-400 text-amber-300 hover:text-white hover:bg-amber-400/10 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
                  title="Baixar código HTML, CSS e JS desta página"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Baixar Código</span>
                </button>
              )}

              <button
                onClick={onOpenEnrollment}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Matrícula Online
              </button>
            </div>

            {/* Mobile Menu & Search Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-slate-200 hover:text-white transition-colors"
                aria-label="Abrir pesquisa"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white transition-colors"
                aria-label="Menu principal"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Input */}
          {isSearchOpen && (
            <div className="py-2.5 px-2 border-t border-slate-800 lg:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar cursos, áreas e professores..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 text-white placeholder-slate-400 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0b1b36] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-200">
            <button 
              onClick={() => handleNavClick('cursos-section', 'pos')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Pós-Graduação (Nota 5 MEC)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('oab-section', 'oab')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Preparatório OAB 1ª e 2ª Fase</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('cursos-section', 'extensao')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Cursos de Extensão & Prática</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('patronos-section')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Corpo Docente & Patronos</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('metodologia-section')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Metodologia EBRADI</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('bolsas-section')} 
              className="text-left py-2.5 px-3 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold flex items-center justify-between"
            >
              <span>Simulador de Bolsas & Descontos</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
            <button 
              onClick={() => handleNavClick('artigos-section')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Artigos e Notícias Jurídicas</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            {onOpenDownload && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-2.5 rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-300 font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Baixar Código da Home (HTML/CSS/JS)</span>
              </button>
            )}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-center text-sm uppercase tracking-wider"
            >
              Matrícula Online
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenStudentPortal();
              }}
              className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-red-500" />
              Acessar Área do Aluno (SIA)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
