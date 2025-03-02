import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaSearch } from 'react-icons/fa'

const SelectField = ({ 
  label, 
  id, 
  options, 
  value, 
  onChange, 
  required = false,
  error = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectedOption = options.find(option => option.value === value);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Filter options based on search term
  const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle selection from dropdown
  const handleSelect = (optionValue) => {
    onChange({
      target: {
        id: id,
        value: optionValue
      }
    });
    setSearchTerm('');
    setIsFocused(false);
  };

  // Handle input change for searching
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isFocused) {
      setIsFocused(true);
    }
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // Reset search term when dropdown closes
  useEffect(() => {
    if (!isFocused) {
      setSearchTerm('');
    }
  }, [isFocused]);

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      <motion.label 
        htmlFor={id} 
        className="block mb-2 text-sm font-medium text-american-blue"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {label} {required && <span className="text-american-red">*</span>}
      </motion.label>

      {/* Custom Select Trigger with Search Input */}
      <motion.div
        className={`w-full px-4 py-3 border ${error ? 'border-american-red' : isFocused ? 'border-american-blue' : 'border-gray-300'} 
          rounded-md focus:outline-none bg-white flex justify-between items-center cursor-pointer
          hover:border-american-blue transition-colors duration-200
          ${isFocused ? 'ring-2 ring-american-blue ring-opacity-50' : ''}`}
        onClick={() => {
          setIsFocused(true);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.01 }}
        role="combobox"
        aria-expanded={isFocused}
        aria-owns={`${id}-dropdown`}
        aria-haspopup="listbox"
      >
        <div className="flex-grow flex items-center">
          {isFocused ? (
            <div className="flex items-center w-full">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={selectedOption ? selectedOption.label : "Search..."}
                className="bg-transparent outline-none border-none focus:outline-none focus:ring-0 w-full text-gray-900"
                style={{ boxShadow: 'none' }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setIsFocused(false);
                  } else if (e.key === 'Enter' && filteredOptions.length > 0) {
                    handleSelect(filteredOptions[0].value);
                  }
                }}
              />
            </div>
          ) : (
            <span className={`${!value ? 'text-gray-500' : 'text-gray-900'}`}>
              {selectedOption ? selectedOption.label : 'Select an option'}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isFocused ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-american-blue" />
        </motion.div>
      </motion.div>

      {/* Dropdown Options */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            id={`${id}-dropdown`}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="listbox"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <motion.div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer ${value === option.value ? 'bg-american-blue text-white' : 'hover:bg-gray-50'}`}
                  whileHover={{ 
                    backgroundColor: value === option.value ? '#1E40AF' : '#F9FAFB',
                    x: 3 
                  }}
                  onClick={() => handleSelect(option.value)}
                  tabIndex="0"
                  role="option"
                  aria-selected={value === option.value}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(option.value);
                    }
                  }}
                >
                  {option.label}
                </motion.div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No options found</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden native select for form submission */}
      <select 
        name={id}
        value={value}
        onChange={onChange}
        className="sr-only"
        required={required}
        aria-hidden="true"
      >
        <option value="" disabled>Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <motion.p 
          className="mt-1 text-sm text-american-red"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring' }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default SelectField
