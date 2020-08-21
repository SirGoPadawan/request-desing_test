import Vue from "vue";
import VueRouter from "vue-router";

import TheHome from "./pages/TheHome";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: TheHome,
    },
  ],
});

export default router;
