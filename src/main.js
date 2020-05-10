import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局注册axios
import http from '@/http'
Vue.prototype.$http = http
//引入路由器
import router from '@/router'
//引入仓库
import store from '@/store'
//适配插件
import 'lib-flexible/flexible'
//瀑布流布局
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
