import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";

const GOOGLE_API_KEY = process.env.VUE_APP_GOOGLE_API_KEY;

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_API_KEY,
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
