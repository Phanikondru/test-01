import React from 'react'
import { motion } from 'framer-motion'
import { FaShippingFast, FaCheckCircle, FaHeadset, FaLock } from 'react-icons/fa'

const FeatureSection = () => {
  const features = [
    {
      icon: FaShippingFast,
      title: 'Fast & Free Shipping',
      description: 'Free shipping on all orders over $50 with delivery within 2-3 business days.'
    },
    {
      icon: FaCheckCircle,
      title: 'Guaranteed Authentic',
      description: 'All parts are genuine OEM or premium aftermarket from trusted manufacturers.'
    },
    {
      icon: FaHeadset,
      title: 'Expert Support',
      description: 'Our team of automotive specialists is available 7 days a week to assist you.'
    },
    {
      icon: FaLock,
      title: 'Secure Transactions',
      description: 'Shop with confidence knowing your information is protected by bank-level encryption.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.h2 
          className="text-center font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose American Auto Parts
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
              variants={itemVariants}
            >
              <div className="text-american-red text-3xl mb-4">
                <feature.icon />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="font-sans text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureSection
