import React from "react";

export default function TrackTemplate({ title, description, children }) {
  return (
    <div>
      Hero Section
      {/* <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">{title}</h1>
          <p className="text-xl text-white mt-4">{description}</p>
        </div> */}
      </div>

      {/* Content Section */}
      {/* <div className="max-w-7xl mx-auto px-4 py-8">{children}</div> */}
    </div>
  );
}
