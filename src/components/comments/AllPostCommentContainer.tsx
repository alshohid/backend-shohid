"use client";
import React, { useEffect, useState } from "react";
import AllCommentList from "./AllCommentList";
import NewsCreateFrom from "./NewsCreateFrom";

const AllPostCommentContainer = ({
  newsCommentData,
  postId,
  onCommentSubmit,
}: any) => {
  const [activeTab, setActiveTab] = useState("Comment");

  const openPage = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div className="h-screen w-full flex flex-col mt-4">
      <div className="flex">
        <button
          className={`tablink ${
            activeTab === "Comment"
              ? " bg-gray-600 text-white"
              : "border text-blue-950"
          }  p-4 w-1/4 rounded-l-sm `}
          onClick={() => openPage("Comment")}
        >
          Comment
        </button>
        <button
          className={`tablink ${
            activeTab === "Create"
              ? "bg-gray-600 text-white"
              : "border  text-blue-950 "
          } text-blue-950 p-4 w-1/4 rounded-r-sm`}
          onClick={() => openPage("Create")}
        >
          Create
        </button>
      </div>

      <div className="tabcontent h-[400px] md:h-[500px] overflow-y-auto flex-grow py-4">
        {activeTab === "Comment" && (
          <>
            {newsCommentData?.length > 0 ? (
              <>
                {newsCommentData.map((item: any) => {
                  return <AllCommentList postID={item.postID} item={item} />;
                })}
              </>
            ) : (
              <div className="text-center text-[25px] font-semibold">
                No Comments Yet
              </div>
            )}
          </>
        )}
        {activeTab === "Create" && (
          <NewsCreateFrom postId={postId} onCommentSubmit={onCommentSubmit} />
        )}
      </div>
    </div>
  );
};

export default AllPostCommentContainer;
