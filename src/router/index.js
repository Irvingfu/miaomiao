import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Home from '../pages/Home.vue'
import Category from '../pages/Category.vue'
import Me from '../pages/Me.vue'
import Moviedetail from '../components/home/Moviedetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/' ,redirect:'/home'},

    {path:'/home',component:Home, },

    {path:'/category', component:Category},

    {path:'/me',component:Me},
    {path:'/home/moviedetail' ,component:Moviedetail}
  ],
  linkActiveClass:'mui-active'
  
})
