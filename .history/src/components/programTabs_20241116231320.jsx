import React, { useState } from "react";

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
            className={`py-2 px-4 rounded-full ${
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
            <p>Kelas Online Content</p>
          </div>
        )}
        {activeTab === "offline" && (
          <div>
            <p>Kelas Offline Content</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramTabs;
