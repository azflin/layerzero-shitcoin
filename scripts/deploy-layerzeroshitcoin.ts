import { ethers } from "hardhat";

async function main() {
  const name = "OmniCat";
  const symbol = "OMNI";
  const lzEndpoint = '0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23'


  const lzShitcoin = await ethers.deployContract("LayerZeroShitcoin", [name, symbol, lzEndpoint]);
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
