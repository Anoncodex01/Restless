import React, { useEffect, useState } from 'react';
import { Calculator, Plus, FileText, CheckCircle, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Calculator,
    title: "Accounting and Bookkeeping",
    description: "Precision-driven financial accounting and strategic insights to enhance accuracy, efficiency.",
    href: "/services/accounting-bookkeeping"
  },
  {
    icon: FileText,
    title: "Payroll Services",
    description: "Comprehensive payroll management solutions ensuring timely and accurate processing of employee compensation.",
    href: "/services/payroll"
  },
  {
    icon: TrendingUp,
    title: "Financial Reporting",
    description: "Detailed financial analysis and reporting services to provide clear insights into your business performance.",
    href: "/services/financial-reporting"
  },
  {
    icon: Plus,
    title: "VAT Compliance",
    description: "Expert VAT compliance solutions to ensure your business meets all regulatory requirements and obligations.",
    href: "/services/vat-compliance"
  },
  {
    icon: CheckCircle,
    title: "CIT Compliance",
    description: "Professional corporate income tax compliance services to optimize your tax position and ensure full compliance.",
    href: "/services/cit-compliance"
  },
  {
    icon: CheckCircle,
    title: "Golden Visa",
    description: "Specialized assistance for UAE Golden Visa applications, helping you secure long-term residency.",
    href: "/services/golden-visa"
  },
  {
    icon: TrendingUp,
    title: "PRO Services",
    description: "Efficient government liaison, document processing, and corporate administration to streamline your operations.",
    href: "/services/pro-services"
  },
  {
    icon: CheckCircle,
    title: "Business Advisory",
    description: "Data-driven insights and strategic advisory services to drive sustainable growth and competitive advantage.",
    href: "/services/business-advisory"
  }
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

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
      className="relative py-16 w-full"
      style={{ 
        width: '100%',
        backgroundImage: 'url("/images/grill.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundColor: '#f8fafc'
      }}
    >
      {/* Lighter overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gray-100/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex justify-between items-end mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h2 className="text-5xl font-bold mb-4 text-[#0f172a]">
            No Matter The Business,
            <br />We've Got You Covered
            </h2>
            <p className="text-gray-600 text-sm">
              Shielding your financial future with<br />insight, precision and confidence
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-gray-200 rounded-full hover:border-[#e66b02] hover:bg-orange-50 transition-all duration-300 group"
            >
              <ArrowRight size={16} className="rotate-225 group-hover:text-[#e66b02] transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-gray-200 rounded-full hover:border-[#e66b02] hover:bg-orange-50 transition-all duration-300 group"
            >
              <ArrowRight size={16} className="rotate-45 group-hover:text-[#e66b02] transition-colors" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-6 scroll-smooth hide-scrollbar"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index}
                to={service.href}
                className={`group relative overflow-hidden rounded-2xl p-6 bg-white hover:bg-gradient-to-br hover:from-[#0f172a] hover:to-[#1e3a8a] flex-none w-[280px] transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <span className="text-2xl font-bold">
                    <span className="text-[#e66b02]">#</span>
                    <span className="text-blue-600">{(index + 1).toString().padStart(2, '0')}</span>
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div 
                    className="inline-flex items-center gap-2 bg-[#e66b02] text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-[#d65f02] hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} className="transform -rotate-45" />
                  </div>
                </div>
              </Link>
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