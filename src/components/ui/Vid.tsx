'use client'
import React, { useState } from 'react';

const Vid = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle play functionality
  const handlePlay = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('video') as HTMLVideoElement | null;
    videoElement?.play();
  };

  return (
    <div className="relative w-full h-screen">
      {/* Full-screen Background Thumbnail with blur */}
      <div
        className="absolute inset-0 w-full lg:h-[80%] h-[50%] md:h-screen bg-cover bg-center bg-black/50 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url('./assets/thumbnail2.jpg')` }} // Fullscreen blurred thumbnail
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Title above the video player */}
        <h1 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold z-20 mb-3 text-center"
            style={{ fontFamily: 'ethocentric' }}
        >
          Kolla in videon
        </h1>

        {/* Small Text under the title */}
        <p className="text-gray-400 text-sm sm:text-base text-center w-[80%] max-w-[500px] z-20 mb-10">
          Se vår senaste introduktionsvideo som visar alla fantastiska funktioner hos oss!
        </p>

        {/* Centered Video Player */}
        <div className="relative w-[90%] max-w-[320px] sm:max-w-[640px] h-[180px] sm:h-[360px] z-20"> {/* Adjust video size */}
          {!isPlaying && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url('./assets/thumbnail2.jpg')` }} // Small thumbnail as background
            >
              {/* Play button centered on thumbnail */}
              <button className="text-white text-6xl bg-black/60 p-4 rounded-full">
                <svg
                  className="bg-black/80 p-4 rounded-full cursor-pointer"
                  width="84" height="84" viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="32" fill="black" fillOpacity="0.6" />
                  <polygon points="26,20 46,32 26,44" fill="white" />
                </svg>
              </button>
            </div>
          )}

          <video
            id="video"
            className={`absolute inset-0 w-full h-full object-cover rounded-lg ${
              isPlaying ? 'block' : 'hidden'
            }`}
            controls
            preload="metadata"
            poster="/thumbnail.jpg" // Poster for the video thumbnail
            src="assets/video.mp4" // Replace with your video path
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'ethocentric';
          src: url('/assets/ethocentric.otf') format('opentype');  
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </div>
  );
};

export default Vid;
