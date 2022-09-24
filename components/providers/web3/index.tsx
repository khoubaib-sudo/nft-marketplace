import { createContext, FunctionComponent, useState, useContext} from "react";
import { creatDafaultState, Web3State } from "./utils";






const Web3Context = createContext<Web3State>(creatDafaultState());

type Web3Providerprops = {
    children: React.ReactNode; //👈 children prop type
};

const Web3Provider = ({children} : Web3Providerprops) => {
    const [web3Api , setWeb3Api] = useState<Web3State>(creatDafaultState())
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