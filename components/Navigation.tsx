import * as React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <header className="flex bg-black text-white py-3 px-6">
      <div className="mr-6">▲</div>
      <nav className="flex-auto">
        <Link href="/">
          <a className="text-white no-underline normal-case my-0 mx-6 hover:underline cursor-pointer">
            Home
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className="text-white no-underline normal-case my-0 mx-6 hover:underline cursor-pointer">
            About
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
