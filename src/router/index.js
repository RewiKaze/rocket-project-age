import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/Home.vue";
import cookie from "@/views/Cookie.vue";
import template from "@/views/Template.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    component: home,
    meta: { transition: "overlay-right" }
  },
  {
    path: "/cookie",
    // name: "Cookie",
    component: cookie,
    meta: { transition: "overlay-right" }
  },
  {
    path: "/template",
    name: "template",
    component: template,
    meta: { transition: "overlay-right" }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
