"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageAvater from "@/ui/ImageAvater";
import { useRouter } from "next/navigation";
import UserDropDown from "./UserDropDown";
import SearchForm from "../ui/SearchForm";

const AppNavBar = (props: any) => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` w-full bg-red-300 border-gray-200  shadow-md transition-all duration-300 ${
        isSticky ? "sticky top-0 left-0 z-50  bg-red-600" : "relative"
      } `}
    >
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image src="/images/logo.svg" alt="alt" width={150} height={50} />
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden text-gray-500 rounded-lg text-sm p-2.5 me-1"
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
          {showMobileSearch && (
            <div className="absolute inset-x-0 top-16 w-full bg-white dark:bg-gray-900 p-4 md:hidden">
              <input
                type="text"
                value={keyword}
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search..."
                onChange={(e: any) => setKeyword(e.target.value)}
              />
              <Link
                href={keyword?.length > 0 ? `/search?keywords=${keyword}` : `/`}
              >
                Search
              </Link>
            </div>
          )}
          <div className="hidden  md:block">
            <SearchForm keyword={keyword} setKeyword={setKeyword}/>
          </div>
          {props.isLogin ? (
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center mx-2">
                <ImageAvater image={"/images/profile.png"} />
              </div>
              <UserDropDown
                data={props.data.profileDetails}
                showDropdown={showDropdown}
              />
            </div>
          ) : (
            <div className="ml-4">
              <button
                type="button"
                onClick={() => router.replace("/login")}
                className="text-gray-900 border border-gray-500 focus:outline-none hover:bg-red-500 font-small md-font-medium rounded-sm text-sm px-3 md-px-5 py-2 md-py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </div>
          )}
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
        {showMobileMenu && (
          <div className="absolute inset-x-0 top-16 w-full bg-white dark:bg-gray-900 p-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link className="block py-2 px-3 text-black" href={"/"}>
                  Home
                </Link>
              </li>
              {props.data.categories.map((item: any, index: any) => {
                return (
                  <li key={index}>
                    <Link
                      href={`/category?id=${item.id}`}
                      className="block py-2 px-3 text-black"
                    >
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
            <li>
              <Link className="block py-2 px-3 text-black" href={"/"}>
                Home
              </Link>
            </li>
            {props.data.categories.map((item: any, index: any) => {
              return (
                <li key={index}>
                  <Link
                    href={`/category?id=${item.id}`}
                    className="block py-2 px-3 text-black"
                  >
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
