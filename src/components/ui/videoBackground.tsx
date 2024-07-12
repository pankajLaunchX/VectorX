// src/VideoBackground.tsx
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="absolute h-full w-full -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        {/* <source src="../../../public/Web background.mp4" type="video/mp4" /> */}
        <source src="../../../public/Web background1.webm" type="video/webm" />
        {/* <source src="../../../public/Web background1.ogg" type="video/ogg" />
        <source src="../../../public/Web background1.ogv" type="video/ogv" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
