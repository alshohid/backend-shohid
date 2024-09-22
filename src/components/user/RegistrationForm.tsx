"use client"
import React, { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
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
    e.preventDefault(); // Prevent default form submission

    try {
      setSubmit(true); // Disable the button while submitting

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the form data in JSON format
      };

      const res = await fetch("/api/user/registration", options);
      const result = await res.json();

      setSubmit(false); // Re-enable the button after API call

      // Clear form data after submission
      setData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
      });

      if (result.status === "success") {
        alert("Registration successful!");
        window.location.href = "/login"; // Redirect to home page on success
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
        <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
        <form onSubmit={formSubmit}>
          {/* First Name */}
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
            disabled={submit} // Disable button while submitting
            className={`w-full bg-blue-600 text-white font-medium py-2 rounded-md ${
              submit ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {submit ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
