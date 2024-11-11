import React from "react";
import Image from "next/image";
import logo from "../assets/logo-3.png";

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex items-center justify-left md:justify-start">
          <Image
            src={logo}
            alt="Logo"
            width={150} // Base width for mobile
            height={150} // Base height for mobile
            className="w-32 h-auto md:w-48 lg:w-64" // Adjust sizes for different breakpoints
          />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Tentang kami
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Karir
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Hubungi kami
              </a>
            </li>
          </ul>
        </div>

        {/* Kursus Kami */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">
            Kursus kami
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Creative Coding Track
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Visual Coding Track
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Web Development Track
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Basic Programming Track
              </a>
            </li>
          </ul>
        </div>

        {/* Kerjasama */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">
            Kerjasama
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Referral
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Untuk Sekolah
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                Franchise
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
