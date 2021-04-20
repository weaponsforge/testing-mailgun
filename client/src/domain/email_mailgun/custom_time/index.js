import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import useStyles from '../../../components/email_mailgun/styles'

function CustomTimeSettings ({ state, handleSwitch, handleChange }) {
  const classes = useStyles()

  return (
    <div>
      <FormControlLabel
        className={classes.textArea}
        control={<Switch id='scheduled' onChange={handleSwitch} />}
        label="Schedule Sending Interval" />

      {state.scheduled &&
      <Grid container justify='space-between'>
        <Grid>
          <TextField
            id='maxhrs'
            label='Max Hours'
            autoFocus
            margin='dense'
            variant='outlined'
            fullWidth
            disabled={state.loading}
            onChange={(e) => handleChange(e)}
            value={state.maxhrs}
          />
        </Grid>
        <Grid>
          <TextField
            id='interval'
            label='Interval (in hours)'
            autoFocus
            margin='dense'
            variant='outlined'
            fullWidth
            disabled={state.loading}
            onChange={(e) => handleChange(e)}
            value={state.interval}
          />
        </Grid>
        <Grid>
          <TextField
            id='starttime'
            label='Start Time'
            placeholder='HH:MM:SS'
            autoFocus
            margin='dense'
            variant='outlined'
            fullWidth
            disabled={state.loading}
            onChange={(e) => handleChange(e)}
            value={state.starttime}
          />
        </Grid>
      </Grid>
      }
    </div>
  )
}

CustomTimeSettings.propTypes = {
  state: PropTypes.object,
  handleSwitch: PropTypes.func,
  handleChange: PropTypes.func
}

export default CustomTimeSettings
