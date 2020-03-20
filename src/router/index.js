import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Monitor from '../views/Monitor'

Vue.use(VueRouter)

const routes = [
  {
    path: '/data/:country',
    name: 'Dados',
    component: Monitor
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Sobre',
    component: About,
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
