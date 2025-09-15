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
      <div className={`relative mb-12 last:mb-0 transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Content */}
        <div className="text-white p-6 rounded-xl bg-[#1e293b]/20 border-l-4 border-[#f97316] hover:bg-[#1e293b]/40 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3 text-[#f97316]">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  // Desktop layout
  const alignment = position === 'left' ? 'text-right' : 'text-left';
  const borderSide = position === 'left' ? 'border-r-4' : 'border-l-4';
  
  return (
    <div className={`max-w-sm ${alignment} transition-all duration-700 transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className={`p-6 rounded-xl bg-[#1e293b]/20 ${borderSide} border-[#f97316] hover:bg-[#1e293b]/40 transition-all duration-300`}>
        <h3 className="text-2xl font-semibold mb-2 text-[#f97316]">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
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
      title: "Youth-Led Innovation",
      description: "We empower young people to lead innovative solutions to community challenges. Our youth-centered approach ensures that programs are designed by and for young people, creating sustainable impact that resonates with their lived experiences and aspirations."
    },
    {
      title: "Proven Track Record",
      description: "Since 2010, we've successfully implemented 200+ projects across 8 regions in Tanzania, directly reaching over 55,695 young people. Our evidence-based approach demonstrates measurable impact in livelihoods, climate action, sexual rights, and civic engagement."
    },
    {
      title: "Multi-Sector Expertise",
      description: "Our comprehensive programs span four key areas: sustainable livelihoods and economic empowerment, climate action and environmental conservation, sexual and reproductive health rights, and civic engagement and democratic participation."
    },
    {
      title: "Local Knowledge, Global Network",
      description: "As part of the global Restless Development network operating in 16 countries, we combine deep local knowledge of Tanzanian communities with international best practices and resources, ensuring culturally relevant yet globally informed programming."
    },
    {
      title: "Sustainable Impact Model",
      description: "We focus on building local capacity and creating systems that outlast individual projects. Our approach emphasizes training local youth leaders, strengthening community organizations, and advocating for policy changes that create lasting transformation."
    },
    {
      title: "Digital Innovation Ready",
      description: "We're building for the future with mobile-friendly, low-data solutions and multilingual accessibility. Our digital-first approach enables us to reach remote communities while preparing for expanded online fundraising and program delivery capabilities."
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
              Why Partner with
            </span>
            <span className="block mt-2 transform transition-all duration-1000" style={{ ...animationStyles, animationDelay: '300ms' }}>
              <span className="inline-block hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Restless Development Tanzania
              </span>
            </span>
          </h2>
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
              <svg 
                className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                viewBox="0 0 800 800"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M 0,400 H 800"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-40"
                />
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
              
              <div className={`relative z-10 transition-all duration-1500 transform w-[800px] h-[500px]
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <img 
                  src="/images/RDV_Tree 6.svg"
                  alt="RDV Tree"
                  className="w-full h-full object-contain filter brightness-125 hover:scale-105 transition-transform duration-500"
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