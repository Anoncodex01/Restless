import React, { useState, useEffect } from 'react';

export function CompanySetup() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const setupOptions = [
    {
      title: 'MAINLAND',
      subtitle: 'BUSINESS SETUP',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
      heading: 'Expand without limits in the heart of Dubai, UAE',
      description: 'Business Setup in Dubai Mainland offers unrestricted trade and growth opportunities. With access to the entire UAE market, businesses here can trade freely, secure government contracts, and diversify with complete flexibility. Benefit from prime locations, full ownership, unlimited visas, and zero restrictions on office space or commercial activities.',
      buttonText: 'Get Started Now'
    },
    {
      title: 'FREE ZONE',
      subtitle: 'BUSINESS SETUP',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
      heading: 'Maximize your profits with tax benefits and 100% ownership',
      description: 'Free zone company setup in Dubai, UAE provides 100% foreign ownership, tax benefits and full profit repatriation. UAE offers over 45 specialised free zones catering to different industries. Enjoy tailored business ecosystems & seamless setup processes. Free Zones are perfect for international entities that aim to trade globally while maintaining operational efficiency.',
      buttonText: 'Get Started Now'
    },
    {
      title: 'OFFSHORE',
      subtitle: 'BUSINESS SETUP',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      heading: 'Protect your assets and enjoy global trade flexibility',
      description: 'Offshore Company Formation in the UAE is ideal for entrepreneurs looking to conduct international trade while benefitting from tax optimization, asset protection, & confidentiality. Offshore entities cannot trade within the UAE but provide global trading flexibility, no capital restrictions, and simplified regulatory requirements.',
      buttonText: 'Get Started Now'
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

  const handleGetStarted = () => {
    // Handle button click here
    console.log('Get Started clicked');
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0B2653] mb-4">
            Dubai Business Setup – Jurisdictions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Your business activity, operational needs, and future goals are essential when it comes to choosing the perfect location to start your business in UAE. Compare the benefits of Mainland, Freezone and Offshore Business Setup. Find the perfect match for your company.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {setupOptions.map((option, index) => (
            <div 
              key={option.title} 
              className={`relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                index === currentSlide ? 'z-10 scale-105 shadow-2xl' : 'scale-95 opacity-75'
              }`}
            >
              {/* Default View - Image with title */}
              <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-110">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark blue overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2653]/95 via-[#0B2653]/80 to-[#0B2653]/50 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Title content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center transform transition-all duration-500 group-hover:translate-y-full">
                  <h3 className="text-white text-3xl font-bold tracking-wider mb-1">
                    {option.title}
                  </h3>
                  <p className="text-white/80 text-base font-light">
                    {option.subtitle}
                  </p>
                </div>

                {/* Hexagon pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-150"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15L30 0z\' fill-rule=\'evenodd\' stroke=\'%23ffffff\' fill=\'none\'/%3E%3C/svg%3E")',
                    backgroundSize: '50px 50px'
                  }}
                ></div>
              </div>

              {/* Hover View - Information */}
              <div className="absolute inset-0 bg-white rounded-xl p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* Sliding header */}
                <h3 className="text-[#0B2653] text-2xl font-bold leading-tight mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {option.heading}
                </h3>
                {/* Fading in description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  {option.description}
                </p>
                {/* Sliding up button */}
                <div className="mt-auto transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                  <button 
                    onClick={handleGetStarted}
                    className="group/btn relative w-full overflow-hidden rounded-lg bg-[#0B2653] px-6 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#0B2653]/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
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
                  ? 'bg-[#0B2653] w-3 h-3 shadow-lg shadow-[#0B2653]/30' 
                  : 'bg-gray-300 hover:bg-[#0B2653]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 