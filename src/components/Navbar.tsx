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
  Github, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onOpenStudentPortal: () => void;
  onOpenEnrollment: () => void;
  onOpenGithubModal: () => void;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenStudentPortal,
  onOpenEnrollment,
  onOpenGithubModal,
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
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all">
      {/* Top Notification & Utility Bar */}
      <div className="bg-[#0b1b36] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-center md:text-left flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white font-semibold uppercase tracking-wider text-[10px]">
              Nota 5 no MEC
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-200">
              Matrículas Abertas com Bolsas de até 50% + Módulo de Inteligência Artificial Jurídica
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="tel:08000069000" 
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="Central de Atendimento"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
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
              onClick={onOpenGithubModal}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 transition-colors"
              title="Ver arquivos para enviar no GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Arquivos GitHub</span>
            </button>

            <button 
              onClick={onOpenStudentPortal}
              className="flex items-center gap-1 text-white hover:text-red-400 transition-colors font-medium border-l border-slate-700 pl-3"
            >
              <User className="w-3.5 h-3.5 text-red-500" />
              <span>Área do Aluno</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo EBRADI */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0b1b36] to-[#162d59] flex items-center justify-center shadow-md border border-slate-200 group-hover:scale-105 transition-transform">
              <Scale className="w-7 h-7 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-cinzel text-2xl font-bold tracking-tight text-[#0b1b36]">
                  EBRADI
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-600 border border-red-600/30 px-1 py-0.2 rounded bg-red-50">
                  DIREITO
                </span>
              </div>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                Escola Brasileira de Direito • Ânima
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button 
              onClick={() => handleNavClick('cursos-section', 'pos')} 
              className="hover:text-red-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              Pós-Graduação
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block"></span>
            </button>
            <button 
              onClick={() => handleNavClick('oab-section', 'oab')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Preparatório OAB
            </button>
            <button 
              onClick={() => handleNavClick('cursos-section', 'extensao')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Extensão & Prática
            </button>
            <button 
              onClick={() => handleNavClick('patronos-section')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Corpo Docente & Patronos
            </button>
            <button 
              onClick={() => handleNavClick('metodologia-section')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Metodologia
            </button>
            <button 
              onClick={() => handleNavClick('bolsas-section')} 
              className="hover:text-red-600 transition-colors cursor-pointer text-amber-600 font-bold"
            >
              Simulador de Bolsas
            </button>
            <button 
              onClick={() => handleNavClick('artigos-section')} 
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Artigos & Notícias
            </button>
          </nav>

          {/* Actions & Search */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar curso (ex: Civil, Penal, OAB)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-56 pl-9 pr-3 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <button
              onClick={onOpenEnrollment}
              className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Matrícula Online
            </button>
          </div>

          {/* Mobile Menu & Search Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-slate-700 hover:text-red-600 transition-colors"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-red-600 transition-colors"
              aria-label="Menu principal"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className="py-2 px-2 border-t border-slate-100 lg:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar cursos, áreas e professores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-100 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <button 
              onClick={() => handleNavClick('cursos-section', 'pos')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 hover:text-red-600 flex items-center justify-between"
            >
              <span>Pós-Graduação (Nota 5 MEC)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('oab-section', 'oab')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 hover:text-red-600 flex items-center justify-between"
            >
              <span>Preparatório OAB 1ª e 2ª Fase</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('cursos-section', 'extensao')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 hover:text-red-600 flex items-center justify-between"
            >
              <span>Cursos de Extensão & Prática</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('patronos-section')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 hover:text-red-600 flex items-center justify-between"
            >
              <span>Corpo Docente & Patronos</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('metodologia-section')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 hover:text-red-600 flex items-center justify-between"
            >
              <span>Metodologia EBRADI</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('bolsas-section')} 
              className="text-left py-2 px-3 rounded-md bg-amber-50 text-amber-800 font-bold flex items-center justify-between"
            >
              <span>Simulador de Bolsas & Descontos</span>
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </button>
            <button 
              onClick={() => handleNavClick('artigos-section')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 hover:text-red-600 flex items-center justify-between"
            >
              <span>Artigos e Notícias Jurídicas</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3 rounded-lg bg-red-600 text-white font-bold text-center text-sm uppercase tracking-wider"
            >
              Matrícula Online
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenStudentPortal();
              }}
              className="w-full py-2.5 rounded-lg border border-slate-300 text-slate-800 font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-red-600" />
              Acessar Área do Aluno (SIA)
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGithubModal();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-center text-xs flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Ver Código & Instruções para GitHub
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
