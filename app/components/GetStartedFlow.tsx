import React, { useEffect, useState } from 'react';
import { Calendar, UserPlus, Upload, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "Get In Touch",
    description: "Schedule a no-cost consultation with our legal experts for transparent, tailored guidance specific to your business needs.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up for a free account and enter essential information about your company to kickstart the process.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Upload,
    title: "Upload Your Documents",
    description: "Easily upload the required documents to your dashboard so we can handle the incorporation process.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FileCheck,
    title: "Trade License Issued",
    description: "Sit back while we generate and file the legal paperwork with UAE authorities. Your business will be officially registered in no time.",
    color: "from-green-500 to-green-600"
  },
];

export function GetStartedFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('get-started-flow');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="get-started-flow" className="py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block bg-gradient-to-r from-[#e66b02] to-orange-600 text-white text-lg font-medium mb-4 px-6 py-2 rounded-full shadow-lg shadow-orange-500/20">
            Simple Process
          </span>
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] bg-clip-text text-transparent">
              Get Started with RDV in
            </span>
            <span className="relative mx-4">
              <span className="text-[#e66b02]">4</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#e66b02] rounded-full"></div>
            </span>
            <span className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] bg-clip-text text-transparent">
              Simple Steps
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 ${
                  hoveredStep === index ? 'shadow-2xl -translate-y-2' : ''
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white transition-transform duration-300 ${
                      hoveredStep === index ? 'scale-110' : ''
                    }`}>
                      <step.icon size={24} />
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-200">0{index + 1}</span>
                      <ArrowRight className={`ml-2 transition-all duration-300 ${
                        hoveredStep === index ? 'translate-x-1 text-[#e66b02]' : 'text-gray-300'
                      }`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
    </section>
  );
}