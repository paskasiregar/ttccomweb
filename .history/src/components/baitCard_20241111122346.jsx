import React from "react";
import PropTypes from "prop-types";

function BaitCard({ icon, title, description, source }) {
  return (
    <div className="bg-gray-100 rounded-xl p-8 mb-4">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="inline-flex rounded-full px-2 bg-white text-gray-400 text-sm italic">
        {source}
      </div>
    </div>
  );
}

BaitCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default BaitCard;
