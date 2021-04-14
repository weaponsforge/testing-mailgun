import React, { useState } from 'react'
import Email from '../../components/email'

const defaultState = {
  email: '', msg: '', loading: false
}

function EmailContainer () {
  const [state, setState] = useState(defaultState)

  const handleChange = (e) => {
    const { value } = e.target
    setState({ ...state, email: value })
  }

  const handleSubmit = () => {
    console.log(`---submitting: ${state.email}`)
  }

  const handleClear = () => {
    setState(defaultState)
  }

  return (
    <Email
      emailText={state.email}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClear={handleClear}
    />
  )
}

export default EmailContainer
