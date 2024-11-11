import React from "react";
import PropTypes from "prop-types";

function ProductCard({ icon, title, ageRange, description, bgColor }) {
  return (
    <div className={`p-6 rounded-xl shadow-sm ${bgColor}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-4xl mb-2">{title}</h3>
      <div className="bg-white text-gray-500 text-xs italic px-2 py-1 inline-flex rounded-full mb-4">
        {ageRange}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

ProductCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  ageRange: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string, // Optional: custom background color for different cards
};

export default ProductCard;
