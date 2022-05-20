import { createWebHashHistory, RouteRecordRaw, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('~/views/home')
    // children: [
    //   {
    //     path: '/preview',
    //     component: () => import('~/views/preview')
    //   }
    // ]
  },
  {
    path: '/preview',
    component: () => import('~/views/preview')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
