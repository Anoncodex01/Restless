import React, { useState } from 'react';
import { ArrowRight, Calculator, FileCheck, ClipboardList, FileText, BookOpen, FileSpreadsheet, LogOut, Shield, Target, Clock, Headphones } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

export function VATCompliance() {
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
                UAE Value Added Tax (VAT)
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                VAT Compliance Made Easy.
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
                VAT Services in the UAE – Simplified & Hassle-Free
              </h2>
              <p className="text-gray-600 mb-8">
                Value Added Tax (VAT) is a key component of the UAE's tax system, impacting businesses across various industries. Introduced at a standard rate of 5%, VAT applies to most goods and services, requiring businesses to register, file returns, and maintain proper records to ensure compliance with the Federal Tax Authority (FTA). Failure to adhere to VAT regulations can result in penalties, affecting financial stability and business operations.
              </p>
              <p className="text-gray-600">
                At RDV Consultants, we specialize in helping businesses navigate the complexities of VAT, ensuring they meet legal obligations while optimizing their tax position. Whether you're registering for VAT, filing returns, or seeking compliance guidance, our expert team provides tailored solutions that simplify the process. With RDV Consultants as your VAT partner, you can focus on growing your business while we handle your tax responsibilities with precision and efficiency.
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

      {/* Key Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
                Key points to consider for VAT in the UAE
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500" />
            </motion.div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-orange-500/0 via-orange-500 to-orange-500/0" />

            {[
              {
                icon: Calculator,
                color: "from-orange-400 to-orange-600",
                title: "Standard VAT Rate",
                description: "The UAE implemented Value Added Tax (VAT) at a rate of 5%, applicable to most goods and services."
              },
              {
                icon: FileCheck,
                color: "from-blue-400 to-blue-600",
                title: "Mandatory Registration",
                description: "Businesses with an annual turnover exceeding AED 375,000 must register for VAT, while voluntary registration is available for those earning above AED 187,500."
              },
              {
                icon: ClipboardList,
                color: "from-green-400 to-green-600",
                title: "Filing & Compliance",
                description: "VAT-registered businesses must submit periodic returns to the Federal Tax Authority (FTA) and maintain proper documentation to avoid fines."
              },
              {
                icon: Shield,
                color: "from-purple-400 to-purple-600",
                title: "Exempt & Zero-Rated Supplies",
                description: "Certain industries, such as healthcare and education, may qualify for zero-rated or exempt VAT treatment, reducing their tax liability."
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content Side */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${point.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <point.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Empty Side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Comprehensive VAT Services for Your Business
            </h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "VAT Registration",
                description: "Ensure your business is properly registered for VAT with the UAE Federal Tax Authority (FTA). Our experts handle the entire process, from eligibility assessment to document submission, ensuring smooth and hassle-free registration."
              },
              {
                icon: BookOpen,
                title: "VAT Filing & Returns",
                description: "Timely and accurate VAT filing is crucial to avoid penalties. We prepare and submit VAT returns on your behalf, ensuring compliance with UAE tax laws while identifying opportunities to optimize your tax position."
              },
              {
                icon: FileSpreadsheet,
                title: "VAT Audits & Advisory",
                description: "With constantly evolving tax regulations, staying compliant is essential. We provide expert VAT advisory services, helping you navigate complex tax scenarios, manage VAT audits, and implement best practices to minimize risks."
              },
              {
                icon: Calculator,
                title: "VAT Reclaim & Refunds",
                description: "If your business is eligible for VAT refunds, we assist with the refund application process, ensuring accurate documentation and compliance with FTA requirements to expedite your claims."
              },
              {
                icon: ClipboardList,
                title: "VAT Accounting & Bookkeeping",
                description: "Accurate VAT accounting is critical to maintaining financial transparency and ensuring error-free tax filings. Our specialists offer comprehensive VAT bookkeeping services, keeping track of input and output VAT, reconciling accounts, and maintaining compliance with FTA guidelines."
              },
              {
                icon: LogOut,
                title: "VAT Deregistration",
                description: "If your business no longer meets the VAT registration criteria or ceases operations, we assist with VAT deregistration to ensure a smooth exit from the tax system without legal complications."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
                Why Choose RDV Consultants for VAT Services?
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                color: "from-orange-400 to-orange-600",
                title: "Expert VAT Guidance",
                description: "Our tax specialists have extensive knowledge of UAE VAT laws, helping you navigate complex regulations with ease."
              },
              {
                icon: Target,
                color: "from-blue-400 to-blue-600",
                title: "Tailored Solutions",
                description: "We provide VAT strategies customized to your business needs, ensuring compliance while optimizing tax efficiency."
              },
              {
                icon: Clock,
                color: "from-green-400 to-green-600",
                title: "Timely & Accurate Filings",
                description: "We ensure all VAT returns are submitted on time, preventing penalties and unnecessary tax liabilities."
              },
              {
                icon: Headphones,
                color: "from-purple-400 to-purple-600",
                title: "Ongoing Support",
                description: "Our team offers continuous advisory services to help your business stay ahead of VAT regulations and updates."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-16 -translate-y-16">
                  <feature.icon className="w-full h-full" />
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Stay Compliant, Stay Ahead!</h2>
            <p className="text-gray-600 mb-8">
              Don't let VAT compliance slow down your business. Let RDV Consultants handle all your VAT-related requirements, from registration to filing and advisory. Contact us today to get started!
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
                question: "Is my business required to register for VAT in the UAE?",
                answer: "Businesses must register for VAT if their taxable supplies and imports exceed the mandatory registration threshold of AED 375,000 per annum. Voluntary registration is available for businesses with taxable supplies and imports exceeding AED 187,500 per annum. It's essential to assess your business activities to determine your registration obligations."
              },
              {
                question: "What are the consequences of failing to comply with VAT regulations in the UAE?",
                answer: "Non-compliance with VAT regulations can result in significant penalties, including fines for late registration, late filing of returns, and inaccuracies in tax reporting. Ensuring timely and accurate compliance is crucial to avoid such penalties and maintain good standing with the FTA."
              },
              {
                question: "How can RDV Consultants assist my business with VAT compliance?",
                answer: "RDV Consultants offers comprehensive VAT services, including registration assistance, return filing, compliance audits, and advisory services. Our team ensures that your business adheres to all VAT regulations, helping you avoid penalties and optimize your tax position."
              },
              {
                question: "Can I claim VAT refunds for business expenses?",
                answer: "Yes, businesses can reclaim VAT on eligible expenses related to their taxable activities. To claim a refund, businesses must maintain valid tax invoices and ensure that the expenses comply with UAE VAT regulations. Our team at RDV Consultants can assist with the VAT recovery process."
              },
              {
                question: "How do I correct errors in a submitted VAT return?",
                answer: "If a business discovers an error in a previously submitted VAT return that affects tax payable by more than AED 10,000, they must submit a Voluntary Disclosure to the FTA. Our tax experts can assist in correcting filing errors to ensure compliance."
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

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </motion.div>
  );
} 