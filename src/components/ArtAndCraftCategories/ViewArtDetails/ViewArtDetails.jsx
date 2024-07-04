import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const ViewArtDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  const {
    _id,
    image,
    item_name,
    subcategory_Name,
    subcategory_name,
    short_description,
    price,
    rating,
    processing_time,
  } = data;
  return (
    <section className="my-4 md:my-6">
      <Card key={_id} className="mx-auto mt-6 w-full md:w-[60%]" shadow={false}>
        <CardHeader color="blue-gray" className="relative h-56 mb-2 md:h-96">
          <img src={image} alt={item_name} className="w-full h-full" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
            {item_name}
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            Category :{" "}
            <span className="font-semibold">
              {subcategory_Name || subcategory_name}
            </span>
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            Description : {short_description}
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            Price : $<span className="font-semibold">{price}</span>
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            Rating : <span className="font-semibold">{rating}</span>
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            Processing Time :
            <span className="font-semibold">{processing_time} days</span>
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
};

export default ViewArtDetails;
