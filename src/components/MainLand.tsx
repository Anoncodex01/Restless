import React, { useState } from 'react';
import { ChevronRight, Check, ArrowRight, Plus, ClipboardList, PenTool, ScrollText, Building2, CheckSquare, Target, Globe, Users, Briefcase, FileCheck } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactForm';

interface MainLandCardProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  onConsult: () => void;
}

const MainLandCard = ({ title, subtitle, description, features, onConsult }: MainLandCardProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-orange-500 font-medium mb-4">{subtitle}</p>
    <p className="text-gray-300 mb-6">{description}</p>
    {features && (
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    )}
    <button
      onClick={onConsult}
      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
    >
      <span>Book A Consultation</span>
      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div 
    className={`group bg-white rounded-2xl transition-all duration-300 ${
      isOpen ? 'shadow-lg border-orange-500/30' : 'border-gray-100 hover:border-orange-500/20'
    } border`}
  >
    <button
      onClick={onToggle}
      className="w-full text-left px-8 py-6 flex items-start justify-between gap-4"
    >
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
        {question}
      </h3>
      <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <Plus className={`w-6 h-6 ${isOpen ? 'text-orange-500' : 'text-gray-400'}`} />
      </div>
    </button>
    <div 
      className={`px-8 transition-all duration-300 overflow-hidden ${
        isOpen ? 'pb-6 max-h-96' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600 prose prose-lg">
        {answer}
      </p>
    </div>
  </div>
);

export function MainLand() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    "Establishing a UAE Mainland Company",
    "Acquiring a Trade License",
    "Registering with the Chamber of Commerce",
    "Facilitating the Bank Account opening process",
    "Securing Director Visas for both company and family",
    "Organising office staff and accounting services"
  ];

  const industryLinks = [
    { title: "UAE Business Setup", href: "/business-setup" },
    { title: "Free Zones", href: "/free-zones" },
    { title: "Tax, Accounting & Finance", href: "/tax-accounting" },
    { title: "UAE Visas", href: "/uae-visas" }
  ];

  const advantages = [
    {
      title: 'Complete Market Access',
      description: 'Unlike free zone companies, mainland businesses can operate anywhere in the UAE and engage in government contracts.'
    },
    {
      title: '100% Foreign Ownership',
      description: 'Recent regulations allow foreign investors to own 100% of certain types of businesses.'
    },
    {
      title: 'Flexibility in Business Activities',
      description: 'Dubai mainland companies can engage in a wider range of business activities compared to free zone firms.'
    },
    {
      title: 'No Restriction on Office Location',
      description: 'Businesses can establish their offices in any area within Dubai, providing flexibility in operations and location choice.'
    },
    {
      title: 'Unlimited Visa Options',
      description: 'Mainland companies offer flexibility in terms of the number of visas that can be issued for employees.'
    }
  ];

  const companyTypes = [
    {
      title: 'Limited Liability Company (LLC)',
      description: 'Ideal for businesses with up to 50 shareholders.'
    },
    {
      title: 'Branch Office',
      description: 'For foreign companies wishing to expand into the UAE.'
    },
    {
      title: 'Professional Firms',
      description: 'For businesses operating in specialized sectors or services.'
    }
  ];

  const setupSteps = [
    {
      title: 'Choose Business Activity',
      description: 'Determine the type of business activity.'
    },
    {
      title: 'Select Company Name',
      description: 'Choose a unique and compliant trade name.'
    },
    {
      title: 'Get Initial Approvals',
      description: 'Apply for approval from the Department of Economic Development (DED).'
    },
    {
      title: 'Finalize Legal Structure',
      description: 'Select the right framework for your business.'
    },
    {
      title: 'Obtain License',
      description: 'Complete all necessary documentation and obtain your business license.'
    }
  ];

  const faqs = [
    {
      question: 'Do I need an office space for mainland company setup?',
      answer: 'Yes, a physical office is required for mainland business registration. The size and location of the office depend on your business activity.'
    },
    {
      question: 'Can I set up a mainland business if I am a non-resident of the UAE?',
      answer: 'Yes, foreign nationals can set up mainland businesses in Dubai, with certain requirements. Recent regulations allow 100% foreign ownership in specific business sectors. RDV Consultants will guide you through the process and help ensure you meet all requirements.'
    },
    {
      question: 'Are there any ongoing compliance requirements after setting up a mainland company?',
      answer: 'Yes, mainland companies must meet certain compliance standards, including annual renewals for your license, regular audits, and adherence to tax and accounting regulations. RDV Consultants can assist you with ongoing support to ensure compliance and help your business remain up to date with legal requirements.'
    },
    {
      question: 'What is the minimum capital requirement for a mainland business?',
      answer: "The minimum capital requirement depends on the business type and activity. Some businesses have specific requirements, while others have no minimum capital. RDV Consultants helps you determine the appropriate capital based on your business's needs."
    },
    {
      question: 'Can I employ foreign staff for my mainland company?',
      answer: 'Yes, mainland companies can employ foreign staff. The number of visas you can obtain depends on the size of your office and the nature of your business. RDV Consultants helps you navigate the visa process to ensure you comply with local regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 to-[#0f172a]/90">
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: "url('/images/imas.jpg')",
              backgroundPosition: "center 30%"
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative h-full">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 max-w-7xl py-6">
            <div className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-orange-500 hover:text-orange-600 transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">Mainland Company Setup UAE</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center -mt-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Mainland UAE
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl italic">
                Unlock Full Market Access with Mainland Business Setup.
              </p>
              <button
                onClick={handleOpenPopup}
                className="inline-flex w-fit items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
              >
                <span className="text-lg">Book A Consultation</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                  Establish Your Business in Dubai's Dynamic Mainland
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-4 rounded-full" />
                <p className="text-gray-700">
                  A mainland setup allows you to tap into the vast local market and engage directly with businesses across the UAE. Setting up a mainland company in Dubai provides unmatched benefits, such as full access to the local market, the ability to operate in multiple sectors, and complete ownership for foreign investors. This strategic location offers businesses an advantageous position to tap into global trade and expand their reach.
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  At RDV Consultants, we offer experts guidance to help businesses successfully establish themselves in the UAE's mainland market. Our team assists with every aspect of the setup process, ensuring you comply with local regulations, select the ideal structure, and obtain the necessary licenses to start your business smoothly and efficiently.
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-[#0f172a] rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect.</h3>
                <ContactForm darkMode={true} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Why Choose Mainland Company Setup in Dubai?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">Strategic Location</h3>
                  <p className="text-gray-600">Dubai's geographic position offers access to a thriving market in the GCC.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">Tax Benefits</h3>
                  <p className="text-gray-600">Enjoy zero personal income tax and full capital repatriation.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">Simple Setup Process</h3>
                  <p className="text-gray-600">With RDV Consultants, we ensure a smooth and efficient company formation process.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">Ownership Options</h3>
                  <p className="text-gray-600">Mainland companies can now be fully owned by foreign investors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Companies */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">
              Types of Mainland Companies in the UAE
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-1">Limited Liability Company (LLC)</h3>
                    <p className="text-gray-600">Ideal for businesses with up to 50 shareholders.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-1">Branch Office</h3>
                    <p className="text-gray-600">For foreign companies wishing to expand into the UAE.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-1">Professional Firms</h3>
                    <p className="text-gray-600">For businesses operating in specialized sectors or services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Full Width */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Advantages of Business Setup in Dubai Mainland
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Market Access",
                description: "Unlike free zone companies, mainland businesses can operate anywhere in the UAE and engage in government contracts.",
                icon: "Globe"
              },
              {
                title: "100% Foreign Ownership",
                description: "Recent regulations allow foreign investors to own 100% of certain types of businesses.",
                icon: "Users"
              },
              {
                title: "Flexibility in Business Activities",
                description: "Dubai mainland companies can engage in a wider range of business activities compared to free zone firms.",
                icon: "Briefcase"
              },
              {
                title: "No Restriction on Office Location",
                description: "Businesses can establish their offices in any area within Dubai, providing flexibility in operations and location choice.",
                icon: "Building"
              },
              {
                title: "Unlimited Visa Options",
                description: "Mainland companies offer flexibility in terms of the number of visas that can be issued for employees.",
                icon: "FileCheck"
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      {React.createElement(advantage.icon === "Globe" ? Globe : 
                        advantage.icon === "Users" ? Users : 
                        advantage.icon === "Briefcase" ? Briefcase : 
                        advantage.icon === "Building" ? Building2 : 
                        FileCheck, {
                        className: "w-7 h-7 text-orange-500 group-hover:text-orange-600 transition-colors"
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Steps to Set Up a Mainland Company in Dubai
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
          </div>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-orange-500/20" />
            
            {/* Steps */}
            <div className="space-y-6">
              {/* First Row (Steps 1-2) */}
              <div className="grid grid-cols-2 gap-x-8">
                {/* Left Column (Steps 1-2) */}
                <div className="space-y-6">
                  {setupSteps.slice(0, 2).map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline Node */}
                      <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 z-10 shadow-md">
                        <span className="text-white font-bold text-base">
                          {index === 0 ? "1" : "2"}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="ml-4 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-500/30 w-full">
                        <h3 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-orange-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column (Steps 3-4) */}
                <div className="space-y-6">
                  {setupSteps.slice(2, 4).map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline Node */}
                      <div className="absolute left-[-32px] flex items-center justify-center w-16 h-6 rounded-full bg-orange-500 z-10">
                        <div className="flex space-x-4">
                          <span className="text-white font-bold text-xs">
                            {index === 0 ? "3" : "4"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pl-12 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-500/30 w-full">
                        <h3 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-orange-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Step (Step 5) */}
              <div className="flex justify-center">
                <div className="relative w-1/2 max-w-lg">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 flex items-center justify-center w-8 h-6 rounded-full bg-orange-500 z-10">
                    <span className="text-white font-bold text-xs">5</span>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-500/30 w-full mt-3">
                    <h3 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-orange-500 transition-colors text-center">
                      {setupSteps[4].title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {setupSteps[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">
              Get answers to common questions about setting up your business in UAE Mainland
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="h-0.5 w-20 bg-orange-500 mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={handleOpenPopup}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-orange-500/25 space-x-2 group"
            >
              <span>Still have questions?</span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        {/* Background Image */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-[#0f172a]/60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-7xl text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to unlock new possibilities?
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8 rounded-full" />
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Your business journey starts here—seamless setup, limitless possibilities, only with RDV Consultants
          </p>
          <button
            onClick={handleOpenPopup}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto group shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
          >
            <span>Book A Consultation</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
} 