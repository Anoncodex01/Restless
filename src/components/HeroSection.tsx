import React from 'react';

export const HeroSection = () => {

  return (
    <div className="relative min-h-screen bg-[#0F172A] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/video/home-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onError={(e) => console.error('Error loading video:', e)}
        />
      </div>
    </div>
  );
};