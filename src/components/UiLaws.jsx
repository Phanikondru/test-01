import React from 'react'

const UiLaws = () => {
  const laws = [
    {
      name: "Hick's Law",
      description: "The time it takes to make a decision increases with the number of options.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      name: "Fitts's Law",
      description: "The time to acquire a target is a function of the distance to and size of the target.",
      icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
    },
    {
      name: "Jakob's Law",
      description: "Users spend most of their time on other sites, so they prefer your site to work the same way.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    }
  ]
  
  return (
    <div className="mt-8 mb-6">
      <h3 className="text-lg font-semibold text-american-blue mb-4">Why our design works:</h3>
      <div className="space-y-4">
        {laws.map((law, index) => (
          <div key={index} className="flex p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="mr-3 flex-shrink-0">
              <div className="w-10 h-10 bg-american-blue rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-american-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={law.icon} />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-american-blue">{law.name}</h4>
              <p className="text-sm text-gray-600">{law.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UiLaws