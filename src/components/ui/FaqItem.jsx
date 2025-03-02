import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FaqItem = ({ question, answer, hasReadMore = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (!isOpen) setExpanded(false) // Reset expanded state when closing
  }

  const toggleReadMore = (e) => {
    e.stopPropagation() // Prevent triggering the accordion toggle
    setExpanded(!expanded)
  }

  // Truncate answer for non-expanded view
  const truncatedAnswer = answer.substring(0, 150) + (answer.length > 150 ? '...' : '')

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 sm:py-6 flex justify-between items-start text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">{question}</span>
        <span className="text-american-red flex-shrink-0 mt-0.5">
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-6 text-sm sm:text-base text-gray-600">
              {hasReadMore && !expanded ? (
                <>
                  <p>{truncatedAnswer}</p>
                  <button 
                    onClick={toggleReadMore}
                    className="mt-2 text-american-blue hover:text-american-red font-medium text-sm focus:outline-none transition-colors"
                  >
                    Read More
                  </button>
                </>
              ) : (
                <>
                  <p>{answer}</p>
                  {hasReadMore && expanded && (
                    <button 
                      onClick={toggleReadMore}
                      className="mt-2 text-american-blue hover:text-american-red font-medium text-sm focus:outline-none transition-colors"
                    >
                      Show Less
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FaqItem
