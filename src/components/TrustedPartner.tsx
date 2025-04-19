import React, { useEffect, useState } from 'react';
import { ChevronRight, Building2, Users, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Streamlined company formation",
    description: "Quick and efficient business setup process in the UAE",
    icon: Building2,
    gradient: "from-blue-500 to-blue-600",
    image: "/images/imas.jpg"
  },
  {
    id: 2,
    title: "Leading financial experts",
    description: "Expert guidance from seasoned professionals",
    icon: Users,
    gradient: "from-orange-500 to-orange-600",
    image: "/images/financial.jpg"
  },
  {
    id: 3,
    title: "Personalized solutions",
    description: "Tailored strategies for your unique business needs",
    icon: LineChart,
    gradient: "from-green-500 to-green-600",
    image: "/images/personalized.jpg"
  },
  {
    id: 4,
    title: "Ensure seamless compliance",
    description: "Stay compliant with UAE regulations effortlessly",
    icon: ShieldCheck,
    gradient: "from-purple-500 to-purple-600",
    image: "/images/imas.jpg"
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
                <span className="text-[#1c2757]">Your Strategic Partner for</span>{" "}
                <span className="bg-gradient-to-r from-[#1c2757] to-[#e66b02] bg-clip-text text-transparent">
                  Business Success in the UAE
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Empowering your business and accelerating growth by delivering expert guidance, strategic solutions, and ongoing support tailored to your evolving needs.
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

      {/* Why Choose Section */}
      <div className="mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e293b] mb-4">
              Why Choose RDV Accounting?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience unparalleled financial services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient - Changes opacity on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c2757]/90 via-[#1c2757]/70 to-[#1c2757]/20 opacity-60 transition-opacity duration-500 group-hover:opacity-95"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                    <div className="overflow-hidden">
                      <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-0 transition-transform duration-500 group-hover:translate-y-0">
                        {feature.title}
                      </h3>
                      {/* Description - Hidden by default, slides up on hover */}
                      <p className="text-white/0 transform translate-y-8 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/90 h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-[#e66b02] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}