import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ArtAndCraftCategories = () => {
  const arts = [
    {
      name: "Forest Based Landscape Painting",
      photo: "https://i.ibb.co/KmWBYpG/10329.jpg",
      url: "/forest",
    },
    {
      name: "Floral Watercolor Art",
      photo:
        "https://i.ibb.co/58zjxcL/watercolor-painting-with-…ti-colored-abstract-backgrounds-generative-ai.jpg",
      url: "/floral",
    },
    {
      name: "Abstract Oil Painting",
      photo: "https://i.ibb.co/WyQWdb1/close-up-oil-painting-texture.jpg",
      url: "/abstract",
    },
    {
      name: "Architectural Charcoal Drawing",
      photo: "https://i.ibb.co/smqq3XC/architecture.jpg",
      url: "/architecture",
    },
    {
      name: "Mountain View Canvas",
      photo:
        "https://i.ibb.co/2cK2JDL/mountain-landscape-outdoors-snow-scene-generative-ai.jpg",
      url: "/mountain",
    },
    {
      name: "Realistic Oil Potrait",
      photo:
        "https://i.ibb.co/qn2S75h/young-adult-female-smiling-closeup-portrait-generative-ai.jpg",
      url: "/realistic",
    },
  ];
  return (
    <section className="my-4 md:my-10">
      <Typography variant="h2" className="text-center font-museo">
        <Typewriter
          words={["Art & Craft Categories"]}
          loop={0}
          cursor
          cursorBlinking
        />
      </Typography>
      <div className="grid grid-cols-1 gap-6 my-4 md:my-6 md:grid-cols-2 lg:grid-cols-3">
        {arts.map((art, idx) => {
          return (
            <Link key={idx} to={art.url}>
              <Card className="mx-auto mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={art.photo}
                    alt={art.name}
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-center"
                  >
                    {art.name}
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ArtAndCraftCategories;
