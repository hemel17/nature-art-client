import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await createUser(data);
      console.log(user);
      Swal.fire({
        title: "Good job!",
        text: "User Created Successfully!",
        icon: "success",
      }).then(navigate("/"));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="my-6 md:my-10 [&>*]:mx-auto"
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 mb-1">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            {...register("name", {
              required: "Name is required!",
            })}
            placeholder="Enter Your Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.name && <Typography>{errors.name.message}</Typography>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter Your Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.email && <Typography>{errors.email.message}</Typography>}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            PhotoURL
          </Typography>
          <Input
            size="lg"
            {...register("photoURL", {
              required: "PhotoURL is required!",
            })}
            placeholder="Enter Your PhotoURL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.photoURL && (
            <Typography>{errors.photoURL.message}</Typography>
          )}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Password
          </Typography>
          <Input
            type="password"
            size="lg"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long!",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  "Password must contain both uppercase and lowercase letter",
              },
            })}
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.password && (
            <Typography>{errors.password.message}</Typography>
          )}
        </div>

        <Button className="mt-6" type="submit" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 font-normal text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Log In
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default SignUp;
