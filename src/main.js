import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "@/config";
import vueConfig from "vue-config";

Vue.use(vueConfig, config);

Vue.config.productionTip = config.productionTip;

window._vue_app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
