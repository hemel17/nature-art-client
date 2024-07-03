import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const [forest, setForest] = useState([]);
  const [abstract, setAbstract] = useState([]);
  const [architecture, setArchitecture] = useState([]);
  const [floral, setFloral] = useState([]);
  const [mountain, setMountain] = useState([]);
  const [realistic, setRealistic] = useState([]);

  console.log(forest, abstract, architecture, floral, mountain, realistic);

  useEffect(() => {
    const loadData = async () => {
      // forest
      const forestData = await axios.get("http://localhost:5000/forest");
      setForest(forestData.data);
      // abstract
      const abstractData = await axios.get("http://localhost:5000/abstract");
      setAbstract(abstractData.data);
      // architecture
      const architectureData = await axios.get(
        "http://localhost:5000/architecture"
      );
      setArchitecture(architectureData.data);
      // floral
      const floralData = await axios.get("http://localhost:5000/floral");
      setFloral(floralData.data);
      // mountain
      const mountainData = await axios.get("http://localhost:5000/mountain");
      setMountain(mountainData.data);
      // realistic
      const realisticData = await axios.get("http://localhost:5000/realistic");
      setRealistic(realisticData.data);
    };
    loadData();
  }, []);
  return (
    <section>
      forest : {forest.length}
      abstract : {abstract.length}
      abstract : {architecture.length}
      abstract : {floral.length}
      abstract : {mountain.length}
      abstract : {realistic.length}
      <section className="my-4 md:my-10">
        <Typography variant="h2" className="text-center font-museo">
          Art & Craft Categories
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
    </section>
  );
};

export default ArtAndCraftCategories;
