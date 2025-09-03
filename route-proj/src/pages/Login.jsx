import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 
 const nav=useNavigate()

 const dbData=JSON.parse(localStorage.getItem("logindetails"))
 console.log(dbData);
 const token="h27he355gfcr53ff78hff9"
 const {email,password}=formData



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( formData);
        // try {
            
        //     console.log("login sucessfully");
        //     localStorage.setItem("jwttoken",token)
        //     nav("/dashboard")
        //     toast.success("login successfully",{position:"top-center"})
        // } catch (error) {
        //     console.log(error);
        //     toast.error("invalid data",{position:"top-center"})
        // }
        if(formData.email===dbData.email && formData.password===dbData.password){
          setFormData({
            email:"",
            password:""
          })
          console.log("login sucessfully");
          localStorage.setItem("jwttoken",token)
            nav("/dashboard")
             toast.success("login successfully",{position:"top-center"})
        }
        else{
           console.log("wrong email or password");
          toast.error("wrong email or password",{position:"top-center"})
        }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          log in
          
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-indigo-500 hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
