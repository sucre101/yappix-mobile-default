import Vue from "nativescript-vue";
import store from './store/index';
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/templates/sidebar/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import {isIOS} from 'tns-core-modules/platform';
import {init} from './services/Auth'

const appConfig = require('~/config.json');

Vue.use(RadSideDrawer);

Vue.config.silent = (TNS_ENV === 'production');

// Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
Vue.registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);

// comment for commit: intro -> create develop branch

import ApiService from './services/ApiService';
import NetworkService from './services/NetworkService';

const network = new NetworkService();

Vue.prototype.$app = Object.freeze({
  network,
  // appId: appConfig.appId,
  appId: 2,
  // api: new ApiService(network, appConfig.appId, store.getters['User/getApiHeaders']),
  api: new ApiService(network, 2, store.getters['User/getApiHeaders']),
  isIOS: (isIOS),
});

init(store);


new Vue({
  store,
  render(h) {
    return h(
      App,
      [
        h(DrawerContent, {slot: 'drawerContent'}),
        h(Home, {slot: 'mainContent'})
      ]
    )
  }
}).$start();
