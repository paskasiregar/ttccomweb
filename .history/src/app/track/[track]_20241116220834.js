import React from "react";

export default function TrackTemplate({ title, description, children }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-white font-bold p-8">{title}</h1>
          <p className="text-xl text-white mt-4 p-8">{description}</p>
        </div>
      </div>
      <div className="text-center md:text-left max-w-lg justify-between">
      <h1 className="text-6xl md:text-6xl font-bold mb-4 text-left">
        Welcome to <br />
        Tiny Tech <span className="text-purple-700">Club</span>.
      </h1>
      <h2 className="text-gray-500 text-lg md:text-xl font-semibold mb-4 text-left">
        Small techies, big dreams{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      {/* Content Section */}
      {/* <div className="max-w-7xl mx-auto px-4 py-8">{children}</div> */}
    </div>
  );
}
