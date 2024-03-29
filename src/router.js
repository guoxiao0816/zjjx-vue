import Vue from 'vue'
import Router from 'vue-router'


import Home from './views/Home.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect() {
        return '/home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: 'gooddetail',
      path: '/good/detail/',
      component: () => import('./views/goods/Gooddetail')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My')
    }
  ]
})
