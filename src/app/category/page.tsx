import CategoryByNews from "@/components/news/CategoryByNews";
import { cookies } from "next/headers";
import React from "react";

export default async function NewsCategoryMainPage() {
    const cookiestore = cookies();
    const token = cookiestore.get("token");
    let isLogin = false;
    isLogin = typeof token !== "undefined";
  return (
    <div>
      <CategoryByNews isLogin={isLogin} />
    </div>
  );
}
