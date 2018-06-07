import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/login/Login'
import Signup from '@/components/signUp/Sign-up.vue'
import Share from '@/components/share/Share'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/eindex'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Sign-up',
      component: Signup
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
  ]
})
