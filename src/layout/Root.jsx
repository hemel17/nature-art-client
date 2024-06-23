import Footer from "../components/Footer/Footer";
import SimpleNavbar from "../components/Navbar/SimpleNavbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <SimpleNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
