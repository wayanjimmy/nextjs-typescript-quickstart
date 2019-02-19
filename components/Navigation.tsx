import * as React from 'react'
import Link from 'next/link'

type NavButtonProps = {
  children: React.ReactNode
}

const NavButton = ({ children }: NavButtonProps) => (
  <a className="white no-underline normal-case my-0 mx-6 hover:underline cursor-pointer">
    {children}
  </a>
)

function Navigation() {
  return (
    <header className="flex bg-black text-white py-3 px-6">
      <div className="mr-6">▲</div>
      <nav className="flex-auto">
        <Link href="/">
          <NavButton>Home</NavButton>
        </Link>
        <Link href="/about">
          <NavButton>About</NavButton>
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
