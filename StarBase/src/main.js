import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Data from "./components/Data.vue";
import Character from "./components/Character.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/data/:type", component: Data },
    { path: "/", component: Character }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
