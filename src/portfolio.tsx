import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import LoadingScreen from './components/LoadingScreen';

type SectionKey = 'about' | 'resume' | 'portfolio' | 'contact';

const MatrixPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('about');
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [sectionTransition, setSectionTransition] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (newSection: SectionKey) => {
    if (newSection === activeSection) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setSectionTransition(true);
    setTimeout(() => {
      setActiveSection(newSection);
      setSectionTransition(false);
      setIsSidebarOpen(false);
    }, 300);
  };

  const sections: Record<SectionKey, React.FC> = {
    about: AboutSection,
    resume: ResumeSection,
    portfolio: PortfolioSection,
    contact: ContactSection
  };

  if (isLoading) return <LoadingScreen />;

  const SectionComponent = sections[activeSection];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <button
        className="fixed top-5 left-5 z-50 md:hidden bg-green-400 text-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Menu"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main
        className={`transition-all duration-1000 ease-out
          ml-72 p-8
          ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          md:ml-72 md:p-8
          sm:ml-0 sm:p-4
        `}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-500 ease-out
              ${sectionTransition ? 'translate-y-8 opacity-0' : showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            <SectionComponent />
          </div>
        </div>
      </main>

      {/* Mobile responsive inline styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .fixed.left-0.top-0.h-screen.w-72 {
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }
          .fixed.left-0.top-0.h-screen.w-72.translate-x-0 {
            transform: translateX(0);
          }

          main {
            margin-left: 0 !important;
            padding: 1rem !important;
          }

          nav button {
            font-size: 1.25rem !important;
            padding: 1rem !important;
          }

          .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          img {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}} />
    </div>
  );
};

export default MatrixPortfolio;
