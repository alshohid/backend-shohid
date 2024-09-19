"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageAvater from "@/ui/ImageAvater";
import { useRouter } from "next/navigation";
const AppNavBar = (props: any) => {
  const router = useRouter()
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className="bg-red-300 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image src="/images/logo.svg" alt="alt" width={150} height={50} />
        </Link>

        <div className="flex md:order-2">
          {/* Mobile Search Icon (only on mobile) */}
          <button
            type="button"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden text-gray-500   rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          {/* Mobile Search Input (Visible when showMobileSearch is true) */}
          {showMobileSearch && (
            <div className="absolute inset-x-0 top-16 w-full bg-white dark:bg-gray-900 p-4 md:hidden">
              <input
                type="text"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search..."
              />
            </div>
          )}

          {/* Desktop Search Input (Always visible on larger screens) */}
          <div className="hidden md:block ">
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
          </div>
          {props.isLogin ? (
            <div className="mx-2">
              <ImageAvater image={"/images/profile.png"} />
            </div>
          ) : (
            <div className="ml-4">
              <button
                type="button"
                onClick={() => router.replace("/login")}
                className="text-gray-900  border border-gray-500 focus:outline-none font-small md-font-medium rounded-sm text-sm  px-3 md-px-5 py-2 md-py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </div>
          )}

          {/* Hamburger Icon (for mobile menu) */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        {/* Mobile Menu (Visible when showMobileMenu is true) */}
        {showMobileMenu && (
          <div className="absolute inset-x-0 top-16 w-full bg-white dark:bg-gray-900 p-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              {props.data.categories.map((item: any, index: any) => {
                return (
                  <li key={index}>
                    <Link href="#" className="block py-2 px-3 text-black">
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex space-x-8 rtl:space-x-reverse">
            {props.data.categories.map((item: any, index: any) => {
              return (
                <li key={index}>
                  <Link href="#" className="block py-2 px-3 text-black">
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
