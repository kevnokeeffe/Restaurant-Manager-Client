import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/authentication/Login';
import Register from '../views/authentication/Register';
import OrderCreate from "../views/orders/OrderCreate";
import OrderEdit from "../views/orders/OrderEdit";
import OrdersAll from "../views/orders/OrdersAll";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'log-in',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/order',
    name: 'orders-all',
    component: OrdersAll
  },
  {
    path: '/order/new',
    name: 'orders-create',
    component: OrderCreate
  },
  {
    path: '/order/:id/',
    name: 'edit',
    component: OrderEdit
  },
  {
    path: '*',
    redirect:'/'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
