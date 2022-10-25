import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>

export type UseAccountHook = ReturnType<AccountHookFactory>

// deps -> provider, ethereum, contract (web3State)
export const hookFactory: AccountHookFactory = (provider) => (params) => {
  const swrRes = useSWR(
    provider ? "web/useAccount" : null,
    () => {
      return "test user"
    }
  )

  return swrRes;
}

// export const useAccount = hookFactory({ethereum: undefined, provider: undefined});