"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaComment,
  FaUser,
  FaNewspaper,
} from "react-icons/fa";

export default function SideNavbar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-red-200 shadow-md transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button onClick={toggleSidebar}>
            <FaBars className="text-gray-700 text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="/dashboard"
            className={`flex items-center text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <FaTachometerAlt className="text-xl mr-3" />
            <span className={`${collapsed ? "hidden" : "inline-block"}`}>
              Dashboard
            </span>
          </Link>
          <Link
            href="/comments"
            className={`flex items-center text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <FaComment className="text-xl mr-3" />
            <span className={`${collapsed ? "hidden" : "inline-block"}`}>
              Own Comments
            </span>
          </Link>
          <Link
            href="/profile"
            className={`flex items-center text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <FaUser className="text-xl mr-3" />
            <span className={`${collapsed ? "hidden" : "inline-block"}`}>
              Profile
            </span>
          </Link>
          <Link
            href="/newsPost"
            className={`flex items-center text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <FaNewspaper className="text-xl mr-3" />
            <span className={`${collapsed ? "hidden" : "inline-block"}`}>
              News
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
