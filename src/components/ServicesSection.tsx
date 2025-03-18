import React, { useEffect, useState } from 'react';
import { Calculator, Plus, FileText, CheckCircle, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { PopupForm } from './PopupForm';

const services = [
  {
    icon: Calculator,
    title: "Tax Consultation",
    description: "Navigate complex tax regulations confidently with our expert guidance. We optimize your tax strategy, ensure compliance, and help you save more, empowering your business's financial health."
  },
  {
    icon: Plus,
    title: "Business Creation",
    description: "Start your journey with ease! Our streamlined business registration services handle every detail, helping you launch faster and focus on growing your new venture confidently."
  },
  {
    icon: FileText,
    title: "Negotiations",
    description: "Secure better deals with expert negotiation support. We represent your interests, ensuring favorable outcomes in contracts, partnerships, and financial agreements to drive your business forward."
  },
  {
    icon: CheckCircle,
    title: "Accounting",
    description: "Simplify your finances with precise, reliable accounting solutions. We deliver clear insights, efficient reporting, and proactive management to keep your business running smoothly and profitably."
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "Stay ahead with our comprehensive compliance services. We ensure your business meets all regulatory requirements, fostering trust and stability in an ever-changing financial environment."
  },
  {
    icon: TrendingUp,
    title: "Growth Advisory",
    description: "Unlock your business's true potential with tailored growth strategies. We analyze opportunities, optimize operations, and help you achieve sustainable success in today's competitive marketplace."
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
              Delivering<br />Excellence
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
              <div 
                key={index}
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
                  <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#4361ee] text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-[#3651d4] hover:shadow-lg"
                  >
                    <span className="text-sm font-medium">Speak to our expert</span>
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