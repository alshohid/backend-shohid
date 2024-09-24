"use client";
import { useParams} from "next/navigation";
import React, { useEffect, useState } from "react";
import CatergoryNewsDetailsCom from "./CatergoryNewsDetailsCom";

export default function CategoryDetails() {
    const { id } = useParams();
    const [categoryDetailsData, setCategoryDetailsData] = useState([]);
    const [newsCommentData, setNewsCommentData] = useState([]);
    const [loading, setLoading] = useState(true);


    async function fetchData(id: any) {
      try {
        const [detailsResponse, anotherApiResponse] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/user/news/details?id=${id}`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/dashboard/comments/newsComment?postID=${id}`
          ),
        ]);

        if (!detailsResponse.ok || !anotherApiResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const detailsData = await detailsResponse.json();
        const anotherData = await anotherApiResponse.json();
        setCategoryDetailsData(detailsData.data);
        setNewsCommentData(anotherData.data);
      } catch (error: any) {
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      if (id) {
        fetchData(id);
      }
    }, [id]);
  return (
    <div>
      <CatergoryNewsDetailsCom
        categoryDetailsData={categoryDetailsData}
        newsCommentData={newsCommentData}
      />
    </div>
  );
}
