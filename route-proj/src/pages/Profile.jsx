import React from "react";

const user = {
  name: "Soumyashree Behera",
  email: "soumyashree161@gmail.com",
  dob: "2025-05-06",
  password: "123",
  confirmPassword: "123",
};

const Profile = () => {
  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 ms-40">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <div className="p-3 bg-gray-100 rounded-lg text-gray-800">{user.name}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <div className="p-3 bg-gray-100 rounded-lg text-gray-800">{user.email}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
            <div className="p-3 bg-gray-100 rounded-lg text-gray-800">{user.dob}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <div className="p-3 bg-gray-100 rounded-lg text-gray-800">••••••••</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
            <div className="p-3 bg-gray-100 rounded-lg text-gray-800">••••••••</div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
