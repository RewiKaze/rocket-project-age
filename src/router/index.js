import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/Home.vue";
import agePage from "@/views/Age.vue";
import content from "@/views/Content.vue"
import wow from "@/views/Wow.vue"
import congrat from "@/views/Congrat.vue"
import name from "@/views/Name.vue"
import notEnd from "@/views/NotEnd.vue"
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: {
  //     name: "content"
  //   },
  // },
  {
    path: "/",
    // name: "Home",
    component: home,
    meta: { transition: "overlay-right" },
  },
  {
    path: "/age",
    // name: "template",
    component: agePage,
    meta: { transition: "fade" },
  },
  {
    path: "/content",
    component: content,
    meta: { transition: "overlay-right" }
  },
  {
    path: "/wow",
    component: wow,
    meta: {transition : "overlay-right"}
  },
  {
    path: "/congrat",
    component: congrat,
    meta: {transition : "overlay-right"}
  },
  {
    path: "/wait",
    component: notEnd,
    meta: {transition : "overlay-right"}
  },
  {
    path: "/name",
    component: name,
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
  routes,
  mode: "history",
});

export default router;
