import OwnCommentList from '@/components/comments/OwnCommentList';
import { cookies } from 'next/headers';
import React from 'react'
async function getData(cookies: any) {
  let option: RequestInit = {
    method: "GET",
    headers: {
      Cookie: cookies,
    },
    cache: "no-store" as RequestCache,
  };

  let userOwnComments = (
    await (
      await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/dashboard/comments/manage`,
        option
      )
    ).json()
  ).data;
  return {
    userOwnComments: userOwnComments,
  };
}

export default async function CommentsMainPage() {
    const cookieStore = cookies();
    const data = await getData(cookieStore);
  return (
    <div className="w-full">
      <OwnCommentList comments={data.userOwnComments}  />
    </div>
  );
}
