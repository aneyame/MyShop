import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import products from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
  ]
})

export default router
