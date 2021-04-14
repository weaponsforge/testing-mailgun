import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import useStyles from './styles'

function Page ({ children }) {
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Card className={classes.root}>
        <CardContent> 
          { children }
        </CardContent>
      </Card>
    </Container>
  )
}

export default Page
