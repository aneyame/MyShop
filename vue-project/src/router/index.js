import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import products from '../views/Products.vue'
import admin from '../views/admin.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import test from '../views/test.vue'


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

    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },



  ],
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
})

export default router
