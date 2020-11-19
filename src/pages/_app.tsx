import React from 'react'
import '../../styles/index.css'
import { NextSeo } from 'next-seo'

import data from 'components/data'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        openGraph={{
          url: data.domain,
          title: data.title,
          description: data.description,
          images: [{ url: `${data.domain}/share.jpg` }],
          site_name: data.title,
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
