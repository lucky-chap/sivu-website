/* eslint-disable @next/next/no-script-component-in-head */
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import FontFace from 'components/font-face'
import theme from 'theme'
import { getSeo } from 'utils/seo'
import 'components/global.css'

const App = ({ Component, pageProps }) => {
  const seo = getSeo()

  return (
    <>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <meta name='theme-color' content='#319795' />
      </Head>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
      <Script src="https://status.sivu.tk/widget/script.js" />
      <Script src='/cannyuser.js' />
      <Script src='/changelog.js' />
      <Script src="https://unpkg.com/feedbackfin@^1" defer />
      <Script src="/fin.js" /> 
    </>
  )
}

export default App
