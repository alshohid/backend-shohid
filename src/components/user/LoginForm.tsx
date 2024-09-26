"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubmitButton from "@/ui/FormSubmitButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const [showPassword,setShowPassword]=useState(false);

  const inputOnChange = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    try {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/user/login`,
        options
      );
      const result = await res.json();
      setSubmit(false);
      if (result.status === "success") {
        alert("Login successful!");
        setData({ email: "", password: "" });
        window.location.href = "/";
      } else {
        alert(result.message || "Invalid Login Request");
      }
    } catch (error) {
      setSubmit(false);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-5 text-2xl font-bold text-center text-gray-900 dark:text-white">
          User Login
        </h5>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          User Email
        </label>
        <input
          value={data.email}
          onChange={(e) => inputOnChange("email", e.target.value)}
          type="email"
          placeholder="Enter email"
          className="w-full p-2 mb-4 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={data.password}
            onChange={(e) => inputOnChange("password", e.target.value)}
            className="w-full p-2 text-sm mt-2 border border-gray-300 rounded-md focus:outline-none "
            placeholder="Enter your password"
            required
          />
          <div
            className="absolute top-[28px] bottom-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={()=>setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500 text-[25px]" />
            ) : (
              <FaEye className="text-gray-500 text-[25px]" />
            )}
          </div>
        </div>
        <SubmitButton
          onClick={formSubmit}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          submit={submit}
          text="Login"
        />

        <div className="flex justify-between mt-4 text-sm">
          <Link
            href="/registration"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign Up
          </Link>
          <Link
            href="/emailVerify"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Forget Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
