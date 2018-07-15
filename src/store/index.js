/**
 * Created by Dawn on 2018-07-14.
 */

import Vue from "vue";
import Vuex from "vuex";

import token from "./modules/token.js";
import phone from "./modules/phone.js"
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    token,
      phone
  }
});
