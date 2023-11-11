import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news/:slug',
      component: News
    },
  ]
})

export default router
