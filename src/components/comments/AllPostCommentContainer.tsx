"use client";
import React, { useState } from "react";
import AllCommentList from "./AllCommentList";
import NewsCreateFrom from "./NewsCreateFrom";

const AllPostCommentContainer = ({ newsCommentData }: any) => {
  const [activeTab, setActiveTab] = useState("Comment");
  const postID = newsCommentData?.length > 0 ? newsCommentData[0]?.postID : null;
  const openPage = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="h-screen w-full flex flex-col mt-4">
      <div className="flex">
        <button
          className={`tablink ${
            activeTab === "Comment" ? "border " : "bg-gray-600"
          } text-blue-950 p-4 w-1/4 rounded-l-sm `}
          onClick={() => openPage("Comment")}
        >
          Comment
        </button>
        <button
          className={`tablink ${
            activeTab === "Create" ? "border" : "bg-gray-600"
          } text-blue-950 p-4 w-1/4 rounded-r-sm`}
          onClick={() => openPage("Create")}
        >
          Create
        </button>
      </div>

      <div className="tabcontent h-full flex-grow py-4">
        {activeTab === "Comment" && (
          <>
            {newsCommentData?.length > 0 ? (
              <>
                {newsCommentData.map((item: any) => {
                  return <AllCommentList postID={item.postID} item={item} />;
                })}
              </>
            ) : (
              <div className="text-center">No Comments Yet</div>
            )}
          </>
        )}
        {activeTab === "Create" && <NewsCreateFrom postId={postID} />}
      </div>
    </div>
  );
};

export default AllPostCommentContainer;
