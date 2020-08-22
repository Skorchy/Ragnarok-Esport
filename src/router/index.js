import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ragnarok from "../views/Ragnarok.vue";
import Partners from "../views/Partners.vue";
import Recrutements from "../views/Recrutements.vue";
import WebTv from "../views/WebTv.vue";
import WIP from "../views/WIP.vue";
import store from "../store/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stream",
    name: "WebTv",
    component: WebTv,
  },
  {
    path: "/partenaires",
    name: "Partners",
    component: Partners,
  },
  {
    path: "/recrutements",
    name: "Recrutements",
    component: Recrutements,
  },
  {
    path: "/ragnarok",
    name: "Ragnarok",
    component: Ragnarok,
  },
  {
    path: "/wip",
    name: "WIP",
    component: WIP,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("closeSidebar");
  next();
});

export default router;
