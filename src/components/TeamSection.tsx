import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Mohamed Darwish',
    role: 'Chairman & Partner',
    image: '/images/1.jpeg'
  },
  {
    name: 'Charles D',
    role: 'Founder & Director',
    image: '/images/2.jpeg'
  },
  {
    name: 'Nabil Yassin',
    role: 'Mentor & Partner',
    image: '/images/3.jpeg'
  },
  {
    name: 'Charles D',
    role: 'Founder & Director',
    image: '/images/4.jpeg'
  }
];

export function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E2757]/5 via-white to-[#e66b02]/5">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E2757]/10 via-white to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#e66b02]/10 via-transparent to-white"></div>
      </div>
      
      {/* Accent gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(30,39,87,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(230,107,2,0.1),transparent_50%)]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E2757]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e66b02]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#1E2757 0.5px, transparent 0.5px), radial-gradient(#1E2757 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] bg-clip-text text-transparent pb-2">
              Your Advisers
            </h2>
            {/* Gradient line under the title */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-[#1E2757] via-[#e66b02] to-[#1E2757] rounded-full"></div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Card Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 
                            shadow-lg hover:shadow-xl transition-all duration-500
                            hover:-translate-y-1 border border-gray-100 hover:border-[#e66b02]/20">
                {/* Image Container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2757]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-center"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E2757]/0 to-[#e66b02]/0 group-hover:from-[#1E2757]/10 group-hover:to-[#e66b02]/10 transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <div className="text-center relative">
                  <motion.h3 
                    className="text-xl font-bold text-[#1E2757] mb-2 group-hover:text-[#e66b02] transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.div
                    className="h-0.5 w-12 bg-gradient-to-r from-[#1E2757] to-[#e66b02] mx-auto mb-3 opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ delay: index * 0.3 + 0.2, duration: 0.4 }}
                  />
                  <motion.p 
                    className="text-gray-600 text-[15px] group-hover:text-[#1E2757] transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.1 }}
                  >
                    {member.role}
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-x-2 -inset-y-2 z-0 rounded-[2rem] bg-gradient-to-br from-[#1E2757]/0 via-[#e66b02]/0 to-[#1E2757]/0 group-hover:from-[#1E2757]/5 group-hover:via-[#e66b02]/5 group-hover:to-[#1E2757]/5 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}