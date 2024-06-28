import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const { data } = useLoaderData();

  const {
    image,
    item_name,
    customization,
    name,
    email,
    price,
    processing_time,
    rating,
    short_description,
    stock_status,
    subcategory_name,
  } = data;

  return (
    <section>
      <Card shadow={false} className="w-full mx-auto md:w-3/5">
        <CardHeader shadow={false} floated={false}>
          <img
            src={image}
            alt={item_name}
            className="w-full mx-auto max-h-96"
          />
        </CardHeader>
        <CardBody className="[&_span]:font-bold">
          <Typography
            variant="h2"
            className="text-center text-black font-museo"
          >
            {item_name}
          </Typography>
          <Typography className="my-4 text-lg">{short_description}</Typography>
          <Typography>
            Category : <span>{subcategory_name}</span>
          </Typography>
          <Typography>
            Price : <span>${price}</span>
          </Typography>
          <Typography>
            Customization : <span className="uppercase">{customization}</span>
          </Typography>
          <Typography>
            Processing Time : <span>{processing_time} days</span>
          </Typography>
          <Typography>
            Rating : <span>{rating}</span>
          </Typography>
          <Typography>
            Status : <span>{stock_status}</span>
          </Typography>
          <Typography>
            Artist : <span className="uppercase">{name}</span>
          </Typography>
          <Typography>
            Contact : <span>{email}</span>
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
};

export default ViewDetails;
