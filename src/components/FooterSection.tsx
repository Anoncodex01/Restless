import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { PopupForm } from './PopupForm';

export function FooterSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#1c2757] to-[#000] py-6 md:py-8 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <h2 className="text-xl md:text-3xl font-bold text-white text-center md:text-left">
            Fast & Affordable Dubai Business Setup With RDV
          </h2>
          <button 
            onClick={handleOpenPopup}
            className="w-full md:w-auto bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-black/10 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0B2653] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-3xl font-bold text-white">rdv</span>
                <span className="text-3xl font-bold text-[#00A0DC]">.ea</span>
              </div>
              <p className="text-gray-300 text-sm text-center md:text-left">
                Your trusted partner for business setup in Dubai. We provide comprehensive solutions for mainland, free zone, and offshore company formation.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <a href="#" className="text-white hover:text-[#00A0DC] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#00A0DC] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#00A0DC] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#00A0DC] transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['About Us', 'Our Services', 'Business Setup', 'Partners', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-[#00A0DC] transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-4">
                {[
                  'Mainland Business Setup',
                  'Freezone Company Formation',
                  'Offshore Company Setup',
                  'Business Consulting',
                  'PRO Services'
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-300 hover:text-[#00A0DC] transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+971123456789" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-[#00A0DC] transition-colors text-sm">
                    <Phone size={16} className="mr-3" />
                    +971 12 345 6789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@rdv.ea" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-[#00A0DC] transition-colors text-sm">
                    <Mail size={16} className="mr-3" />
                    info@rdv.ea
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start text-gray-300 text-sm">
                  <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Office 1234, Building Name,<br />Sheikh Zayed Road, Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} RDV.ea. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#00A0DC] transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00A0DC] transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15L30 0z\' fill-rule=\'evenodd\' stroke=\'%23ffffff\' fill=\'none\'/%3E%3C/svg%3E")',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </footer>
  );
} 