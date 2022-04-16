import type { AppProps } from 'next/app'
import '../styles/index.$fmt'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
