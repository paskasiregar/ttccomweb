import React from "react";

export default function TrackTemplate({ title, description, children }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="https://www.shutterstock.com/image-vector/border-frame-design-kids-technology-600nw-2112335390.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-white font-bold p-8">{title}</h1>
          <p className="text-xl text-white mt-4 p-8">{description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
