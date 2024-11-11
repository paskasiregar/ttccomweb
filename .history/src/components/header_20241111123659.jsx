"use client";

import React from "react";
import PrimaryButton from "./primaryButton";
import Image from "next/image";
import logoHeaderImage from "../assets/logo-1.png";
import "@/app/common.css";

function Header() {
  return (
    <header className="w-full border-b border-gray-300 p-4 flex justify-between items-center md:p-6">
      <div className="hidden md:flex md:items-center">
        <div className="header-title text-lg font-bold">
          Tiny Tech <span className="highlight">Club</span>
        </div>
      </div>
      <div className="logo-container flex justify-center w-full md:w-auto">
        <Image
          className="w-36 h-10 object-cover"
          alt="Logo"
          src={logoHeaderImage}
          width={120}
          height={20}
        />
      </div>
      <div className="hidden md:flex">
        <PrimaryButton label="Hubungi kami" />
      </div>
    </header>
  );
}

export default Header;
