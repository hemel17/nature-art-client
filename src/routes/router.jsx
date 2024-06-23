import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignUp from "../components/SignUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
