const cfg = require('~/config.json')

import Vue from "nativescript-vue"
import store from './store/index'
import App from "./components/App"
import Home from "./components/Home"
import ECModule from "~/components/templates/modules/ecommerce/ECModule"
import HomePage from "~/components/templates/modules/ecommerce/home/HomePage"
import DrawerContent from "./components/templates/sidebar/DrawerContent"
import ClientWebView from "~/components/templates/modules/webview/ClientWebView"
import {isIOS} from '@nativescript/core/platform'
import {init} from '~/services/Auth'
import ApiService from './services/ApiService'
import NetworkService from './services/NetworkService'
import RadSideDrawer from "nativescript-ui-sidedrawer/vue"
import RadDataForm from "nativescript-ui-dataform/vue"


Vue.use(RadSideDrawer)
Vue.use(RadDataForm)

Vue.config.silent = (TNS_ENV === 'production')
// Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
Vue.registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);

if (isIOS) {
  GMSServices.provideAPIKey("API_KEY");
}
// comment for commit: intro -> create develop branch

const network = new NetworkService()

Vue.prototype.$app = Object.freeze({
  network,
  appId: cfg.appId,
  api: new ApiService(network, cfg.appId, store.getters['User/getApiHeaders']),
  isIOS: (isIOS),
  cfg: cfg,
})

const count = Object.keys(cfg.modules).length

const localModule = (modules) => {

  for (const [key, value] of Object.entries(modules)) {
    return { value: modules[key], index: key}
  }

}

let startScreen = Home

switch (localModule(cfg.modules).index) {

  case 'ecommerce':
    startScreen = ECModule
    break
  case 'webview':
    startScreen = ClientWebView
    break
  default:
    startScreen = HomePage
}

// console.log(localModule(cfg.modules))

// if (count >= 1) {
//   for (const [key, value] of Object.entries(modules)) {
//     console.log(key)
//   }
// }



// localModule(cfg.modules)

// const modules = Vue.$app.cfg.modules

init(store);

new Vue({
  store,
  render(h) {
    return h(
      App,
      [
        h(DrawerContent, {slot: 'drawerContent'}),
        h(startScreen, {slot: 'mainContent'})
      ]
    )
  }
}).$start();
