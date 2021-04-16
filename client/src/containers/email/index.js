import React, { useState } from 'react'
import axios from 'axios'
import Email from '../../components/email'

const defaultState = {
  message: '', email: 'acetiercel@yahoo.com', subject: 'Mailgun Testing', msg: '', loading: false
}

function EmailContainer () {
  const [state, setState] = useState(defaultState)

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prev => ({ ...prev, [id]: value }))

    if (state.msg !== '') {
      setState({ ...state, msg: '' })
    }
  }

  const handleClear = () => {
    setState(defaultState)
  }

  const handleSubmit = async () => {
    let msg = 'Email sent.'
    console.log(state)

    try {
      await axios.post('http://localhost:3001/api/mailgun', state)
    } catch (err) {
      msg = `Error: ${err.response.data}`
    }

    setState(prev => ({ ...defaultState, msg }))
  }

  return (
    <Email
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClear={handleClear}
    />
  )
}

export default EmailContainer
