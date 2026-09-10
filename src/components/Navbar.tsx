import React, { useState } from 'react';
import { 
  Headset,
  User, 
  Search, 
  Menu, 
  X, 
  GraduationCap, 
  Scale, 
  Award, 
  BookOpen, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { EbradiLogo } from './EbradiLogo';

interface NavbarProps {
  onOpenStudentPortal: () => void;
  onOpenEnrollment: () => void;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenStudentPortal,
  onOpenEnrollment,
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
      <div className="bg-[#071326] text-slate-200 py-3.5 sm:py-3 px-4 border-b border-slate-800/80 min-h-[48px] flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center md:justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2.5 text-center md:text-left justify-center leading-normal whitespace-nowrap">
            <span className="inline-flex items-center justify-center shrink-0 px-3 py-1 rounded bg-red-600 text-white font-bold uppercase tracking-wider text-[10px] sm:text-[11px] leading-tight shadow-sm">
              Nota 5 no MEC
            </span>
            <span className="text-slate-500 font-normal text-xs">|</span>
            <span className="text-slate-200 font-semibold text-xs sm:text-xs leading-tight">
              Matrículas Abertas
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-300 shrink-0">
            <a 
              href="https://api.whatsapp.com/send?phone=551140071192&text=Ol%C3%A1!%20Sou%20aluno%20da%20EBRADI%20e%20gostaria%20de%20atendimento." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors font-medium text-xs cursor-pointer"
              title="Atendimento para Alunos"
            >
              <Headset className="w-3.5 h-3.5 text-emerald-400" />
              <span>Atendimento para Alunos</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar (Background #0b1b36 com a Logo EBRADI 10 Anos) */}
      <div className="w-full bg-[#0b1b36] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
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
                onClick={() => handleNavClick('cursos-section')} 
                className="hover:text-red-400 transition-colors cursor-pointer flex items-center gap-1"
              >
                Nossos Cursos
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>
              </button>
              <button 
                onClick={() => handleNavClick('oab-section', 'oab')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Preparatório OAB
              </button>
              <button 
                onClick={() => handleNavClick('artigos-section')} 
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Blog
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

              <button
                onClick={onOpenStudentPortal}
                id="navbar-area-do-aluno"
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors cursor-pointer py-1.5 px-3 rounded-lg group select-none"
                title="Acessar Área do Aluno"
              >
                <User className="w-5 h-5 text-red-500 stroke-[2.2] group-hover:scale-105 transition-transform" />
                <span className="text-white font-bold text-sm tracking-tight whitespace-nowrap">
                  Área do Aluno
                </span>
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
              onClick={() => handleNavClick('cursos-section')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Nossos Cursos</span>
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
              onClick={() => handleNavClick('artigos-section')} 
              className="text-left py-2.5 px-3 rounded-md hover:bg-slate-800 hover:text-white flex items-center justify-between"
            >
              <span>Blog</span>
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
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="https://api.whatsapp.com/send?phone=551140071192&text=Ol%C3%A1!%20Sou%20aluno%20da%20EBRADI%20e%20gostaria%20de%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-emerald-400 font-medium text-center text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Headset className="w-4 h-4 text-emerald-400" />
              <span>Atendimento para Alunos</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenStudentPortal();
              }}
              className="w-full py-3 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-red-500 text-white font-bold text-center text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <User className="w-5 h-5 text-red-500 stroke-[2.2]" />
              <span className="text-white font-bold text-sm">Área do Aluno</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
