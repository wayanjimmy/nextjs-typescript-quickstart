import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body className="font-sans m-0">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
