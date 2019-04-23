import Auth from 'pages/login/store'
import Error from 'templates/empty/store'
import Title from 'templates/default/store'
import UserStore from 'pages/landing/store'
import BlogStore from 'pages/blog/store'


export default {
  auth: new Auth(),
  error: new Error(),
  title: new Title(),
  user: new UserStore(),
  blog: new BlogStore(),
}
