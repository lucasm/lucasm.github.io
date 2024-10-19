import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/819f612977ba7ba86c14b739b908c73f?family=Styrene+A+Regular+Regular"
          rel="stylesheet"
        />
        {/* <link href="https://fonts.cdnfonts.com/css/maison-neue" rel="stylesheet" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
