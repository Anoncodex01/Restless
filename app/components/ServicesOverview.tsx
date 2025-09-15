import React from 'react';
import { Calculator, Plus, FileText, CheckCircle, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: "Tax Consultation",
    description: "Navigate complex tax regulations confidently with our expert guidance. We optimize your tax strategy, ensure compliance, and help you save more, empowering your business's financial health."
  },
  {
    icon: Plus,
    title: "Business Creation",
    description: "Start your journey with ease! Our streamlined business registration services handle every detail, helping you launch faster and focus on growing your new venture confidently."
  },
  {
    icon: FileText,
    title: "Negotiations",
    description: "Secure better deals with expert negotiation support. We represent your interests, ensuring favorable outcomes in contracts, partnerships, and financial agreements to drive your business forward."
  },
  {
    icon: CheckCircle,
    title: "Accounting",
    description: "Simplify your finances with precise, reliable accounting solutions. We deliver clear insights, efficient reporting, and proactive management to keep your business running smoothly and profitably."
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "Stay ahead with our comprehensive compliance services. We ensure your business meets all regulatory requirements, fostering trust and stability in an ever-changing financial environment."
  },
  {
    icon: TrendingUp,
    title: "Growth Advisory",
    description: "Unlock your business's true potential with tailored growth strategies. We analyze opportunities, optimize operations, and help you achieve sustainable success in today's competitive marketplace."
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Your All-in-One Financial Partner
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}