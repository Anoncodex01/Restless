import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { TrustedPartner } from './components/TrustedPartner';
import { GuidingSection } from './components/GuidingSection';
import { ServicesSection } from './components/ServicesSection';
import { CompanySetup } from './components/CompanySetup';
import { MainLand } from './components/MainLand';
import { FreeZone } from './components/FreeZone';
import { Accounting } from './components/Accounting';
import { Payroll } from './components/Payroll';
import { FinancialReporting } from './components/FinancialReporting';
import { VATCompliance } from './components/VATCompliance';
import { ClientSection } from './components/ClientSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { FooterSection } from './components/FooterSection';
import { FloatingActions } from './components/FloatingActions';
import { Header } from './components/Header';
import { PageTransition } from './components/PageTransition';
import { CITCompliance } from './components/CITCompliance';
import { GoldenVisa } from './components/GoldenVisa';
import { ProServices } from './components/ProServices';
import { BusinessAdvisory } from './components/BusinessAdvisory';
import { AboutUs } from './components/AboutUs';
import { Partners } from './components/Partners';
import { TeamSection } from './components/TeamSection';
import Contact from './components/Contact';
import Careers from './components/Careers';
import './styles/global.css';

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <PageTransition>
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
        <Partners />
      </div>

      <div className="bg-white">
        <TeamSection />
      </div>

      <div className="bg-gray-50">
        <CompanySetup />
      </div>

      <div className="bg-white">
        <ClientSection />
      </div>

      <div className="bg-gray-50">
        <FAQSection />
      </div>

      <div className="bg-white">
        <BlogSection />
      </div>

      <div className="bg-gray-50">
        <ConsultationSection />
      </div>
    </PageTransition>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/mainland" element={<PageTransition><MainLand /></PageTransition>} />
        <Route path="/freezone" element={<PageTransition><FreeZone /></PageTransition>} />
        <Route path="/services/accounting-bookkeeping" element={<PageTransition><Accounting /></PageTransition>} />
        <Route path="/services/payroll" element={<PageTransition><Payroll /></PageTransition>} />
        <Route path="/services/financial-reporting" element={<PageTransition><FinancialReporting /></PageTransition>} />
        <Route path="/services/vat-compliance" element={<PageTransition><VATCompliance /></PageTransition>} />
        <Route path="/services/golden-visa" element={<PageTransition><GoldenVisa /></PageTransition>} />
        <Route path="/services/cit-compliance" element={<PageTransition><CITCompliance /></PageTransition>} />
        <Route path="/services/pro-services" element={<PageTransition><ProServices /></PageTransition>} />
        <Route path="/services/business-advisory" element={<PageTransition><BusinessAdvisory /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <ScrollToTop />
        
        {/* Content */}
        <main>
          <AppRoutes />

          <div className="bg-[#0f172a]">
            <FooterSection />
          </div>

          <FloatingActions />
        </main>
      </div>
    </Router>
  );
}

export default App;