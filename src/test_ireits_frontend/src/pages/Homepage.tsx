import React,{useRef} from 'react';
// import BackgroundVideo from "./assets/backgroundvideo.mp4"; // Update the video path if necessary


export default function HomePage() {
  // const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 md:flex-row md:justify-between">
      <div className="max-w-md space-y-4">
        {/* <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={BackgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video> */}
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          24/7 Real Estate Closings
        </h1>
        <p className="text-lg text-gray-600">
          Smooth and secure transactions automated onchain
        </p>
        <button className="px-4 py-2 mt-4 text-white bg-gray-800 rounded shadow hover:bg-gray-700">
          Drop a contract
        </button>
      </div>
      <div className="w-full max-w-md p-6 mt-8 bg-white rounded-lg shadow md:mt-0">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Get Started</h2>
        <div className="space-y-2">
          <button className="w-full px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
            I'M AN AGENT
          </button>
          <button className="w-full px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
            I'M A SELLER
          </button>
          <button className="w-full px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
            I'M A BUYER
          </button>
        </div>
        <p className="mt-4 text-center text-gray-500">
          I'm just curious →
        </p>
      </div>
    </div>
  );
}
