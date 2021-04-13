const cfg = require('~/config.json')

import Vue from "nativescript-vue"
import store from './store/index'
import App from "./components/App"
import Home from "./components/Home"
import DrawerContent from "./components/templates/sidebar/DrawerContent"
import {isIOS} from '@nativescript/core/platform'
import {init} from '~/services/Auth'
import ApiService from './services/ApiService'
import NetworkService from './services/NetworkService'
import RadSideDrawer from "nativescript-ui-sidedrawer/vue"
import RadDataForm from "nativescript-ui-dataform/vue"


Vue.use(RadSideDrawer)
Vue.use(RadDataForm)

Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel)
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem)

const network = new NetworkService()

Vue.prototype.$app = Object.freeze({
  network,
  appId: cfg.appId,
  api: new ApiService(network, cfg.appId, store.getters['User/getApiHeaders']),
  isIOS: (isIOS),
  cfg: cfg,
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
