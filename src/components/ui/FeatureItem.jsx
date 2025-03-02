import React from 'react'

const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-center group">
      <svg 
        className="w-5 h-5 text-american-red mr-3 flex-shrink-0 transition-transform group-hover:scale-110" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
          clipRule="evenodd" 
        />
      </svg>
      <span className="text-gray-800">{text}</span>
    </div>
  )
}

export default FeatureItem