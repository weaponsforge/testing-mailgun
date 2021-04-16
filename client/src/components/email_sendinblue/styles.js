import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    float: 'right',
    '& button': {
      marginLeft: theme.spacing(1)
    }
  },
  textArea: {
    marginTop: theme.spacing(2)
  },
  success: {
    color: theme.palette.secondary.main
  },
  error: {
    color: 'red'
  }
}))

export default useStyles
