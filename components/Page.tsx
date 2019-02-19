import * as React from 'react'
import Head from 'next/head'

interface PageProps {
  title?: string
  children: React.ReactNode
}

function Page({ children, title }: PageProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Head>
        <title>{title || 'Next.js TypeScript Quickstart'}</title>
      </Head>
      {children}
    </div>
  )
}

export default Page
