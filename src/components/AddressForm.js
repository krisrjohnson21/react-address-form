import React, { useState } from "react"

import _ from 'lodash'
import ErrorList from './ErrorList'

const AddressForm = props => {
  const [addressRecord, setAddressRecord] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    setAddressRecord({
      ...addressRecord,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    event.preventDefault()
    setAddressRecord({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["firstName", "lastName", "address", "city", "state", "zipCode", "phoneNumber", "email"]
    requiredFields.forEach((reqField) => {
      if (addressRecord[reqField].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [reqField]: "cannot be blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onAddressSubmitted(addressRecord)
      clearForm()
    }
  }

  return (
    <form className="callout" id="shipping-address-form" onSubmit={onSubmitHandler}>
      <h1>Shipping Address</h1>
      <ErrorList errors={errors} />
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleInputChange}
          value={addressRecord.firstName}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleInputChange}
          value={addressRecord.lastName}
        />
      </div>

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={handleInputChange}
        value={addressRecord.address}
      />

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleInputChange}
          value={addressRecord.city}
        />
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          onChange={handleInputChange}
          value={addressRecord.state}
        />
      </div>

      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          onChange={handleInputChange}
          value={addressRecord.zipCode}
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleInputChange}
          value={addressRecord.phoneNumber}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={addressRecord.email}
        />
      </div>

      <input type="submit" className="button" value="Submit " />
    </form>
  )
}

export default AddressForm
