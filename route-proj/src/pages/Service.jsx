import React from 'react'

const Service = () => {
  return (
    <div className="bg-indigo-100 w-full py-16">
      <h1 className="text-5xl font-bold text-blue-800 text-center mb-16">
        OUR SERVICES
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-72 h-72 object-cover shadow-lg"
            src="https://cdn.pixabay.com/photo/2020/04/04/13/41/corona-5002341_1280.jpg"
            alt="Safe to Earth"
          />
          <h3 className="text-lg pt-4 text-blue-700 font-semibold">
            Safe to Earth
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-72 h-72 object-cover shadow-lg"
            src="https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775234_1280.png"
            alt="Easy to Use"
          />
          <h3 className="text-lg pt-4 text-blue-700 font-semibold">
            Easy to Use
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-72 h-72 object-cover shadow-lg"
            src="https://www.learningcomputer.com/blog/wp-content/uploads/2022/03/React-JS-library.png"
            alt="Using React"
          />
          <h3 className="text-lg pt-4 text-blue-700 font-semibold">
            Using React
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Service
