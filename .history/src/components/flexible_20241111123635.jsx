import React from "react";
import Image from "next/image";
import backgroundImage from "../assets/bg.jpg";

function FlexibleSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white max-w-7xl mx-auto">
      <div className="relative w-full md:w-2/3 lg:w-3/4 bg-cover bg-center rounded-l-full overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="responsive"
          width={1200}
          height={400}
          objectFit="cover"
          className="rounded-l-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-l-full">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
            Paket belajar fleksibel!
          </h2>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:ml-6 md:w-1/3 lg:w-1/4 text-center md:text-left">
        <p className="text-gray-600 text-base md:text-lg">
          Pilih jalur belajar lengkap atau sesi individual sesuai kebutuhan dan
          minat anak.
        </p>
      </div>
    </section>
  );
}

export default FlexibleSection;
