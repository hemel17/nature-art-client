import axios from "axios";
import { useEffect, useState } from "react";

const ArtAndCraftCategories = () => {
  const [forest, setForest] = useState([]);
  const [abstract, setAbstract] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      // forest
      const forestData = await axios.get("http://localhost:5000/forest");
      setForest(forestData.data);
      // abstract
      const abstractData = await axios.get("http://localhost:5000/forest");
      setAbstract(abstractData.data);
      // architecture
      // floral
      // mountain
      // realistic
    };
    loadData();
  }, []);
  return (
    <section>
      forest : {forest.length}
      abstract : {abstract.length}
    </section>
  );
};

export default ArtAndCraftCategories;
