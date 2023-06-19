import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav((prev) => !prev);
  };
  return (
    <nav className="max-w-screen sticky top-0 bg-white shadow-md z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            {/* Logo */}
            {/* <img
              className="h-8 w-auto"
              src="/eventbrite-logo.png"
              alt="Eventbrite Logo"
            /> */}
            <h3 className="flex items-center justify-center md:text-xl font-bold">
              EventBrite
            </h3>

            {/* Search Bar */}
            <div className="ml-4 hidden md:flex items-center">
              <input
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                type="text"
                placeholder="Search an event"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center">
            {/* Navigation Links */}
            <Link
              className="ml-4 px-3 py-2 rounded-md font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              Events
            </Link>
            <Link
              className="ml-4 px-3 py-2 rounded-md font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              About us
            </Link>
            <Link
              className="ml-4 px-3 py-2 rounded-md font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              Help
            </Link>
            <Link
              className="ml-4 px-3 py-2 rounded-md font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              Sign In
            </Link>
          </div>
          <div className="md:hidden font-bold" onClick={handlenav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white" : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-full h-sceen bg-[#fff] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className=" h-screen">
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <h3 className="flex items-center justify-center text-xl font-bold">
                    EventBrite
                  </h3>
                </Link>
                <div
                  onClick={handlenav}
                  className="rounded-full shadow-sm  p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="py-4 flex-col">
                <ul className="uppercase font-kalam font-bold">
                  <Link href="/#">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      Events
                    </li>
                  </Link>
                  <Link href="/#">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      About us
                    </li>
                  </Link>
                  <Link href="/#">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      Help
                    </li>
                  </Link>
                  <Link href="/#">
                    <li
                      onClick={() => {
                        setNav(false);
                      }}
                      className="py-4 text-sm"
                    >
                      Sign in
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
