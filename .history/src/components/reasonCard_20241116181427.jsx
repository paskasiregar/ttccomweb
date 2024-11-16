import React from "react";
import PropTypes from "prop-types";

function ReasonCard({ icon, title, description }) {
  return (
    <div className="justify-center p-4 md:p-4 sm:p-4 bg-white rounded-xl">
      <div className="flex items-center mb-4">
        <div className="px-4 py-3 bg-yellow-300 rounded-full text-md sm:text-sm">
          {icon}
        </div>
      </div>
      <h3 className="font-normal text-md mb-2 text-gray-600 text-xl">
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
