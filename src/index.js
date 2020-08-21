"use strict";
import "./scss/style.scss";
import Vue from "vue";
import router from "./Router";
import App from "./App.vue";
import store from "./store/Store";

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
