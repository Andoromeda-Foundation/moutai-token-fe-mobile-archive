import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import config from "@/config";
import vueConfig from "vue-config";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import VueResource from "vue-resource";
import axios from "axios";
Vue.prototype.$ajax = axios;

Vue.use(MintUI);
Vue.use(vueConfig, config);
Vue.use(VueResource);

Vue.config.productionTip = config.productionTip;

window._vue_app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
