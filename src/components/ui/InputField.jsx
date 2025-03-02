import React from 'react'

const InputField = ({ 
  label, 
  type = 'text', 
  id, 
  required = false,
  placeholder = '',
  value,
  onChange
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-american-blue focus:border-american-blue transition-shadow"
        required={required}
      />
    </div>
  )
}

export default InputField