import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";



export type web3Params = {
    ethereum: MetaMaskInpageProvider | null;
    provider: providers.Web3Provider | null;
    contract: Contract | null;   
}

export type Web3State = {
   isLoading: boolean; //true while loading web3state
} & web3Params

export const creatDafaultState = () => {
    return {
        ethereum : null,
        provider : null,
        contract : null,
        isLoading : true,
    }
}