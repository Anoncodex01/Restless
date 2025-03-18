import React, { useEffect, useState } from 'react';
import { ChevronRight, Building2, Users, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Streamlined company formation",
    description: "Quick and efficient business setup process in the UAE",
    icon: Building2,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Leading financial experts",
    description: "Expert guidance from seasoned professionals",
    icon: Users,
    gradient: "from-orange-500 to-orange-600"
  },
  {
    id: 3,
    title: "Personalized solutions",
    description: "Tailored strategies for your unique business needs",
    icon: LineChart,
    gradient: "from-green-500 to-green-600"
  },
  {
    id: 4,
    title: "Ensure seamless compliance",
    description: "Stay compliant with UAE regulations effortlessly",
    icon: ShieldCheck,
    gradient: "from-purple-500 to-purple-600"
  }
];

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
          <div>
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-4xl font-bold leading-tight mb-4">
                <span className="text-[#1c2757]">Secure your UAE</span>{" "}
                <span className="bg-gradient-to-r from-[#1c2757] to-[#e66b02] bg-clip-text text-transparent">
                business account{"\n"}with ease and
                efficiency today!
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Our mission is clear – empowering your business and accelerating growth by delivering expert guidance, strategic solutions, and ongoing support tailored to your evolving needs.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button className="px-6 py-3 bg-[#1c2757] text-white rounded-full hover:bg-[#e66b02] transition-all duration-300 font-medium text-sm">
                Book a Consultation
              </button>
              <button className="px-6 py-3 bg-white text-[#1c2757] border-2 border-[#1c2757] rounded-full hover:bg-[#1c2757] hover:text-white transition-all duration-300 font-medium text-sm">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Section - Image Grid */}
          <div className="space-y-4">
            {/* Top Row */}
            <div className="flex gap-4">
              <div className={`w-1/3 rounded-2xl overflow-hidden bg-pink-100 aspect-square transform transition-all duration-500 hover:scale-[1.01] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" 
                  alt="Dubai Business" 
                  className="w-full h-full object-cover"
                />
              </div>

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

            {/* Bottom Row */}
            <div className="flex gap-4">
              <div className={`w-1/2 rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9] transform transition-all duration-500 hover:scale-[1.01] ${
                isVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" 
                  alt="Business Setup" 
                  className="w-full h-full object-cover"
                />
              </div>

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

      {/* Features Section */}
      <div className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white">
          {/* Hexagon Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="texture-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 1L37.3205 10.5V29.5L20 39L2.67949 29.5V10.5L20 1Z" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.5"
                      className="text-[#1c2757]" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#texture-pattern)" />
          </svg>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80"></div>
        </div>

        <div className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1c2757] mb-4">
                Why Choose RDV Accounting?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience unparalleled financial services tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 
                    hover:shadow-xl hover:scale-[1.02] transition-all duration-300
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} 
                    p-2.5 mb-4 text-white transform group-hover:rotate-6 transition-transform duration-300
                    shadow-lg`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};