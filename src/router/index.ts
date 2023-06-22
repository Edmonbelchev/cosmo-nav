import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

import HomeView from '../views/HomeView.vue'
import DailyPic from '../views/DailyPic.vue'
import CurrentLocation from '../views/CurrentLocation.vue'
import EarthImage from '../views/EarthImage.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/picture-of-the-day',
      name: 'dailyPic',
      component: DailyPic
    },
    {
      path: '/current-location',
      name: 'currentLocation',
      component: CurrentLocation
    },
    {
      path: '/earth-image',
      name: 'earthImage',
      component: EarthImage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser) {
    next('/')
    return
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('login')
    return
  }

  next()
})

export default router
