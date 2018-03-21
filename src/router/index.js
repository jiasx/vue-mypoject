import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RouterConfigBase from "./router_config_base";
// import RouterConfigConsole from "./router_config_console"

var routerConfig = [];
routerConfig = routerConfig.concat(RouterConfigBase)
console.log(routerConfig)
export default new Router ({
  linkActiveClass: 'active',
  routes:routerConfig

})
