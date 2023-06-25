import { auth } from '@/firebase'
import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import( '../views/HomeView.vue')
const DailyPic = () => import( '../views/DailyPic.vue')
const CurrentLocation = () => import( '../views/CurrentLocation.vue')
const EarthImage = () => import( '../views/EarthImage.vue')
const Login = () => import( '../views/Login.vue');
const Register = () => import( '../views/Register.vue');
const Profile = () => import( '../views/Profile.vue');
const FavoriteImages = () => import( '../views/FavoriteImages.vue')

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
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/favorite-images',
      name: 'favoriteImages',
      component: FavoriteImages,
      meta: { requiresAuth: true },
    },
  ]
})

router.beforeEach(async (to, from, next) => {
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
