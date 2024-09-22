
import ResponsiveList from "./ResponsiveList";

async function getData() {
    let latestNews = (await(
      await fetch(`${process.env.HOST}/api/user/news/type?type=latest`)
    ).json()).data;
    return { latestNews: latestNews };
    }
    export default async function Latest() {
    const latestNewsData = await getData();

    return (
        <div>
        <ResponsiveList
            latestNewsData={latestNewsData}

        />
        </div>
    );
    }
