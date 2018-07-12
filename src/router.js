import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound";
import Login from "./views/Login.vue";
import Regitered from "./views/Registered.vue";
import Detail from "./views/Detail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/CustomerService",
      name: "CustomerService",
      component: Home
    },
    {
      path: "/AssetAnnouncement",
      name: "AssetAnnouncement",
      component: Home
    },
    {
      path: "/Roadmap",
      name: "Roadmap",
      component: Home
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/Regitered",
      name: "Registered",
      component: Regitered
    },
    {
      path: "/Detail",
      name: "Detail",
      component: Detail
    }
  ]
});
