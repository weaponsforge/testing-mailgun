import React, { useState } from 'react'
import axios from 'axios'
import Email from '../../components/email_mailgun'

const defaultState = {
  message: '',
  email: '',
  subject: 'Mailgun Testing',
  msg: '',
  maxhrs: 72,
  interval: 6,
  starttime: '',
  loading: false,
  scheduled: false
}

function EmailMailgunContainer () {
  const [state, setState] = useState(defaultState)

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prev => ({ ...prev, [id]: value }))
    console.log(value)

    if (state.msg !== '') {
      setState({ ...state, msg: '' })
    }
  }

  const handleSwitch = (e) => {
    const { checked } = e.target
    console.log(checked)

    if (!checked) {
      setState(defaultState)
    } else {
      setState({ ...state, scheduled: checked })
    }
  }

  const handleClear = () => {
    setState(prev => ({ ...state, ...defaultState, scheduled: prev.scheduled }))
  }

  const handleSubmit = async () => {
    let msg = 'Email sent.'

    try {
      setState(prev => ({ ...prev, loading: true }))
      const apiUrl = (state.scheduled) ? 'mailgun/scheduled' : 'mailgun'

      await axios.post(`${process.env.REACT_APP_BASE_API_URL}/${apiUrl}`, state)
    } catch (err) {
      msg = (err.response) ? `Error: ${err.response.data}` : `Error: ${err.message}`
    }

    setState(prev => ({ ...prev, loading: false, msg }))
  }

  return (
    <Email
      state={state}
      handleChange={handleChange}
      handleSwitch={handleSwitch}
      handleSubmit={handleSubmit}
      handleClear={handleClear}
    />
  )
}

export default EmailMailgunContainer
