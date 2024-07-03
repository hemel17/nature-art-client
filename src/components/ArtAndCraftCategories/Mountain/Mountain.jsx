import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const Mountain = () => {
  const { data } = useLoaderData();
  return (
    <section className="my-4 md:my-6">
      <div className="w-full md:max-w-[80%] lg:max-w-[60%] grid grid-cols-1 md:grid-cols-2 mx-auto">
        {data.map((e) => {
          const {
            _id,
            image,
            item_name,
            subcategory_Name,
            short_description,
            price,
            rating,
            processing_time,
          } = e;
          return (
            <Card key={_id} className="mx-auto mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56 mb-2">
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
                  Category :
                  <span className="font-semibold">{subcategory_Name}</span>
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
              <CardFooter>
                <Link to={`${_id}`}>
                  <Button color="green" fullWidth>
                    view details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Mountain;
