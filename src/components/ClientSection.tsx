import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    name: "Sarah Anderson",
    role: "CEO at Pepsi",
    quote: "It is always a great pleasure and satisfaction for us to work with PKF We have been associated with PKF since the time we started our operations in UAE (which dates back to December 1993). They always guide us in the most professional manner"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Michael Chen",
    role: "CFO at GlobalFin",
    quote: "It is always a great pleasure and satisfaction for us to work with PKF We have been associated with PKF since the time we started our operations in UAE (which dates back to December 1993). They always guide us in the most professional manner"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Emily Rodriguez",
    role: "Director at InnovateME",
    quote: "Their strategic insights have been invaluable to our growth and success."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    name: "David Park",
    role: "Founder of NextGen",
    quote: "Exceptional attention to detail and proactive approach to problem-solving."
  }
];

export function ClientSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

    const section = document.getElementById('client-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const TestimonialCard = ({ item, index }: { item: typeof testimonials[0], index: number }) => (
    <div
      className={`group relative bg-white/50 backdrop-blur-xl rounded-3xl p-8 
      transition-all duration-500 
      border border-white/60
      shadow-[0_4px_30px_rgba(0,0,0,0.08)]
      hover:bg-white 
      hover:border-gray-100
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,1)] 
      hover:scale-[1.02]
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="absolute inset-x-0 -bottom-px h-40 bg-gradient-to-t from-white/30 to-transparent rounded-b-3xl"></div>
      <div className="flex items-start gap-6 relative">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <Quote size={24} className="absolute -bottom-3 -right-3 text-orange-500 bg-white rounded-full p-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.08)] ring-[3px] ring-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{item.role}</p>
          <p className="text-gray-600 leading-relaxed">{item.quote}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="flex gap-1 bg-white/50 px-3 py-1.5 rounded-full shadow-sm">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-orange-400" fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="client-section" className="py-32 relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-white to-orange-50/80">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.15]"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-900/5 px-4 py-2 rounded-full mb-6">
            <Star size={14} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust our expertise for their financial growth and success.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div 
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide relative flex gap-6 snap-x snap-mandatory touch-pan-x pb-8"
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
            {testimonials.map((item, index) => (
              <div key={item.id} className="flex-none w-[85vw] max-w-[400px] snap-center">
                <TestimonialCard item={item} index={index} />
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
          <div className="absolute -bottom-2 left-0 right-0">
            <div className="flex justify-center space-x-1">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === 0 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}