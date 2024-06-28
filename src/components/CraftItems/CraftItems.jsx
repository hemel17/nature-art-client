import axios from "axios";
import { useEffect, useState } from "react";

const CraftItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/forest");
        console.log(res);
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return <section>Total items : {items.length}</section>;
};

export default CraftItems;
