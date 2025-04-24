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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Rich gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2757]/[0.02] via-transparent to-[#e66b02]/[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,39,87,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(230,107,2,0.03),transparent_50%)]" />
      </div>
      
      {/* Accent gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E2757]/[0.02] rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e66b02]/[0.02] rounded-full blur-3xl" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `radial-gradient(#1E2757 0.5px, transparent 0.5px), radial-gradient(#1E2757 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Header Content */}
            <div className="md:sticky md:top-24">
              <div className="inline-block bg-gradient-to-r from-[#1E2757]/5 to-[#e66b02]/5 px-4 py-1.5 rounded-full mb-4">
                <span className="bg-gradient-to-r from-[#1E2757] to-[#e66b02] bg-clip-text text-transparent font-semibold uppercase tracking-wider text-sm">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E2757] to-[#e66b02] bg-clip-text text-transparent">
                Questions You're
                <span className="block">Probably Asking</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                If you've made it this far, you're either very interested or have questions. 
                Here are a few frequently asked questions.
              </p>
              
              {/* CTA Section */}
              <div className="mt-8">
                <p className="text-gray-600 mb-6">Still looking for answers?</p>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex items-center bg-gradient-to-r from-[#1E2757] to-[#e66b02] text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#e66b02]/20 hover:scale-105 group"
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
                    className="w-full bg-white hover:bg-gradient-to-r hover:from-[#1E2757]/[0.02] hover:to-[#e66b02]/[0.02] rounded-2xl p-6 text-left transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1E2757] pr-8 transition-colors">
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#e66b02] flex items-center justify-center transition-all duration-300 ${
                        openIndex === index ? 'bg-gradient-to-r from-[#1E2757] to-[#e66b02] rotate-180' : ''
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
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                          <Link
                            to={faq.link.to}
                            className="text-[#e66b02] hover:text-[#1E2757] transition-colors duration-200 flex items-center gap-2"
                          >
                            {faq.link.text}
                            <ArrowRight size={16} />
                          </Link>
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#e66b02] text-[#e66b02] hover:bg-gradient-to-r hover:from-[#1E2757] hover:to-[#e66b02] hover:text-white rounded-full transition-all duration-200"
                          >
                            Book A Consultation
                          </Link>
                        </div>
                      )}
                      {!faq.link && (
                        <div className="flex justify-end mt-6 pt-4 border-t border-gray-100">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#e66b02] text-[#e66b02] hover:bg-gradient-to-r hover:from-[#1E2757] hover:to-[#e66b02] hover:text-white rounded-full transition-all duration-200"
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