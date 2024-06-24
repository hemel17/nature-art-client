import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import SignUp from "../SignUp/Signup";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  return (
    <section>{loading ? <Spinner /> : user ? children : <SignUp />}</section>
  );
};

export default PrivateRoute;
