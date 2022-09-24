import { createContext, FunctionComponent, useState, useContext} from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";



export type web3State = {
    ethereum?: MetaMaskInpageProvider;
    provider?: providers.Web3Provider;
    contract?: Contract;   
}

const Web3Context = createContext<web3State>(null);

type Web3Providerprops = {
    children: React.ReactNode; //👈 children prop type
};

const Web3Provider = ({children} : Web3Providerprops) => {
    const [web3Api , setWeb3Api] = useState<web3State>(null)
    return(
        <Web3Context.Provider value = {web3Api}>
            {children}
        </Web3Context.Provider>

    )

}

export function useWeb3 () {
    return useContext (Web3Context);
}
 
export default Web3Provider;