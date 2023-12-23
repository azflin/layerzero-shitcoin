import { ethers } from "hardhat";

async function main() {
  const name = "OmniCat";
  const symbol = "OMNI";
  const lzEndpointGoerli = '0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23';
  const lzEndPointFantomTestnet = '0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf';


  const lzShitcoin = await ethers.deployContract("LayerZeroShitcoin", [name, symbol, lzEndPointFantomTestnet]);
  await lzShitcoin.waitForDeployment();

  console.log(
    `lzShitcoin deployed to ${lzShitcoin.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
