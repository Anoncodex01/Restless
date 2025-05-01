import React, { useState } from 'react';
import { ChevronRight, Check, ArrowRight, Plus, Minus, ClipboardList, PenTool, ScrollText, Building2, CheckSquare, Target } from 'lucide-react';
import { PopupForm } from './PopupForm';
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactForm';

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
              UAE Free Zones 
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Unlock Limitless Opportunities
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
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                  Set Up A Free Zone Company In The UAE
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-[#0f172a] mb-4 rounded-full" />
                <p className="text-gray-700">
                  With over 40 free zones across the UAE, businesses enjoy world-class benefits, from 100% foreign ownership to tax advantages and strategic locations. However, choosing the right free zone can be a complex decision. That's where RDV Consultants comes in – turning complexity into clarity.
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  We make the process seamless by helping you identify the free zone that best suits your business objectives. Whether it's licensing, bank account, office space, share capital, or regulatory requirements, we provide expert guidance every step of the way. Our simplified approach saves you time, minimizes costs, and ensures a hassle-free setup—so you can focus on growing your business while we handle the rest.
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

      {/* Why Choose Section - Full Width */}
      <div className="relative py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Why Choose a Free Zone for Your Business?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600">
              Explore the Advantages of a UAE Free Zone and Unlock New Growth Opportunities for Your Business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Foreign Ownership",
                description: "Maintain full control of your business without a local sponsor",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Fast & Affordable Setup",
                description: "Quick registration with minimal paperwork and lower costs",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Tax-Free Environment",
                description: "100% exemption from income tax and customs duties, with full repatriation of profits",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "World-Class Infrastructure",
                description: "Operate from modern business hubs with global connectivity",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Thriving Business Community",
                description: "Network with businesses in your sector for growth and collaboration",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 hover:border-orange-500/30"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-colors">
                      <div className="text-orange-500 group-hover:text-orange-600 transition-colors">
                        {benefit.icon}
                      </div>
                    </div>
              </div>

                  <h3 className="text-xl font-bold text-[#0f172a] mb-4 group-hover:text-orange-500 transition-colors">
                    {benefit.title}
                </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Entity Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Entity Options for Your Free Zone Setup
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6" />
            <p className="text-gray-600 mb-12">
              Setting up a business in the UAE's free zones offers flexibility and ease, with three primary entity options to choose from:
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Branch of a Foreign or Local Company",
                description: "Expand your existing business by establishing a branch in the UAE free zones, maintaining the legal identity of the parent company."
              },
              {
                title: "Free Zone Establishment (FZE)",
                description: "Ideal for individual entrepreneurs, this option allows you to establish a business with full ownership and control as a sole shareholder."
              },
              {
                title: "Free Zone Company (FZC)",
                description: "A collaborative option for partnerships, allowing 2 to 5 shareholders to form a company with shared responsibilities and benefits."
              }
            ].map((entity, index) => (
              <div
                key={index}
                className="flex items-start group"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-orange-500 transition-colors">
                    {entity.title}
                  </h3>
                  <div className="h-0.5 w-16 bg-orange-500/30 mb-3" />
                  <p className="text-gray-600 leading-relaxed">
                    {entity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Licenses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Business Licenses for Every Need in UAE Free Zones
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6" />
            <p className="text-gray-600 mb-12">
              The UAE Free Zones offer a range of business licenses tailored to various industries, providing seamless opportunities for entrepreneurs and corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Left Column */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0" />

              <div className="space-y-12">
                {[
                  {
                    title: "General Trading Licence",
                    description: "Trade a diverse range of products with ease and flexibility"
                  },
                  {
                    title: "Commercial Licence",
                    description: "Authorizes businesses to operate in industrial, trade, or consultancy sectors"
                  },
                  {
                    title: "Industrial Licence",
                    description: "Manufacture goods, import raw materials, and export products worldwide"
                  }
                ].map((license, index) => (
                  <div
                    key={index}
                    className="relative pl-8 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 w-3 h-3 rounded-full bg-orange-500 -translate-x-[5px] group-hover:scale-150 transition-transform" />
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-orange-500 transition-colors flex items-center">
                        <span className="text-orange-500/50 mr-3 text-sm font-mono">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        {license.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {license.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/30 to-orange-500/0" />

              <div className="space-y-12">
                {[
                  {
                    title: "Service Licence",
                    description: "Designed for professionals in legal, financial, and business consultancy fields"
                  },
                  {
                    title: "Manufacturing Licence",
                    description: "Allows applicants to establish and operate manufacturing facilities for the production of goods"
                  }
                ].map((license, index) => (
                  <div
                    key={index}
                    className="relative pl-8 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 w-3 h-3 rounded-full bg-orange-500 -translate-x-[5px] group-hover:scale-150 transition-transform" />
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-orange-500 transition-colors flex items-center">
                        <span className="text-orange-500/50 mr-3 text-sm font-mono">
                          {(index + 4).toString().padStart(2, '0')}
                        </span>
                        {license.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {license.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Free Zones - Blue background */}
      <section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Popular Free Zones
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Row 1: DMCC and JAFZA */}
            <FreeZoneCard
              title="DMCC"
              subtitle="Dubai Multi Commodities Centre"
              description="At the core of Dubai, the Dubai Multi Commodities Centre (DMCC) stands as a premier free zone designed to drive international trade across diverse industries. From precious metals and food products to industrial goods, DMCC offers a dynamic business ecosystem that fosters growth and innovation. With a streamlined regulatory framework, state-of-the-art infrastructure, and a pro-business environment, DMCC has attracted industry leaders and innovative startups alike. Today, it is home to over 25,000 companies, offering businesses unparalleled opportunities to network, collaborate, and expand in one of the world's most dynamic commercial landscapes."
              features={[
                "9-time winner of the Global Free Zone of the Year Award by the Financial Times' fDi Magazine",
                "Attracts 15% of Dubai's annual FDI",
                "87 Residential and Commercial towers"
              ]}
              onConsult={handleOpenPopup}
            />
            <FreeZoneCard
              title="JAFZA"
              subtitle="Jebel Ali Free Zone Authority"
              description="When it comes to world-class free zones, JAFZA stands in a league of its own. As DP World's flagship free zone and the largest customs-bonded zone in the Middle East, JAFZA is the beating heart of global trade. Home to 100+ Fortune Global 500 companies and over 10,700 businesses, it is where the world's biggest brands thrive. JAFZA offers unmatched connectivity—a seamless link between Jebel Ali Port, Al Maktoum International Airport, and international markets via an integrated multi-modal transport network. Combined with cutting-edge logistics infrastructure, JAFZA isn't just a business hub—it's the future of global commerce."
              features={[
                "Top-ranked free zone globally at fDi Intelligence's Global Free Zones of the Year 2024",
                "Attracts 23.9% of Dubai's FDI",
                "Strategically located at the crossroads of a region providing market access to over 3.5 billion people"
              ]}
              onConsult={handleOpenPopup}
            />

            {/* Row 2: IFZA and SPC */}
            <FreeZoneCard
              title="IFZA"
              subtitle="International Free Zone Authority"
              description="Looking for an affordable and strategic business setup in Dubai? IFZA is one of the most cost-effective and business-friendly free zones in the UAE, offering seamless registration, flexible office solutions, and direct access to major markets and ports. With minimal requirements, streamlined procedures, and tailored packages, IFZA is the perfect choice for entrepreneurs and investors seeking a hassle-free setup. With flexible workspace options, including desks, private offices, and office suites, businesses of all sizes can find the perfect setup. Whether you're a startup or an expanding enterprise, IFZA's tailored packages and investor-friendly approach make it the go-to choice for business success in the UAE."
              features={[
                "Flexible workspace options",
                "Streamlined procedures",
                "Cost-effective solutions"
              ]}
              onConsult={handleOpenPopup}
            />
            <FreeZoneCard
              title="SPC"
              subtitle="Sharjah Publishing City"
              description="Located in Sharjah's Al Zahia area, SPC Free Zone is rapidly emerging as a top destination for entrepreneurs and businesses. One of its biggest advantages is the dual license, allowing businesses to operate in both the free zone and the mainland, offering unmatched flexibility. Its strategic proximity to trade ports ensures seamless global connectivity, making it an ideal hub for companies looking to expand. Beyond publishing, it supports e-commerce, jewelry manufacturing, trading, and more, making it a versatile and future-ready business environment. SPC Free Zone also provides state-of-the-art office spaces, warehouses, and co-working facilities, catering to a wide range of industries."
              features={[
                "Dual license advantage",
                "Strategic location",
                "Versatile business activities"
              ]}
              onConsult={handleOpenPopup}
            />

            {/* Row 3: MFZ and RAKEZ */}
            <FreeZoneCard
              title="MFZ"
              subtitle="Meydan Free Zone"
              description="Meydan Free Zone offers an exceptional opportunity for entrepreneurs looking to establish a business in Dubai. Located in a thriving economic hub, it provides the perfect gateway for international expansion. With one of the lowest setup costs among Dubai's free zones, it ensures a cost-effective yet prestigious business presence. Meydan FZ features simple formation procedures and minimal requirements, making it easier than ever to launch your company. Its strategic central location enhances connectivity, placing businesses at the heart of Dubai's commercial landscape. Whether you're a startup or an established enterprise, Meydan Free Zone provides an enabling environment for success in a city known for global business excellence."
              features={[
                "Low setup costs",
                "Simple formation procedures",
                "Strategic central location"
              ]}
              onConsult={handleOpenPopup}
            />
            <FreeZoneCard
              title="RAKEZ"
              subtitle="Ras Al Khaimah Economic Zone"
              description="RAKEZ is a powerhouse of opportunity, offering a stable, business-friendly environment in Ras Al Khaimah, UAE. Known for the city's economic security and steady growth, RAKEZ continues to attract businesses looking for a cost-effective, high-potential base in the UAE. Its strategic location ensures 24/7 connectivity via seaports, an international airport, and an extensive highway network, making it a prime hub for global commerce. As a consolidation of RAK Free Zone and RAK Investment Authority, it provides customizable company setup options designed to meet the needs of businesses of all sizes—from freelancers and SMEs to multinational enterprises and large industries."
              features={[
                "Strategic location with 24/7 connectivity",
                "Customizable company setup options",
                "Cost-effective business environment"
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