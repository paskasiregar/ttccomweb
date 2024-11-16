import React from "react";

export default function TrackTemplate({
  title,
  description,
  backgroundImage,
  children,
}) {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur-sm",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold">{title}</h1>
          <p className="text-lg md:text-xl text-white mt-4">{description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
