import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import products from '../views/Products.vue'
import admin from '../views/admin.vue'
import login from '../views/login.vue'

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
    
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },


  ]
})

export default router
