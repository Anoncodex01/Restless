import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';

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
      {/* Main Footer Content */}
      <div className="bg-[#0B2653] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {/* Organization Info */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-white">Restless</div>
                <div className="text-3xl font-bold text-[#e36f1e]">Development</div>
              </div>
              <p className="text-gray-300 text-sm text-center md:text-left">
                We are a youth-led development agency. We put young people in the driving seat to lead change in their own communities and beyond.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <span className="text-white cursor-default">
                  <Facebook size={24} />
                </span>
                <span className="text-white cursor-default">
                  <Instagram size={24} />
                </span>
                <span className="text-white cursor-default">
                  <Linkedin size={24} />
                </span>
                <span className="text-white cursor-default">
                  <Twitter size={24} />
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Our Programs
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Where We Work
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Careers
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Contact Us
                  </span>
                </li>
              </ul>
            </div>

            {/* Our Focus Areas */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Our Focus Areas</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Livelihoods
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Climate Action
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Sexual Rights
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Civic Engagement
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm cursor-default">
                    Youth Leadership
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <span className="flex items-center justify-center md:justify-start text-gray-300 text-sm cursor-default">
                    <Phone size={16} className="mr-3" />
                    +255 22 266 7038
                  </span>
                </li>
                <li>
                  <span className="flex items-center justify-center md:justify-start text-gray-300 text-sm cursor-default">
                    <Mail size={16} className="mr-3" />
                    info@restlessdevelopment.org
                  </span>
                </li>
                <li className="flex items-start justify-center md:justify-start text-gray-300 text-sm">
                  <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Dar es Salaam, Tanzania<br />Global Headquarters
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Donor Acknowledgements */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-white font-semibold text-lg mb-6">Our Generous Donors & Partners</h3>
              <p className="text-gray-300 text-sm mb-6 max-w-4xl mx-auto">
                We extend our heartfelt gratitude to our donors and partners who make our work possible. 
                Their generous support enables us to empower young people across 16 countries and create lasting positive change in communities worldwide.
              </p>
              
              {/* Donor Logos Grid */}
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="bg-white rounded-lg p-4 h-20 flex items-center justify-center">
                  <img 
                    src="/nextgeneu_en.jpg" 
                    alt="NextGenerationEU" 
                    className="h-12 object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 h-20 flex items-center justify-center">
                  <img 
                    src="/images (2).png" 
                    alt="Donor Partner" 
                    className="h-12 object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 h-20 flex items-center justify-center">
                  <img 
                    src="/images (3).png" 
                    alt="Donor Partner" 
                    className="h-12 object-contain"
                  />
                </div>
              </div>
              
              <p className="text-gray-400 text-xs">
                And many other individual donors and institutional partners who prefer to remain anonymous.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Restless Development. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm cursor-default">
                  Privacy Policy
                </span>
                <span className="text-gray-400 text-sm cursor-default">
                  Terms of Service
                </span>
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