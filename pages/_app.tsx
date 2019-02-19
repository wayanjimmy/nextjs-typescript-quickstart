import App, { Container, NextAppContext } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Next.js TypeScript Quickstart</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
