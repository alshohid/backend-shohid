import ListItem from "./ListItem";
import ListSearch from "./ListSearch";

export default function ResponsiveList({
  latestNewsData,
  setSearchTerm,
  searchTerm,
}: any) {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Latest News List</h2>
      <div>
        {/* <ListSearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} /> */}
      </div>
      <div className="grid grid-cols-1  h-[350px] md:h-[600px] overflow-y-auto ">
        {latestNewsData.latestNews.map((item: any, index: any) => (
          <ListItem
            key={index}
            title={item?.title}
            description={item?.short_des}
          />
        ))}
      </div>
    </div>
  );
}
