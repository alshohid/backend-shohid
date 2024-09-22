import { cookies } from "next/headers";
import React from "react";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";

async function getData() {
  let socials = (
    await (await fetch(`${process.env.HOST}/api/user/socials`)).json()
  )["data"];
  let categories = (
    await (await fetch(`${process.env.HOST}/api/user/categories`)).json()
  )["data"];
  return { socials: socials, categories: categories };
}

const PlainLayout = async (props: any) => {
  const data = await getData();
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";
  return (
    <>
      <AppNavBar isLogin={isLogin} data={data} />
      {props.children}
      <Footer/>
    </>
  );
};
export default PlainLayout;
