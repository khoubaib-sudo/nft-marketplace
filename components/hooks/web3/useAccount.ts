import { CryptoHookFactory } from "@_types/hooks";
import { useEffect } from "react";
import useSWR from "swr";

type UseAccountResponse = {
  connect: () => void
}

type AccountHookFactory = CryptoHookFactory<string ,UseAccountResponse>

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
  
  useEffect(() => {
    ethereum?.on("accountsChanged", handleAccountsChanged);
    return () => {
      ethereum?.removeListener("accountsChanged", handleAccountsChanged)
    }
  })
  
  const handleAccountsChanged = (...args: unknown[]) => {
    const accounts = args[0] as string[];
    if (accounts.length === 0) {
      console.error("Please, connect to web3 wallet")
    } else if (accounts[0] !== swrRes.data) {
      alert("accounts has changed");
      console.log(accounts[0]);
    }
  }
  
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