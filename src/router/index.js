import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: '',
            keepAlive: true,
          },
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '',
        keepAlive: true,
      },
    },
  ]
})

export default router
