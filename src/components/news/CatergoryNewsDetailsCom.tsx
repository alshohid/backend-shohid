import Image from "next/image";
import React  from "react";
import AllPostCommentContainer from "../comments/AllPostCommentContainer";


export default function CatergoryNewsDetailsCom({
  categoryDetailsData,
  newsCommentData,
  postId,
  onCommentSubmit,
}: any) {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          src={categoryDetailsData[0]?.img1}
          alt={categoryDetailsData[0]?.title}
          width={1500}
          height={1500}
          loading="lazy"
          className="w-full h-full object-contain"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">
            {categoryDetailsData[0]?.title}
          </h1>
          <h2 className="text-lg text-gray-600 mb-2">
            {categoryDetailsData[0]?.categories?.name}
          </h2>
          <p className="text-gray-800 mb-4">
            {categoryDetailsData[0]?.short_des}
          </p>
          <p className="text-gray-600">{categoryDetailsData[0]?.long_des}</p>
        </div>
      </div>
      <div>
        <AllPostCommentContainer
          newsCommentData={newsCommentData}
          postId={postId}
          onCommentSubmit={onCommentSubmit}
        />
      </div>
    </div>
  );
}
