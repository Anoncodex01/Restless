import React from 'react';
import { ChevronRight, Users, Target, Award, Globe, ArrowRight } from 'lucide-react';
import { PopupForm } from './PopupForm';

export function AboutUs() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const teamMembers = [
    {
      name: "Kavita Mehta",
      title: "Tax Manager",
      email: "kavita@rdv.ae",
      phone: "+971 123 456 789",
      description: "Expert in UAE tax regulations and compliance, with extensive experience in helping businesses navigate complex tax landscapes."
    },
    {
      name: "Zaiba Khan",
      title: "Business Setup Consultant",
      email: "zaiba@rdv.ae",
      phone: "+971 123 456 789",
      description: "Specializes in business formation and licensing, helping entrepreneurs establish their presence in the UAE market."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
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
              <span className="text-gray-300">About Us</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center -mt-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
                Your Trusted Partner in UAE Business Success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-8">
              Welcome to RDV Consultants
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                At RDV Consultants, we specialize in delivering bespoke business setup solutions for corporate entities, entrepreneurs, and investors seeking to establish their presence in the UAE. Our team of highly experienced professionals ensures a seamless and efficient company formation process, tailored to meet the unique requirements of each client.
              </p>
              <p>
                Beyond company incorporation, we provide comprehensive guidance on corporate structuring and jurisdiction selection while meticulously handling all technical, administrative, and financial aspects of business establishment. Our goal is to streamline the process, mitigate complexities, and enable our clients to focus on strategic growth.
              </p>
              <p>
                Recognizing that business success extends beyond initial setup, RDV Consultants offers an integrated suite of services designed to support long-term operational efficiency. Our expertise encompasses accounting and bookkeeping, auditing, tax compliance, and financial advisory—ensuring that businesses operate with precision, compliance, and financial sustainability.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Company Mission</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-gray-300 leading-relaxed">
                Our mission is to empower businesses with expert guidance, seamless company formation, and ongoing support. We are committed to delivering tailored solutions, outstanding client service, and long-term partnerships. At RDV Consultants, we don't just set up businesses—we build a foundation for sustainable success in the UAE's dynamic market.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0f172a] text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/30">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center">
                      <Users className="w-12 h-12 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-orange-500 font-medium mb-4">{member.title}</p>
                      <p className="text-gray-600 mb-4">{member.description}</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">{member.email}</p>
                        <p className="text-gray-600">{member.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button
              onClick={handleOpenPopup}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-3 group shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
} 