import React from "react";
import Image from "next/image";

export default function LjImage({ className }) {
  return (
    <Image
      src="/assets/lj.png" // Ensure this file is located in the `public/assets` directory
      alt="Learning Journey"
      width={500}
      height={300}
      className={`rounded-lg ${className}`}
    />
  );
}
