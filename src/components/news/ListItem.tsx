const ListItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4 transition-transform transform hover:scale-105">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);
export default ListItem;
