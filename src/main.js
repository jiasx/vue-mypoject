// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  //用于实现浏览器不支持原生功能的代码
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'  
import routes from './router'

Vue.use(VueRouter)

Vue.config.productionTip = false   //作用是阻止 vue 在启动时生成生产提示
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
