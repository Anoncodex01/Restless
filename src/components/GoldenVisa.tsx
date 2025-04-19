import React, { useState } from 'react';
import { ArrowRight, Building2, FileCheck, ClipboardList, FileText, BookOpen, Calculator, Target, Shield, Briefcase, Scale, Users, Clock, GraduationCap, Award, Globe, Heart } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { motion } from 'framer-motion';

export function GoldenVisa() {
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
                UAE Golden Visa
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                Gold-Stamped Future in the UAE
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
              Start Your Golden Chapter in the UAE
            </h2>
            <p className="text-gray-600 mb-8">
              Unlock the door to unparalleled opportunities in the UAE with the prestigious Golden Visa—a long-term residency program designed for investors, entrepreneurs, exceptional talents, and outstanding students. This exclusive visa grants you the freedom to live, work, or study in the UAE while enjoying a host of exceptional benefits.
            </p>
            <p className="text-gray-600 mb-8">
              The UAE's 'Golden visa' is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits which include:
            </p>
            <ul className="list-none space-y-6 mb-8">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <Clock className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">a long-term, renewable residence visa valid for upto 10 years</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <Shield className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">the privilege of not needing a sponsor to stay in the UAE</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <Globe className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">the ability to stay outside the UAE for more than six months</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                  <Users className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-600">the ability to sponsor your family members, including spouses and children, indefinitely</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="prose max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Am I Eligible for the Golden Visa?
            </h2>
            <p className="text-gray-300 mb-8">
              The Golden Visa is a prestigious opportunity, but to secure this long-term residency, you must meet certain eligibility criteria, which are available to the following categories of individuals:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "1. Investors in Public Investments",
                  duration: "Duration: 10 years (renewable)",
                  criteria: [
                    "Invest at least AED 2 million in an accredited investment fund or have a valid commercial or industrial license with a capital of no less than AED 2 million.",
                    "Submit a letter from the Federal Tax Authority confirming an annual tax contribution of AED 250,000 or more.",
                    "Own the invested capital completely (not a loan).",
                    "Provide proof of medical insurance for you and your family."
                  ]
                },
                {
                  title: "2. Real Estate Investors",
                  duration: "Duration: 5 years (renewable)",
                  criteria: [
                    "Own property valued at no less than AED 2 million.",
                    "Property purchase may include a loan from specific approved banks."
                  ]
                },
                {
                  title: "3. Entrepreneurs",
                  duration: "Duration: 5 years (renewable)",
                  criteria: [
                    "Own an innovative, risk-based economic project valued at no less than AED 500,000.",
                    "Obtain approval from relevant UAE authorities and a certified business incubator."
                  ]
                },
                {
                  title: "4. Outstanding Specialized Talents",
                  duration: "Duration: 10 years (renewable)",
                  criteria: [
                    "Doctors & Scientists: Approval from the Ministry of Health or Emirates Council of Scientists.",
                    "Inventors: Recommendation letter from the Ministry of Economy for patents contributing to the UAE economy.",
                    "Creative People: Approval from the department of culture and arts.",
                    "Executives: Bachelor's degree, 5+ years of relevant experience, and a minimum salary of AED 50,000 per month.",
                    "Athletes: Recommendation from sports authorities.",
                    "Engineers & Scientists: Degree certification and work contract in fields such as AI, big data, or biotechnology."
                  ]
                },
                {
                  title: "5. Outstanding Students",
                  duration: "Duration: 5 years for high school students; 10 years for university students",
                  criteria: [
                    "High School Students: Top performer with at least 95% in exams, supported by a recommendation from the Ministry of Education.",
                    "University Students: Graduates from accredited universities with a GPA of 3.5+ for A-class and 3.8+ for B-class institutions."
                  ]
                }
              ].map((category, index) => (
                <motion.div 
                  key={index} 
                  className="bg-[#1e293b] rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-orange-400 mb-4">{category.duration}</p>
                  <ul className="list-none space-y-3">
                    {category.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                          <span className="text-orange-500 text-sm">•</span>
                        </div>
                        <span className="text-gray-300">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
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
              UAE Golden Visa: Application Process
            </h2>
            <p className="text-gray-600 mb-12">
              With the expertise of RDV Consultants, obtaining the prestigious Golden Visa in Dubai becomes a seamless experience, as we handle all document processing and coordinate with government agencies on your behalf.
            </p>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-orange-500/20" />

              <div className="space-y-12">
                {[
                  {
                    title: "Golden Visa Nomination Application",
                    description: "Let our experts handle the entire Golden Visa nomination process for you—coordinating directly with the Department of Economic Development (DED), approved free zones, and relevant UAE authorities on your behalf."
                  },
                  {
                    title: "Document Preparation",
                    description: "Our team guides you through every step of the documentation process, ensuring you have all the necessary papers in place—accurately compiled, formatted, and ready for submission."
                  },
                  {
                    title: "Secure Your Golden Visa in Dubai",
                    description: "Once your application and supporting documents are submitted, the relevant authorities will carefully review your case. Upon approval, your Golden Visa will be officially granted—providing you with long-term residency and exclusive benefits in the UAE."
                  }
                ].map((step, index) => (
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                question: "How does the Golden Visa differ from standard residency visas?",
                answer: "Unlike standard residency visas, which typically require a local sponsor and are tied to employment, the Golden Visa offers greater autonomy by allowing self-sponsorship. It also provides longer residency periods (5 or 10 years) compared to the standard 2-3 years, and offers more flexibility regarding time spent outside the UAE without affecting residency status."
              },
              {
                question: "How can investors qualify for the Golden Visa?",
                answer: "Investors can qualify by:\n• Public Investment: Investing at least AED 2 million in an investment fund.\n• Real Estate Investment: Purchasing property valued at a minimum of AED 2 million. These investments must be maintained for a specified duration, and proof of investment is required."
              },
              {
                question: "Are entrepreneurs eligible for the Golden Visa?",
                answer: "Yes, entrepreneurs can apply if they own or partner in a startup registered in the UAE under the small and medium enterprises (SME) category, with the company generating annual revenues of at least AED 1 million."
              },
              {
                question: "How long does the Golden Visa application process take?",
                answer: "The application process typically takes a few weeks to a couple of months, depending on the complexity of your case and the government agencies involved. RDV Consultants ensures that your application is expedited smoothly and efficiently."
              },
              {
                question: "Can I apply for the Golden Visa if I already live in the UAE?",
                answer: "Yes, even if you're already residing in the UAE, you can apply for the Golden Visa. Our team at RDV Consultants can guide you through the application and help ensure a smooth transition from a standard residency visa to the prestigious Golden Visa."
              },
              {
                question: "Are there any language proficiency requirements for the Golden Visa?",
                answer: "No, there are no specific language proficiency requirements for the Golden Visa."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#1e293b] rounded-2xl p-8 shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <div className="text-gray-300 whitespace-pre-line">{faq.answer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Also See Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/bg.webp')] opacity-5"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Also See:</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Blue Visa</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    The Blue Visa is a 10-year residence visa designed for individuals who have made exceptional contributions to environmental protection and sustainability, both within and beyond the UAE.
                  </p>
                  <p className="text-gray-300">
                    This visa is granted to advocates of environmental action, including members of international organisations, global companies, NGOs, associations, award recipients, and distinguished researchers and activists in the field of sustainability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Green Visa</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    The UAE's Green Visa is a 5-year residence permit that allows individuals to self-sponsor, removing the need for a UAE employer or national sponsor. It is ideal for freelancers, self-employed professionals, and skilled employees.
                  </p>
                  <p className="text-gray-300">
                    Freelancers/Self-employed applicants must obtain a permit from the Ministry of Human Resources and Emiratisation, hold a bachelor's degree or diploma, and show proof of earning at least AED 360,000 over the last two years.
                  </p>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to begin your journey?</h2>
            <p className="text-gray-300 mb-8">
              Get in touch with RDV Consultants today, and let our experts guide you through every step of securing your Golden Visa in Dubai.
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