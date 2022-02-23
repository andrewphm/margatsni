import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

// SSR app: Next.js
// -> database MongoDB
// -> react-loading-skeleton
// -> tailwind

// Folder Structure
// src
// -> Components,
// -> Constants,
// -> Context,
// -> helpers,
// -> lib (mongoDB connection)
