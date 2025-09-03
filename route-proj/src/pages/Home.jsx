import React from 'react'
import { Link } from 'react-router-dom'
import Photo from "../assets/photo2.png"

const Home = () => {
  return (
    <div className="bg-indigo-100 h-[87vh] flex items-center justify-center">
   
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 animate-bounce mb-6">
          WELCOME TO HOME PAGE
        </h1>
        <p className="text-xl text-blue-700 mb-10">
          Discover our services and start your journey now.
        </p>

        <Link to="/login">
          <button className="text-lg px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
