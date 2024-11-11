import React from "react";
import PropTypes from "prop-types";

function ReasonCard({ icon, title, description }) {
  return (
    <div className="p-6 sm:p-1 bg-white rounded-xl">
      <div className="flex items-center mb-4">
        <div className="px-4 py-3 bg-yellow-300 rounded-full text-md">
          {icon}
        </div>
      </div>
      <h3 className="font-normal text-md mb-2 text-gray-600 text-sm">
        {title}
      </h3>
    </div>
  );
}

ReasonCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ReasonCard;
