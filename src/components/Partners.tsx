import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  {
    name: 'IFZA',
    logo: '/images/freezone/IFZA-Trade-license-Dubai.webp',
    description: 'International Free Zone Authority',
    category: 'Free Zone'
  },
  {
    name: 'RAKEZ',
    logo: '/images/freezone/RAKEZ+Logo+-+English.png',
    description: 'Ras Al Khaimah Economic Zone',
    category: 'Free Zone'
  },
  {
    name: 'SPC',
    logo: '/images/freezone/594ecb24-f236-4ee3-9860-0502540dacb1_thumb.jpg',
    description: 'Sharjah Publishing City',
    category: 'Free Zone'
  },
  {
    name: 'SHAMS',
    logo: '/images/freezone/3152d2d833d76.jpeg',
    description: 'Sharjah Media City',
    category: 'Free Zone'
  },
  {
    name: 'DMCC',
    logo: '/images/freezone/dmcc-1.svg',
    description: 'Dubai Multi Commodities Centre',
    category: 'Free Zone'
  },
  {
    name: 'Masdar City',
    logo: '/images/freezone/MASDAR_Logo.svg.png',
    description: 'Sustainable Urban Development',
    category: 'Free Zone'
  },
  {
    name: 'DAFZA',
    logo: '/images/freezone/dubai-airport-freezone-authority-dafza-logo-vector.png',
    description: 'Dubai Airport Freezone Authority',
    category: 'Free Zone'
  },
  {
    name: 'ADGM',
    logo: '/images/freezone/Abu_Dhabi_Global_Market_logo.gif',
    description: 'Abu Dhabi Global Market',
    category: 'Free Zone'
  },
  {
    name: 'JAFZA',
    logo: '/images/freezone/jafza-logo-png_seeklogo-337403.png',
    description: 'Jebel Ali Free Zone',
    category: 'Free Zone'
  },
  {
    name: 'KIZAD',
    logo: '/images/freezone/news-3-1.jpg',
    description: 'Khalifa Industrial Zone',
    category: 'Free Zone'
  },
  {
    name: 'DSOA',
    logo: '/images/freezone/dsoa_logo.jpg',
    description: 'Dubai Silicon Oasis Authority',
    category: 'Free Zone'
  },
  {
    name: 'FFZA',
    logo: '/images/freezone/images.jpeg',
    description: 'Fujairah Free Zone Authority',
    category: 'Free Zone'
  }
];

export function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sliderRef = React.useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('partners');
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
      id="partners" 
      className="relative py-24 overflow-hidden"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E2757]/5 via-white to-[#e66b02]/5">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] bg-clip-text text-transparent pb-2">
              Free Zone Partners
            </h2>
            {/* Gradient line under the title */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] rounded-full"></div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 
              transition-all duration-500 hover:scale-105
              border border-gray-100
              hover:border-[#e66b02]/20
              hover:bg-white
              hover:shadow-xl hover:shadow-[#1E2757]/5
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-full aspect-[4/3] flex items-center justify-center p-4 rounded-lg bg-white/90 group-hover:bg-white transition-all duration-500">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain mix-blend-multiply filter saturate-0 group-hover:saturate-100 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-[#1E2757] font-medium text-sm group-hover:text-[#e66b02] transition-colors duration-300">{partner.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div 
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide relative flex gap-6 snap-x snap-mandatory touch-pan-x"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex-none w-[220px] snap-center
                  group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 
                  transition-all duration-500
                  border border-gray-100
                  hover:border-[#e66b02]/20
                  hover:bg-white
                  hover:shadow-xl hover:shadow-[#1E2757]/5
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-full aspect-[4/3] flex items-center justify-center p-4 rounded-lg bg-white/90 group-hover:bg-white transition-all duration-500">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain mix-blend-multiply filter saturate-0 group-hover:saturate-100 transition-all duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#1E2757] font-medium text-sm group-hover:text-[#e66b02] transition-colors duration-300">{partner.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-lg z-10 hover:bg-white transition-all duration-300 border border-gray-100 hover:border-[#e66b02]/20"
          >
            <ChevronLeft className="w-6 h-6 text-[#1E2757]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-lg z-10 hover:bg-white transition-all duration-300 border border-gray-100 hover:border-[#e66b02]/20"
          >
            <ChevronRight className="w-6 h-6 text-[#1E2757]" />
          </button>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-6 left-0 right-0">
            <div className="flex justify-center space-x-1">
              <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#1E2757] to-[#e66b02]"></div>
              <div className="h-1 w-2 rounded-full bg-gray-200"></div>
              <div className="h-1 w-2 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 