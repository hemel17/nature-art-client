import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import CraftItems from "../CraftItems/CraftItems";
import ExtraOne from "../ExtraOne/ExtraOne";
import ExtraTwo from "../ExtraTwo/ExtraTwo";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <CraftItems />
      <ExtraOne />
      <ExtraTwo />
      <ArtAndCraftCategories />
    </>
  );
};

export default Home;
