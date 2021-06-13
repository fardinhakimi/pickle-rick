import PickleError from 'components/Error'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { GlobalStyle } from '../styles/global'

type ErrorProps = {
  hasError: boolean,
  statusCode: number,
}


type LocationProps = ErrorProps & {
  locations: Pickle.LocationFilterResult
}

export function isErrorProps(pageProps: any): pageProps is ErrorProps {
	return !!(pageProps as ErrorProps).hasError && !(pageProps as LocationProps).locations
}

function App({ Component, pageProps }: AppProps) {

  if(isErrorProps(pageProps)) {
    return <PickleError statusCode={pageProps.statusCode}/>
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App
