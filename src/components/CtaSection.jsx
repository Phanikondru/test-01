import React from 'react'
import Button from './ui/Button'
import { motion } from 'framer-motion'

const CtaSection = ({ scrollToForm }) => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://cdn.midjourney.com/c91b89c6-aa74-444f-854e-e8fdd5d25d1b/0_3.png)',
            backgroundSize: 'cover'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          className="bg-american-blue/90 rounded-xl p-8 sm:p-12 text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to find premium parts for your vehicle?
          </h2>
          <p className="font-sans text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Get started now and see why thousands of customers trust American Auto Parts for their vehicle needs.
          </p>
          <Button 
            onClick={scrollToForm}
            className="min-w-[200px]"
          >
            Shop Premium Parts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
