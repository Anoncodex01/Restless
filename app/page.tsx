import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustedPartner } from './components/TrustedPartner';
import { ServicesSection } from './components/ServicesSection';
import { GuidingSection } from './components/GuidingSection';
import { BlogSection } from './components/BlogSection';
import { ConsultationSection } from './components/ConsultationSection';
import { FooterSection } from './components/FooterSection';
import { FloatingActions } from './components/FloatingActions';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="bg-white">
        <TrustedPartner />
      </div>
      <div className="bg-white">
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
      <div className="bg-[#0f172a]">
        <FooterSection />
      </div>
      <FloatingActions />
    </>
  );
} 