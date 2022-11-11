import { createContext, FunctionComponent, useState, useContext, useEffect} from "react";
import { createDefaultState, createWeb3State, loadContract, Web3State } from "./utils";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { NftMarketContract } from "@_types/nftMarketContract";

const pageReload = () => {window.location.reload(); }
const handleAccounts = (ethereum: MetaMaskInpageProvider) => async () => {
    const isLocked = !(await ethereum._metamask.isUnlocked()); 
    if (isLocked) {pageReload(); }
}
const setGlobalListeners = (ethereum: MetaMaskInpageProvider) => {
    ethereum.on("chainChanged", pageReload);
    ethereum.on("accountsChanged",handleAccounts(ethereum))
}
const removeGlobalListners = (ethereum: MetaMaskInpageProvider) => {
    ethereum?.removeListener("chainChanged", pageReload);
    ethereum?.removeListener("accountsChanged",handleAccounts)
}

const Web3Context = createContext<Web3State>(createDefaultState());

type Web3Providerprops = {
    children: React.ReactNode; //👈 children prop type
};

const Web3Provider = ({children} : Web3Providerprops) => {
    const [web3Api , setWeb3Api] = useState<Web3State>(createDefaultState());
    
    useEffect(() => {
        async function initWeb3(){
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum as any );
                const contract = await loadContract("NftMarket", provider);
                setGlobalListeners(window.ethereum);
                setWeb3Api(createWeb3State({
                ethereum: window.ethereum,
                provider,
                contract: contract as unknown as NftMarketContract,
                isLoading: false
                }))
            }catch(e:any){
                console.error("Please, install web3 wallet");
                setWeb3Api((api) => createWeb3State({
                    ...api as any,
                    isLoading: false,
                }))
            }            
        }
        
        initWeb3();
        return () => removeGlobalListners(window.ethereum);
        }, [])
        
        
        return(
        <Web3Context.Provider value = {web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3 () {
    return useContext (Web3Context);
}

export function useHooks(){
    const {hooks}= useWeb3();
    return hooks;
}



export default Web3Provider;