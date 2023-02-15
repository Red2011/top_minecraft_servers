import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-screen" lang="en">
      <Head/>
        {/*<link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>*/}
      <body className="h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
