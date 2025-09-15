import React, { useState } from 'react';
import { PopupForm } from './PopupForm';

const features = [
  {
    title: "Streamlined company formation",
    description: "Quick and efficient business setup process in the UAE",
    image: "/images/imas.jpg"
  },
  {
    title: "Leading financial experts",
    description: "Expert guidance from seasoned professionals",
    image: "/images/financial.jpg"
  },
  {
    title: "Personalized solutions",
    description: "Tailored strategies for your unique business needs",
    image: "/images/personalized.jpg"
  },
  {
    title: "Ensure seamless compliance",
    description: "Stay compliant with UAE regulations effortlessly",
    image: "/images/imas.jpg"
  }
];

export function TrustedPartner() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-gradient-to-r from-[#1E2757]/10 via-[#E67E22]/5 to-[#1E2757]/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Centered Modern Title */}
        <div className="text-center mb-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-[#E67E22]/20 to-[#1E2757]/20 rounded-full blur-3xl -z-10"></div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            <div className="inline-block bg-gradient-to-r from-[#1E2757] via-[#2a3672] to-[#E67E22] bg-clip-text text-transparent">
              Your Strategic Partner for Business
            </div>
            <div className="block bg-gradient-to-r from-[#E67E22] via-[#CD853F] to-[#8B4513] bg-clip-text text-transparent mt-2">
              Success in the UAE
            </div>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-gradient-to-r from-[#1E2757]/10 to-[#E67E22]/10 rounded-full blur-3xl -z-10"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is clear – empowering your business and accelerating growth by delivering expert guidance, strategic solutions, and ongoing support tailored to your evolving needs. Unleash the full potential of your business with RDV Consultants.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2757]/95 via-[#1E2757]/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end transform transition-all duration-500">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm transform transition-all duration-500 opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2 sm:line-clamp-none">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-gradient-to-r from-[#1E2757]/20 to-[#E67E22]/20 rounded-full blur-3xl -z-10"></div>
          <button 
            onClick={handleOpenPopup}
            className="px-10 py-4 bg-gradient-to-r from-[#1E2757] to-[#2a3672] text-white rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transform transition-all duration-300 hover:from-[#2a3672] hover:to-[#1E2757]"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </section>
  );
}