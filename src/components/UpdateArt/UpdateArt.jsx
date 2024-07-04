import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateArt = () => {
  const { user } = useContext(AuthContext);
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    customization,
    image,
    item_name,
    subcategory_name,
    price,
    rating,
    short_description,
    processing_time,
    stock_status,
  } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: user.email,
      name: user.displayName,
      customization,
      image,
      item_name,
      subcategory_name,
      price,
      rating,
      short_description,
      processing_time,
      stock_status,
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.put(
        `https://nature-art-server.onrender.com/userArt/${_id}`,
        data
      );
      console.log(res);
      if (res?.data?.acknowledged) {
        Swal.fire({
          title: "Good job!",
          text: "Item Updated Successfully!",
          icon: "success",
        }).then(() => {
          navigate("/myArt&CraftList");
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Something went wrong!",
        text: "Please Give All The Necessary Informaion",
        icon: "error",
      });
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="my-6 md:my-10 [&>*]:mx-auto"
    >
      <Typography variant="h4" color="blue-gray">
        Add Craft Item
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your craft details.
      </Typography>
      <form
        className=" mt-8 mb-2 w-full max-w-[80%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* image and item name */}
        <div className="gap-6 md:flex">
          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image URL
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("image", {
                required: "Image URL is required!",
              })}
              placeholder="Enter Image URL"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.image && (
              <Typography className="text-red-500">
                {errors.image.message}
              </Typography>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Item Name
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("item_name", {
                required: "Item Name is required!",
              })}
              placeholder="Enter Item Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.item_name && (
              <Typography className="text-red-500">
                {errors.item_name.message}
              </Typography>
            )}
          </div>
        </div>

        {/* subcategory and description */}
        <div className="gap-6 md:flex">
          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Subcategory Name
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("subcategory_name", {
                required: "Subcategory Name is required!",
              })}
              placeholder="Enter Subcategory Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.subcategory_name && (
              <Typography className="text-red-500">
                {errors.subcategory_name.message}
              </Typography>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Short Description
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("short_description", {
                required: "Short Description is required!",
              })}
              placeholder="Enter Short Description"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.short_description && (
              <Typography className="text-red-500">
                {errors.short_description.message}
              </Typography>
            )}
          </div>
        </div>

        {/* price and rating */}
        <div className="gap-6 md:flex">
          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("price", {
                required: "Price is required!",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                },
              })}
              placeholder="Enter Price"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.price && (
              <Typography className="text-red-500">
                {errors.price.message}
              </Typography>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Rating
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("rating", {
                required: "Rating is required!",
                pattern: {
                  value: /^[0-5]$/,
                  message: "Only numbers between 0 and 5 are allowed",
                },
              })}
              placeholder="Enter Rating (0-5)"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.rating && (
              <Typography className="text-red-500">
                {errors.rating.message}
              </Typography>
            )}
          </div>
        </div>

        {/* customization and processinng time */}
        <div className="gap-6 md:flex">
          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Customization
            </Typography>

            <Controller
              name="customization"
              control={control}
              defaultValue=""
              rules={{ required: "Customization is required!" }}
              render={({ field }) => (
                <Select
                  {...field}
                  error={Boolean(errors.customization)}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                >
                  <Option value="yes">Yes</Option>
                  <Option value="no">No</Option>
                </Select>
              )}
            />
            {errors.customization && (
              <Typography className="text-red-500">
                {errors.customization.message}
              </Typography>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Processing Time
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("processing_time", {
                required: "Processing Time is required!",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                },
              })}
              placeholder="Enter Processing Time (hours)"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.processing_time && (
              <Typography className="text-red-500">
                {errors.processing_time.message}
              </Typography>
            )}
          </div>
        </div>

        {/* stock and email */}
        <div className="gap-6 md:flex">
          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Stock Status
            </Typography>

            <Controller
              name="stock_status"
              control={control}
              defaultValue=""
              rules={{ required: "Stock Status is required!" }}
              render={({ field }) => (
                <Select
                  {...field}
                  error={Boolean(errors.customization)}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                >
                  <Option value="in_stock">In Stock</Option>
                  <Option value="made_to_order">Made To Order</Option>
                </Select>
              )}
            />
            {errors.customization && (
              <Typography className="text-red-500">
                {errors.customization.message}
              </Typography>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Email
            </Typography>
            <Input
              size="lg"
              type="email"
              disabled
              {...register("email", {
                required: "User Email is required!",
              })}
              label={user.email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none px-3",
              }}
            />
            {errors.email && (
              <Typography className="text-red-500">
                {errors.email.message}
              </Typography>
            )}
          </div>
        </div>

        {/* name */}
        <div className="gap-6 md:flex">
          <div className="flex flex-col flex-1 gap-6 my-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Name
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("name", {
                required: "User Name is required!",
              })}
              label={user.displayName}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none px-3",
              }}
            />
            {errors.name && (
              <Typography className="text-red-500">
                {errors.name.message}
              </Typography>
            )}
          </div>

          {/* just for design purpose */}
          <div className="flex-col flex-1 hidden gap-6 my-1 md:flex md:invisible">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Name
            </Typography>
            <Input
              size="lg"
              type="text"
              {...register("name", {
                required: "User Name is required!",
              })}
              label={user.displayName}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none px-3",
              }}
            />
            {errors.name && (
              <Typography className="text-red-500">
                {errors.name.message}
              </Typography>
            )}
          </div>
        </div>

        <Button
          className="mx-auto mt-6 md:w-1/3"
          type="submit"
          color="green"
          fullWidth
        >
          update craft item
        </Button>
      </form>
    </Card>
  );
};

export default UpdateArt;
