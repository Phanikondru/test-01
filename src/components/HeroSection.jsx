import React, { forwardRef } from 'react'
import SignupForm from './SignupForm'
import { motion } from 'framer-motion'

const HeroSection = forwardRef(function HeroSection(props, ref) {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image with proper coverage */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://cdn.midjourney.com/c91b89c6-aa74-444f-854e-e8fdd5d25d1b/0_3.png)',
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* Gradient overlay for better text readability - fades from top to bottom */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 py-10 sm:py-12 md:py-16">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Advancing knowledge with artificial intelligence
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light tracking-wide">
            American Auto Parts is pioneering the next generation of automotive solutions for your vehicle needs.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SignupForm />
        </motion.div>
      </div>
    </section>
  )
})

export default HeroSection
