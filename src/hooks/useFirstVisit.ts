import { useState, useEffect } from 'react';

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // First visit
      localStorage.setItem('hasVisited', 'true');
      setIsFirstVisit(true);
      
      // Simulate loading time for first visit
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // 3 seconds for first visit
      
      return () => clearTimeout(timer);
    } else {
      // Subsequent visits
      setIsFirstVisit(false);
      
      // Shorter loading time for subsequent visits
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // 0.5 seconds for subsequent visits
      
      return () => clearTimeout(timer);
    }
  }, []);

  return { isFirstVisit, isLoading };
} 