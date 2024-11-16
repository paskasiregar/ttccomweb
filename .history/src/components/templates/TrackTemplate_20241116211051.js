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
        className="relative h-[75vh] md:h-screen w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-white mt-4">
            {description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
