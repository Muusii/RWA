import React, { useRef, useEffect } from 'react';
import BackgroundVideo from "../assets/backgroundvideo.mp4";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex justify-between items-center w-full max-w-7xl px-4 mx-auto">
        {/* Left side: 24/7 Real Estate Closings */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            24/7 Real Estate Closings
          </h1>
          <p className="text-xl text-white drop-shadow-md">
            Smooth and secure transactions automated onchain
          </p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition duration-300">
            Drop a contract
          </button>
        </div>

        {/* Right side: Get Started */}
        <div className="w-full max-w-md p-6 bg-white bg-opacity-90 rounded-lg shadow">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Get Started</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300">
              I'M AN AGENT
            </button>
            <button className="w-full px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300">
              I'M A SELLER
            </button>
            <button className="w-full px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300">
              I'M A BUYER
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600 hover:text-gray-800 cursor-pointer transition duration-300">
            I'm just curious →
          </p>
        </div>
      </div>
    </div>
  );
}

