import { useState, useEffect } from 'react';
import { useVideoPreload } from './useVideoPreload';

const VIDEOS_TO_PRELOAD = [
  '/video/03Dubai.mp4',
  '/video/01Taxation.mp4',
  '/video/04Dubai.mp4',
  '/video/02Auditing.mp4'
];

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { allVideosLoaded } = useVideoPreload(VIDEOS_TO_PRELOAD);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // First visit
      localStorage.setItem('hasVisited', 'true');
      setIsFirstVisit(true);
      
      // Wait for videos to load on first visit
      if (allVideosLoaded) {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Short delay after videos load
        return () => clearTimeout(timer);
      }
    } else {
      // Subsequent visits
      setIsFirstVisit(false);
      setIsLoading(false);
    }
  }, [allVideosLoaded]);

  return { isFirstVisit, isLoading };
} 