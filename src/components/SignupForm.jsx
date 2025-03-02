import React, { useState } from 'react'
import SelectField from './ui/SelectField'
import InputField from './ui/InputField'
import Button from './ui/Button'
import { motion } from 'framer-motion'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    year: '',
    makeModel: '',
    parts: '',
    name: '',
    phone: '',
    state: ''
  })

  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.year) newErrors.year = 'Year is required'
    if (!formData.makeModel) newErrors.makeModel = 'Make and Model is required'
    if (!formData.parts) newErrors.parts = 'Parts is required'
    
    // Enhanced name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    // Enhanced phone validation with international support
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      // Remove all non-digits for validation (except the + for international)
      const phoneForValidation = formData.phone.replace(/[^\d+]/g, '');
      
      // Check if it's an international number (starts with +)
      const isInternational = phoneForValidation.startsWith('+');
      
      if (isInternational) {
        // For international numbers, ensure minimum length (country code + number)
        if (phoneForValidation.length < 8) {
          newErrors.phone = 'International phone number is too short';
        }
      } else {
        // For US numbers
        if (phoneForValidation.length !== 10) {
          newErrors.phone = 'US phone number must be 10 digits';
        } else if (!/^[2-9]\d{9}$/.test(phoneForValidation)) {
          // US phone numbers typically don't start with 0 or 1
          newErrors.phone = 'Please enter a valid US phone number';
        }
      }
    }
    
    if (!formData.state) newErrors.state = 'State is required'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    console.log('Form submitted:', formData)
    // Handle form submission (API call etc.)
    setFormSubmitted(true)
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        year: '',
        makeModel: '',
        parts: '',
        name: '',
        phone: '',
        state: ''
      })
      setFormSubmitted(false)
    }, 3000)
  }

  const yearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= currentYear - 30; i--) {
      years.push({ value: i.toString(), label: i.toString() });
    }
    return years;
  }

  const makeModelOptions = [
    { value: 'toyota_camry', label: 'Toyota Camry' },
    { value: 'toyota_corolla', label: 'Toyota Corolla' },
    { value: 'toyota_rav4', label: 'Toyota RAV4' },
    { value: 'honda_civic', label: 'Honda Civic' },
    { value: 'honda_accord', label: 'Honda Accord' },
    { value: 'honda_crv', label: 'Honda CR-V' },
    { value: 'ford_f150', label: 'Ford F-150' },
    { value: 'ford_escape', label: 'Ford Escape' },
    { value: 'ford_explorer', label: 'Ford Explorer' },
    { value: 'chevrolet_silverado', label: 'Chevrolet Silverado' },
    { value: 'chevrolet_equinox', label: 'Chevrolet Equinox' },
    { value: 'chevrolet_malibu', label: 'Chevrolet Malibu' },
    { value: 'nissan_altima', label: 'Nissan Altima' },
    { value: 'nissan_rogue', label: 'Nissan Rogue' },
    { value: 'nissan_sentra', label: 'Nissan Sentra' },
    { value: 'hyundai_elantra', label: 'Hyundai Elantra' },
    { value: 'hyundai_tucson', label: 'Hyundai Tucson' },
    { value: 'hyundai_santa_fe', label: 'Hyundai Santa Fe' },
    { value: 'kia_forte', label: 'Kia Forte' },
    { value: 'kia_sportage', label: 'Kia Sportage' },
    { value: 'kia_sorento', label: 'Kia Sorento' },
    { value: 'subaru_outback', label: 'Subaru Outback' },
    { value: 'subaru_forester', label: 'Subaru Forester' },
    { value: 'subaru_impreza', label: 'Subaru Impreza' },
    { value: 'bmw_3series', label: 'BMW 3 Series' },
    { value: 'bmw_5series', label: 'BMW 5 Series' },
    { value: 'bmw_x5', label: 'BMW X5' },
    { value: 'mercedes_cclass', label: 'Mercedes-Benz C-Class' },
    { value: 'mercedes_eclass', label: 'Mercedes-Benz E-Class' },
    { value: 'mercedes_glc', label: 'Mercedes-Benz GLC' }
  ];

  const partsOptions = [
    { value: 'engine', label: 'Engine Components' },
    { value: 'transmission', label: 'Transmission Parts' },
    { value: 'brakes', label: 'Brake System' },
    { value: 'suspension', label: 'Suspension & Steering' },
    { value: 'electrical', label: 'Electrical System' },
    { value: 'exhaust', label: 'Exhaust System' },
    { value: 'cooling', label: 'Cooling System' },
    { value: 'fuel', label: 'Fuel System' },
    { value: 'hvac', label: 'HVAC Components' },
    { value: 'lighting', label: 'Lighting & Bulbs' },
    { value: 'wipers', label: 'Wipers & Washers' },
    { value: 'body', label: 'Body Parts & Trim' },
    { value: 'interior', label: 'Interior Accessories' },
    { value: 'wheels', label: 'Wheels & Tires' },
    { value: 'filters', label: 'Filters' },
    { value: 'oils', label: 'Oils & Fluids' },
    { value: 'sensors', label: 'Sensors & Switches' }
  ];
  
  const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8"
        >
          <div className="text-american-blue text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-american-blue mb-2">Thank You!</h3>
          <p className="text-gray-600">Your request has been submitted. We'll contact you shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="md:col-span-1">
            <SelectField
              label="Year"
              id="year"
              options={yearOptions()}
              value={formData.year}
              onChange={handleChange}
              required
              error={errors.year}
            />
          </div>
          
          <div className="md:col-span-1">
            <SelectField
              label="Make and Model"
              id="makeModel"
              options={makeModelOptions}
              value={formData.makeModel}
              onChange={handleChange}
              required
              error={errors.makeModel}
            />
          </div>
          
          <div className="md:col-span-2">
            <SelectField
              label="Parts"
              id="parts"
              options={partsOptions}
              value={formData.parts}
              onChange={handleChange}
              required
              error={errors.parts}
            />
          </div>
          
          <div className="md:col-span-2">
            <InputField
              label="Name"
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              error={errors.name}
            />
          </div>
          
          <div className="md:col-span-1">
            <InputField
              label="Phone Number"
              id="phone"
              type="tel"
              placeholder="(123) 456-7890 or +XX XXX XXXX"
              value={formData.phone}
              onChange={handleChange}
              required
              error={errors.phone}
            />
          </div>
          
          <div className="md:col-span-1">
            <SelectField
              label="State"
              id="state"
              options={stateOptions}
              value={formData.state}
              onChange={handleChange}
              required
              error={errors.state}
            />
          </div>
          
          <div className="md:col-span-2 mt-6">
            <Button type="submit">Get started</Button>
          </div>
        </form>
      )}
    </div>
  )
}

export default SignupForm
