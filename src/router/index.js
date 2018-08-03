import login from './../views/login.vue'
import NotFound from './../views/404.vue'

let routes = [
  {
    path: '',
    redirect: "/login"  //默认直接login
  }
  , {
    path: '/login',
    component: login
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }


]

export default routes