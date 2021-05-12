import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Tabs from "../Components/Tabs";

export default function Home() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    axios.get("https://api.wazirx.com/api/v2/tickers").then((data) => {
      // const newTickers = Object.keys(data.data).filter((key) => {
      //   if (key.slice(key.length - 4, key.length - 1) == "inr") return true;
      //   return false;
      // });
      setTickers(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      <Tabs tickers={tickers} />
    </div>
  );
}
