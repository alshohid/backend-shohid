import { cookies, headers } from "next/headers";
import React, { cache } from "react";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";

async function getData(cookies: any) {
  let option: RequestInit = {
    method: "GET",
    headers: {
      Cookie: cookies,
    },
    cache: "no-store" as RequestCache,
  };

  let socials = (
    await (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/socials`)).json()
  )["data"];
  let categories = (
    await (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/categories`)).json()
  )["data"];
  let profileDetails = (
    await (
      await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/dashboard/profile/details`, option)
    ).json()
  ).data;
  return {
    socials: socials,
    categories: categories,
    profileDetails: profileDetails,
  };
}

const PlainLayout = async (props: any) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";
  const data = await getData(cookieStore);

  return (
    <>
      <AppNavBar isLogin={isLogin} data={data} />
      {props.children}
      <Footer />
    </>
  );
};
export default PlainLayout;
