import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import AppConfig from "~/store/modules/AppConfig";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AppConfig
    }
})
