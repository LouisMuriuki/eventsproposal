import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mx-2 my-1">
      {/* Left Side */}
      <div className="w-full md:w-3/4 h-[700px] bg-gray-100">
        <div className="h-[700px] flex">
          {/* Image */}
          <div className="w-full relative">
            <Image
              className="h-full w-full object-cover"
              src="/beach.jpg"
              alt="Hero Image"
              fill={true}
            />
            <div className="absolute inset-0 bg-black opacity-40 sm:items-start sm:justify-start"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0 sm:left-1/4 sm:top-1/4">
              <h1 className="text-2xl md:text-3xl text-white font-semibold">
                Explore Tanzania with EventBrite
              </h1>
              <p className=" text-white my-10 text-sm">
                Tanzania also celebrates its rich cultural heritage through
                events like the Ngorongoro Marathon and the Bagamoyo Arts
                Festival. These events showcase traditional music, dance, and
                crafts, providing a platform for local artists to share their
                talents.
              </p>
              <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Explore
              </button>
            </div>

            {/* Blur Overlay */}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className=" w-full md:w-1/4 bg-gray-100 flex ">
        <form className="w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className=" flex items-center justify-center text-lg font-bold mb-3">
            Event Registration
          </h3>
          <div className="mb-4">
            <label htmlFor="event" className="block text-gray-700 font-medium">
              Event
            </label>
            <select
              id="event"
              name="event"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select an event</option>
              <option value="event1">Event 1</option>
              <option value="event2">Event 2</option>
              <option value="event3">Event 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tickets"
              className="block text-gray-700 font-medium"
            >
              Number of Tickets
            </label>
            <input
              type="number"
              id="tickets"
              name="tickets"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
