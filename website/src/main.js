import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueMeta from "vue-meta";
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';
import * as secrets from "./secrets.json";
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: secrets.google_maps_key,
    libraries: 'places, drawing, visualization'
  },
});
Vue.use(VueMeta);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
