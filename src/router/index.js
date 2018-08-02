import login from './../views/login.vue'

let routes = [
  {
    path: '',
    redirect:"/login"  //默认直接login
  }
  ,{
    path: '/login',
    component: login
  },
  


]

export default routes