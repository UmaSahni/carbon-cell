import React from "react";
import Graph from "../components/Graph";
import Prices from "../components/Prices";
import WalletConnect from "../components/WalletConnect";

const Home = () => {
  return (
    <div className="flex-container">
      <div className="flex-home">
        {/* Graph of population */}
        <div>
          <h1 style={{ marginBottom: "1rem" }}>
            United States Population Data
          </h1>
          <Graph />
        </div>

        {/* Connect Wallet */}
        <div>
          <h1 style={{ marginBottom: "1rem" }}>
        
            Connect Wallet with Mata Mask
          </h1>
          <div className="center-flex">
            <img src="metamask.svg" alt="" />
            <WalletConnect />
          </div>
        </div>
      </div>

      {/* Prices of coins */}
      <h1 style={{ marginTop: "1rem" }}>CoinDesk Bitcoin Price</h1>
      <Prices />
    </div>
  );
};

export default Home;
