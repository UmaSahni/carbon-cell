import React, { useState } from "react";
import Web3 from "web3";

const WalletConnect = () => {
  const [web3, setWeb3] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  console.log(window.ethereum);
  // Check if MetaMask is installed
  const checkMetaMaskInstalled = () => {
    if (window.ethereum) {
      console.log("Hi");
      setWeb3(new Web3(window.ethereum));
      walletConnects();
    } else {
      setConnectionStatus("Unable to connect")
      alert("Please install MetaMask to use this feature !");
    }
  };

  // Logic to connect to the wallet
  const walletConnects = async () => {
    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnectionStatus("Wallet connected successfully!");
      // Print connected account
      setAccountAddress(accounts[0]);
      console.log("Connected Account:", accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error.message);
      setConnectionStatus("Failed to connect wallet. Please try again.");
    }
  };

  console.log(web3);

  return (
    <div>
      <button onClick={checkMetaMaskInstalled}>Connect Wallet</button>
      
      <p style={{ color : connectionStatus === "Wallet connected successfully!" ? "green" : "red"}} >{connectionStatus}</p>
      <br></br>
      <p>{accountAddress && `Account Address : ${accountAddress}` }</p>
    </div>
  );
};

export default WalletConnect;
