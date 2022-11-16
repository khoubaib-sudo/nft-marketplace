import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provaider } from '@providers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ToastContainer />
    <Web3Provaider>
      <Component {...pageProps}/>
    </Web3Provaider>
    
  </> 
  )
}

export default MyApp
