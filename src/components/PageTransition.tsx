import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './LoadingSpinner';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Reduced loading time for better UX

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen"
    >
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
} 