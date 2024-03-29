# LayerZero Shitcoin

I followed LayerZero's [docs](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oft-v1) to build an OFT V1 ERC20. These are ERC20s that can be instantly deployed/bridged to any EVM chain that LayerZero supports.

## Instructions
1. Clone down this repo and `yarn`.
2. Make your `.env` appropriately, there is a sample `.env.example`. API keys are for hardhat contract verification.
3. Modify `hardhat.config.ts` to the networks of your choosing.
4. Modify `LayerZeroShitcoin.sol` to your choosing. My contract currently mints 10M coins to the deployer.
5. Compile contract via `npx hardhat compile`.
6. Modify `contracts/deploy-layerzeroshitcoin.ts` with chains of your choosing. I did Goerli and Fantom testnet. Mainnet addresses / chainIds found [here](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids). You can deploy to as many chains as you want, ideally using a clean EOA so all the contract deployments come out to the same address.
7. Deploy using `npx hardhat run scripts/deploy-layerzeroshitcoin.ts --network <NETWORK>`
8. Optionally verify via `npx hardhat verify --network goerli 0x3EC3EFe4f7D793938f9D1d78989F0F98799d9554 "OmniCat" "OMNI" "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"`
9. On every contract you've deployed, you must call `setTrustedRemoteAddress` on the other contracts you've deployed to whitelist them. I just do this via etherscan. So if you've deployed on 4 chains, you must call this function 3 times each (for every other chain) on all 4 contracts.
   
![image](https://github.com/azflin/layerzero-shitcoin/assets/10667203/d086334c-e056-47fd-82d4-ea85ca3dd623)

10. Finally, to transfer tokens from chain A to chain B - call `sendFrom` on your chain A token contract like so on etherscan:
![image](https://github.com/azflin/layerzero-shitcoin/assets/10667203/d8e21d89-7890-4645-9ed4-3fea9ccffde7)

If you run into any problems or difficulties, contact me on twitter @AzFlin!
