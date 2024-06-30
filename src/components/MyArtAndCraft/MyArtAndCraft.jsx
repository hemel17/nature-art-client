import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyArtAndCraft = () => {
  const { data } = useLoaderData();

  const [art, setArt] = useState(data);
  const [originalArt, setOriginalArt] = useState(data);

  const handleSortChange = (e) => {
    if (e === "yes") {
      const yes = originalArt.filter((e) => e.customization === "yes");
      setArt(yes);
    }
    if (e === "no") {
      const no = originalArt.filter((e) => e.customization === "no");
      setArt(no);
    }

    setOriginalArt(art);
  };
  return (
    <section className="my-4 md:my-10">
      <Typography variant="h2" className="text-center font-museo">
        My Art & Craft Items
      </Typography>
      <div className="p-4 mx-auto my-4 bg-white rounded-lg w-72">
        <Select label="Customization" onChange={(e) => handleSortChange(e)}>
          <Option value="yes">Yes</Option>
          <Option value="no">No</Option>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {art.map((e) => {
          const {
            _id,
            image,
            item_name,
            price,
            rating,
            customization,
            stock_status,
          } = e;

          return (
            <Card key={_id} className="mx-auto mt-10 md:mt-16 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={image} alt={item_name} className="w-full h-full" />
              </CardHeader>
              <CardBody className="[&_span]:font-semibold mt-2">
                <Typography>
                  Item Name : <span>{item_name}</span>
                </Typography>
                <Typography>
                  Price : $<span>{price}</span>
                </Typography>
                <Typography>
                  Rating : <span>{rating}</span>
                </Typography>
                <Typography>
                  Customization : <span>{customization}</span>
                </Typography>
                <Typography>
                  Stock Status : <span>{stock_status}</span>
                </Typography>
              </CardBody>
              <CardFooter className="flex gap-4">
                <Button color="blue">Update</Button>
                <Button color="red">Delete</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default MyArtAndCraft;
