import React from "react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen -100 ms-[400px] mt-24">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

        {/* Profile Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
