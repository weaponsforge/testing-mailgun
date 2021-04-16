import React, { useState } from 'react'
import axios from 'axios'
import Email from '../../components/email_mailgun'

const defaultState = {
  message: '', email: '', subject: 'Mailgun Testing', msg: '', loading: false
}

function EmailMailgunContainer () {
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

    try {
      setState(prev => ({ ...prev, loading: true }))
      await axios.post('http://localhost:3001/api/mailgun', state)
    } catch (err) {
      msg = (err.response) ? `Error: ${err.response.data}` : `Error: ${err.message}`
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

export default EmailMailgunContainer
