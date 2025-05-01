import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm"
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-12 h-12 rounded-full border-4 border-orange-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
} 