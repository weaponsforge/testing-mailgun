import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Page from '../page'
import useStyles from './styles'

function EmailSendinblue ({ state, handleSubmit, handleChange, handleClear }) {
  const classes = useStyles()

  return (
    <Page>
      <Typography variant='h5'>Sendinblue</Typography>
      <Typography variant='body1'>
        Send an email message using Sendinblue.
      </Typography>

      <div>
        <TextField
          className={classes.textArea}
          id='email'
          label='Email'
          autoFocus
          margin='dense'
          variant='outlined'
          rows={10}
          fullWidth
          onChange={(e) => handleChange(e)}
          value={state.email}
        />

        <TextField
          className={classes.textArea}
          id='subject'
          label='Subject'
          autoFocus
          margin='dense'
          variant='outlined'
          rows={10}
          fullWidth
          onChange={(e) => handleChange(e)}
          value={state.subject}
        />

        <TextField
          className={classes.textArea}
          id='message'
          margin='dense'
          variant='outlined'
          placeholder='Type your message'
          multiline
          rows={10}
          fullWidth
          onChange={(e) => handleChange(e)}
          value={state.message}
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

        {state.msg !== '' &&
        <Typography
          variant='caption'
          className={clsx(classes.success, /error:/g.test(state.msg.toLowerCase()) && classes.error)}
        >{state.msg}
        </Typography>
        }
      </div>
    </Page>
  )
}

EmailSendinblue.propTypes = {
  /** Current email object values. */
  state: PropTypes.object,
  /** Handle the submit button click. */
  handleSubmit: PropTypes.func,
  /** Handle the email text update. */
  handleChange: PropTypes.func,
  /** Handle the clear button click. */
  handleClear: PropTypes.func
}

export default EmailSendinblue
