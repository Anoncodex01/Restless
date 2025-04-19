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
      className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-orange-100/80 backdrop-blur-sm">
            <span className="text-orange-600 font-medium text-sm">Our Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 text-base">
            We collaborate with the most prestigious free zones and business authorities in the UAE, 
            providing you with unparalleled access to premium business setup solutions and support.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group relative bg-white/50 backdrop-blur-sm rounded-xl p-4 
              transition-all duration-300 hover:scale-[1.03]
              border border-gray-100/50
              hover:border-orange-200
              hover:bg-white
              hover:shadow-lg hover:shadow-orange-500/5
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="w-full aspect-[4/3] flex items-center justify-center p-3 rounded-lg bg-white/80 group-hover:bg-white transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain mix-blend-multiply filter saturate-0 group-hover:saturate-100 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-gray-900 font-medium text-sm">{partner.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div 
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide relative flex gap-4 snap-x snap-mandatory touch-pan-x"
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
                className={`flex-none w-[200px] snap-center
                  group relative bg-white/50 backdrop-blur-sm rounded-xl p-4 
                  transition-all duration-300
                  border border-gray-100/50
                  hover:border-orange-200
                  hover:bg-white
                  hover:shadow-lg hover:shadow-orange-500/5
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-full aspect-[4/3] flex items-center justify-center p-3 rounded-lg bg-white/80 group-hover:bg-white transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain mix-blend-multiply filter saturate-0 group-hover:saturate-100 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-gray-900 font-medium text-sm">{partner.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-6 left-0 right-0">
            <div className="flex justify-center space-x-1">
              <div className="h-1 w-8 rounded-full bg-orange-500"></div>
              <div className="h-1 w-2 rounded-full bg-gray-300"></div>
              <div className="h-1 w-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 