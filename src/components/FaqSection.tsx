import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PopupForm } from './PopupForm';

const faqs = [
  {
    id: 1,
    question: "How do I choose the right jurisdiction for my business?",
    answer: "Choosing the right jurisdiction depends on your business activity, target market, ownership preferences, and future expansion goals. Free Zones are ideal for companies focused on international trade, while Mainland setups are better for serving the local UAE market. Offshore jurisdictions are suitable for holding companies or asset protection. At RDV Consultants, we evaluate your goals and guide you to the jurisdiction that offers the best strategic, legal, and financial advantage."
  },
  {
    id: 2,
    question: "What are the benefits of setting up a business in a UAE Free Zone?",
    answer: "Free Zones offer several advantages, including 100% foreign ownership, zero personal income tax, customs duty exemptions, and simplified visa processes. They're ideal for startups and international businesses looking for ease of setup and access to world-class infrastructure. RDV Consultants helps you identify the most suitable Free Zone based on your industry, budget, and long-term objectives.",
    link: {
      text: "Find out more",
      to: "/services/freezone"
    }
  },
  {
    id: 3,
    question: "What are the compliance requirements for UAE Corporate Tax?",
    answer: "Businesses in the UAE are now required to register for Corporate Tax and submit annual tax returns. Compliance includes maintaining proper accounting records, calculating taxable income, and filing returns on time. Specific requirements may vary based on the nature of the business and revenue thresholds. RDV Consultants offers expert tax advisory and ensures your business meets all corporate tax obligations in line with UAE Federal Tax Authority guidelines.",
    link: {
      text: "Find out more",
      to: "/services/tax-compliance"
    }
  },
  {
    id: 4,
    question: "Can Golden Visa holders sponsor their family members?",
    answer: "Yes, Golden Visa holders can sponsor their spouse, children (of any age), and in some cases, dependent parents. The visa offers long-term residency and enhanced security for the entire family. RDV Consultants assists you in managing the application and documentation process, ensuring smooth and timely approvals.",
    link: {
      text: "Find out more",
      to: "/services/immigration"
    }
  },
  {
    id: 5,
    question: "How does RDV ensure compliance with UAE tax and accounting laws?",
    answer: "We provide end-to-end support, from proper bookkeeping and financial reporting to tax planning and regulatory filings. Our team stays updated with UAE laws and FTA regulations, ensuring your business remains fully compliant. With customized solutions, RDV Consultants helps mitigate risks and maintain transparency in all financial matters."
  }
];

export function FAQSection() {
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
                      openIndex === index ? 'mt-4 max-h-[500px]' : 'max-h-0'
                    }`}>
                      <p className="text-gray-300">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                          <Link
                            to={faq.link.to}
                            className="text-[#e66b02] hover:text-[#ff7b02] transition-colors duration-200 flex items-center gap-2"
                          >
                            {faq.link.text}
                            <ArrowRight size={16} />
                          </Link>
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#e66b02] text-[#e66b02] hover:bg-[#e66b02] hover:text-white rounded-full transition-colors duration-200"
                          >
                            Book A Consultation
                          </Link>
                        </div>
                      )}
                      {!faq.link && (
                        <div className="flex justify-end mt-6 pt-4 border-t border-white/10">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#e66b02] text-[#e66b02] hover:bg-[#e66b02] hover:text-white rounded-full transition-colors duration-200"
                          >
                            Book A Consultation
                          </Link>
                        </div>
                      )}
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