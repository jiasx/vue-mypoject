// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' //ie9和一些低版本的高级浏览器对es6新语法并不支持
import Vue from 'vue'
import App from './App' //引入app文件
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  store from "./store/index"
import moment from "moment"; //时间过滤  ???
import VueMoment from "vue-moment"; //时间过滤
import axios from 'axios' //数据处理  原来用vue-resource
// import ElementUex from 'element-uex'
import filter from './components/js/filters'
// import 'element-uex/lib/theme-default/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ElementUex);
Vue.use(VueMoment, moment);
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filter,
  store:store,
    components: { App },
    template: '<App/>'
})
