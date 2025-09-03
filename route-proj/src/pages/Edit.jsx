import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    dob: "",
    image: "",
  });

  //Fetch Users for edit
  const { slug } = useParams();
  console.log(slug);

  const fetchUser = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${slug}`);
    setFormData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  //Update the user details
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const { data } = await axios.put(
        `http://localhost:3000/users/${slug}`,
        formData
      );
      toast.success("Update Successfully");
      navigate("/dashboard/alluser");
    } catch (error) {
      toast.error(error.message,{position:"top-center"});
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-[400px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg w-full max-w-3xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
            Edit User
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {[
              { label: "Username", type: "text", name: "username" },
              { label: "Email", type: "email", name: "email" },
              { label: "Password", type: "password", name: "password" },
              {
                label: "Mobile Number",
                type: "tel",
                name: "phone",
                pattern: "[0-9]{10}",
              },
              { label: "Date of Birth", type: "date", name: "dob" },
              { label: "Image URL", type: "url", name: "image" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium mb-1">
                  {field.label}
                </label>
                <input
                  {...field}
                  className="w-full border rounded-md px-3 py-1.5 text-sm"
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.name !== "image"}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-medium mb-1">Gender</label>
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
          </div>

          <button
            type="submit"
            className="mt-5 w-full bg-green-600 text-white py-1.5 text-sm rounded-md hover:bg-purple-700 transition"
          >
            Update
          </button>
        </div>

        {/* Image Preview Section */}
        <div className="w-full md:w-1/2 bg-blue-500 flex flex-col justify-center items-center p-4">
          <h3 className="text-base font-semibold text-indigo-700 mb-2">
            Profile Preview
          </h3>
          {formData.image ? (
            <img
              src={formData.image}
              alt="Preview"
              className="h-28 w-28 rounded-full object-cover border-4 border-indigo-500"
            />
          ) : (
            <div className="h-28 w-28 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-600">
              No Image
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditUser;
