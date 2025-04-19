import React, { useState } from 'react';
import { ChevronRight, Check, ArrowRight, Plus, ClipboardList, PenTool, ScrollText, Building2, CheckSquare, Target, Globe, Users, Briefcase, FileCheck } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';

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
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-16">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Establish Your Business in Dubai's Dynamic Mainland
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <p className="text-gray-700 text-lg mb-8">
                  A mainland setup allows you to tap into the vast local market and engage directly with businesses across the UAE. Setting up a mainland company in Dubai provides unmatched benefits, such as full access to the local market, the ability to operate in multiple sectors, and complete ownership for foreign investors. This strategic location offers businesses an advantageous position to tap into global trade and expand their reach.
                </p>
                <p className="text-gray-700 text-lg mb-8">
                  At RDV Consultants, we offer expert guidance to help businesses successfully establish themselves in the UAE's mainland market. Our team assists with every aspect of the setup process, ensuring you comply with local regulations, select the ideal structure, and obtain the necessary licenses to start your business smoothly and efficiently.
                </p>
                <button
                  onClick={handleOpenPopup}
                  className="inline-flex items-center bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white px-6 py-3 rounded-lg hover:from-[#1e293b] hover:to-[#0f172a] transition-all duration-300 space-x-2 group"
                >
                  <span>Book A Consultation</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Why Choose Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Why Choose Mainland Company Setup in Dubai?
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <p className="text-gray-700 mb-6">
                  Explore the advantages of establishing your business in Dubai's mainland:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Strategic Location:</span>
                      <span className="text-gray-700"> Dubai's geographic position offers access to a thriving market in the GCC.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Tax Benefits:</span>
                      <span className="text-gray-700"> Enjoy zero personal income tax and full capital repatriation.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Simple Setup Process:</span>
                      <span className="text-gray-700"> With RDV Consultants, we ensure a smooth and efficient company formation process.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Ownership Options:</span>
                      <span className="text-gray-700"> Mainland companies can now be fully owned by foreign investors.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Entity Options Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Types of Mainland Companies in the UAE
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Limited Liability Company (LLC):</span>
                      <span className="text-gray-700"> Ideal for businesses with up to 50 shareholders.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Branch Office:</span>
                      <span className="text-gray-700"> For foreign companies wishing to expand into the UAE.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Professional Firms:</span>
                      <span className="text-gray-700"> For businesses operating in specialized sectors or services.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[400px] space-y-8">
              {/* Let's Connect Form */}
              <div className="bg-[#0f172a] rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-6">Let's Connect.</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Type full name"
                      className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/70 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/70 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (+123-4567)"
                      className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/70 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-transparent border-b border-white/30 py-2 text-white focus:outline-none focus:border-orange-500">
                      <option value="" className="bg-[#0f172a]">Select Business Type</option>
                      <option value="llc" className="bg-[#0f172a]">LLC</option>
                      <option value="branch" className="bg-[#0f172a]">Branch Office</option>
                      <option value="professional" className="bg-[#0f172a]">Professional Firm</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Type your message"
                      rows={4}
                      className="w-full bg-transparent border-b border-white/30 py-2 text-white placeholder-white/70 focus:outline-none focus:border-orange-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Explore the Industry */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                  Explore the Industry
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-4 rounded-full" />
                <ul className="space-y-3">
                  {industryLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For an instant reply */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                  For an instant reply
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/your-whatsapp-number" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href="tel:your-phone-number" 
                    className="flex items-center justify-center w-12 h-12 bg-[#0f172a] rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section - Full Width */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              The Advantages of Business Setup in Dubai Mainland
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
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
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-500/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-colors">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section - Full Width */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Steps to Set Up a Mainland Company in Dubai
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Choose Business Activity",
                description: "Determine the type of business activity.",
                icon: ClipboardList
              },
              {
                title: "Select Company Name",
                description: "Choose a unique and compliant trade name.",
                icon: PenTool
              },
              {
                title: "Get Initial Approvals",
                description: "Apply for approval from the Department of Economic Development (DED).",
                icon: ScrollText
              },
              {
                title: "Finalize Legal Structure",
                description: "Select the right framework for your business.",
                icon: Building2
              },
              {
                title: "Obtain License",
                description: "Complete all necessary documentation and obtain your business license.",
                icon: CheckSquare
              }
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      {React.createElement(step.icon, {
                        className: "w-7 h-7 text-orange-500"
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-4xl font-bold text-orange-500/50">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How RDV Helps Section - Full Width */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              How RDV Consultants Helps You with Mainland Company Formation in Dubai, UAE
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
          </div>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-12 shadow-xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                RDV Consultants simplifies the complex process of mainland company formation, guiding you through each step. From understanding local regulations to securing the necessary approvals, we ensure your business setup is seamless. We assist with selecting the right legal structure, obtaining the relevant licenses, and completing all documentation to comply with UAE law.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team provides personalized support to ensure that your company is fully operational and positioned for growth in Dubai's thriving market.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Let RDV Consultants be your trusted partner in navigating the setup process with ease and efficiency.
              </p>
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleOpenPopup}
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group"
                >
                  <span>Book A Consultation</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
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
            {[
              {
                question: "Do I need an office space for mainland company setup?",
                answer: "Yes, a physical office is required for mainland business registration. The size and location of the office depend on your business activity."
              },
              {
                question: "Can I set up a mainland business if I am a non-resident of the UAE?",
                answer: "Yes, foreign nationals can set up mainland businesses in Dubai, with certain requirements. Recent regulations allow 100% foreign ownership in specific business sectors. RDV Consultants will guide you through the process and help ensure you meet all requirements."
              },
              {
                question: "Are there any ongoing compliance requirements after setting up a mainland company?",
                answer: "Yes, mainland companies must meet certain compliance standards, including annual renewals for your license, regular audits, and adherence to tax and accounting regulations. RDV Consultants can assist you with ongoing support to ensure compliance and help your business remain up to date with legal requirements."
              },
              {
                question: "What is the minimum capital requirement for a mainland business?",
                answer: "The minimum capital requirement depends on the business type and activity. Some businesses have specific requirements, while others have no minimum capital. RDV Consultants helps you determine the appropriate capital based on your business's needs."
              },
              {
                question: "Can I employ foreign staff for my mainland company?",
                answer: "Yes, mainland companies can employ foreign staff. The number of visas you can obtain depends on the size of your office and the nature of your business. RDV Consultants helps you navigate the visa process to ensure you comply with local regulations."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="absolute -top-12 left-0 text-8xl font-bold text-orange-500/10 select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue background */}
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