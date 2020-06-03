import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


import Vue from 'vue'
import App from './App.vue';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css';
import { router } from "./routes"

import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
