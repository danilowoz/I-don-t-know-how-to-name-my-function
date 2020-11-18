import React from 'react'
import '../../styles/index.css'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Naming my function"
        description="A short description goes here."
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
