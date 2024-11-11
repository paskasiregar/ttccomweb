"use client";

import React from "react";
import PropTypes from "prop-types";
import "@/app/common.css";
import { ArrowRight } from "solar-icons";

function PrimaryButton({ label, onClick }) {
  return (
    <button className="button rounded-xl" onClick={onClick}>
      {label} <ArrowRight className="icon" />
    </button>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default PrimaryButton;
