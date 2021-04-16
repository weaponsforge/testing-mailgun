import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import { Link } from 'react-router-dom'

function Navigation () {
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h4'>Dev Testing Site</Typography>
          <Link to='/'>
            <Typography variant='subtitle1' component='span'>Home</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/email'>
            <Typography variant='subtitle1' component='span'>Mailgun</Typography>
          </Link> &nbsp;| &nbsp;
          <Link to='/sendinblue'>
            <Typography variant='subtitle1' component='span'>Sendinblue</Typography>
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Navigation
