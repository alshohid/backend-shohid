import Link from "next/link";
import React from "react";

export default function SideNavbar() {
  return (
    <div className="h-full w-64 bg-red-200 shadow-md">
      <nav className="flex flex-col p-4 space-y-4">
        <Link
          href="/dashboard"
          className="text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/comments"
          className="text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white"
        >
          Comments
        </Link>
        <Link
          href="/profile"
          className="text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white"
        >
          Profile
        </Link>
        <Link
          href="#"
          className="text-gray-700 hover:bg-green-500 hover:text-white p-3 rounded-md transition-colors duration-300 ease-in-out active:bg-green-600 active:text-white"
        >
          News
        </Link>
      </nav>
    </div>
  );
}
