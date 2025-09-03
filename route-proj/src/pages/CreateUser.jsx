import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify/unstyled";
import { Navigate, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    dob: "",
    image: "",
  });

  const nav=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
   try {
     const res=await axios.post("http://localhost:3000/users",formData)
    console.log(res);
    toast.success("user create sucessfully")
    nav("/dashboard/users")
   } catch (error) {
    
   }
  };

  return (
    <div className="bg-gradient-to-br py-10 flex justify-center w-[700px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full  px-6 ms-80 py-6 rounded-xl shadow-md  max-w-xl m-10"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-800 ">
          User Registration
        </h2>

        {/* Username */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            name="gender"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Mobile Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            className="w-full border rounded-md px-3 py-1.5 text-sm"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        {/* Image Preview */}
        {formData.image && (
          <div className="mb-4 text-center">
            <img
              src={formData.image}
              alt="Preview"
              className="mx-auto h-20 w-20 rounded-full object-cover border border-gray-300"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-red-400 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
