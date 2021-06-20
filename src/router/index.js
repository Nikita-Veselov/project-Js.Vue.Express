import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/main.vue';
import Profile from '../views/profile.vue';
import Login from '../views/login.vue';

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to,from, savedPosition) {
    return { 
      x: 0, 
      y: 0, 
      behavior: 'smooth', 
    }
  }
})

export default router
