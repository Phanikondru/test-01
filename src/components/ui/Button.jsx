import React from 'react'

const Button = ({ 
  children, 
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-8 py-3 font-medium text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-american-red hover:bg-american-red/90 text-white focus:ring-american-red/50',
    secondary: 'bg-american-blue hover:bg-american-blue/90 text-white focus:ring-american-blue/50',
    outline: 'border-2 border-american-red text-american-red hover:bg-american-red/10 focus:ring-american-red/50'
  }
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
