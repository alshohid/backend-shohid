"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export function InputOTPForm() {
  const [otp, setOtp] = useState("");

  const handleChange = (otp: string) => {
    setOtp(otp);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/user/recover/otpVerify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("OTP submitted successfully!");
        // You can redirect or perform other actions here
      } else {
        alert(result.message || "Failed to submit OTP.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 ">
        <h2 className="text-2xl font-bold text-center mb-4">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 mb-2" htmlFor="otp">
            One-Time Password (OTP)
          </label>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  width: "5rem",
                  height: "2rem",
                  margin: "0 0.5rem",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  border: "2px solid #4A90E2",
                  borderRadius: "5px",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                className="focus:border-blue-500"
              />
            )}
          />
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-2">
          Didn't receive the OTP?
          <a href="#" className="text-blue-500">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
}
