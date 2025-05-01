import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Expert Homes Real Estate Brokers LLC",
    company: "Real Estate",
    text: "Working with RDV Consultants has brought real clarity to our financial operations. Their team is responsive, detail-oriented, and always up to date with local tax regulations.",
    image: "https://expert-homes.com/wp-content/uploads/2022/08/small-logo.png"
  },
  {
    id: 2,
    name: "JK White Cement",
    company: "Manufacturing",
    text: "RDV Consultants have been an invaluable partner in managing our tax compliance and accounting needs in the UAE. Their deep knowledge of local regulations has simplified our processes.",
    image: "https://www.jkcement.com/wp-content/themes/jkcement/images/new-logo.webp"
  },
  {
    id: 3,
    name: "Sky Accounting",
    company: "Financial Services",
    text: "Collaborating with RDV Consultants has added real value to our operations. Their team takes the time to understand the unique dynamics of each client.",
    image: "https://cdn-ikpjfbb.nitrocdn.com/shWhHhhVYoKgAJNsQdBVVGXviwOgVXZw/assets/images/optimized/rev-69184ac/skyaccountingcorp.com/wp-content/uploads/2021/07/SKYLOGO-1.png"
  }
];

export function ClientSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#e66b02_0%,transparent_25%)] opacity-[0.03]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#ff8a2b_0%,transparent_25%)] opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[conic-gradient(from_0deg,transparent,#e66b02,transparent,transparent)] opacity-[0.02]"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#e66b02]/10 to-[#ff8a2b]/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-[#ff8a2b]/10 to-[#e66b02]/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Modern Header */}
        <div className="text-center mb-16 relative flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
           
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold relative inline-block bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] bg-clip-text text-transparent"
          >
            What Our Clients Say
            <div className="absolute -bottom-6 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757]"></div>
          </motion.h2>
        </div>

        {/* Updated Testimonial Card */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(230,107,2,0.1)] relative z-10 border border-white/60"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e66b02]/[0.02] to-[#ff8a2b]/[0.02] rounded-3xl"></div>
              
              <div className="relative">
                {/* Testimonial Text First */}
                <div className="relative mb-8">
                  <span className="absolute -left-2 -top-6 text-7xl text-[#e66b02]/10">"</span>
                  <p className="text-gray-600 leading-relaxed text-lg relative z-10 pl-6 mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
                
                {/* Client Info Below */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e66b02]/10 to-[#ff8a2b]/10 p-3">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-sm text-[#e66b02]">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation remains the same */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`relative h-2 rounded-full transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'w-12 bg-gradient-to-r from-[#e66b02] to-[#ff8a2b]' 
                    : 'w-2 bg-gray-200 hover:bg-[#e66b02]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentTestimonial && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e66b02] to-[#ff8a2b] blur-sm opacity-50"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}