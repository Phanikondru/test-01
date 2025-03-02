import React from 'react'
import Logo from './ui/Logo'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' }
  ]

  return (
    <motion.header 
      className="bg-american-white sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-3 sm:space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-american-red hover:text-american-blue transition-colors text-xl sm:text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  )
}

export default Header
