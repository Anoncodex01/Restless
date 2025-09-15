import React, { useState } from 'react';
import { ArrowRight, ChevronRight, FileCheck, Shield, Target, PieChart, FileText, ClipboardCheck } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { Helmet } from 'react-helmet';

export function FinancialReporting() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    >
      <Helmet>
        <title>Financial Reporting Services in UAE – RDV Consultants</title>
        <meta name="description" content="Accurate and timely financial reporting services in Dubai and the UAE. Ensure compliance and make informed decisions with RDV Consultants." />
        <meta name="keywords" content="Financial reporting UAE, Financial statements Dubai, Financial compliance UAE, Financial analysis UAE, Financial reporting company Dubai, Best financial reporting UAE" />
        <meta property="og:title" content="Financial Reporting Services in UAE – RDV Consultants" />
        <meta property="og:description" content="Accurate and timely financial reporting services in Dubai and the UAE. Ensure compliance and make informed decisions with RDV Consultants." />
        <meta property="og:image" content="/images/favicon-r-orange.png" />
        <meta property="og:url" content="https://rdv.ae/services/financial-reporting" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Financial Reporting Services in UAE – RDV Consultants" />
        <meta name="twitter:description" content="Accurate and timely financial reporting services in Dubai and the UAE. Ensure compliance and make informed decisions with RDV Consultants." />
        <meta name="twitter:image" content="/images/favicon-r-orange.png" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative h-[500px]">
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

        <div className="relative h-full">
          <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Financial Reporting
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                From Complex Data to Clear Vision.
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

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Content Area (spans 2 columns) */}
            <motion.div 
              className="lg:col-span-2 prose max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#0f172a] mb-8">
                Precision. Transparency. Compliance.
              </h2>
              <p className="text-gray-600 mb-8">
                At RDV Consultants, we understand that accurate financial reporting is the backbone of informed decision-making and regulatory compliance, essential for the success of any business. With our deep expertise in International Financial Reporting Standards (IFRS), we provide precise, transparent, and tailored financial statement preparation services that cater to the unique needs of businesses in Dubai and across the UAE.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're an SME or a larger entity, our team of qualified chartered accountants ensures your financial statements are meticulously prepared and fully aligned with local regulatory requirements. From consolidated financial statements to complex group reporting, we deliver reports that provide actionable insights, helping you make informed strategic decisions. Trust RDV Consultants to not only meet compliance standards but also enhance your business's financial integrity and credibility with stakeholders. Let us handle the numbers, so you can focus on growth.
              </p>
            </motion.div>

            {/* Right Contact Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-[#0f172a] rounded-xl px-8 py-6 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">Let's Connect.</h3>
                <ContactForm darkMode={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Why RDV Consultants Stands Out
            </h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "IFRS Expertise",
                description: "We stay ahead of evolving financial reporting standards, ensuring your business is always compliant."
              },
              {
                icon: Target,
                title: "Custom-Tailored Solutions",
                description: "We understand that every business is unique. Our approach is aligned with your industry and operational needs."
              },
              {
                icon: FileCheck,
                title: "Audit-Ready Reports",
                description: "Our reports are structured for easy review, minimizing auditor queries and expediting approvals."
              },
              {
                icon: PieChart,
                title: "Tech-Enabled Efficiency",
                description: "Leveraging advanced accounting tools, we enhance accuracy and streamline financial consolidation."
              },
              {
                icon: FileText,
                title: "End-to-End Support",
                description: "From data gathering to final presentation, we handle every step with precision and professionalism."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Benefits of Our Financial Reporting Services
            </h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: ClipboardCheck,
                title: "Regulatory Compliance",
                description: "Meet UAE's corporate tax and financial disclosure requirements with confidence."
              },
              {
                icon: PieChart,
                title: "Strategic Decision-Making",
                description: "Gain valuable insights into your business's financial health for better planning."
              },
              {
                icon: Shield,
                title: "Investor & Lender Confidence",
                description: "Enhance credibility with well-structured, transparent financial statements."
              },
              {
                icon: FileText,
                title: "Seamless Consolidation",
                description: "Simplify complex group reporting with accurate consolidation of financial data."
              },
              {
                icon: Target,
                title: "Risk Mitigation",
                description: "Identify discrepancies early, reducing financial and regulatory risks."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">FAQ</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How does RDV Consultants ensure financial statement compliance with UAE regulations?",
                answer: "RDV Consultants follows International Financial Reporting Standards (IFRS) to ensure all financial statements comply with local regulations. We ensure accuracy and transparency in financial reporting to avoid legal issues or penalties."
              },
              {
                question: "How often should businesses prepare financial statements?",
                answer: "Financial statements should be prepared annually for regulatory compliance. However, businesses may also opt for quarterly or monthly reports to make informed decisions."
              },
              {
                question: "What industries do RDV Consultants cater to for financial reporting?",
                answer: "We serve a wide range of industries, including manufacturing, retail, hospitality, construction, and more, adapting our financial reporting to each sector's unique requirements."
              },
              {
                question: "How can RDV Consultants help with financial reporting for startups?",
                answer: "We offer specialized financial reporting services for startups, providing accurate records and reports to help you track performance, meet compliance, and attract investors."
              },
              {
                question: "Can RDV Consultants assist with tax-related financial reporting?",
                answer: "Yes, we ensure that all tax-related information is accurately reflected in your financial reports, helping you stay compliant with local tax laws."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              At RDV Consultants, we are committed to transforming your financial data into a strategic asset. Partner with us to navigate the complexities of financial reporting with ease and confidence.
            </p>
            <motion.button
              onClick={handleOpenPopup}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book A Consultation</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </motion.div>
  );
} 