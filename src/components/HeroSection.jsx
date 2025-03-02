import React from 'react'
import SignupForm from './SignupForm'
import FeatureList from './FeatureList'
import TrustedCompanies from './TrustedCompanies'
import UiLaws from './UiLaws'

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-american-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Hero text and features */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-american-blue mb-4">
              Join millions worldwide who automate their work using Zapier.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Connect your apps and automate workflows in just a few clicks. No coding required.
            </p>
            
            <FeatureList />
            
            <UiLaws />
          </div>
          
          {/* Right side - Signup form */}
          <div className="w-full md:w-5/12">
            <SignupForm />
          </div>
        </div>
        
        <TrustedCompanies />
      </div>
    </section>
  )
}

export default HeroSection