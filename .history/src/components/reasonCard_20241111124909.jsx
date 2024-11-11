import React from "react";
import PropTypes from "prop-types";

function ReasonCard({ icon, title, description }) {
  return (
    <div className="p-6 md:p-2 bg-white rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="px-4 py-3 bg-yellow-300 rounded-full text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="font-normal text-md mb-2 text-gray-600">{title}</h3>
      <p className="text-gray-900">{description}</p>
    </div>
  );
}

ReasonCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ReasonCard;
