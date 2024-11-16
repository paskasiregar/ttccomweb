import React, { useState } from "react";

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState("online");

  return (
    <div className="w-full my-8 px-4 sm:px-8 max-w-container">
      {/* Tabs */}
      <div className="flex justify-center items-center mb-8">
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold ${
            activeTab === "online"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("online")}
        >
          Kelas Online
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold ml-4 ${
            activeTab === "offline"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("offline")}
        >
          Kelas Offline
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "online" ? (
          <div>
            {/* Replace with your content for "Kelas Online" */}
            <p className="text-center text-gray-600">
              Ini adalah daftar program untuk Kelas Online.
            </p>
          </div>
        ) : (
          <div>
            {/* Replace with your content for "Kelas Offline" */}
            <p className="text-center text-gray-600">
              Ini adalah daftar program untuk Kelas Offline.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
