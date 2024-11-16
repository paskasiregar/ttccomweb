import React from "react";
import Image from "next/image";
import rocketImage from "../assets/rocket.webp";
import PrimaryButton from "./primaryButton";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-left p-8 bg-white max-w-7xl mx-auto">
      <div className="text-center md:text-left max-w-lg justify-left">
        <h1 className="text-6xl md:text-6xl font-bold mb-4 text-left">
          Welcome to <br />
          Tiny Tech <span className="text-purple-700">Club</span>.
        </h1>
        <h2 className="text-gray-500 text-lg md:text-xl font-semibold mb-4 text-left flex">
          Small techies, big dreams{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6 justify-left text-left">
          Tiny Techfast Club membantu anak-anak belajar <i>coding</i> dengan
          cara yang seru dan sesuai usia, sambil mengasah kreativitas dan
          kemampuan berpikir.
        </p>
        <div className="w-full justify-center">
          <PrimaryButton label="Mulai petualanganmu" />
          {/* <button className="bg-purple-700 text-white py-2 px-4 rounded-full text-sm md:text-base font-semibold hover:bg-purple-700 transition">
          Mulai petualanganmu →
        </button> */}
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 hidden md:flex">
        <Image
          src={rocketImage}
          alt="Rocket"
          width={300} // Adjust size as needed
          height={300} // Adjust size as needed
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
