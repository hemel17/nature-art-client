import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full p-8 bg-white">
      <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
        <Link to={"/"}>
          <Typography variant="h4" className="text-xl font-museo">
            Nature <span className="text-green-400">Art</span>
          </Typography>
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="font-normal text-center">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
};

export default Footer;
