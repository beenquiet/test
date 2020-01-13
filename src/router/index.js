import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import(/* webpackChunkName: "first" */ '../views/First.vue')
  },
  {
    path: '/child',
    name: 'child',
    component: () => import(/* webpackChunkName: "child" */ '../views/Child.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
