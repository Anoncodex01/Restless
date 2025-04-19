import React from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const colors = ['#EA4335', '#4285F4', '#34A853', '#FBBC05', '#FF6D01'];
  const initialPositions = [-40, -20, 0, 20, 40];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1c2757] to-[#0f172a]"
    >
      <div className="relative flex flex-col items-center">
        {/* Dots Container */}
        <div className="flex items-center justify-center h-24 mb-8">
          {colors.map((color, index) => (
            <motion.div
              key={color}
              className="w-5 h-5 mx-1 rounded-full"
              style={{
                backgroundColor: color,
                x: initialPositions[index]
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-[#e66b02] bg-clip-text text-transparent mb-3">
            RDV Accounting
          </h2>
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-300 text-sm"
          >
            Preparing your experience...
          </motion.p>
        </motion.div>

        {/* Background glow effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#e66b02]/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </div>
      </div>
    </motion.div>
  );
} 