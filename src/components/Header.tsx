import { Link } from 'gatsby'
import React from 'react'

const Header: React.FC = () => {
  const navigations = [
    { name: 'abc', url: '/' },
    { name: 'cde', url: '/' },
    { name: 'asdf', url: '/' },
    { name: 'asdfasd', url: '/' },
  ]
  return (
    <div className="bg-violet-200">
      <header className="flex items-center flex-wrap content-center container mx-auto px-4 py-4 justify-between max-w-5xl">
        <Link className="font-MadokaRunes ml-10 text-4xl px-1 py-1" to="/">
          Red Mage
        </Link>
        <nav className="flex mr-4">
          {navigations.map((menu) => (
            <div className="px-2 py-1 text-2xl" key={menu.name}>
              {menu.name}
            </div>
          ))}
        </nav>
      </header>
    </div>
  )
}

export default Header
