import { useState, useEffect } from 'react';

interface VideoPreloadState {
  [key: string]: boolean;
}

export function useVideoPreload(videos: string[]) {
  const [loadedVideos, setLoadedVideos] = useState<VideoPreloadState>({});
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);

  useEffect(() => {
    const videoElements: HTMLVideoElement[] = [];
    const videoStates: VideoPreloadState = {};

    // Create video elements for each video
    videos.forEach(videoSrc => {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.preload = 'auto';
      
      // Set initial state
      videoStates[videoSrc] = false;
      
      // Add event listeners
      video.addEventListener('loadeddata', () => {
        setLoadedVideos(prev => ({
          ...prev,
          [videoSrc]: true
        }));
      });

      video.addEventListener('error', (error) => {
        console.error(`Error loading video ${videoSrc}:`, error);
        setLoadedVideos(prev => ({
          ...prev,
          [videoSrc]: true // Mark as loaded even on error to prevent infinite loading
        }));
      });

      videoElements.push(video);
    });

    // Set initial states
    setLoadedVideos(videoStates);

    // Cleanup
    return () => {
      videoElements.forEach(video => {
        video.remove();
      });
    };
  }, [videos]);

  // Check if all videos are loaded
  useEffect(() => {
    const allLoaded = Object.values(loadedVideos).every(loaded => loaded);
    if (allLoaded) {
      setAllVideosLoaded(true);
    }
  }, [loadedVideos]);

  return { loadedVideos, allVideosLoaded };
} 