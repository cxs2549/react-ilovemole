import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/open-props" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/open-props/normalize.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
