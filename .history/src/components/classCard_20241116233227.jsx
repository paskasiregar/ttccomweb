import React from "react";
import PropTypes from "prop-types";

function ClassCard({ title, duration, sessions, description, tools }) {
  return (
    <div className="bg-purple-50 rounded-xl p-6">
      {/* Title */}
      <h3 className="text-2xl font-bold text-purple-600 mb-2">{title}</h3>

      {/* Duration and Sessions */}
      <p className="text-gray-600 text-sm mb-4">
        {duration} / sesi • {sessions}
      </p>

      {/* Description */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <h4 className="text-purple-600 font-semibold mb-2">Tentang Kursus:</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Tools */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="text-purple-600 font-semibold mb-2">
          Tools yang Digunakan:
        </h4>
        <p className="text-gray-600 text-sm">{tools}</p>
      </div>
    </div>
  );
}

ClassCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  sessions: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
};

export default ClassCard;
