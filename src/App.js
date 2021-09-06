import React, { useState } from "react";

function App() {
  let [tronAddress, setTronAddress] = useState("");
  let [blockChainName, setBlockChainName] = useState("");
  let [ethereumAddress, setEthereumAddress] = useState("");
  let [solanaAddress, setSolanaAddress] = useState("");

  function gettronweb() {
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      tronAddress = window.tronWeb.defaultAddress.base58;
      setTronAddress(tronAddress);
    }
  }

  function getethereumweb() {
    if(window.ethereum){
      window.ethereum.request({ method: 'eth_requestAccounts' });
      ethereumAddress = window.ethereum.selectedAddress;
      setEthereumAddress(ethereumAddress);
      let chainId = window.ethereum.chainId;
      if(chainId === "0x13881"){
        blockChainName = "Polygon Matic";
        setBlockChainName(blockChainName);
      }
      else if(chainId === "0x61"){
        blockChainName = "Binance";
        setBlockChainName(blockChainName);
      }
      else if(chainId === "0x1"){
        blockChainName = "Ethereum Main Net";
        setBlockChainName(blockChainName);
      }
      else if(chainId === "0x3"){
        blockChainName = "Ropsten Test Net";
        setBlockChainName(blockChainName);
      }
      else if(chainId === "0x4"){
        blockChainName = "Rinkeby Test Net";
        setBlockChainName(blockChainName);
      }
    }
  }

  function getsolanaweb(){
    window.solana.connect();
    window.solana.request({ method: "connect" })
    window.solana.on("connect", () => console.log("connected!"))
    if(window.solana.publicKey != null)
    {
      solanaAddress = window.solana.publicKey.toString();
      setSolanaAddress(solanaAddress);
    }
  }
    return (
      <div>
        <button onClick={gettronweb}>Connect to TronLink</button>
        <button onClick={getethereumweb}>Connect to MetaMask</button>
        <button onClick={getsolanaweb}>Connect to Solana</button>
        
        <h1> Tron Address: {tronAddress}</h1>
        <h1> MetaMask Address({blockChainName}): {ethereumAddress}</h1>
        <h1> Solana Address: {solanaAddress}</h1>

      </div>
    );
}

export default App;
