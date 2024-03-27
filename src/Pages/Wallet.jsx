import React from "react";
import WalletConnect from "../components/WalletConnect";

const Wallet = () => {
  return (
    <div className="flex-container">
      <div className="center-box">
        <img src="/metamask.svg" alt="" />
      <div>
      <h1>Try to connect to Meta Mask</h1>
      <br></br>
      <br></br>
      </div>
      <div>
      <WalletConnect />
      </div>
      </div>
    </div>
  );
};

export default Wallet;
