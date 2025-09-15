import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { TrustedPartner } from '../components/TrustedPartner';
import { ServicesSection } from '../components/ServicesSection';
import { GuidingSection } from '../components/GuidingSection';
import { BlogSection } from '../components/BlogSection';
import { ConsultationSection } from '../components/ConsultationSection';
import { FooterSection } from '../components/FooterSection';
import { FloatingActions } from '../components/FloatingActions';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedPartner />
        <ServicesSection />
        <GuidingSection />
        <BlogSection />
        <ConsultationSection />
        <FooterSection />
      </main>
      <FloatingActions />
    </>
  );
} 