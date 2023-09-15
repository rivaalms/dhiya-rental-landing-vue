import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/contact.vue')
    }
  ]
})

export default router
