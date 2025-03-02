import React, { useRef } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import CtaSection from './components/CtaSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'

function App() {
  const formRef = useRef(null)
  
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col bg-american-white">
        <Header />
        <main className="flex-grow flex flex-col">
          <HeroSection ref={formRef} />
          <FeatureSection />
          <CtaSection scrollToForm={scrollToForm} />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
