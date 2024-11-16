"use client";

import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

export default function SecondaryButton({ label, redirectTo }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(redirectTo)}
      className="text-purple-600 border border-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-100 transition"
    >
      {label}
    </button>
  );
}

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
