import React from 'react'
import '../../styles/index.css'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: any) {
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
