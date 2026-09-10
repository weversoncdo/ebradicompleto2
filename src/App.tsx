import React, { useState } from 'react';
import { Course } from './types';
import { COURSES } from './data/courses';
import { Navbar } from './components/Navbar';
import { PosGraduacaoBannerCarousel } from './components/PosGraduacaoBannerCarousel';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseDetailModal } from './components/CourseDetailModal';
import { PatronosSection } from './components/PatronosSection';
import { OabSpecialSection } from './components/OabSpecialSection';
import { MethodologySection } from './components/MethodologySection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { StudentPortalModal } from './components/StudentPortalModal';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { PrivacyModal } from './components/PrivacyModal';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('pos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [courseForEnrollment, setCourseForEnrollment] = useState<Course | null>(null);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState<boolean>(false);
  const [isStudentPortalOpen, setIsStudentPortalOpen] = useState<boolean>(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState<boolean>(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  
  // Active discount applied from calculator
  const [activeDiscount, setActiveDiscount] = useState<{ percentage: number; label: string } | undefined>(undefined);

  const handleOpenEnrollmentGeneral = () => {
    setCourseForEnrollment(COURSES[0]);
    setIsEnrollmentOpen(true);
  };

  const handleOpenEnrollmentForCourse = (course: Course) => {
    setCourseForEnrollment(course);
    setIsEnrollmentOpen(true);
  };

  const handleEnrollWithDiscount = (course: Course, discountPercentage: number, discountLabel: string) => {
    setCourseForEnrollment(course);
    setActiveDiscount({ percentage: discountPercentage, label: discountLabel });
    setIsEnrollmentOpen(true);
  };

  const handleFilterCourses = (category: string, area?: string) => {
    setSelectedCategory(category);
    if (area) {
      setSearchQuery(area);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        onOpenStudentPortal={() => setIsStudentPortalOpen(true)}
        onOpenEnrollment={handleOpenEnrollmentGeneral}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Carrossel de Banner sobre Pós-Graduação em Direito (Abaixo da Logo) */}
      <PosGraduacaoBannerCarousel
        onOpenEnrollment={handleOpenEnrollmentGeneral}
        onSelectCategory={handleFilterCourses}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* Interactive Course Catalog */}
        <CourseCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectCourse={(course) => setSelectedCourseForDetail(course)}
          onEnrollCourse={handleOpenEnrollmentForCourse}
        />

        {/* 3. Patronos de Honra e Juristas de Renome */}
        <PatronosSection
          onOpenEnrollment={handleOpenEnrollmentGeneral}
        />

        {/* 4. Preparatório OAB Especializado */}
        <OabSpecialSection
          onSelectCourse={(course) => setSelectedCourseForDetail(course)}
          onEnrollCourse={handleOpenEnrollmentForCourse}
        />

        {/* 5. Metodologia EBRADI & Nota 5 MEC */}
        <MethodologySection />

        {/* 6. Nossos Parceiros (Convênios OAB, IASP, CAAs) */}
        <PartnersSection
          onOpenEnrollment={handleOpenEnrollmentGeneral}
        />

        {/* 7. Depoimentos e Casos de Sucesso */}
        <TestimonialsSection onOpenTerms={() => setIsPrivacyOpen(true)} />

        {/* 8. Artigos Jurídicos e Atualizações */}
        <ArticlesSection />

        {/* 9. Perguntas Frequentes (FAQ) */}
        <FaqSection />

      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenStudentPortal={() => setIsStudentPortalOpen(true)}
        onOpenEnrollment={handleOpenEnrollmentGeneral}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onToggleAccessibility={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
        isAccessibilityOpen={isAccessibilityOpen}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Modals */}
      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onEnroll={(course) => {
          setSelectedCourseForDetail(null);
          handleOpenEnrollmentForCourse(course);
        }}
      />

      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => {
          setIsEnrollmentOpen(false);
          setActiveDiscount(undefined);
        }}
        selectedCourse={courseForEnrollment}
        discountPercentage={activeDiscount?.percentage}
        discountLabel={activeDiscount?.label}
      />

      <StudentPortalModal
        isOpen={isStudentPortalOpen}
        onClose={() => setIsStudentPortalOpen(false)}
      />

      {/* Privacy & LGPD Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Accessibility Floating Menu & Trigger (Bottom Left) */}
      <AccessibilityMenu
        isOpen={isAccessibilityOpen}
        onToggle={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
        onClose={() => setIsAccessibilityOpen(false)}
        onOpenPrivacy={() => {
          setIsAccessibilityOpen(false);
          setIsPrivacyOpen(true);
        }}
      />

      {/* Floating Action Buttons (Right) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20cursos%20da%20EBRADI."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group"
          title="Falar com Consultor no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline">Dúvidas? WhatsApp</span>
        </a>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-[#0b1b36] hover:bg-[#162f5f] text-white shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
