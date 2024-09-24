

import PlainLayout from "@/components/master/Plain-Layout";
import Hero from "@/components/news/Hero";

 async function getData() {
  let slider =( await(
    (await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/news/type?type=slider`)).json())).data
    return {slider:slider}

 }
export default async function Home() {
  const data = await getData()
  return (
    <>
      <div className="w-full">
        <Hero data={data}/>

      </div>
    </>
  );
}
