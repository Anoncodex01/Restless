import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Build your Future in the UAE",
    description: "Unlock endless opportunities—seamless business setup in the UAE with expert guidance!",
    video: "/video/03Dubai.mp4",
    cta: "Book a Consultation"
  },
  {
    title: "Simplified Banking Solutions",
    description: "Secure your UAE business account with ease and efficiency today!",
    video: "/video/01Taxation.mp4",
    cta: "Book a Consultation"
  },
  {
    title: "Your Business, Our Expertise",
    description: "Stay compliant and enhance your financial growth with our trusted accounting and tax solutions",
    video: "/video/04Dubai.mp4",
    cta: "Book a Consultation"
  },
  {
    title: "Your Gateway to the UAE",
    description: "Fast-track your UAE visa process, from residency permits to exclusive Golden Visas—hassle-free and fast!",
    video: "/video/02Auditing.mp4",
    cta: "Book a Consultation"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const SLIDE_DURATION = 10000; // 10 seconds in milliseconds
    const STEPS = 100;
    const INTERVAL = SLIDE_DURATION / STEPS;

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setIsTransitioning(true);
          setPreviousSlide(currentSlide);
          setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTimeout(() => {
              setIsTransitioning(false);
            }, 500);
          }, 50);
          return 0;
        }
        return oldProgress + 1;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setPreviousSlide(currentSlide);
    setTimeout(() => {
      setCurrentSlide(index);
      setProgress(0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 50);
  };

  return (
    <div className="relative min-h-screen bg-[#0F172A] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Previous video */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}>
          <video
            key={`prev-${slides[previousSlide].video}`}
            src={slides[previousSlide].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {/* Current video */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <video
            key={`current-${slides[currentSlide].video}`}
            src={slides[currentSlide].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-center min-h-screen max-w-3xl">
          {/* Main Content */}
          <div className={`transform transition-all duration-500 ${
            isTransitioning 
              ? 'opacity-0 translate-y-8' 
              : 'opacity-100 translate-y-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 whitespace-pre-line">
              {slides[currentSlide].description}
            </p>
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 text-lg font-medium shadow-lg shadow-orange-500/25 flex items-center space-x-2">
              <span>{slides[currentSlide].cta}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex items-center space-x-4">
            {/* Slide Numbers */}
            <div className="text-white font-medium">
              <span className="text-orange-500">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span className="text-gray-400">{String(slides.length).padStart(2, '0')}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="flex-1 h-[2px] bg-gray-700 relative">
              <div
                className="absolute top-0 left-0 h-full bg-orange-500 transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-24 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-orange-500 scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};