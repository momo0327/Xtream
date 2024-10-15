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
        className="absolute inset-0 w-full h-[80%] bg-cover bg-center bg-black/50"
        style={{ backgroundImage: `url('./assets/thumbnail2.jpg')` }} // Fullscreen blurred thumbnail
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> {/* Dark overlay for contrast */}
      </div>

      {/* Title above the video player */}
      <div className="absolute top-10 w-full flex justify-center  z-20">
        <h1 className="text-white text-4xl font-bold "
            style={{ fontFamily: 'ethocentric' }}
        >
         Kolla in videon
        </h1>
     
      </div>

      {/* Centered Video Player */}
      <div className="flex items-center justify-center h-full z-10 relative">
        <div className="relative w-[640px] h-[360px]"> {/* Adjust video size here */}
          {!isPlaying && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer"
              style={{ backgroundImage: `url('./assets/thumbnail2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Small thumbnail as background
            >
              {/* Play button centered on thumbnail */}
              <button className="text-white text-6xl bg-black/60 p-4 rounded-full">
                ▶
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
