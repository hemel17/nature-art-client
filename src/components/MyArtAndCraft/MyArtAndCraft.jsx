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
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const MyArtAndCraft = () => {
  const { data } = useLoaderData();
  const { user } = useContext(AuthContext);

  const [art, setArt] = useState([]);
  const [originalArt, setOriginalArt] = useState([]);

  useEffect(() => {
    const fetchUserArt = () => {
      const userData = data.filter((e) => user.email === e.email);
      console.log(userData);
      setOriginalArt(userData);
      setArt(userData);
    };
    fetchUserArt();
  }, [data, user.email]);

  const handleSortChange = (e) => {
    if (e === "yes") {
      const yes = originalArt.filter((e) => e.customization === "yes");
      setArt(yes);
      console.log(originalArt);
    }
    if (e === "no") {
      const no = originalArt.filter((e) => e.customization === "no");
      setArt(no);
      console.log(originalArt);
    }
  };

  const handleDelete = async (_id) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (confirmation.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:5000/userArt/${_id}`);
        if (res.status === 200) {
          const filtered = art.filter((e) => e._id !== _id);
          setArt(filtered);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Delete request failed:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the file.",
          icon: "error",
        });
      }
    }
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
                <Button color="red" onClick={() => handleDelete(_id)}>
                  Delete
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default MyArtAndCraft;
