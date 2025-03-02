import React from 'react'
import Logo from './ui/Logo'

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-american-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <button className="text-american-blue font-medium hover:text-american-red transition-colors px-4 py-2 rounded-md hover:bg-gray-100">Log in</button>
      </div>
    </header>
  )
}

export default Header