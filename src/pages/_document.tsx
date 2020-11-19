import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  renderGTMSnippet() {
    return (
      <>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5DPGX77TYQ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5DPGX77TYQ');
        `,
          }}
        />
      </>
    )
  }

  render() {
    return (
      <Html lang="en">
        <Head>{this.renderGTMSnippet()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
