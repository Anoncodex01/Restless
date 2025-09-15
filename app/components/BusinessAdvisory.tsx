import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LineChart, PieChart, Scale, TrendingUp, Settings, Users, Target, CheckCircle, Briefcase } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { ContactForm } from './ContactForm';
import { Helmet } from 'react-helmet';

export function BusinessAdvisory() {
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
        <title>Business Advisory & Consulting in UAE – RDV Consultants</title>
        <meta name="description" content="Expert business advisory, management consulting, and growth strategy services in Dubai and the UAE. Partner with RDV Consultants for business success." />
        <meta name="keywords" content="Business advisory UAE, Management consultants Dubai, Business consulting UAE, Business strategy UAE, Top business advisor, Best business advisory, Best business set up consultants" />
        <meta property="og:title" content="Business Advisory & Consulting in UAE – RDV Consultants" />
        <meta property="og:description" content="Expert business advisory, management consulting, and growth strategy services in Dubai and the UAE. Partner with RDV Consultants for business success." />
        <meta property="og:image" content="/images/favicon-r-orange.png" />
        <meta property="og:url" content="https://rdv.ae/services/business-advisory" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Advisory & Consulting in UAE – RDV Consultants" />
        <meta name="twitter:description" content="Expert business advisory, management consulting, and growth strategy services in Dubai and the UAE. Partner with RDV Consultants for business success." />
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
                Business Advisory and Consultancy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                Guiding Your Business to New Heights in the UAE
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
                Building Smarter Businesses with Expert Advisory
              </h2>
              <p className="text-gray-600 mb-8">
                Starting a business in the UAE presents exciting opportunities, but it also comes with unique challenges. RDV Consultants specializes in providing strategic Business Advisory Services to startups, helping you navigate the complexities of setting up and growing your business in this dynamic market.
              </p>
              <p className="text-gray-600">
                Whether you're refining your business model, seeking investment, or ensuring regulatory compliance, our expert guidance will support you every step of the way as you build a strong foundation for long-term success.
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
            <h2 className="text-3xl font-bold text-white mb-4">Our Business Advisory Services Include:</h2>
            <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Strategic Business Planning",
                description: "We work closely with you to craft a clear and actionable roadmap for your business. From identifying key growth areas to optimizing operational efficiency, our strategic insights will help you stay ahead of the competition and achieve long-term success."
              },
              {
                icon: LineChart,
                title: "Financial Consulting and Analysis",
                description: "Our experts provide in-depth financial analysis and guidance to help you manage your cash flow, reduce costs, and improve profitability. We offer tailored solutions for budgeting, forecasting, and investment strategies that align with your business goals."
              },
              {
                icon: Scale,
                title: "Regulatory Compliance and Risk Management",
                description: "Navigating the legal and regulatory landscape in the UAE can be complex. We provide guidance on staying compliant with local laws, from tax regulations to labor laws, ensuring that your business operates smoothly and mitigates potential risks."
              },
              {
                icon: Target,
                title: "Market Entry and Expansion Strategy",
                description: "Whether you're looking to enter the UAE market or expand your existing operations, our team offers comprehensive market research, strategic insights, and practical support for localizing your business to meet the demands of the regional market."
              },
              {
                icon: Settings,
                title: "Business Process Optimization",
                description: "We analyze your current operations to identify inefficiencies and offer solutions that enhance productivity and reduce operational costs. Our focus is on streamlining processes, improving service delivery, and boosting your bottom line."
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
                Why Choose RDV Consultants?
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                color: "from-orange-400 to-orange-600",
                title: "Expertise You Can Trust",
                description: "Our team of experienced consultants brings deep knowledge of local markets, business environments, and regulatory frameworks to help guide your business toward success."
              },
              {
                icon: Target,
                color: "from-blue-400 to-blue-600",
                title: "Customized Solutions",
                description: "We don't believe in a one-size-fits-all approach. We tailor our services to suit the unique needs of your business, ensuring that the solutions we provide align with your goals and challenges."
              },
              {
                icon: TrendingUp,
                color: "from-green-400 to-green-600",
                title: "Results-Driven Approach",
                description: "We are committed to delivering measurable outcomes that drive growth and profitability. Our goal is to empower your business with the tools and insights necessary for sustained success."
              },
              {
                icon: Briefcase,
                color: "from-purple-400 to-purple-600",
                title: "End-to-End Support",
                description: "From the initial planning stage to ongoing optimization, we provide comprehensive advisory services that support every phase of your business journey. You can rely on us to be a trusted partner in your business's growth."
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
            <h2 className="text-3xl font-bold text-white mb-4">Partner with RDV Consultants Today</h2>
            <p className="text-gray-300 mb-8">
              Partner with RDV Consultants today and unlock your business's true potential. With our expert guidance and strategic insights, you'll be equipped to overcome challenges and capitalize on new opportunities in the competitive Dubai and UAE markets.
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