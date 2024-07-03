import axios from "axios";
import { useEffect, useState } from "react";

const ArtAndCraftCategories = () => {
  const [forest, setForest] = useState([]);
  const [abstract, setAbstract] = useState([]);
  const [architecture, setArchitecture] = useState([]);
  const [floral, setFloral] = useState([]);
  const [mountain, setMountain] = useState([]);
  const [realistic, setRealistic] = useState([]);

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
    </section>
  );
};

export default ArtAndCraftCategories;
