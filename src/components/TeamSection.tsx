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
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/bg.webp')",
          backgroundSize: '32px 32px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[40px] md:text-[48px] font-bold mb-6">
            Meet the <span className="font-serif italic">Minds</span> Behind<br />
            the Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our team includes experts with experience from Big 4 audit firms, 
            specializing in accounting, auditing, analytics and reporting to 
            deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto">
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
              <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500
                            hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-center"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300" />
                </div>

                {/* Text Content */}
                <div className="text-center relative">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.div
                    className="h-0.5 w-12 bg-orange-500/30 mx-auto mb-3"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ delay: index * 0.3 + 0.2, duration: 0.4 }}
                  />
                  <motion.p 
                    className="text-gray-600 text-[15px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.1 }}
                  >
                    {member.role}
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-x-2 -inset-y-2 z-0 rounded-[2rem] bg-gradient-to-r from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}