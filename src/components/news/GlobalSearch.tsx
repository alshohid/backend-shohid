"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import Card from "../ui/Card";

export default function GlobalSearch() {
  const router = useSearchParams();
  const keywords = router.get("keywords");
  const [searchByData, setSearchByData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData(keywords: any) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/user/news/search?keywords=${keywords}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchByData(data.data);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData(keywords);
  }, [keywords]);
  return (
    <div className="container">
      {loading ? (
        <div className="w-full flex justify-between ">
          <div className="p-4">
            <Loader />
          </div>
          <div className="p-4">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3">
          {searchByData.length > 0 ? (
            searchByData.map((item: any, index: any) => {
              return (
                <Card
                  key={index}
                  imageUrl={item.img1 ?? "/images/profile.png"}
                  title={item.title}
                  description={item.short_des}
                  link={item.id}
                />
              );
            })
          ) : (
            <h1 className="text-center font-semibold text-[25px]">No Data Records</h1>
          )}
        </div>
      )}
    </div>
  );
}
