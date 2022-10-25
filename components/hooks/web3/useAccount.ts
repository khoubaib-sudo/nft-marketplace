import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>

export type UseAccountHook = ReturnType<AccountHookFactory>

// deps -> provider, ethereum, contract (web3State)
export const hookFactory: AccountHookFactory = ({provider}) => () => {
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

  return swrRes;
}

// export const useAccount = hookFactory({ethereum: undefined, provider: undefined});