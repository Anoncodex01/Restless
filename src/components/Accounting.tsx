import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, Building2, FileText, Shield, Clock, BarChart, Calculator } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { motion } from 'framer-motion';

export function Accounting() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[500px]">
        {/* Background Image with Fade In */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 to-[#0f172a]/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: "url('/images/imas.jpg')",
              backgroundPosition: "center"
            }}
          ></div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full">
          {/* Hero Content */}
          <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Accounting and Bookkeeping
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                Stay Ahead with Smart Accounting
              </p>
              <motion.button
                onClick={handleOpenPopup}
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">Book A Consultation</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Stay Financially Fit with RDV Consultants
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Accurate financial records are the backbone of any successful business. At RDV Consultants, we offer comprehensive accounting and bookkeeping services to ensure your financial data is well-organized, compliant, and optimized for strategic decision-making. Whether you're an SME, startup, or established company, our expertise helps you maintain control over your business finances without the hassle.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Managing financial records can be complex and time-consuming, especially with evolving regulations and compliance requirements in the UAE. Our professional accountants and bookkeepers provide seamless solutions to streamline financial operations, reduce risks, and enhance transparency. We leverage cutting-edge accounting software, automation tools, and industry best practices to deliver precise and real-time financial insights. By partnering with RDV Consultants, you gain access to strategic financial guidance, ensuring sustainable growth and compliance with UAE accounting and tax laws.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose RDV Consultants?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Our team consists of seasoned accounting professionals with deep knowledge of UAE's financial and tax regulations.",
                icon: Building2
              },
              {
                title: "Customized Solutions",
                description: "We tailor our services to fit the unique needs of your business, whether you require full-scale accounting or periodic bookkeeping support.",
                icon: FileText
              },
              {
                title: "Compliance & Accuracy",
                description: "Stay compliant with UAE accounting standards while ensuring financial accuracy for audits, taxation, and investor reporting.",
                icon: Shield
              },
              {
                title: "Cutting-Edge Technology",
                description: "We utilize modern accounting software and automation tools to streamline financial processes and minimize errors.",
                icon: Calculator
              },
              {
                title: "Confidentiality & Security",
                description: "Your financial data is safeguarded with the highest level of security and discretion.",
                icon: Clock
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      {React.createElement(feature.icon, {
                        className: "w-7 h-7 text-orange-500"
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Benefits of Professional Accounting & Bookkeeping
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Compliance",
                description: "Ensure adherence to UAE's financial laws, VAT regulations, and corporate tax requirements.",
                icon: Shield
              },
              {
                title: "Better Cash Flow Management",
                description: "Gain insights into revenue, expenses, and cash flow to make informed business decisions.",
                icon: BarChart
              },
              {
                title: "Time & Cost Savings",
                description: "Eliminate the burden of in-house accounting and focus on growing your business.",
                icon: Clock
              },
              {
                title: "Audit-Ready Financials",
                description: "Well-maintained records make audits seamless and stress-free.",
                icon: FileText
              },
              {
                title: "Financial Forecasting & Planning",
                description: "Accurate data enables strategic growth and risk management.",
                icon: BarChart
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-500/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-colors">
                      {React.createElement(benefit.icon, {
                        className: "w-7 h-7 text-orange-500 group-hover:text-orange-600 transition-colors"
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] observe-section">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Who Can Benefit?
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto" />
          </motion.div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="relative">
              {/* Progress Line */}
              <motion.div 
                className="absolute top-5 left-0 w-full h-0.5 bg-white/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
              </motion.div>
              
              {/* Progress Points */}
              <div className="relative flex justify-between">
                {[
                  "Small and Medium Enterprises (SMEs)",
                  "Startups & Entrepreneurs",
                  "E-commerce & Retail Businesses",
                  "Freelancers & Consultants",
                  "International Companies"
                ].map((text, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center w-48"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-orange-500 mb-4 z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <p className="text-white text-center text-lg">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Partner with RDV Consultants
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Navigating financial management doesn't have to be complex. Let RDV Consultants handle your accounting needs while you focus on running and expanding your business. Contact us today for a consultation and take control of your finances with confidence!
            </p>
            <button
              onClick={handleOpenPopup}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group"
            >
              <span>Book A Consultation</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">FAQ</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Why is Accounting critical for businesses in the UAE?",
                answer: {
                  title: "Statutory Requirements:",
                  description: "Under UAE law, businesses must maintain accurate financial records per International Accounting Standards and appoint an auditor for annual audits. These records must be kept for at least 5 years. Additionally, VAT regulations require businesses to track and maintain transaction records.",
                  subtitle: "Management Requirements:",
                  subdescription: "Accounting is essential for tracking financial performance, ensuring compliance, and providing key financial insights to management, investors, and authorities for informed decision-making."
                }
              },
              {
                question: "What are the penalties for failing to maintain accurate and timely financial records?",
                answer: {
                  description: "Failure to maintain proper books of accounts along with the necessary supporting documents, as required under Federal Law, can result in administrative penalties ranging from AED 10,000 to AED 100,000."
                }
              },
              {
                question: "Can RDV Consultants integrate with existing accounting software used by my business?",
                answer: {
                  description: "Yes, our team is proficient in integrating various accounting software platforms. We work closely with clients to ensure seamless data migration and system compatibility, minimizing disruptions to your financial operations."
                }
              },
              {
                question: "Can RDV Consultants help with non-resident businesses and VAT registration in the UAE?",
                answer: {
                  description: "Yes, we assist non-resident businesses with VAT registration and compliance in the UAE. Whether you're operating from abroad or setting up a branch in the UAE, we guide you through the VAT registration process and ensure you meet all legal requirements."
                }
              },
              {
                question: "Can RDV Consultants assist with closing financial records at year-end?",
                answer: {
                  description: "Yes, we offer year-end accounting services, including:",
                  items: [
                    "Closing your books for the year and preparing year-end financial statements",
                    "Calculating and filing any necessary tax returns",
                    "Providing you with insights to improve financial performance for the next year"
                  ]
                }
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {faq.question}
                </h3>
                <div className="space-y-4">
                  {faq.answer.title && (
                    <>
                      <p className="font-semibold text-orange-500">{faq.answer.title}</p>
                      <p className="text-gray-300">{faq.answer.description}</p>
                      {faq.answer.subtitle && (
                        <>
                          <p className="font-semibold text-orange-500 mt-4">{faq.answer.subtitle}</p>
                          <p className="text-gray-300">{faq.answer.subdescription}</p>
                        </>
                      )}
                    </>
                  )}
                  {!faq.answer.title && (
                    <>
                      <p className="text-gray-300">{faq.answer.description}</p>
                      {faq.answer.items && (
                        <ul className="space-y-2 mt-4">
                          {faq.answer.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </motion.div>
  );
} 