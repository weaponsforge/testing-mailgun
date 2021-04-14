import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Page from '../page'
import useStyles from './styles'

function Email ({ emailText, handleSubmit, handleChange, handleClear }) {
  const classes = useStyles()

  return (
    <Page>
      <Typography variant='h5'>Email</Typography>
      <Typography variant='body1'>
        Send the message as an email.
      </Typography>

      <TextField
        className={classes.textArea}
        id='email'
        autoFocus
        margin='dense'
        variant='outlined'
        placeholder='Type your message'
        multiline
        rows={10}
        fullWidth
        onChange={(e) => handleChange(e)}
        value={emailText}
      />

      <div className={classes.buttons}>
        <Button
          size='medium'
          color='primary'
          onClick={() => handleClear()}
        >Clear</Button>
        <Button
          variant='contained'
          size='medium'
          color='primary'
          onClick={() => handleSubmit()}
        >Submit</Button>
      </div>
    </Page>
  )
}

Email.propTypes = {
  /** Current email message value. */
  emailText: PropTypes.string,
  /** Handle the submit button click. */
  handleSubmit: PropTypes.func,
  /** Handle the email text update. */
  handleChange: PropTypes.func,
  /** Handle the clear button click. */
  handleClear: PropTypes.func
}

export default Email
