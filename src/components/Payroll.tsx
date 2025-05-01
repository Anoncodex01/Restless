import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Calculator, Shield, Clock, Users, FileCheck, HeartHandshake } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

export function Payroll() {
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
                Payroll Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                Stress-Free Payroll, Every Month
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
                Seamless Payroll Solutions for Business Success
              </h2>
              <p className="text-gray-600 mb-8">
                Managing payroll in the UAE involves more than just processing salaries—it requires accuracy, compliance, and efficiency. With evolving labor laws, Wage Protection System (WPS) requirements, and tax regulations, handling payroll in-house can be costly and time-consuming.
              </p>
              <p className="text-gray-600 mb-8">
                At RDV Consultants, we offer secure, compliant, and customized payroll solutions tailored to your business needs. From salary calculations and deductions to leave encashments, pensions, and end-of-service benefits, we ensure seamless payroll processing while you focus on growth.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're a startup, SME, or large enterprise, our expert-managed payroll services help you save time, reduce costs, and ensure employees are paid accurately and on time. Partner with us for a hassle-free, efficient, and fully compliant payroll experience.
              </p>
            </motion.div>

            {/* Right Contact Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-[#0f172a] rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect.</h3>
                <ContactForm darkMode={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Payroll Outsourcing
            </h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Calculator,
                title: "Error-Free Payroll Processing",
                description: "Eliminate miscalculations and ensure employees are paid accurately and on time."
              },
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: "Avoid penalties and legal complications with expert-managed payroll."
              },
              {
                icon: Clock,
                title: "Time Savings",
                description: "Reclaim valuable hours by automating payroll tasks."
              },
              {
                icon: Users,
                title: "Scalability",
                description: "Whether you have 10 employees or 1,000, we adapt to your growing needs."
              },
              {
                icon: HeartHandshake,
                title: "Enhanced Employee Satisfaction",
                description: "On-time, transparent payroll processing boosts workforce morale and trust."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                question: "How does RDV Consultants ensure compliance with UAE labor laws?",
                answer: "RDV Consultants stays updated with the latest labor laws and regulations in the UAE. We ensure that all payroll processes comply with legal standards, including timely payments and accurate reporting, thereby reducing the risk of legal complications."
              },
              {
                question: "Can RDV Consultants customize payroll solutions to fit my business needs?",
                answer: "Yes, RDV Consultants offers tailored payroll solutions designed to meet the unique requirements of your business. Whether you have specific reporting needs, unique compensation structures, or require integration with existing HR systems, we can customize our services to align with your objectives."
              },
              {
                question: "How does RDV Consultants handle payroll for businesses with a diverse workforce?",
                answer: "RDV Consultants is experienced in managing payroll for diverse workforces, including expatriates and local employees. We handle various aspects such as currency conversions, compliance with residency regulations, and tax implications, ensuring that all employees are paid accurately and on time."
              },
              {
                question: "Does RDV Consultants handle the calculation and filing of employee taxes?",
                answer: "Yes, RDV Consultants handles the calculation of employee taxes where applicable and ensures compliance with UAE tax laws. We also assist with the timely filing of tax-related documents, ensuring that all payroll taxes are correctly submitted to the relevant authorities."
              },
              {
                question: "How does RDV Consultants handle employee compensation and benefits administration?",
                answer: "We manage employee compensation and benefits by ensuring that all allowances (housing, transportation, health insurance, etc.) are accurately calculated and integrated into the payroll."
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

      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Let RDV Consultants handle your payroll, so you can focus on what truly matters—your business success. Contact us today to learn how our payroll solutions can enhance efficiency and compliance for your company.
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