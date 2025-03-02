import React from 'react'

const InputField = ({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  error = '',
  disabled = false,
  className = '',
  autoComplete = 'on',
  helpText = '',
  name
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1 font-sans"
        >
          {label} {required && <span className="text-american-red">*</span>}
        </label>
      )}
      
      <input
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        className={`
          font-sans
          w-full px-3 py-2 border rounded-md 
          bg-white text-gray-900
          placeholder:text-gray-400 
          focus:ring-1 focus:ring-american-blue focus:border-american-blue
          disabled:bg-gray-100 disabled:text-gray-500 
          transition duration-200
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600 font-sans">{error}</p>
      )}
      
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500 font-sans">{helpText}</p>
      )}
    </div>
  )
}

export default InputField
