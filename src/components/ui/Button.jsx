import React from 'react'

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-american-red hover:bg-american-blue text-american-white font-medium py-3 px-6 rounded-md transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-american-blue focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button