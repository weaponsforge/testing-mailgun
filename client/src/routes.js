import EmailContainer from './containers/email'
import HomePage from './components/homepage'
import EmailSendinblue from './containers/email_sendinblue'

const routes = [
  {
    path: '/email',
    isProtected: false,
    component: EmailContainer
  },
  {
    path: '/sendinblue',
    isProtected: false,
    component: EmailSendinblue
  },
  {
    path: '/',
    isProtected: false,
    component: HomePage
  }
]

export default routes
