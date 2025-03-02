import React from 'react'
import FeatureItem from './ui/FeatureItem'

const FeatureList = () => {
  const features = [
    'Easy setup, no coding required',
    'Free forever for core features',
    '14-day trial of premium features & apps'
  ]
  
  return (
    <div className="space-y-4 mt-6 mb-8">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
  )
}

export default FeatureList