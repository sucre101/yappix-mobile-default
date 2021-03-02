import * as applicationSettings from "@nativescript/core/application-settings";
const Sqlite = require("nativescript-sqlite")
import { uuid } from "~/services/helpers"

export default {

  namespaced: true,

  state: {
    apiToken: applicationSettings.getString('apiToken'),
    userData: applicationSettings.getString('userData'),
    database: null,
    uuid: applicationSettings.getString('uuid') ? applicationSettings.getString('uuid') : null,
  },

  mutations: {

    updateToken(state) {
      state.apiToken = applicationSettings.getString('apiToken');
    },

    updateUserData(state) {
      state.userData = applicationSettings.getString('userData');
    },

    init(state) {
      state.uuid = applicationSettings.getString('uuid');
    }

  },

  actions: {

    init(context) {
      applicationSettings.setString('uuid', uuid())
      context.commit('init')
    },

    saveToken(context, apiToken) {
      applicationSettings.setString('apiToken', apiToken);
      context.commit('updateToken');
    },

    saveUserData(context, userData) {
      applicationSettings.setString('userData', JSON.stringify(userData));
      context.commit('updateUserData');
    },

    logout(context) {
      applicationSettings.setString('userData', '');
      applicationSettings.setString('apiToken', '');

      context.commit('updateToken');
      context.commit('updateUserData');
    }
  },

  getters: {

    getUserData(state) {
      const rawData = state.userData;

      if (rawData === undefined || rawData.length === 0) {
        return null;
      }

      return JSON.parse(rawData);
    },

    getUuid(state) {
      return state.uuid
    },

    isLoggedIn(state) {
      if (!state.apiToken) {
        return false;
      }

      return state.apiToken.length > 0;
    },

    getApiToken(state) {
      return state.apiToken;
    },

    getApiHeaders(state, getters) {
      let headers = {
        "Content-Type": "application/json",
      };

      if (getters.isLoggedIn) {
        headers["Authorization"] = `Bearer ${getters.getApiToken}`
      } else {
        headers["Authorization"] = "";
      }

      return headers;
    }
  }
}
