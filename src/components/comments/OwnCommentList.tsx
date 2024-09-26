"use client";
import React, { useState } from "react";

interface Comment {
  id: number;
  userID: number;
  postID: number;
  descriptions: string;
  createdAt: string;
  updatedAt: string;
  news_list: {
    title: string;
  };
}

interface CommentListProps {
  comments: Comment[];
}

const OwnCommentList: React.FC<CommentListProps> = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);

  const onDelete = async (id: number) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/dashboard/comments/manage`,
        options
      );
      const res = await response.json();

      if (res.status === "success") {
        alert("Comment deleted successfully");
        setCommentList((prevComments) =>
          prevComments.filter((comment) => comment.id !== id)
        );
      } else {
        alert("Error found while deleting the comment");
      }
    } catch (error) {
      console.error("Error during delete operation:", error);
      alert("An error occurred while deleting the comment");
    }
  };

  return (
    <div className="w-full p-3 space-y-4">
      <div className="text-[30px] font-bold py-2 ">
        <h4>All Comments</h4>
      </div>
      {commentList?.length > 0 ? (
        commentList?.map((comment) => (
          <div key={comment.id} className="relative">
            <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200 relative">
              <button
                onClick={() => onDelete(comment.id)}
                className="absolute top-3 px-3 py-2 rounded-sm border border-red-400 right-3 text-red-500 hover:text-red-700 font-semibold text-lg"
                title="Delete Comment"
              >
                Delete
              </button>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {comment?.news_list?.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  Posted on: {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {comment?.descriptions}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center font-semibold">No Comments Yet</div>
      )}
    </div>
  );
};

export default OwnCommentList;
