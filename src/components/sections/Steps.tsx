import React from "react";
import { FaSprayCan, FaTools, FaShoppingCart } from "react-icons/fa";

function NewSteps() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-gray-900 mb-6">
            Revolutionizing Farming with Agri Drone Center
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Kisan Agri Drone is a cutting-edge agricultural tool designed to
            revolutionize farming efficiency. It delivers precise, reliable, and
            sustainable solutions for effective crop management.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://res.cloudinary.com/dfly9upu9/image/upload/v1736851562/drone2-removebg-preview_wmtyhi.png"
              alt="Kisan Agri Drone"
              className="w-4/5 h-auto rounded-lg transform hover:scale-105 transition duration-300 mx-auto"
            />
          </div>

          {/* Right Section: Features */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Precision Spraying */}
            <div className="flex items-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-green-200 transition duration-300">
                <FaSprayCan className="w-8 h-8 text-green-600 group-hover:text-green-800" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-800">
                  Precision Spraying
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800">
                  Achieve accurate spraying for better crop yield and reduced
                  wastage.
                </p>
              </div>
            </div>

            {/* Expert Repairs */}
            <div className="flex items-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-200 transition duration-300">
                <FaTools className="w-8 h-8 text-blue-600 group-hover:text-blue-800" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-800">
                  Expert Repairs
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800">
                  Our professionals ensure your drones are always mission-ready.
                </p>
              </div>
            </div>

            {/* Purchase Drone */}
            <div className="flex items-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-yellow-200 transition duration-300">
                <FaShoppingCart className="w-8 h-8 text-yellow-600 group-hover:text-yellow-800" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-800">
                  Purchase Drone
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800">
                  Get the best drones designed for modern agricultural needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewSteps;
