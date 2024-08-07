import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../components/SignUp/Signup";
import LogIn from "../components/LogIn/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddCraftItem from "../components/AddCraftItem/AddCraftItem";
import Home from "../components/Home/Home";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import axios from "axios";
import AllArtAndCraftItems from "../components/AllArtAndCraftItmes/AllArtAndCraftItems";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyArtAndCraft from "../components/MyArtAndCraft/MyArtAndCraft";
import ViewUserArtDetails from "../components/ViewUserArtDetails/ViewUserArtDetails";
import UpdateArt from "../components/UpdateArt/UpdateArt";
import Mountain from "../components/ArtAndCraftCategories/Mountain/Mountain";
import Forest from "../components/ArtAndCraftCategories/Forest/Forest";
import Architecture from "../components/ArtAndCraftCategories/Architecture/Architecture";
import Floral from "../components/ArtAndCraftCategories/Floral/Floral";
import Realistic from "../components/ArtAndCraftCategories/Realistic/Realistic";
import Abstract from "../components/ArtAndCraftCategories/Abstract/Abstract";
import ViewArtDetails from "../components/ArtAndCraftCategories/ViewArtDetails/ViewArtDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:_id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`https://nature-art.vercel.app/forest/${params._id}`),
      },
      {
        path: "/viewUserArtDetails/:_id",
        element: (
          <PrivateRoute>
            <ViewUserArtDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`https://nature-art.vercel.app/userArt/${params._id}`),
      },
      {
        path: "/allArtAndCraftItems",
        element: (
          <PrivateRoute>
            <AllArtAndCraftItems />
          </PrivateRoute>
        ),
        loader: () => axios.get("https://nature-art.vercel.app/userArt"),
      },
      {
        path: "/myArt&CraftList/",
        element: (
          <PrivateRoute>
            <MyArtAndCraft />
          </PrivateRoute>
        ),
        loader: () => axios.get("https://nature-art.vercel.app/userArt"),
      },
      {
        path: "/updateArt/:_id",
        element: (
          <PrivateRoute>
            <UpdateArt />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`https://nature-art.vercel.app/userArt/${params._id}`),
      },
      {
        path: "/mountain",
        element: <Mountain />,
        loader: () => axios.get("https://nature-art.vercel.app/mountain"),
      },
      {
        path: "/forest",
        element: <Forest />,
        loader: () => axios.get("https://nature-art.vercel.app/forest"),
      },
      {
        path: "/architecture",
        element: <Architecture />,
        loader: () => axios.get("https://nature-art.vercel.app/architecture"),
      },
      {
        path: "/floral",
        element: <Floral />,
        loader: () => axios.get("https://nature-art.vercel.app/floral"),
      },
      {
        path: "/realistic",
        element: <Realistic />,
        loader: () => axios.get("https://nature-art.vercel.app/realistic"),
      },
      {
        path: "/abstract",
        element: <Abstract />,
        loader: () => axios.get("https://nature-art.vercel.app/abstract"),
      },
      {
        path: "/:location/:_id",
        element: <ViewArtDetails />,
        loader: ({ params }) =>
          axios.get(
            `https://nature-art.vercel.app/${params.location}/${params._id}`
          ),
      },
    ],
  },
]);

export default router;
