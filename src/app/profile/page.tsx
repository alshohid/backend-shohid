
import PlainLayout from "@/components/master/Plain-Layout";
import SideNavbar from "@/components/master/SideNavbar";
import ProfileForm from "@/components/user/ProfileForm";
import { cookies } from "next/headers";
import React from "react";
async function getData(cookies: any) {
  let option: RequestInit = {
    method: "GET",
    headers: {
      Cookie: cookies,
    },
    cache: "no-store" as RequestCache,
  };

  let profileDetails = (
    await (
      await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/dashboard/profile/details`, option)
    ).json()
  ).data;
  return {
    profileDetails: profileDetails,
  };
}

export default async function ProfilePage() {
  const cookieStore = cookies();
  const data = await getData(cookieStore);
  return (
    <div className="w-full">
      <ProfileForm profileData={data.profileDetails} />
    </div>
  );
}
