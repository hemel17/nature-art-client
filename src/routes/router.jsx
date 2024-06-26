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
          axios.get(`http://localhost:5000/forest/${params._id}`),
      },
      {
        path: "/allArtAndCraftItems",
        element: (
          <PrivateRoute>
            <AllArtAndCraftItems />
          </PrivateRoute>
        ),
        loader: () => axios.get("http://localhost:5000/forest"),
      },
      {
        path: "/myArt&CraftList/:email",
        element: (
          <PrivateRoute>
            <MyArtAndCraft />
          </PrivateRoute>
        ),
        loader: () => axios.get("http://localhost:5000/forest"),
      },
    ],
  },
]);

export default router;
