import { createMuiTheme } from '@material-ui/core/styles'

// Main Material UI Theme
const mainTheme = createMuiTheme({
  palette: {
    /** Blue theme */
    primary: {
      light: '#EDF1FA',
      main: '#31376D',
      dark: '#31376D',
      contrastText: '#FFFFFF'
    },
    /** Green theme */
    secondary: {
      light: '#999999',
      main: '#009688',
      dark: '#009688',
      contrastText: '#FFFFFF'
    },
    text: {
      secondary: '#999999'
    },
    background: {
      appBar: 'rgba(248, 249, 253, 0.35)'
    }
  }
})

export default mainTheme
