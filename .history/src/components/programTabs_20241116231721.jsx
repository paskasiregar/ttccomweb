import React, { useState } from "react";
import ClassType from "./ClassType";

function ProgramTabs() {
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
            className={`py-2 px-6 rounded-full font-semibold text-sm md:text-base ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "online" && (
          <div>
            <h3 className="text-center text-2xl font-bold text-gray-800 mb-4">
              Kelas Online
            </h3>
            <ClassType />
          </div>
        )}
        {activeTab === "offline" && (
          <div>
            <h3 className="text-center text-2xl font-bold text-gray-800 mb-4">
              Kelas Offline
            </h3>
            <ClassType />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramTabs;
