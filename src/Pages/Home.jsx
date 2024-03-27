import React from "react";
import Graph from "../components/Graph";
import Prices from "../components/Prices";

const Home = () => {
  return (
    <div className="flex-container">
      <Graph />
      <Prices />
    </div>
  );
};

export default Home;
