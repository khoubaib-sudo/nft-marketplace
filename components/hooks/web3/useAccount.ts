import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>

export type UseAccountHook = ReturnType<AccountHookFactory>

// deps -> provider, ethereum, contract (web3State)
export const hookFactory: AccountHookFactory = ({provider, ethereum}) => () => {
  const swrRes = useSWR(
    provider ? "web/useAccount" : null,
    async () => {
      const accounts = await provider!.listAccounts();
      const account = accounts[0];
      
      if (!account){
        throw "cannot retreive account! Connect to Web3 wallet"
      }
      
      return account;
    },{
      revalidateOnFocus: false
    }
  )
  
  const connect = async () => {
    try {
      ethereum?.request({method: "eth_requestAccounts"});
    }catch(e){
      console.error(e);
    }
    
  }

  return {
    ...swrRes,
    connect
    };
}

// export const useAccount = hookFactory({ethereum: undefined, provider: undefined});