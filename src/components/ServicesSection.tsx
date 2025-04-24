import React, { useEffect, useState } from 'react';
import { Calculator, FileText, CheckCircle, TrendingUp, ArrowRight, Building2, Briefcase } from 'lucide-react';
import { useRef } from 'react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Precision-driven financial accounting and strategic insights to enhance accuracy, efficiency, and strategic decision-making.",
    href: "/services/accounting-bookkeeping"
  },
  {
    icon: CheckCircle,
    title: "Tax & Compliance",
    description: "Expert tax strategies and regulatory compliance solutions to mitigate risks and optimize financial management.",
    href: "/services/tax-compliance"
  },
  {
    icon: Building2,
    title: "Company License",
    description: "End-to-end licensing solutions ensuring a seamless and fully compliant business setup in the UAE.",
    href: "/services/company-license"
  },
  {
    icon: FileText,
    title: "Visa Services",
    description: "Customized visa options for businesses and individuals, backed by expert support every step of the way.",
    href: "/services/visa-services"
  },
  {
    icon: TrendingUp,
    title: "PRO Services",
    description: "Efficient government liaison, document processing, and corporate administration to streamline your operations.",
    href: "/services/pro-services"
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Data-driven insights and strategic advisory services to drive sustainable growth and competitive advantage.",
    href: "/services/business-advisory"
  }
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="services-section" 
      className="relative py-24 w-full overflow-hidden bg-gradient-to-br from-[#1E2757]/5 via-white to-[#e66b02]/5"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E2757]/10 via-white to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#e66b02]/10 via-transparent to-white"></div>
      </div>
      
      {/* Accent gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(30,39,87,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(230,107,2,0.1),transparent_50%)]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E2757]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e66b02]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#1E2757 0.5px, transparent 0.5px), radial-gradient(#1E2757 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] bg-clip-text text-transparent pb-2">
              No Matter The Business,
              <br />
              <span className="bg-gradient-to-r from-[#e66b02] via-[#1E2757] to-[#e66b02] bg-clip-text text-transparent">
                We've Got You Covered
              </span>
            </h2>
            {/* Gradient line under the title */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white hover:bg-gradient-to-br hover:from-[#0f172a] hover:to-[#1e3a8a] transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-[#e66b02] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1E2757] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors min-h-[80px]">
                    {service.description}
                  </p>
                  <button 
                    onClick={handleOpenPopup}
                    className="inline-flex items-center gap-2 bg-[#e66b02] text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#d65f02] hover:shadow-lg hover:shadow-orange-500/20 group-hover:bg-white group-hover:text-[#1E2757]"
                  >
                    <span className="text-sm font-medium">Book a Consultation</span>
                    <ArrowRight size={16} className="transform -rotate-45" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <PopupForm
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>
    </section>
  );
}