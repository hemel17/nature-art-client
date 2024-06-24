import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import LogIn from "../LogIn/Login";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  return (
    <section>{loading ? <Spinner /> : user ? children : <LogIn />}</section>
  );
};

export default PrivateRoute;
