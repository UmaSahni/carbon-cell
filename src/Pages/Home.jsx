import React from "react";
import Graph from "../components/Graph";
import Prices from "../components/Prices";
import WalletConnect from "../components/WalletConnect";

const Home = () => {
  return (
    <div className="flex-container">
      <div className="flex-home">
        <Graph />

        <div className="center-flex">
          <img  src="metamask.svg" alt="" />
          <WalletConnect />
        </div>
      </div>
      <Prices />
    </div>
  );
};

export default Home;
