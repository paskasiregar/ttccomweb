"use client";

import React from "react";
import PropTypes from "prop-types";
import "@/app/common.css";
import { ArrowRight } from "solar-icons";

function PrimaryButton({ label }) {
  const handleScroll = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="button rounded-xl" onClick={handleScroll}>
      {label} <ArrowRight className="icon" />
    </button>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PrimaryButton;
