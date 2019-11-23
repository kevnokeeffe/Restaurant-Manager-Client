import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/authentication/Login';
import Register from '../views/authentication/Register';
import OrderCreate from "../views/orders/OrderCreate";
import OrderEdit from "../views/orders/OrderEdit";
import OrdersAll from "../views/orders/OrdersAll";
import * as auth from '../services/AuthService';

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
    component: Login,
    beforeEnter: (to,from,next)=>{
      if(auth.isLoggedIn){
        next();
      }else{
        next('/');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to,from,next)=>{
      if(auth.isLoggedIn){
        next();
      }else{
        next('/');
      }
    }
  },
  {
    path: '/order',
    name: 'orders-all',
    component: OrdersAll,
    beforeEnter: (toolbar,from,next)=>{
      if(auth.isLoggedIn){
        next();
      }else{
        next('/');
      }
    }
  },
  {
    path: '/order/new',
    name: 'orders-create',
    component: OrderCreate,
    beforeEnter: (toolbar,from,next)=>{
      if(auth.isLoggedIn){
        next();
      }else{
        next('/');
      }
    }
  },
  {
    path: '/order/:id/',
    name: 'edit',
    component: OrderEdit,
    beforeEnter: (toolbar,from,next)=>{
      if(auth.isLoggedIn){
        next();
      }else{
        next('/');
      }
    }
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
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
});

export default router
