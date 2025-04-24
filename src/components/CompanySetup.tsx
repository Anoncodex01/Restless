import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function CompanySetup() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const setupOptions = [
    {
      title: 'MAINLAND',
      subtitle: 'BUSINESS SETUP',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
      heading: 'Unlock Full Market Access with Mainland Business Setup',
      description: 'A mainland setup allows you to tap into the vast local market and engage directly with businesses across the UAE. Setting up a mainland company in Dubai provides unmatched benefits, such as full access to the local market',
      buttonText: 'Get Started Now',
      path: '/mainland'
    },
    {
      title: 'FREE ZONE',
      subtitle: 'BUSINESS SETUP',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
      heading: 'Unlock Limitless Opportunities',
      description: 'With over 40 free zones across the UAE, businesses enjoy world-class benefits, from 100% foreign ownership to tax advantages and strategic locations. However, choosing the right free zone can be a complex decision. That\'s where RDV Consultants comes in – turning complexity into clarity.',
      buttonText: 'Get Started Now',
      path: '/freezone'
    },
    {
      title: 'OFFSHORE',
      subtitle: 'BUSINESS SETUP',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      heading: '',
      description: '',
      buttonText: 'Get Started Now',
      path: '/offshore'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % setupOptions.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, setupOptions.length]);

  // Handle manual dot click
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleGetStarted = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative py-24 overflow-hidden">
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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] bg-clip-text text-transparent pb-2">
              Choosing the Right Jurisdiction
              <br />
              <span className="bg-gradient-to-r from-[#e66b02] via-[#1E2757] to-[#e66b02] bg-clip-text text-transparent">
                for Your Dubai Business
              </span>
            </h2>
            {/* Gradient line under the title */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] rounded-full"></div>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {setupOptions.map((option, index) => (
            <div 
              key={option.title} 
              className={`relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 backdrop-blur-sm ${
                index === currentSlide ? 'z-10 scale-105 shadow-2xl' : 'scale-95 opacity-75'
              }`}
              onClick={() => handleGetStarted(option.path)}
            >
              {/* Default View - Image with title */}
              <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-110">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2757]/95 via-[#1E2757]/80 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Title content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center transform transition-all duration-500 group-hover:translate-y-full">
                  <h3 className="text-white text-3xl font-bold tracking-wider mb-1">
                    {option.title}
                  </h3>
                  <p className="text-white/80 text-base font-light">
                    {option.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover View - Information */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-[#1E2757] text-2xl font-bold leading-tight mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {option.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  {option.description}
                </p>
                <div className="mt-auto transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <button 
                    className="group/btn relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#1E2757] to-[#e66b02] px-6 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#1E2757]/25"
                  >
                    <div className="relative flex items-center justify-center gap-2 text-base font-medium text-white">
                      <span>{option.buttonText}</span>
                      <svg 
                        className="h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          {setupOptions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 hover:scale-150 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-[#1E2757] to-[#e66b02] w-3 h-3 shadow-lg shadow-[#1E2757]/30' 
                  : 'bg-gray-300 hover:bg-[#1E2757]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 