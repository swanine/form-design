import { createWebHashHistory, RouteRecordRaw, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
