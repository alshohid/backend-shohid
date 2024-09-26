"use client";
import React, { useState } from "react";

const NewsPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    short_des: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    keywords: "",
    long_des: "",
    type: "",
    catID: 0,
  });

  // State for handling submission status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const updatedValue = name === "catID" ? parseInt(value, 10) : value;

    setFormData({ ...formData, [name]: updatedValue });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    console.log(formData, "formData");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/dashboard/newsPosts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
      }

      console.log("Success:", result);
    } catch (err) {
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Post</h2>

      {/* Display submission status */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
            required
          />
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label
            htmlFor="short_des"
            className="block text-gray-700 font-semibold"
          >
            Short Description
          </label>
          <input
            type="text"
            id="short_des"
            name="short_des"
            value={formData.short_des}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter short description"
            required
          />
        </div>

        {/* Long Description */}
        <div className="mb-4">
          <label
            htmlFor="long_des"
            className="block text-gray-700 font-semibold"
          >
            Long Description
          </label>
          <textarea
            id="long_des"
            name="long_des"
            value={formData.long_des}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter long description"
            required
          />
        </div>

        {/* Image CDN Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="img1" className="block text-gray-700 font-semibold">
              Image CDN 1
            </label>
            <input
              type="text"
              id="img1"
              name="img1"
              value={formData.img1}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image CDN"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="img2" className="block text-gray-700 font-semibold">
              Image CDN 2
            </label>
            <input
              type="text"
              id="img2"
              name="img2"
              value={formData.img2}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image CDN"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="img3" className="block text-gray-700 font-semibold">
              Image CDN 3
            </label>
            <input
              type="text"
              id="img3"
              name="img3"
              value={formData.img3}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image CDN"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="img4" className="block text-gray-700 font-semibold">
              Image CDN 4
            </label>
            <input
              type="text"
              id="img4"
              name="img4"
              value={formData.img4}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image CDN"
            />
          </div>
        </div>

        {/* Keyword */}
        <div className="mb-4">
          <label
            htmlFor="keywords"
            className="block text-gray-700 font-semibold"
          >
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter keywords"
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-semibold">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            <option value="latest">latest</option>
            <option value="slider">slider</option>
          </select>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="catID" className="block text-gray-700 font-semibold">
            Category
          </label>
          <select
            id="catID"
            name="catID"
            value={formData.catID}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>Select Category</option>
            <option value={1}>Technology</option>
            <option value={2}>Health</option>
            <option value={3}>Education</option>
            <option value={4}>News</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsPostForm;
