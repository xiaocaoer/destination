import routes from '@/routes'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



export default new VueRouter({
  routes,
  linkActiveClass:"active",//设置路由导航被点击时添加的类名,默认情况下这个类名是:router-link-active
})