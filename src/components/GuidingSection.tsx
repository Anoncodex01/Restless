import React, { useEffect, useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  position: 'left' | 'right';
  delay: number;
}

const FeatureCard = ({ title, description, position, delay }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Mobile layout
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <div className={`relative pl-8 mb-12 last:mb-0 transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f97316] to-[#fb923c]" />
        
        {/* Circle */}
        <div className="absolute left-[-4px] top-0 w-[10px] h-[10px] rounded-full bg-[#f97316]" />
        
        {/* Content */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  // Desktop layout
  const alignment = position === 'left' ? 'text-right' : 'text-left';
  return (
    <div className={`max-w-sm ${alignment} transition-all duration-700 transform relative
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className={`absolute top-0 ${position === 'left' ? '-right-6' : '-left-6'} h-full w-1 bg-[#f97316]`}></div>
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const fadeInUpKeyframes = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const animationStyles = {
  animation: 'fadeInUp 1s ease-out forwards',
  opacity: 0,
};

export function GuidingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const features = [
    {
      title: "Government-Registered Experts",
      description: "Our team consists of certified professionals who provide reliable, up-to-date advice to ensure your business meets all legal requirements."
    },
    {
      title: "Fast & Hassle-Free Process",
      description: "We simplify complex financial and business processes, ensuring a smooth and efficient experience from consultation to execution."
    },
    {
      title: "Tailored Business Solutions",
      description: "Every business is unique; we offer customized financial strategies that align with your industry, goals, and long-term vision."
    },
    {
      title: "Comprehensive Compliance",
      description: "Stay compliant with ease as we handle your tax filings, financial reporting, and regulatory obligations with accuracy and expertise."
    },
    {
      title: "Banking & Financial Services",
      description: "We assist in opening Central Bank-approved business accounts, providing guidance on financial management and banking solutions."
    },
    {
      title: "Proven Success in Dubai",
      description: "With a strong track record, we have helped numerous businesses establish, grow, and sustain success in Dubai's dynamic market."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('guiding-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id="guiding-section" 
      className="relative py-16 bg-[#0f172a] w-screen"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}
    >
      <style>{fadeInUpKeyframes}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-tight">
            <span 
              className="block transform transition-all duration-1000"
              style={animationStyles}
            >
              Empowering Your Business
            </span>
            <span className="block mt-2 transform transition-all duration-1000" style={{ ...animationStyles, animationDelay: '300ms' }}>
              <span className="inline-block hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Expert Financial
              </span>{' '}
              &{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Compliance Solutions
              </span>
            </span>
          </h2>
          <p 
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mt-6 transform transition-all duration-1000"
            style={{ ...animationStyles, animationDelay: '500ms' }}
          >
            Expert financial and compliance solutions for seamless business success in Dubai.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                position={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-24">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                position="left"
                delay={index * 200}
              />
            ))}
          </div>

          {/* Center Column - Hub Icon */}
          <div className="relative">
            <div className="relative flex flex-col items-center justify-center min-h-[600px]">
              {/* Connection Lines using SVG */}
              <svg 
                className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                viewBox="0 0 800 800"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Horizontal Line */}
                <path
                  d="M 0,400 H 800"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-40"
                />
                
                {/* Curved Lines */}
                <path
                  d="M 200,200 Q 400,200 600,200"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-40"
                />
                <path
                  d="M 200,600 Q 400,600 600,600"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-40"
                />
              </svg>
              
              {/* Central Image */}
              <div className={`relative z-10 transition-all duration-1500 transform w-[800px] h-[500px]
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <img 
                  src="/images/RDV_Tree 6.svg"
                  alt="RDV Tree"
                  className="w-full h-full object-contain filter brightness-125"
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    margin: 'auto',
                    display: 'block',
                    transform: 'scale(1)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-24">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                title={feature.title}
                description={feature.description}
                position="right"
                delay={(index + 3) * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}