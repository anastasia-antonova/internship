import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/Registration",
    name: "Registration",
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/RegistrationView.vue"
      ),
  },
  {
    path: "/landing",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../views/LandingView.vue"),
  },
];

export default routes;
