import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/authentication/Login';
import Register from '../views/authentication/Register';
import OrderCreate from "../views/orders/OrderCreate";
import OrderEdit from "../views/orders/OrderEdit";
import OrdersAll from "../views/orders/OrdersAll";

Vue.use(VueRouter)
const isLoggedIn = false;
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
      if(!isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to,from,next)=>{
      if(!isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/order',
    name: 'orders-all',
    component: OrdersAll,
    beforeEnter: (toolbar,from,next)=>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/order/new',
    name: 'orders-create',
    component: OrderCreate,
    beforeEnter: (toolbar,from,next)=>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: '/order/:id/',
    name: 'edit',
    component: OrderEdit,
    beforeEnter: (toolbar,from,next)=>{
      if(isLoggedIn){
        next();
      }else{
        next('/login');
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
