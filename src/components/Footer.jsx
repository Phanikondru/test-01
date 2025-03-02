import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-sans text-sm mb-2">
          &copy; {currentYear} American Auto Parts. All rights reserved.
        </p>
        <p className="font-sans text-xs text-gray-400">
          123 Luxury Drive, Beverly Hills, CA 90210
        </p>
      </div>
    </footer>
  )
}

export default Footer
