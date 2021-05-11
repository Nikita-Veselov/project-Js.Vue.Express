import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/main.vue';
import Basket from '../views/basket.vue';
import Catalog from '../views/catalog.vue';

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Main
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
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
