import React, { useState } from "react";

function ProgramTabs() {
  const [activeTab, setActiveTab] = useState("online");

  const tabs = [
    { id: "online", label: "Kelas Online", disabled: false },
    { id: "offline", label: "Kelas Offline", disabled: true },
  ];

  const handleTabClick = (tabId, disabled) => {
    if (!disabled) {
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
            className={`relative py-2 px-4 rounded-full ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            disabled={tab.disabled}
          >
            {tab.label}
            {/* Show 'Coming Soon' chip on disabled tabs */}
            {tab.disabled && (
              <span className="absolute -top-2 -right-2 text-xs font-bold text-white px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500">
                Coming Soon
              </span>
            )}
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
