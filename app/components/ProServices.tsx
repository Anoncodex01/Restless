import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCheck, ClipboardList, Building2, ScrollText, FileText, Users, Briefcase, CheckSquare, Target } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { Helmet } from 'react-helmet';

export function ProServices() {
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
        <title>PRO Services & Visa Solutions in UAE – RDV Consultants</title>
        <meta name="description" content="Comprehensive PRO services, visa processing, and establishment card solutions in Dubai and the UAE. Fast, reliable, and expert support from RDV Consultants." />
        <meta name="keywords" content="PRO services UAE, Visa services Dubai, Establishment card UAE, Permit services UAE, Visa processing UAE, PRO company Dubai, Visa services/ permit services/ establishment card for uae" />
        <meta property="og:title" content="PRO Services & Visa Solutions in UAE – RDV Consultants" />
        <meta property="og:description" content="Comprehensive PRO services, visa processing, and establishment card solutions in Dubai and the UAE. Fast, reliable, and expert support from RDV Consultants." />
        <meta property="og:image" content="/images/favicon-r-orange.png" />
        <meta property="og:url" content="https://rdv.ae/services/pro-services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRO Services & Visa Solutions in UAE – RDV Consultants" />
        <meta name="twitter:description" content="Comprehensive PRO services, visa processing, and establishment card solutions in Dubai and the UAE. Fast, reliable, and expert support from RDV Consultants." />
        <meta name="twitter:image" content="/images/favicon-r-orange.png" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/imas.jpg')",
              backgroundPosition: "center",
              filter: "brightness(0.8)"
            }}
          ></div>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent"></div>

        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/images/bg.webp')] opacity-5 mix-blend-overlay"
          style={{ backgroundSize: '400px 400px' }}
        ></div>

        <div className="relative h-full">
          <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                PRO Services in the UAE
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                Simplifying Government Processes for Your Business
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="prose max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Streamlined PRO Services for Your Business in Dubai & UAE
            </h2>
            <p className="text-gray-600 mb-8">
              Managing government procedures and staying compliant with local regulations can be one of the most challenging aspects of running a business in the UAE. Whether you're starting a new business or expanding an existing one, navigating the complex legal and bureaucratic landscape can quickly become overwhelming. That's where our expert PRO (Public Relations Officer) services come in.
            </p>
            <p className="text-gray-600">
              We specialize in handling all the official documentation, government interactions, and compliance processes, saving you both time and effort. Our goal is to make sure your business remains in full compliance with UAE laws while minimizing the stress and confusion that often comes with administrative tasks. With our assistance, you can focus on your business, knowing that the paperwork is in capable hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our PRO Services Include:</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Visa & Immigration Services",
                description: "Fast and efficient processing of employment and residence visas, as well as family and dependent visas. We handle all the paperwork to ensure a smooth approval process."
              },
              {
                icon: FileCheck,
                title: "Document Processing & Legalization",
                description: "We manage the attestation, notarization, and legalization of documents, making sure everything is officially recognized by the UAE government."
              },
              {
                icon: Building2,
                title: "Government Liaison",
                description: "Our team works directly with government departments such as the Ministry of Labor, Immigration, and the Economic Department, ensuring that all your legal and licensing documents are up-to-date."
              },
              {
                icon: ScrollText,
                title: "Trade License & Permit Renewals",
                description: "We handle your trade license renewals and any necessary permit applications to keep your business running smoothly, ensuring that deadlines are met and paperwork is completed on time."
              },
              {
                icon: ClipboardList,
                title: "Labor & Immigration Compliance",
                description: "We support you in navigating the labor and immigration systems, handling everything from labor contracts to employee work permits and residency."
              },
              {
                icon: Target,
                title: "Customized Solutions for SMEs",
                description: "Understanding the unique needs of small and medium-sized enterprises, we provide tailored services that work for your specific business goals and operational demands."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#1e293b] rounded-2xl p-8 shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why RDV Consultants for PRO Services?</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <CheckSquare className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Service</h3>
                <p className="text-gray-600 text-lg">
                  We offer end-to-end solutions for all your government-related processes. Whether it's visa applications, permits, or business licenses, we've got it covered.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplifying Complexities</h3>
                <p className="text-gray-600 text-lg">
                  With our experience, we simplify the often complicated paperwork and procedural requirements, helping you avoid delays and unnecessary stress.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Compliance</h3>
                <p className="text-gray-600 text-lg">
                  We ensure that your business meets all legal and regulatory requirements in the UAE, keeping you on track with the latest updates and changes in local laws.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Can PRO Services assist with visa processing?",
                answer: "Yes, PRO Services facilitate the entire visa application process for employees and their families, including new visas, renewals, and cancellations, ensuring compliance with UAE immigration laws."
              },
              {
                question: "Are PRO Services beneficial for startups and small businesses?",
                answer: "Absolutely. Startups and small businesses often lack the resources for an in-house PRO department. Outsourcing to RDV Consultants allows them to focus on core operations while we handle regulatory and compliance matters."
              },
              {
                question: "What is the cost structure for PRO Services?",
                answer: "Costs vary based on the specific services required and the complexity of tasks. RDV Consultants offers customized packages tailored to your business needs, ensuring cost-effectiveness."
              },
              {
                question: "Can PRO Services assist with trademark registration?",
                answer: "Yes, we facilitate the trademark registration process, protecting your brand and intellectual property rights in the UAE."
              },
              {
                question: "How do I get started with RDV Consultants' PRO Services?",
                answer: "Contact us through our website or call our office to schedule a consultation. We'll assess your needs and provide a tailored plan to support your business operations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/imas.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(0.3)"
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/80"></div>

        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/images/bg.webp')] opacity-5 mix-blend-overlay"
          style={{ backgroundSize: '400px 400px' }}
        ></div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Focus on Your Business, Let Us Handle the Rest</h2>
            <p className="text-gray-300 mb-8">
              Our PRO services are designed to provide businesses with a seamless experience, taking the burden of government formalities off your shoulders. With RDV Consultants by your side, you can be confident that all official processes will be handled professionally and efficiently.
            </p>
            <motion.button
              onClick={handleOpenPopup}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
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