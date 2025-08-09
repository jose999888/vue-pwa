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
    {
      name: 'CarRace',
      path: '/car',
      component: () => import('../pages/AppCarRace.vue'),
    },
  ],
})

export default router
