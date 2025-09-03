import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData2, setFormData2] = useState({
    name: '',
    email: '',
    dob: '',
    gender: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData2((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData2.password !== formData2.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      localStorage.setItem("logindetails", JSON.stringify(formData2));
      console.log("Form submitted successfully");
      navigate("/login");
      toast.success("Registered successfully", { position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error("Invalid data", { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md m-10"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Register</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData2.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData2.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData2.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData2.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData2.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData2.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData2.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Register
        </button>

        {/* Link to Login */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
