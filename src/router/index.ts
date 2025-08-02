import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('../pages/AppHome.vue'),
    },
    {
      name: 'About',
      path: '/about',
      component: () => import('../pages/AppAbout.vue'),
    },
  ],
})

export default router
