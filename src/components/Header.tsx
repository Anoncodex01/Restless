import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, ChevronDown, Heart } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en');

  const languages = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'sw', label: 'Kiswahili', dir: 'ltr' },
  ];

  const programs = {
    livelihoods: {
      title: currentLang === 'sw' ? 'Maisha Bora' : 'Livelihoods',
      items: [
        { name: currentLang === 'sw' ? 'Ujuzi wa Kazi' : 'Skills Development', href: '/programs/skills-development' },
        { name: currentLang === 'sw' ? 'Uwekezaji wa Vijana' : 'Youth Entrepreneurship', href: '/programs/entrepreneurship' },
        { name: currentLang === 'sw' ? 'Ajira na Kazi' : 'Employment & Jobs', href: '/programs/employment' },
      ]
    },
    climate: {
      title: currentLang === 'sw' ? 'Mazingira' : 'Climate Action',
      items: [
        { name: currentLang === 'sw' ? 'Uhifadhi wa Mazingira' : 'Environmental Conservation', href: '/programs/environment' },
        { name: currentLang === 'sw' ? 'Nishati Safi' : 'Clean Energy', href: '/programs/clean-energy' },
        { name: currentLang === 'sw' ? 'Mabadiliko ya Tabia' : 'Behavior Change', href: '/programs/behavior-change' },
      ]
    },
    rights: {
      title: currentLang === 'sw' ? 'Haki za Kijinsia' : 'Sexual Rights',
      items: [
        { name: currentLang === 'sw' ? 'Elimu ya Afya ya Uzazi' : 'Sexual Health Education', href: '/programs/sexual-health' },
        { name: currentLang === 'sw' ? 'Haki za Wanawake' : 'Women\'s Rights', href: '/programs/womens-rights' },
        { name: currentLang === 'sw' ? 'Kupambana na Ukatili' : 'Gender-Based Violence', href: '/programs/gbv' },
      ]
    },
    civic: {
      title: currentLang === 'sw' ? 'Ushiriki wa Kijamii' : 'Civic Engagement',
      items: [
        { name: currentLang === 'sw' ? 'Uongozi wa Vijana' : 'Youth Leadership', href: '/programs/youth-leadership' },
        { name: currentLang === 'sw' ? 'Demokrasia na Haki' : 'Democracy & Rights', href: '/programs/democracy' },
        { name: currentLang === 'sw' ? 'Mabadiliko ya Jamii' : 'Social Change', href: '/programs/social-change' },
      ]
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
    i18n.changeLanguage(langCode);
    document.documentElement.dir = languages.find(lang => lang.code === langCode)?.dir || 'ltr';
  };

  // Get current language label
  const getCurrentLanguageLabel = () => {
    return languages.find(lang => lang.code === currentLang)?.label || 'English';
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsLangOpen(false);
      }
      if (!target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileDropdownToggle = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  const handleMobileNavigation = (path: string) => {
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
    navigate(path);
  };

  return (
    <div className="fixed w-full top-6 z-50 px-4">
      {/* Modern Header */}
      <header className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-orange-100 font-['Noto_Sans']">
        <div className="px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#e36f1e] to-[#d45a0a] rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#e36f1e] leading-tight">Restless</span>
                  <span className="text-base font-medium text-[#d45a0a] leading-tight">Development</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#e36f1e] transition-colors duration-200 text-base font-medium">
                {currentLang === 'sw' ? 'Nyumbani' : 'Home'}
              </Link>
              <span className="text-gray-700 cursor-default text-base font-medium">
                {currentLang === 'sw' ? 'Kuhusu Sisi' : 'About Us'}
              </span>
              
              {/* Our Work Dropdown */}
              <div className="relative nav-dropdown">
                <button
                  onClick={() => handleDropdownToggle('programs')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#e36f1e] transition-colors duration-200 text-base font-medium"
                >
                  <span>{currentLang === 'sw' ? 'Kazi Yetu' : 'Our Work'}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'programs' && (
                  <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-lg border border-orange-100 p-6 grid grid-cols-2 gap-8 -translate-x-1/3">
                    {Object.values(programs).map((category) => (
                      <div key={category.title}>
                        <h3 className="text-[#e36f1e] font-semibold text-xl mb-4">{category.title}</h3>
                        <ul className="space-y-3">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <span className="text-base text-gray-700 cursor-default block py-1">
                                {item.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <span className="text-gray-700 cursor-default text-base font-medium">
                {currentLang === 'sw' ? 'Matokeo' : 'Impact'}
              </span>

              <span className="text-gray-700 cursor-default text-base font-medium">
                {currentLang === 'sw' ? 'Habari' : 'News'}
              </span>
            </nav>

            {/* Donation Button, Social Icons & Language */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Donation Button */}
              <button className="bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-6 py-2.5 rounded-full text-base font-medium hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-200 hover:shadow-lg hover:shadow-[#e36f1e]/25 flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>{currentLang === 'sw' ? 'Changia' : 'Donate'}</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/company/restless-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e36f1e] transition-colors duration-200"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/restlessdevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e36f1e] transition-colors duration-200"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/restlessdevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e36f1e] transition-colors duration-200"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="relative language-selector">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-6 py-2.5 rounded-full text-base font-medium hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-200 hover:shadow-lg hover:shadow-[#e36f1e]/25"
                >
                  <span>{getCurrentLanguageLabel()}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Language Dropdown */}
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none border border-orange-100">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full text-left block px-4 py-2 text-sm hover:bg-orange-50 hover:text-[#e36f1e] ${
                            currentLang === lang.code ? 'text-[#e36f1e] bg-orange-50' : 'text-gray-700'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#e36f1e] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-orange-100 rounded-b-2xl font-['Noto_Sans']">
            <div className="px-8 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => handleMobileNavigation('/')}
                className="block px-3 py-2 text-gray-700 hover:text-[#e36f1e] text-base font-medium transition-colors duration-200"
              >
                {currentLang === 'sw' ? 'Nyumbani' : 'Home'}
              </Link>
              <span className="block px-3 py-2 text-gray-700 cursor-default text-base font-medium">
                {currentLang === 'sw' ? 'Kuhusu Sisi' : 'About Us'}
              </span>

              {/* Our Work Mobile */}
              <div className="px-3 py-2">
                <button
                  onClick={() => handleMobileDropdownToggle('programs')}
                  className="flex items-center justify-between w-full text-gray-700 text-base font-medium"
                >
                  <span>{currentLang === 'sw' ? 'Kazi Yetu' : 'Our Work'}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      activeMobileDropdown === 'programs' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMobileDropdown === 'programs' && (
                  <div className="mt-2">
                    {Object.values(programs).map((category) => (
                      <div key={category.title} className="mb-4">
                        <div className="text-[#e36f1e] font-medium text-lg mb-2 pl-4">{category.title}</div>
                        {category.items.map((item) => (
                          <span
                            key={item.name}
                            className="block pl-8 py-1.5 text-gray-600 cursor-default text-base"
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <span className="block px-3 py-2 text-gray-700 cursor-default text-base font-medium">
                {currentLang === 'sw' ? 'Matokeo' : 'Impact'}
              </span>

              <span className="block px-3 py-2 text-gray-700 cursor-default text-base font-medium">
                {currentLang === 'sw' ? 'Habari' : 'News'}
              </span>


              {/* Language Selector Mobile */}
              <div className="border-t border-orange-100 my-2"></div>
              <div className="px-3 py-2">
                <div className="relative">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-4 py-2.5 rounded-full text-base font-medium hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-200"
                  >
                    <span>{getCurrentLanguageLabel()}</span>
                    <ChevronDown size={16} className={`transform transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isLangOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-orange-100 rounded-lg shadow-lg z-50">
                      <div className="py-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-base hover:bg-orange-50 hover:text-[#e36f1e] ${
                              currentLang === lang.code ? 'text-[#e36f1e] bg-orange-50' : 'text-gray-700'
                            }`}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Donation Button Mobile */}
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-[#e36f1e] to-[#d45a0a] text-white px-4 py-2.5 rounded-full text-base font-medium hover:from-[#d45a0a] hover:to-[#c44a08] transition-all duration-200 flex items-center justify-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>{currentLang === 'sw' ? 'Changia' : 'Donate'}</span>
                </button>
              </div>
              
              {/* Social Icons Mobile */}
              <div className="border-t border-orange-100 my-2"></div>
              <div className="flex items-center space-x-6 px-3 py-2">
                <a
                  href="https://www.linkedin.com/company/restless-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e36f1e] transition-colors duration-200"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/restlessdevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e36f1e] transition-colors duration-200"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/restlessdevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e36f1e] transition-colors duration-200"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
} 