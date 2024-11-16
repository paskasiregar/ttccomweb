import React, { useState } from "react";
import ClassCard from "./classCard";

function ProgramTabs({ cards }) {
  const [activeTab, setActiveTab] = useState("online");

  const tabs = [
    { id: "online", label: "Kelas Online" },
    { id: "offline", label: "Kelas Offline" },
  ];

  const handleTabClick = (tabId) => setActiveTab(tabId);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded-full ${
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
        {activeTab === "online" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <ClassCard key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramTabs;
