import { Goerli, Sepolia, FantomTestnet, Config } from "@usedapp/core";
import { providers, getDefaultProvider } from "ethers";

export const networks = [Goerli, Sepolia];
export const config: Config = {
  networks: [FantomTestnet, Sepolia],
  readOnlyChainId: FantomTestnet.chainId,
  readOnlyUrls: {
    [FantomTestnet.chainId]: new providers.JsonRpcProvider(
      "https://rpc.testnet.fantom.network", // Use the appropriate RPC URL for Fantom Testnet
      {
        chainId: 4002, // Use the appropriate chain ID for Fantom Testnet
        name: "fantomtestnet",
      }
    ),
    [Sepolia.chainId]: getDefaultProvider("sepolia"),
  },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
};
