import React from 'react'
import { motion } from 'framer-motion'

const Logo = ({ small = false }) => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`${small ? 'w-8 h-8' : 'w-10 h-10'} relative`}>
        <motion.div 
          className="absolute top-0 left-0 w-full h-2/3 bg-american-red rounded-t-md"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-american-blue rounded-b-md"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-american-white font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          A
        </motion.div>
      </div>
      
      <motion.span 
        className={`font-bold ${small ? 'text-lg' : 'text-xl'} text-american-blue`}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        American Auto parts
      </motion.span>
    </motion.div>
  )
}

export default Logo
