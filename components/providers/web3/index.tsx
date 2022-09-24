import { createContext, FunctionComponent, useState, useContext} from "react";

const Web3Context = createContext<any>(null);

type Web3Providerprops = {
    children: React.ReactNode; //👈 children prop type
};

const Web3Provider = ({children} : Web3Providerprops) => {
    const [web3Api , setWeb3Api] = useState({test: "hello provider!"})
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