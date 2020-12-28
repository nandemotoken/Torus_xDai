let web3tr;
let torus;
 
async function newTorus() {

torus = new Torus({
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

const Address = "0xA466528252Eb9aE675d5E6C63163CAACB5E47DC6";

async function checkmycake(){
  console.log("test");
  
  mycontract = await new web3js.eth.Contract(abi, Address);
  let fromblockchain1 = await mycontract.methods.name().call();
  console.log(fromblockchain1);
}

newTorus();
