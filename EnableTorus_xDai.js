let web3tr;
 
async function newTorus() {

const torus = new Torus({
  buttonPosition: "top-right" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "https://rpc.xdaichain.com/", // default: mainnet
    chainId: 100, // default: 1
    networkName: "xDai Stable Network" // default: Main Ethereum Network
  },
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = new Web3(torus.provider);
}

newTorus();
