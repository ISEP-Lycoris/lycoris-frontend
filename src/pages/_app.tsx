import type { AppProps } from 'next/app'
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{``}</style>
      <Head>
        <title>Lycoris | ISEP</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
