import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCraftItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      Swal.fire({
        title: "Good job!",
        text: "Login Successful!",
        icon: "success",
      }).then(() => {
        reset();
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Something went wrong!",
        text: "Your email or password is incorrect!",
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
              placeholder="Enter Rating"
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

        <Button
          className="mx-auto mt-6 md:w-1/3"
          type="submit"
          color="green"
          fullWidth
        >
          add craft item
        </Button>
      </form>
    </Card>
  );
};

export default AddCraftItem;
