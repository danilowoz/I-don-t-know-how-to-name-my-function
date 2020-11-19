import React from 'react'
import '../../styles/index.css'
import { NextSeo } from 'next-seo'

const domain = 'http://namingmyfunction.vercel.app/'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NextSeo
        title="I don't know how to name my function"
        description="It's not about algorithms, data structures, or whatever, but about naming function and variables! Here's a tool to help you in this intense journey: naming a function."
        openGraph={{
          url: domain,
          title: `I don't know how to name my function`,
          description: 'Open Graph Description',
          images: [
            {
              url: `${domain}/share.jpg`,
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
