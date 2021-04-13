import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import AppConfig from "~/store/modules/AppConfig";
import User from "~/store/modules/User";
import ECCart from "~/store/modules/ECCart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AppConfig,
    User,
    ECCart
  }
})

