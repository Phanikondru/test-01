import React from 'react'
import Logo from './ui/Logo'

const Footer = () => {
  return (
    <footer className="bg-american-blue py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-american-red p-2 rounded mr-2">
              <Logo small />
            </div>
            <span className="text-xl font-bold text-american-white">Zapier</span>
          </div>
          <div className="flex items-center">
            <span className="text-american-white mr-2">curated by</span>
            <span className="font-bold text-xl text-american-white">Mobbin</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer