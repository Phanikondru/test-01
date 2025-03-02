import React from 'react'

const Logo = ({ small = false }) => {
  return (
    <div className={`text-american-red font-bold ${small ? 'text-sm' : 'text-xl'}`}>
      <span className="mr-1">_</span>zapier
    </div>
  )
}

export default Logo