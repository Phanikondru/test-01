import React from 'react'
import Button from './ui/Button'
import InputField from './ui/InputField'
import SelectField from './ui/SelectField'

const SignupForm = () => {
  // Sample data for dropdowns
  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());
  
  const carMakes = [
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'ford', label: 'Ford' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes-Benz' },
    { value: 'audi', label: 'Audi' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'kia', label: 'Kia' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'mazda', label: 'Mazda' },
    { value: 'lexus', label: 'Lexus' },
    { value: 'jeep', label: 'Jeep' },
    { value: 'tesla', label: 'Tesla' }
  ];
  
  const carParts = [
    { value: 'engine', label: 'Engine' },
    { value: 'transmission', label: 'Transmission' },
    { value: 'brakes', label: 'Brakes' },
    { value: 'suspension', label: 'Suspension' },
    { value: 'exhaust', label: 'Exhaust System' },
    { value: 'radiator', label: 'Radiator' },
    { value: 'alternator', label: 'Alternator' },
    { value: 'starter', label: 'Starter' },
    { value: 'battery', label: 'Battery' },
    { value: 'wheels', label: 'Wheels & Tires' },
    { value: 'lights', label: 'Lights & Bulbs' },
    { value: 'wipers', label: 'Wipers' },
    { value: 'filters', label: 'Filters (Air, Oil, Fuel)' },
    { value: 'sensors', label: 'Sensors' },
    { value: 'body', label: 'Body Parts' }
  ];
  
  const states = [
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
  ];
  
  return (
    <div className="bg-american-white p-6 rounded-lg border border-gray-200 shadow-md transition-shadow hover:shadow-lg">
      <h2 className="text-2xl font-bold text-american-blue mb-4">Find Your Car Parts</h2>
      
      <p className="text-sm mb-4">* indicates a required field.</p>
      
      <form>
        <div className="space-y-4">
          <SelectField 
            label="Select Year" 
            id="year" 
            options={years}
            required={true}
            searchable={true}
          />
          
          <SelectField 
            label="Make and Model" 
            id="makeModel" 
            options={carMakes}
            required={true}
            searchable={true}
            placeholder="Search for your car make and model"
          />
          
          <SelectField 
            label="Select Parts" 
            id="parts" 
            options={carParts}
            required={true}
            searchable={true}
            placeholder="Search for car parts"
          />
          
          <InputField 
            label="Name" 
            type="text" 
            id="name" 
            required={true} 
          />
          
          <InputField 
            label="Phone" 
            type="tel" 
            id="phone" 
            required={true} 
          />
          
          <InputField 
            label="Email" 
            type="email" 
            id="email" 
            required={false} 
            placeholder="Optional"
          />
          
          <SelectField 
            label="State" 
            id="state" 
            options={states}
            required={true}
            searchable={true}
            placeholder="Search for your state"
          />
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              <span className="text-red-500 mr-1">*</span>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-american-blue focus:border-american-blue"
              required
              placeholder="Tell us about your specific requirements"
            ></textarea>
          </div>
        </div>
        
        <div className="mt-6 mb-6">
          <p className="text-sm text-gray-600">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-american-blue hover:underline">terms of service</a> and{' '}
            <a href="#" className="text-american-blue hover:underline">privacy policy</a>.
          </p>
        </div>
        
        <Button>Submit Request</Button>
      </form>
    </div>
  )
}

export default SignupForm