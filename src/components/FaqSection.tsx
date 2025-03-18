import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { PopupForm } from './PopupForm';

const faqs = [
  {
    id: 1,
    question: "What makes CDA one of the top accounting firms in Dubai?",
    answer: "As a leading accounting firm in Dubai, we combine deep industry expertise with innovative solutions. Our team of certified professionals, comprehensive service offerings, and commitment to excellence make us a trusted partner for businesses across the UAE. We stay ahead of regulatory changes and leverage cutting-edge technology to deliver superior results."
  },
  {
    id: 2,
    question: "Do you provide CFO services for businesses?",
    answer: "Yes, we offer comprehensive CFO services tailored to your business needs. Our virtual CFO solutions include financial planning, strategic decision support, risk management, and performance optimization. We help businesses of all sizes maintain strong financial health and achieve their growth objectives."
  },
  {
    id: 3,
    question: "How does CDA ensure compliance with UAE tax and accounting laws?",
    answer: "We maintain strict adherence to UAE tax and accounting regulations through our robust compliance framework. Our team stays updated with the latest regulatory changes, implements comprehensive internal controls, and follows industry best practices. We also provide regular training and updates to ensure all client work meets the highest compliance standards."
  },
  {
    id: 4,
    question: "Can CDA assist with restructuring my company's accounting department?",
    answer: "Absolutely. We specialize in accounting department restructuring and optimization. Our approach includes assessing current processes, implementing efficient systems, training staff, and establishing best practices. We ensure your accounting function is streamlined, compliant, and aligned with your business objectives."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with texture */}
      <div 
        className="absolute inset-0 bg-[#0f172a]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, rgba(14, 165, 233, 0.05), rgba(230, 107, 2, 0.05)),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e66b02' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
            radial-gradient(circle at 50% 0%, rgba(230, 107, 2, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)
          `,
          backgroundSize: '30px 30px, 30px 30px, 100% 100%, 100% 100%',
          backgroundBlendMode: 'normal, soft-light, normal, normal'
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#e66b02] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse [animation-delay:2s]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Header Content */}
            <div className="md:sticky md:top-24">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                <span className="text-[#e66b02] font-semibold uppercase tracking-wider text-sm">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Questions You're
                <span className="block text-[#e66b02]">Probably Asking</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                If you've made it this far, you're either very interested or have questions. 
                Here are a few frequently asked questions.
              </p>
              
              {/* CTA Section */}
              <div className="mt-8">
                <p className="text-gray-300 mb-6">Still looking for answers?</p>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex items-center bg-[#e66b02] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#e66b02]/20 hover:scale-105 group"
                >
                  <span className="text-base font-medium">Speak to our expert</span>
                  <div className="w-8 h-8 ml-3 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right side - FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white pr-8">
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#e66b02] flex items-center justify-center transition-transform duration-300 ${
                        openIndex === index ? 'bg-[#e66b02] rotate-180' : ''
                      }`}>
                        {openIndex === index ? (
                          <Minus size={14} className="text-white" />
                        ) : (
                          <Plus size={14} className="text-[#e66b02]" />
                        )}
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'mt-4 max-h-96' : 'max-h-0'
                    }`}>
                      <p className="text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
} 