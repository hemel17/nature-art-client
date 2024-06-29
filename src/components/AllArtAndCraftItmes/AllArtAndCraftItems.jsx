import { Card, Typography } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const { data } = useLoaderData();
  console.log(data);
  const TABLE_HEAD = ["Name", "Category", "Price", "Artist", ""];

  const TABLE_ROWS = data.map((e) => ({
    _id: e._id,
    name: e.item_name,
    category: e.subcategory_name,
    price: e.price,
    artist: e.name,
  }));
  return (
    <Card className="w-full h-full overflow-scroll">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ _id, name, category, price, artist }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={_id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {category}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal capitalize"
                  >
                    {artist}
                  </Typography>
                </td>
                <td className={classes}>
                  <Link to={`/viewDetails/${_id}`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="py-2 font-medium text-center text-white bg-green-400 rounded-lg"
                    >
                      View Details
                    </Typography>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default AllArtAndCraftItems;
