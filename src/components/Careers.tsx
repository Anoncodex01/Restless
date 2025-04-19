import React from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

const JobCard = ({ title, description, link = "#" }: { title: string; description: string; link?: string }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-bold text-[#1e1b4b]">{title}</h3>
      <a 
        href={`mailto:info@rdv.ae?subject=Application for ${title} Position`}
        className="inline-flex items-center text-[#1e1b4b] hover:text-orange-600 transition-colors"
      >
        Apply <ArrowUpRight className="ml-1 w-5 h-5" />
      </a>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-gray-500">
        <MapPin className="w-5 h-5 mr-2" />
        <span>100% remote</span>
      </div>
      <div className="flex items-center text-gray-500">
        <Clock className="w-5 h-5 mr-2" />
        <span>Full-time</span>
      </div>
    </div>
  </div>
);

const Careers = () => {
  const jobs = [
    {
      title: "Tax Manager",
      description: "We're seeking an experienced Tax Manager to lead our tax advisory and compliance services. The ideal candidate will have extensive knowledge of UAE tax regulations including VAT and Corporate Tax.",
      link: "/careers/tax-manager"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[#1e1b4b]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/95 to-[#1e1b4b]/70"></div>
          <img
            src="/images/imas.jpg"
            alt="Careers at RDV"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="text-orange-500"> Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of our mission to deliver exceptional business solutions and make a real impact.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e1b4b] mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our dynamic team and work on exciting projects that shape the future of business consulting.
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          {/* No Positions Notice */}
          {jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No open positions at the moment. Please check back later or send your CV to{' '}
                <a href="mailto:info@rdv.ae" className="text-orange-600 hover:text-orange-700">
                  info@rdv.ae
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e1b4b] mb-4">Why Join RDV?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with growth opportunities and a great work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">Remote First</h3>
              <p className="text-gray-600">Work from anywhere in the world with our flexible remote policy.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning and development opportunities to advance your career.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">Great Culture</h3>
              <p className="text-gray-600">Join a diverse team that values collaboration, innovation, and work-life balance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers; 