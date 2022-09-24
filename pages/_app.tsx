import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provaider } from '@providers'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Web3Provaider>
      <Component {...pageProps}/>
    </Web3Provaider>
    
  </> 
  )
}

export default MyApp
