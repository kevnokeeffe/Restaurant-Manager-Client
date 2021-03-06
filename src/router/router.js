import Vue from "vue";
import VueRouter from "vue-router";
import OrderCreate from "../views/orders/OrderCreate";
import OrderEdit from "../views/orders/OrderEdit";
import * as auth from "../services/AuthService";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/bill",
    name: "bill",
    component: import(
      /* webpackChunkName: "home" */ "../views/bills/BillsView.vue"
    ),
    beforeRouteEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../views/authentication/Login.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/authentication/Register.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: "/order",
    name: "orders-all",
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/orders/OrdersAll.vue"),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/order/user",
    name: "orders-by-user",
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/orders/OrderByUser.vue"),
    beforeEnter: (toolbar, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/order/new",
    name: "orders-create",
    component: OrderCreate,
    beforeEnter: (toolbar, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/order/edit",
    name: "order-edit",
    component: () =>
      import(
        /* webpackChunkName: "order/edit" */ "../views/orders/OrderEdit.vue"
      ),
    beforeEnter: (toolbar, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/order/:id/",
    name: "edit",
    component: OrderEdit,
    beforeEnter: (toolbar, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
