import React, { useState } from 'react';
import { ChevronRight, Check, ArrowRight, Plus, Minus, ClipboardList, PenTool, ScrollText, Building2, CheckSquare, Target } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';

interface FreeZoneCardProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  onConsult: () => void;
}

const FreeZoneCard = ({ title, subtitle, description, features, onConsult }: FreeZoneCardProps) => (
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

export function FreeZone() {
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
    "Establishing a UAE Freezone Company",
    "Acquiring a Trade License",
    "Registering with the Chamber of Commerce",
    "Facilitating the Bank Account opening process",
    "Securing Director Visas for both company and family",
    "Organising office staff and accounting services and fulfilling all other company requirements."
  ];

  const industryLinks = [
    { title: "UAE Business Setup", href: "/business-setup" },
    { title: "Free Zones", href: "/free-zones" },
    { title: "Tax, Accounting & Finance", href: "/tax-accounting" },
    { title: "UAE Visas", href: "/uae-visas" }
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
              backgroundImage: "url('/images/freezone/imas.jpg')",
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
              <span className="text-gray-300">Free Zone Company Setup UAE</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center -mt-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Build your Future in the UAE
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
                Unlock endless opportunities—seamless business setup in the UAE with expert guidance!
              </p>
              <button
                onClick={handleOpenPopup}
                className="inline-flex w-fit items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
              >
                <span className="text-lg">Book an Appointment</span>
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
                  Set Up A Free Zone Company In The UAE
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <p className="text-gray-700 text-lg mb-8">
                  With over 40 free zones across the UAE, businesses enjoy world-class benefits, from 100% foreign ownership to tax advantages and strategic locations. However, choosing the right free zone can be a complex decision. That's where RDV Consultants comes in – turning complexity into clarity.
                </p>
                <p className="text-gray-700 text-lg mb-8">
                  We make the process seamless by helping you identify the free zone that best suits your business objectives. Whether it's licensing, bank account, office space, share capital, or regulatory requirements, we provide expert guidance every step of the way. Our simplified approach saves you time, minimizes costs, and ensures a hassle-free setup—so you can focus on growing your business while we handle the rest.
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
                  Why Choose a Free Zone for Your Business?
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <p className="text-gray-700 mb-6">
                  Explore the Advantages of a UAE Free Zone and Unlock New Growth Opportunities for Your Business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">100% Foreign Ownership</span>
                      <span className="text-gray-700"> – Maintain full control of your business without a local sponsor</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Fast & Affordable Setup</span>
                      <span className="text-gray-700"> – Quick registration with minimal paperwork and lower costs</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Tax-Free Environment</span>
                      <span className="text-gray-700"> – 100% exemption from income tax and customs duties, with full repatriation of profits</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">World-Class Infrastructure</span>
                      <span className="text-gray-700"> – Operate from modern business hubs with global connectivity</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Thriving Business Community</span>
                      <span className="text-gray-700"> – Network with businesses in your sector for growth and collaboration</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Entity Options Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Entity Options for Your Free Zone Setup
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <p className="text-gray-700 mb-6">
                  Setting up a business in the UAE's free zones offers flexibility and ease, with three primary entity options to choose from:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Branch of a Foreign or Local Company</span>
                      <span className="text-gray-700"> – Expand your existing business by establishing a branch in the UAE free zones, maintaining the legal identity of the parent company.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Free Zone Establishment (FZE)</span>
                      <span className="text-gray-700"> – Ideal for individual entrepreneurs, this option allows you to establish a business with full ownership and control as a sole shareholder.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Free Zone Company (FZC)</span>
                      <span className="text-gray-700"> – A collaborative option for partnerships, allowing 2 to 5 shareholders to form a company with shared responsibilities and benefits.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Business Licenses Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Business Licenses for Every Need in UAE Free Zones
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <p className="text-gray-700 mb-6">
                  The UAE Free Zones offer a range of business licenses tailored to various industries, providing seamless opportunities for entrepreneurs and corporations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">General Trading Licence</span>
                      <span className="text-gray-700"> - Trade a diverse range of products with ease and flexibility</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Commercial Licence</span>
                      <span className="text-gray-700"> - Authorizes businesses to operate in industrial, trade, or consultancy sectors</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Industrial Licence</span>
                      <span className="text-gray-700"> - Manufacture goods, import raw materials, and export products worldwide</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Service Licence</span>
                      <span className="text-gray-700"> - Designed for professionals in legal, financial, and business consultancy fields</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Manufacturing Licence</span>
                      <span className="text-gray-700"> - Allows applicants to establish and operate manufacturing facilities for the production of goods</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Partner Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  Why Partner with RDV for Your DMCC Business Setup?
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-6 rounded-full" />
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Quick & Efficient Company Setup</span>
                      <span className="text-gray-700"> - A tailored approach to registering your business, ensuring a smooth and efficient setup that aligns with your specific goals and regulatory needs.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Effortless PRO Services</span>
                      <span className="text-gray-700"> - Efficient and hassle-free processing of government paperwork, visa applications, and document clearances, ensuring smooth operations.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Business Licence Procurement</span>
                      <span className="text-gray-700"> - Expert guidance to navigate the complexities of obtaining the right licenses, ensuring full compliance with local regulations for your business.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Document Translation</span>
                      <span className="text-gray-700"> - Accurate translation services for all your business documents, ensuring legal compliance and clarity in every language.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0f172a] mt-1" />
                    <div>
                      <span className="font-semibold text-orange-500">Local Partnership Support</span>
                      <span className="text-gray-700"> - Connecting you with trusted local sponsors, helping you navigate the sponsorship process smoothly and compliantly.</span>
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
                      <option value="" className="bg-[#0f172a]">Free Zone</option>
                      <option value="dmcc" className="bg-[#0f172a]">DMCC</option>
                      <option value="jafza" className="bg-[#0f172a]">JAFZA</option>
                      <option value="dafza" className="bg-[#0f172a]">DAFZA</option>
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
                  <li>
                    <a
                      href="/uae-legalities"
                      className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      UAE Legalities
                    </a>
                  </li>
                </ul>
              </div>

              {/* Recent Blogs */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                  Recent Blogs
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-4 rounded-full" />
                <div className="space-y-6">
                  <div>
                    <Link to="/blog/cost-of-starting-business-dubai" className="block">
                      <div className="relative rounded-xl overflow-hidden mb-3">
                        <img 
                          src="/images/blogs/cost-business-setup.jpg" 
                          alt="Cost of Starting a Business in Dubai" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex gap-2">
                            <span className="text-xs text-white bg-[#dc2626] px-2 py-1 rounded">Mainland</span>
                            <span className="text-xs text-white bg-[#dc2626] px-2 py-1 rounded">Free Zone</span>
                            <span className="text-xs text-white bg-[#dc2626] px-2 py-1 rounded">Offshore</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 hover:text-[#dc2626] transition-colors">
                        Cost of Starting a Business in Dubai
                      </h4>
                      <Link 
                        to="/business-setup" 
                        className="inline-block mt-2 text-sm font-medium text-white bg-[#2F5B79] px-4 py-1 rounded hover:bg-[#264a63] transition-colors"
                      >
                        UAE Business Setup
                      </Link>
                    </Link>
                  </div>
                </div>
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

      {/* Featured Free Zones - Blue background */}
      <section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Popular Free Zones
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FreeZoneCard
              title="DMCC"
              subtitle="Dubai Multi Commodities Centre"
              description="A premier free zone designed to drive international trade across diverse industries. From precious metals and food products to industrial goods, DMCC offers a dynamic business ecosystem."
              features={[
                "9-time winner of Global Free Zone of the Year Award",
                "Attracts 15% of Dubai's annual FDI",
                "87 Residential and Commercial towers"
              ]}
              onConsult={handleOpenPopup}
            />
            <FreeZoneCard
              title="JAFZA"
              subtitle="Jebel Ali Free Zone Authority"
              description="JAFZA stands as DP World's flagship free zone and the largest customs-bonded zone in the Middle East. Home to 100+ Fortune Global 500 companies and over 10,700 businesses."
              features={[
                "Top-ranked free zone globally at fDi Intelligence's Global Free Zones",
                "Attracts 23.9% of Dubai's FDI",
                "Strategic location with access to 3.5 billion people"
              ]}
              onConsult={handleOpenPopup}
            />
            <FreeZoneCard
              title="IFZA"
              subtitle="International Free Zone Authority"
              description="One of the most cost-effective and business-friendly free zones in the UAE, offering seamless registration, flexible office solutions, and direct access to major markets and ports."
              features={[
                "Flexible workspace options",
                "Streamlined procedures",
                "Investor-friendly approach"
              ]}
              onConsult={handleOpenPopup}
            />
          </div>
        </div>
      </section>

      {/* Setup Steps - White background */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Steps to Set Up A Business in the UAE Free Zone
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">
              Follow our streamlined process to establish your business presence in the UAE
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Choose Legal Entity",
                description: "Choose the legal entity that best suits your goals",
                icon: ClipboardList
              },
              {
                title: "Select Trade Name",
                description: "Select a unique and compliant trade name",
                icon: PenTool
              },
              {
                title: "Apply for License",
                description: "Apply for the appropriate business license",
                icon: ScrollText
              },
              {
                title: "Secure Workspace",
                description: "Secure your workspace with the ideal office setup",
                icon: Building2
              },
              {
                title: "Get Approvals",
                description: "Get approvals and register on the free zone authority's portal",
                icon: CheckSquare
              },
              {
                title: "Obtain License",
                description: "Obtain your business license within 2-4 weeks",
                icon: Target
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-500/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-colors">
                      {React.createElement(step.icon, {
                        className: "w-7 h-7 text-orange-500 group-hover:text-orange-600 transition-colors"
                      })}
                    </div>
                    <div className="w-px h-full bg-gradient-to-b from-orange-500/20 to-transparent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-orange-500 text-4xl font-bold group-hover:text-orange-600 transition-colors">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ChevronRight className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Light gray background */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-[#0f172a] mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">
              Get answers to common questions about setting up your business in UAE Free Zones
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What is the difference between a Free Zone and a Mainland company?",
                answer: "A Free Zone company offers 100% foreign ownership and is ideal for international operations but requires a local distributor for mainland business. A Mainland company can operate across the entire UAE without restrictions, though it must comply with local laws and regulations."
              },
              {
                question: "What is the cost of setting up a business in a Free Zone?",
                answer: "Various factors, such as license type, office space needs, and additional services, determine the cost. RDV Consultants ensures a seamless and cost-effective process by providing personalized quotes tailored to your budget and business requirements."
              },
              {
                question: "How long does it take to register a company in DMCC Free Zone?",
                answer: "Typically, the registration timeline ranges from 7 to 14 business days, depending on factors such as the chosen business activity, document submission, and regulatory approvals."
              },
              {
                question: "Can I employ foreign workers in a Free Zone?",
                answer: "Yes, Free Zones allow businesses to hire foreign employees. The employment process is straightforward, and we can assist with visa processing and other requirements."
              },
              {
                question: "Can I move my business from one Free Zone to another?",
                answer: "Yes, it's possible to move your business between Free Zones. However, you must follow the specific procedures for relocating, including notifying the authorities in both the current and new Free Zones. Depending on the Free Zone's rules, additional requirements may apply."
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