import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export function TrustedPartner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('trusted-partner');
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
    <section id="trusted-partner" className="py-24 bg-gradient-to-br from-[#FCF6FF] to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Text Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              <span className="text-[#1c2757]">Your Trusted Partner</span>{" "}
              <span className="bg-gradient-to-r from-[#1c2757] to-[#e66b02] bg-clip-text text-transparent">
                For Accounting{"\n"}Services In Dubai
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl">
              RDV Management provides highly personalised business setup services to 
              corporate clients and individuals who are setting up their companies, branches or 
              subsidiaries in the UAE. Our team full of passionate professionals is dedicated to 
              helping you find the best-suited solutions when establishing a company in the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#1c2757] text-white rounded-full hover:bg-[#e66b02] transition-all duration-300 font-medium text-sm">
                Book a Consultation
              </button>
              <button className="px-6 py-3 bg-white text-[#1c2757] border-2 border-[#1c2757] rounded-full hover:bg-[#1c2757] hover:text-white transition-all duration-300 font-medium text-sm">
                Find an Expert
              </button>
            </div>
          </div>

          {/* Right Section - Image Grid */}
          <div className="space-y-4">
            {/* Top Row */}
            <div className="flex gap-4">
              {/* Dubai Skyline - Smaller Square */}
              <div className={`w-1/3 rounded-2xl overflow-hidden bg-pink-100 aspect-square transform transition-all duration-500 hover:scale-[1.01] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" 
                  alt="Dubai Business" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Meeting Image - Larger Rectangle */}
              <div className={`w-2/3 rounded-2xl overflow-hidden bg-blue-50 transform transition-all duration-500 hover:scale-[1.01] ${
                isVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                  alt="Business Consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Row - Two Equal Horizontal Rectangles */}
            <div className="flex gap-4">
              {/* Calculator Image */}
              <div className={`w-1/2 rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9] transform transition-all duration-500 hover:scale-[1.01] ${
                isVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" 
                  alt="Business Setup" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Office Building Image */}
              <div className={`w-1/2 rounded-2xl overflow-hidden bg-blue-50 aspect-[16/9] transform transition-all duration-500 hover:scale-[1.01] ${
                isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716" 
                  alt="Dubai Lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};