"use client";
import React, { useState } from "react";

const ProfileForm = ({ profileData }: any) => {
  const [data, setData] = useState({
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    email: profileData.email,
    mobile: profileData.mobile,
    password: profileData.password,
  });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSubmit(true);
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch("api/dashboard/profile/update", options);
      const result = await res.json();

      setSubmit(false);

      setData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
      });

      if (result.status === "success") {
        alert("Registration successful!");
        // window.location.href = "/login";
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (error) {
      setSubmit(false); // Re-enable the button on error
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Update Profile </h2>
        <form onSubmit={formSubmit}>
           
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={inputOnChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={inputOnChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={inputOnChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={data.mobile}
              onChange={inputOnChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={inputOnChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none  "
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submit}
            className={`w-full bg-blue-600 text-white font-medium py-2 rounded-md ${
              submit ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submit ? "saving..." : "Save and Change"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
