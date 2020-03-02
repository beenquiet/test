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
    path: '/showscreen',
    name: '投屏展示',
    component: () => import('../components/showscreen/ShowScreen'),
    hidden: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
