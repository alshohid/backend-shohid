

import PlainLayout from "@/components/master/Plain-Layout";
import Hero from "@/components/news/Hero";

 async function getData() {
  let slider =( await(
    (await fetch(`${process.env.HOST}/api/user/news/type?type=slider`)).json())).data
    return {slider:slider}

 }
export default async function Home() {
  const data = await getData()
  return (
    <PlainLayout>
      <div className="w-full">
        <Hero data={data}/>

      </div>
    </PlainLayout>
  );
}
