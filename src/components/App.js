import React, { useState } from "react"

import AddressForm from "./AddressForm"

const App = props => {
  const [addresses, setAddresses] = useState([])

  const addressSubmittedHandler = address => {
    setAddresses([...addresses, address])
  }

  return (
    <div className="row">
      <div className="medium-6 medium-offset-3 small-12 columns">
        <AddressForm
          addresses={addresses}
          onAddressSubmitted={addressSubmittedHandler}
        />
      </div>
    </div>
  )
}

export default App
