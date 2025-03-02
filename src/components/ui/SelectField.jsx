import React, { useState } from 'react'

const SelectField = ({ 
  label, 
  id, 
  options = [],
  required = false,
  searchable = false,
  placeholder = 'Select an option'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const filteredOptions = searchable && searchTerm 
    ? options.filter(option => 
        typeof option === 'string' 
          ? option.toLowerCase().includes(searchTerm.toLowerCase())
          : option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm('');
  };
  
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
      </label>
      
      <div className="relative">
        <button
          type="button"
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-american-blue focus:border-american-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption 
            ? (typeof selectedOption === 'string' ? selectedOption : selectedOption.label) 
            : <span className="text-gray-500">{placeholder}</span>}
        </button>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
          {searchable && (
            <div className="sticky top-0 z-10 bg-white px-2 py-2">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-american-blue focus:border-american-blue"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          
          <ul className="py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="text-gray-900 relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-american-blue hover:text-white transition-colors"
                  onClick={() => handleSelect(option)}
                >
                  {typeof option === 'string' ? option : option.label}
                </li>
              ))
            ) : (
              <li className="text-gray-500 relative cursor-default select-none py-2 pl-3 pr-9">
                No options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SelectField