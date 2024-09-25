"use client";
import React, { useState } from "react";

const SubmitButton = ({ onClick, submit, text, className }: any) => {
  return (
    <button onClick={onClick} className={className} disabled={submit}>
      {submit ? "Submitting..." : text}
    </button>
  );
};

const NewsCreateForm = ({ postId, onCommentSubmit }: any) => {
  const [data, setData] = useState({
    postID: parseInt(postId),
    descriptions: "",
  });
  const [submit, setSubmit] = useState(false);
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
      const res = await fetch("/api/dashboard/comments/manage", options);
      const result = await res.json();
      setSubmit(false);
      if (result.status === "success") {
        alert("Comment submitted successfully!");
        onCommentSubmit();
        setData((prevData) => ({
          ...prevData,
          descriptions: "",
        }));
      } else {
        alert(result.message || "Failed to submit comment");
      }
    } catch (error) {
      setSubmit(false);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-5 text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create your Comment
        </h5>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Comment Description
        </label>
        <textarea
          value={data.descriptions}
          onChange={(e) => inputOnChange("descriptions", e.target.value)}
          className="w-full p-2 mb-4 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows={4}
          required
        />
        <SubmitButton
          onClick={formSubmit}
          className={`w-max-md px-4 py-2 ${
            data.descriptions.length > 0 ? "" : "cursor-not-allowed"
          } text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800`}
          submit={submit}
          text="Submit Comment"
        />
      </div>
    </div>
  );
};

export default NewsCreateForm;
