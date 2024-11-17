import { useState } from "react";

function ProgramTabs({ cards }) {
  const [activeTab, setActiveTab] = useState("online");

  const tabs = [
    { id: "online", label: "Kelas Online" },
    { id: "offline", label: "Kelas Offline", disabled: true },
  ];

  const handleTabClick = (tabId) => {
    if (!tabs.find((tab) => tab.id === tabId)?.disabled) {
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
            className={`py-2 px-4 rounded-full ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "online" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-lg flex flex-col items-start"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Durasi: {card.duration} | {card.sessions}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Tools: {card.tools}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "offline" && (
          <div className="text-center text-gray-500">
            Kelas Offline{" "}
            <span className="bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-2 py-1 rounded">
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramTabs;
