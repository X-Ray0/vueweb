import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Research from '@/views/Research.vue'
import Publications from '@/views/Publications.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/research', component: Research },
  { path: '/publications', component: Publications }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router