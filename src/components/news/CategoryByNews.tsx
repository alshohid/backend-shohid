"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Card from "../ui/Card";
import Loader from "../ui/Loader";

export default function CategoryByNews() {
  const router = useSearchParams();
  const id = router.get("id");
  const [categorisByIdData, setCategorisById] = useState([]);
  const [loading, setLoading] = useState(true);
 

  async function getData(id: any) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/user/news/category?catID=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCategorisById(data.data);
    } catch (error: any) {

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <div  className="w-full flex justify-between ">
          <div className="p-4">
            <Loader />
          </div>
          <div className="p-4">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3">
          {categorisByIdData.length > 0 ? (
            categorisByIdData.map((item: any, index: any) => {
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
            <h1 className="">No Data Records</h1>
          )}
        </div>
      )}
    </div>
  );
}
