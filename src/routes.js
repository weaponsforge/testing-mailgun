import EmailContainer from './containers/email'
import HomePage from './components/homepage'

const routes = [
  {
    path: '/email',
    isProtected: false,
    component: EmailContainer
  },
  {
    path: '/',
    isProtected: false,
    component: HomePage
  }
]

export default routes
