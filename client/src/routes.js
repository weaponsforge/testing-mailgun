import HomePage from './components/homepage'
import EmailMailgunContainer from './containers/email_mailgun'
import EmailSendinblueContainer from './containers/email_sendinblue'

const routes = [
  {
    path: '/email',
    isProtected: false,
    component: EmailMailgunContainer
  },
  {
    path: '/sendinblue',
    isProtected: false,
    component: EmailSendinblueContainer
  },
  {
    path: '/',
    isProtected: false,
    component: HomePage
  }
]

export default routes
