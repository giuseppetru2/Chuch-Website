import React from 'react'
import { formatAmountForDisplay } from '../utils/stripe-helpers'

const CustomDonationInput = ({
  name,
  value,
  min,
  max,
  currency,
  step,
  onChange,
  className,
}) => (
  <div>
  <label>
    Custom donation amount ({(min, currency)}-
    {formatAmountForDisplay(max, currency)}):
  </label>
  <input
    className={className}
    type="number"
    name={name}
    value={value}
    min={min}
    max={max}
    step={step}
    onChange={onChange}
  ></input>
  </div>
)

export default CustomDonationInput
