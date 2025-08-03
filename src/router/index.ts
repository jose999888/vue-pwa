import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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
