import React, { useState } from 'react';
import { ArrowRight, Building2, FileCheck, ClipboardList, FileText, BookOpen, Calculator, Target, Shield, Briefcase, Scale, Users, Clock } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { motion } from 'framer-motion';

export function CITCompliance() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <motion.div 
      className="min-h-screen bg-white text-gray-900"
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
                UAE Corporate Tax
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                Where Compliance Meets Confidence
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
              Corporate Tax Services in the UAE: Unlocking Compliance and Growth
            </h2>
            <p className="text-gray-600 mb-8">
              The UAE's introduction of corporate tax has created both opportunities and challenges for businesses of all sizes. At RDV Consultants, we understand the complexities of this evolving tax landscape and offer specialized services tailored to SMEs.
            </p>
            <p className="text-gray-600 mb-8">
              Our experienced team guides businesses through every aspect of UAE corporate tax, ensuring full compliance while maximizing tax efficiency.
            </p>
            <ul className="list-none space-y-6 mb-8">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <FileCheck className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">Expert Registration: We guide you through the corporate tax registration process, ensuring all your documentation is in order and your business is properly set up under the new tax system.</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <Clock className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">Timely & Accurate Filing: Our team handles the filing of corporate tax returns, ensuring accuracy and timeliness every step of the way. You can rely on us to meet deadlines and avoid penalties.</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <Target className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">Maximizing Tax Efficiency: At RDV Consultants, we provide tailored solutions to optimize your tax strategy, ensuring your business enjoys the benefits of UAE's competitive tax environment.</p>
              </li>
            </ul>
            <p className="text-gray-600 mb-8">
              Whether you're a new business or an established enterprise, we provide personalized solutions that help you stay ahead of changing tax regulations. We prioritize accuracy, timeliness, and compliance, so you can focus on growing your business with peace of mind, knowing your corporate tax responsibilities are in expert hands. Let us handle the tax complexities, while you thrive in the dynamic UAE market.
            </p>
            <motion.button
              onClick={handleOpenPopup}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book A Consultation</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Understanding Corporate Tax Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute top-20 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
            
            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Understanding Corporate Tax in the UAE
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
              </div>

              <div className="space-y-8 relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    In 2023, the UAE implemented a federal corporate tax law, marking a significant change in the region's tax system. Corporate tax now applies to most businesses operating in the UAE, which includes companies engaged in trading, professional services, and other sectors. The tax rate is set at 9% for taxable profits exceeding AED 375,000, with profits below this threshold being tax-exempt. However, certain activities and business structures, like those in free zones, may be eligible for tax exemptions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-xl">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Navigating corporate tax can be overwhelming, especially with the frequent updates to the laws. Our role is to demystify this process, ensuring your business not only complies but also takes full advantage of available tax incentives, exemptions, and deductions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Corporate Tax Registration and Filing Matter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 right-1/2 transform translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                  Why Corporate Tax Registration and Filing Matter
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-[#0f172a]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#0f172a]/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Corporate tax registration is mandatory for businesses operating in the UAE, and failure to comply can result in heavy penalties and reputational damage. Filing accurate tax returns ensures that your business stays in good standing with the authorities and avoids fines.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    However, corporate tax is not just about compliance—it's about strategic planning. By understanding your tax obligations, you can better plan for future investments, manage cash flow, and improve the overall financial health of your company.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive Corporate Tax Services
            </h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Corporate Tax Registration",
                description: "We assist in registering your company with the Federal Tax Authority (FTA) to ensure your business is legally recognized for corporate tax purposes. We guide you through the paperwork, streamline the registration process, and ensure all necessary documents are submitted."
              },
              {
                icon: Calculator,
                title: "Tax Filing and Returns",
                description: "Timely filing of corporate tax returns is essential to avoid penalties. We ensure your business's tax filings are prepared accurately and submitted in compliance with UAE law. Our experts ensure that all allowable deductions are taken into account and that your business minimizes its tax liabilities."
              },
              {
                icon: Shield,
                title: "Tax Advisory Services",
                description: "We provide ongoing consultation and advisory services to help your business optimize its tax position. Whether it's navigating new tax regulations or exploring tax-saving opportunities, we offer tailored strategies to reduce your tax burden while staying fully compliant with UAE tax law."
              },
              {
                icon: Target,
                title: "Tax Structuring and Planning",
                description: "Our tax professionals assist with strategic tax structuring, helping you set up your business in a way that is most beneficial from a tax perspective. We help with decisions around company formation, free zone options, and other strategies to minimize your corporate tax liability."
              },
              {
                icon: BookOpen,
                title: "Ongoing Tax Compliance",
                description: "Corporate tax laws are subject to change. At RDV Consultants, we stay up-to-date with all the latest regulatory changes and ensure your business adapts to these changes promptly. We offer continuous support to ensure that your business remains fully compliant with evolving tax regulations."
              },
              {
                icon: Users,
                title: "Corporate Tax Training & Support",
                description: "Understanding UAE Corporate Tax regulations is crucial for businesses. We offer tailored training and ongoing support to help your team stay updated on Corporate Tax laws and maintain compliance with confidence."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-16 -translate-y-16">
                  <service.icon className="w-full h-full" />
                </div>
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Corporate Tax Exemptions and Benefits
            </h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Free Zone Incentives",
                description: "Many free zones in the UAE offer tax exemptions for a number of years, sometimes extending up to 50 years. This means businesses operating in specific zones may be exempt from corporate tax for a certain period."
              },
              {
                icon: Briefcase,
                title: "Tax Relief for SMEs",
                description: "The corporate tax law in the UAE is designed to be SME-friendly. For profits under AED 375,000, businesses enjoy a 0% tax rate, which can be a major advantage for small and medium-sized enterprises."
              },
              {
                icon: Scale,
                title: "International Tax Treaties",
                description: "The UAE has signed numerous double taxation avoidance agreements with other countries, providing significant tax benefits for international businesses operating within the UAE."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-[#0f172a] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
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
              How RDV Consultants Supports You
            </h2>
            <p className="text-gray-600 mb-12">
              Our team at RDV Consultants combines in-depth knowledge of UAE corporate tax laws with a hands-on approach to help businesses of all sizes stay compliant while reducing their tax exposure. We work with you to understand your business structure and goals, offering customized tax solutions that drive growth.
            </p>
            <p className="text-gray-600 mb-12">
              Whether you are just starting your business or expanding your operations, RDV Consultants is your trusted partner in managing corporate tax matters. We handle the technical details, so you can focus on what matters most—growing your business.
            </p>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-orange-500/20" />

              <div className="space-y-12">
                {[
                  {
                    title: "Expert Guidance",
                    description: "With in-depth knowledge of the latest corporate tax rules in the UAE, we offer advice tailored to your business needs, ensuring you stay compliant and efficient."
                  },
                  {
                    title: "Compliance Assurance",
                    description: "Corporate tax rules can change frequently, and our team ensures that your business adheres to the most up-to-date requirements, helping you avoid costly mistakes."
                  },
                  {
                    title: "Maximize Tax Efficiency",
                    description: "We work with you to identify strategies that optimize your tax position while ensuring full compliance with UAE tax laws."
                  },
                  {
                    title: "Dedicated Support",
                    description: "Our team is with you every step of the way—from registration to filing—providing personalized support to ensure that your corporate tax matters are handled with the utmost care."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-white font-bold -translate-x-[2px]">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What corporate tax rate applies to my entity?",
                answer: "The UAE Corporate Tax (CT) applies to all businesses operating within the UAE, with some exceptions. The law is effective for financial years starting on or after June 1, 2023:\n• 0% for businesses with taxable income not exceeding AED 375,000 or for those classified as eligible free zone entities.\n• 9% for businesses with taxable income exceeding AED 375,000.\n• 15% for members of multinational groups with revenues above EUR 750 million."
              },
              {
                question: "Do I need to register for Corporate Tax if my company's taxable income is below the threshold?",
                answer: "Yes, all businesses in the UAE are required to register for Corporate Tax, regardless of whether their taxable income falls below the threshold. However, if your income is below the taxable limit, you may not be liable to pay Corporate Tax, but registration remains mandatory to comply with UAE tax regulations."
              },
              {
                question: "What are the differences between tax regimes in free zones and mainland UAE?",
                answer: "The UAE provides corporate tax exemptions to businesses established in its free zones, typically offering a 0% tax rate or tax holiday lasting up to 50 years. These benefits may vary between different free zones. To obtain these benefits, it is essential for businesses to ensure that their operations do not involve activities conducted within the mainland UAE."
              },
              {
                question: "If my business is set up in a Free Zone, will it benefit from 100% tax exemption?",
                answer: "While Free Zone entities are generally taxable, those qualifying as QFZPs can benefit from a 0% UAE CT rate on their Qualifying Income. Non-qualifying income will be taxed at the standard 9% rate.\n\nTo qualify as a QFZP, an entity must:\n• Be a Free Zone Person\n• Maintain adequate economic substance in the UAE\n• Derive Qualifying Income (defined by a Cabinet Decision)\n• Not elect to be subject to the standard UAE CT regime\n• Maintain audited financial statements\n• Comply with transfer pricing rules and documentation requirements\n• Meet de minimis requirements"
              },
              {
                question: "Is interest paid on external and internal debt deductible for corporate tax purposes?",
                answer: "Yes, interest paid on both external and internal debt is typically an allowable deduction for corporate tax. However, this is subject to transfer pricing rules, withholding tax regulations, and deduction limitations, which must be carefully considered to ensure compliance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <div className="text-gray-600 whitespace-pre-line">{faq.answer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/imas.jpg')",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 to-[#0f172a]/90"></div>
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Simplify Your Corporate Tax Process?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get in touch with our experts today to learn how we can help your business navigate corporate tax registration, filing, and compliance. Our team is committed to providing exceptional service tailored to your unique needs.
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
      </section>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </motion.div>
  );
} 