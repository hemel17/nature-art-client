import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../components/SignUp/Signup";
import LogIn from "../components/LogIn/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddCraftItem from "../components/AddCraftItem/AddCraftItem";
import Home from "../components/Home/Home";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <ViewDetails />,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/forest/${params._id}`),
      },
    ],
  },
]);

export default router;
