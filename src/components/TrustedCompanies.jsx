import React from 'react'

const TrustedCompanies = () => {
  const companies = [
    { name: 'Dropbox', logo: 'dropbox.svg' },
    { name: 'Lyft', logo: 'lyft.svg' },
    { name: 'HelloFresh', logo: 'hellofresh.svg' },
    { name: 'Asana', logo: 'asana.svg' },
    { name: 'Zendesk', logo: 'zendesk.svg' }
  ]
  
  return (
    <div className="mt-20 text-center">
      <p className="text-gray-600 mb-8 text-lg">Trusted at companies large and small</p>
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {companies.map((company, index) => (
          <div key={index} className="grayscale opacity-70 hover:opacity-100 transition-opacity hover:scale-105 duration-200">
            <img 
              src={`https://via.placeholder.com/120x40?text=${company.name}`} 
              alt={company.name} 
              className="h-8 md:h-10" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedCompanies