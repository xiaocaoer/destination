//路由当中引入路由组件,给路由组件配置路径,键值对形式,再暴露出去
import home from 'pages/home/home.vue'
import category from 'pages/category/category.vue'
import buy from 'pages/buy/buy.vue'
import cart from 'pages/cart/cart.vue'
import person from 'pages/person/person.vue'
import search from 'pages/search/search.vue'
import login from 'pages/login/login.vue'

export default[
  {path:'/home',component:home,meta:{showGuide:true}},
  {path:'/category',component:category,meta:{showGuide:true}},
  {path:'/buy',component:buy,meta:{showGuide:true}},
  {path:'/cart',component:cart,meta:{showGuide:true}},
  {path:'/person',component:person,meta:{showGuide:false}},
  {path:'/search',component:search,meta:{showGuide:false}},
  {path:'/login',component:login,meta:{showGuide:false}},
  {path:"/",redirect:"home"}//重定向
]
