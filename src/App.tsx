import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, ChevronRight, Menu, X, Facebook, Instagram, Youtube, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { TrustedPartner } from './components/TrustedPartner';
import { GuidingSection } from './components/GuidingSection';
import { ServicesSection } from './components/ServicesSection';
import { CompanySetup } from './components/CompanySetup';
import { FreeZones } from './components/FreeZones';
import { ClientSection } from './components/ClientSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { FooterSection } from './components/FooterSection';
import { FloatingActions } from './components/FloatingActions';
import './styles/global.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Indonesia' },
    { code: 'my', label: 'Malaysia' },
    { code: 'th', label: 'Thailand' },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Header Container */}
      <div className="fixed w-full top-6 z-50 px-4">
        {/* Modern Header */}
        <header className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-orange-100">
          <div className="px-8">
            <div className="flex justify-between items-center h-[72px]">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <span className="text-2xl font-bold text-orange-600">rdv</span>
                  <span className="text-2xl font-bold text-orange-500">.ea</span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-10">
                <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                  About Us
                </a>
                <a href="#service" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                  Service
                </a>
                <a href="#insights" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                  Insight & Publications
                </a>
                <a href="#careers" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                  Job Careers
                </a>
                <a href="#blog" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                  Blog
                </a>
              </nav>

              {/* Social Icons & Language */}
              <div className="hidden md:flex items-center space-x-8">
                {/* Social Icons */}
                <div className="flex items-center space-x-4">
                  <a href="#instagram" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="#linkedin" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Linkedin size={20} />
                  </a>
                  <a href="#facebook" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Facebook size={20} />
                  </a>
                  <a href="#twitter" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Twitter size={20} />
                  </a>
                </div>

                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <span>English</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  {/* Language Dropdown */}
                  {isLangOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none border border-orange-100">
                      <div className="py-1">
                        {languages.map((lang) => (
                          <a
                            key={lang.code}
                            href={`#${lang.code}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          >
                            {lang.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-orange-100 rounded-b-2xl">
              <div className="px-8 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
                >
                  About Us
                </a>
                <a
                  href="#service"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
                >
                  Service
                </a>
                <a
                  href="#insights"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
                >
                  Insight & Publications
                </a>
                <a
                  href="#careers"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
                >
                  Job Careers
                </a>
                <a
                  href="#blog"
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
                >
                  Blog
                </a>
                
                {/* Social Icons Mobile */}
                <div className="border-t border-orange-100 my-2"></div>
                <div className="flex items-center space-x-6 px-3 py-2">
                  <a href="#instagram" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Instagram size={20} />
                  </a>
                  <a href="#linkedin" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Linkedin size={20} />
                  </a>
                  <a href="#facebook" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Facebook size={20} />
                  </a>
                  <a href="#twitter" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                    <Twitter size={20} />
                  </a>
                </div>

                {/* Language Options in Mobile Menu */}
                <div className="border-t border-orange-100 my-2"></div>
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={`#${lang.code}`}
                    className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
                  >
                    {lang.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Content */}
      <main>
        <HeroSection />
        
        <div className="bg-white">
          <TrustedPartner />
        </div>

        <div className="bg-gray-50">
          <GuidingSection />
        </div>

        <div className="bg-white">
          <ServicesSection />
        </div>

        <div className="bg-gray-50">
          <CompanySetup />
        </div>

        <FreeZones />

        <div className="bg-white">
          <ClientSection />
        </div>

        <div className="bg-gray-50">
          <FaqSection />
        </div>

        <div className="bg-white">
          <BlogSection />
        </div>

        <div className="bg-gray-50">
          <ConsultationSection />
        </div>

        <div className="bg-[#0f172a]">
          <FooterSection />
        </div>

        <FloatingActions />
      </main>
    </div>
  );
}

export default App;