import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../components/SignUp/Signup";
import LogIn from "../components/LogIn/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddCraftItem from "../components/AddCraftItem/AddCraftItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
    ],
  },
]);

export default router;
