import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, ChevronDown } from 'lucide-react';
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
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'id', label: 'Indonesia', dir: 'ltr' },
    { code: 'th', label: 'ไทย', dir: 'ltr' },
  ];

  const services = {
    accounting: {
      title: t('accounting_services'),
      items: [
        { name: "Accounting and Bookkeeping", href: '/services/accounting-bookkeeping' },
        { name: "Payroll Services", href: '/services/payroll' },
        { name: "Financial Reporting", href: '/services/financial-reporting' },
      ]
    },
    tax: {
      title: t('tax_compliance'),
      items: [
        { name: "VAT Compliance", href: '/services/vat-compliance' },
        { name: "CIT Compliance", href: '/services/cit-compliance' },
      ]
    },
    visa: {
      title: t('visa_other_services'),
      items: [
        { name: "Golden Visa", href: '/services/golden-visa' },
        { name: "PRO Services", href: '/services/pro-services' },
        { name: "Business Advisory", href: '/services/business-advisory' },
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
      <header className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-orange-100">
        <div className="px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-orange-600">rdv</span>
                <span className="text-2xl font-bold text-orange-500">.ae</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about-us" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                {t('about_us')}
              </Link>
              
              {/* Business Setup Dropdown */}
              <div className="relative nav-dropdown">
                <button
                  onClick={() => handleDropdownToggle('business')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
                >
                  <span>{t('business_setup')}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'business' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'business' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-orange-100 py-2">
                    <Link 
                      to="/freezone" 
                      onClick={() => {
                        setActiveDropdown(null);
                        navigate('/freezone');
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {t('free_zone')}
                    </Link>
                    <Link 
                      to="/mainland" 
                      onClick={() => {
                        setActiveDropdown(null);
                        navigate('/mainland');
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {t('main_land')}
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Services Dropdown */}
              <div className="relative nav-dropdown">
                <button
                  onClick={() => handleDropdownToggle('services')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
                >
                  <span>{t('our_services')}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-lg border border-orange-100 p-6 grid grid-cols-3 gap-8 -translate-x-1/3">
                    {Object.values(services).map((category) => (
                      <div key={category.title}>
                        <h3 className="text-orange-600 font-semibold text-lg mb-4">{category.title}</h3>
                        <ul className="space-y-3">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  navigate(item.href);
                                }}
                                className="text-[15px] text-gray-700 hover:text-orange-500 transition-colors duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/careers" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                Careers
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Social Icons & Language */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/company/rdvconsultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/rdv.consultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/15w8NYqRVV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="relative language-selector">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
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
                          className={`w-full text-left block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 ${
                            currentLang === lang.code ? 'text-orange-600 bg-orange-50' : 'text-gray-700'
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
              <Link
                to="/about-us"
                onClick={() => handleMobileNavigation('/about-us')}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                {t('about_us')}
              </Link>

              {/* Business Setup Mobile */}
              <div className="px-3 py-2">
                <button
                  onClick={() => handleMobileDropdownToggle('business')}
                  className="flex items-center justify-between w-full text-gray-700 text-sm font-medium"
                >
                  <span>{t('business_setup')}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      activeMobileDropdown === 'business' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMobileDropdown === 'business' && (
                  <div className="mt-2 space-y-1">
                    <Link
                      to="/freezone"
                      onClick={() => handleMobileNavigation('/freezone')}
                      className="block pl-4 py-1.5 text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
                    >
                      {t('free_zone')}
                    </Link>
                    <Link
                      to="/mainland"
                      onClick={() => handleMobileNavigation('/mainland')}
                      className="block pl-4 py-1.5 text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
                    >
                      {t('main_land')}
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Mobile Menu */}
              <div className="px-3 py-2">
                <button
                  onClick={() => handleMobileDropdownToggle('services')}
                  className="flex items-center justify-between w-full text-gray-700 text-sm font-medium"
                >
                  <span>{t('our_services')}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      activeMobileDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMobileDropdown === 'services' && (
                  <div className="mt-2">
                    {Object.values(services).map((category) => (
                      <div key={category.title} className="mb-4">
                        <div className="text-orange-600 font-medium mb-2 pl-4">{category.title}</div>
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => handleMobileNavigation(item.href)}
                            className="block pl-8 py-1.5 text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/careers"
                onClick={() => handleMobileNavigation('/careers')}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                onClick={() => handleMobileNavigation('/contact')}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
              
              {/* Social Icons Mobile */}
              <div className="border-t border-orange-100 my-2"></div>
              <div className="flex items-center space-x-6 px-3 py-2">
                <a
                  href="https://www.linkedin.com/company/rdvconsultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/rdv.consultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/15w8NYqRVV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
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