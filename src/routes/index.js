//路由当中引入路由组件,给路由组件配置路径,键值对形式,再暴露出去
import home from 'pages/home/home.vue'
import category from 'pages/category/category.vue'
import buy from 'pages/buy/buy.vue'
import cart from 'pages/cart/cart.vue'
import person from 'pages/person/person.vue'

export default[
  {path:'/home',component:home,meta:{showGuide:true}},
  {path:'/category',component:category,meta:{showGuide:true}},
  {path:'/buy',component:buy,meta:{showGuide:true}},
  {path:'/cart',component:cart,meta:{showGuide:true}},
  {path:'/person',component:person,meta:{showGuide:true}},
  {path:"/",redirect:"category"}//重定向
]
