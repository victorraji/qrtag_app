import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import BarcodeHistory from '../pages/BarcodeHistory'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/barcode-history',
    name: 'barcode-history',
    component: BarcodeHistory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
