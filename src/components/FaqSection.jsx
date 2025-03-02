import React from 'react'
import FaqItem from './ui/FaqItem'
import { motion } from 'framer-motion'

const FaqSection = () => {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. For business customers, we also offer invoice payment options with net-30 terms upon approval.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a confirmation email with tracking information. You can also log into your account on our website to view real-time updates on your delivery.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates are calculated at checkout based on destination, weight, and chosen shipping method.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items in new, unused condition. Some specialized parts may have different return terms, which will be noted in the product description.'
    },
    {
      question: 'How do I know if a part is compatible with my vehicle?',
      answer: "Our advanced search system allows you to enter your vehicle's make, model, and year to ensure compatibility. If you're unsure, our customer service team can help verify fit before purchase."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and policies.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
