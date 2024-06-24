import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Spinner,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const NavList = () => {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-medium"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors hover:text-blue-500 text-blue-500"
              : "flex items-center transition-colors hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-medium"
      >
        <NavLink
          to={"/allArtAndCraftItems"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors hover:text-blue-500 text-blue-500"
              : "flex items-center transition-colors hover:text-blue-500"
          }
        >
          All Art And Craft Items
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-medium"
      >
        <NavLink
          to={"/addCraftItem"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors hover:text-blue-500 text-blue-500"
              : "flex items-center transition-colors hover:text-blue-500"
          }
        >
          Add Craft Item
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-medium"
      >
        <NavLink
          to={"/myArt&CraftList"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors hover:text-blue-500 text-blue-500"
              : "flex items-center transition-colors hover:text-blue-500"
          }
        >
          My Art & Craft List
        </NavLink>
      </Typography>
    </ul>
  );
};

const SimpleNavbar = () => {
  const { loading, user, logOut } = useContext(AuthContext);
  console.log(user);
  const [openNav, setOpenNav] = useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section>
      <Navbar className="min-w-full px-6 py-3 mx-auto shadow-none lg:px-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h4"
            className="mr-4 cursor-pointer py-1.5 font-museo"
          >
            Nature <span className="text-green-400">Art</span>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="flex items-center gap-2">
            {loading ? (
              <Spinner />
            ) : user ? (
              <div>
                <Avatar
                  src={
                    user.photoURL ||
                    "https://docs.material-tailwind.com/img/face-2.jpg"
                  }
                  alt={user.displayName}
                />
                <Button
                  color="red"
                  variant="outlined"
                  className="ml-2"
                  onClick={logOut}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <div>
                <Link to={"/login"}>
                  <Button
                    color="green"
                    variant="outlined"
                    className="mr-2 rounded-full"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to={"/register"}>
                  <Button
                    color="blue"
                    variant="outlined"
                    className="rounded-full"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}

            <IconButton
              variant="text"
              className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="w-6 h-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </section>
  );
};

export default SimpleNavbar;
