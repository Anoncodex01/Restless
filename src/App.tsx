import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { GuidingSection } from './components/GuidingSection';
import { ServicesSection } from './components/ServicesSection';
import { MainLand } from './components/MainLand';
import { FreeZone } from './components/FreeZone';
import { Accounting } from './components/Accounting';
import { Payroll } from './components/Payroll';
import { FinancialReporting } from './components/FinancialReporting';
import { VATCompliance } from './components/VATCompliance';
import { ConsultationSection } from './components/ConsultationSection';
import { BlogSection } from './components/BlogSection';
import { FooterSection } from './components/FooterSection';
import { FloatingActions } from './components/FloatingActions';
import { Header } from './components/Header';
import { PageTransition } from './components/PageTransition';
import { CITCompliance } from './components/CITCompliance';
import { GoldenVisa } from './components/GoldenVisa';
import { ProServices } from './components/ProServices';
import { BusinessAdvisory } from './components/BusinessAdvisory';
import { AboutUs } from './components/AboutUs';
import { ImpactStats } from './components/ImpactStats';
import { MissionVision } from './components/MissionVision';
import { WhereWeWork } from './components/WhereWeWork';
import Contact from './components/Contact';
import Careers from './components/Careers';
import './styles/global.css';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>RDV Consultants – Dubai's Most Trusted Financial Partner</title>
        <meta name="description" content="RDV Consultants offers expert business setup, accounting, tax, and advisory services in Dubai and the UAE. Your trusted partner for financial success." />
        <meta name="keywords" content="Best Management consultants in uae, Top Management consultancy in uae, Best Accounting company in uae, Top accounting firm in uae, Best company set up in uae, Golden visa consultants in uae, Visa services, permit services, establishment card for uae, Top company formation in uae, Best taxation company in uae, Taxation services in uae, Top tax consultants in tanzania, Tax and compliance in uae, Accounting and bookkeeping in uae, Company license, Trading license, Free zone registration consultants, PRO Services, Top business advisor, Best business advisory, Best business set up consultants" />
        <meta property="og:title" content="RDV Consultants – Dubai's Most Trusted Financial Partner" />
        <meta property="og:description" content="Expert business setup, accounting, tax, and advisory services in Dubai and the UAE. Your trusted partner for financial success." />
        <meta property="og:image" content="/images/favicon-r-orange.png" />
        <meta property="og:url" content="https://rdv.ae/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RDV Consultants – Dubai's Most Trusted Financial Partner" />
        <meta name="twitter:description" content="Expert business setup, accounting, tax, and advisory services in Dubai and the UAE. Your trusted partner for financial success." />
        <meta name="twitter:image" content="/images/favicon-r-orange.png" />
      </Helmet>
      <HeroSection />
      
        <div className="bg-white">
          <ImpactStats />
        </div>

        <div className="bg-gray-50">
          <MissionVision />
        </div>

        <div className="bg-white">
          <WhereWeWork />
        </div>

        <div className="bg-gray-50">
          <ServicesSection />
        </div>



      <div className="bg-gray-50">
        <GuidingSection />
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

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative">
      <Header />
      <ScrollToTop />
      {/* Content */}
      <main>
        <AnimatePresence mode="wait" initial={false}>
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
        <div className="bg-[#0f172a]">
          <FooterSection />
        </div>
      </main>
      <FloatingActions />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;