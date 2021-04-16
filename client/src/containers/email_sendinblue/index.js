import React, { useState } from 'react'
import axios from 'axios'
import EmailSendinblue from '../../components/email_sendinblue'

const defaultState = {
  message: '', email: '', subject: 'Sendinblue Testing', msg: '', loading: false
}

function EmailSendinblueContainer () {
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
      await axios.post('http://localhost:3001/api/sendinblue', state)
    } catch (err) {
      msg = `Error: ${err.response.data}`
    }

    setState(prev => ({ ...defaultState, msg }))
  }

  return (
    <EmailSendinblue
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClear={handleClear}
    />
  )
}

export default EmailSendinblueContainer
