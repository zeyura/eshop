import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '@/components/catalog'
import Cart from '@/components/cart'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'catalog',
       // meta: {layout: 'main', auth: true},
        component: () => import('../components/catalog.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../components/cart.vue'),
        props: true
    },
  //{
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router