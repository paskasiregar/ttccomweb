import React, { useState } from "react";
import ClassCard from "./classCard";

function ProgramTabs({ cards }) {
  const [activeTab, setActiveTab] = useState("online");

  const tabs = [
    { id: "online", label: "Kelas Online" },
    { id: "offline", label: "Kelas Offline" },
  ];

  const handleTabClick = (tabId) => {
    if (tabId !== "offline") {
      setActiveTab(tabId);
    }
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded-full flex items-center ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabClick(tab.id)}
            disabled={tab.id === "offline"}
          >
            {tab.label}
            {tab.id === "offline" && (
              <span className="ml-2 bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-2 py-1 text-xs rounded-full">
                Coming Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "online" && cards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <ClassCard key={index} {...card} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            {activeTab === "online" && cards.length === 0
              ? "Tidak ada program yang tersedia."
              : "Tab ini belum tersedia."}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramTabs;
