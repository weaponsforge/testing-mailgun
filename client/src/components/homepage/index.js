import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../page'

function HomePage () {
  return (
    <Page>
      <Typography variant='h5'>Home</Typography>
      <Typography variant='body1'>
        Test website for testing various DOM input and server-side stuff.
      </Typography>
    </Page>
  )
}

export default HomePage
