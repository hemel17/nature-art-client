import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CraftItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/forest");
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="my-4 md:my-10">
      <Typography variant="h2" className="text-center font-museo">
        Incredible Forest Based Nartural Painting :
      </Typography>
      <div className="grid gap-4 my-4 md:grid-cols-2 lg:grid-cols-3 md:my-6">
        {items.map((item) => {
          const { _id, item_name, image, short_description } = item;
          return (
            <Card key={_id} className="mx-auto mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={image} alt={item_name} className="w-full h-full" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item_name}
                </Typography>
                <Typography>{short_description}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/viewDetails/${_id}`}>
                  <Button fullWidth color="green">
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

export default CraftItems;
