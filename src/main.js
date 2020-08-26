import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAgile from "vue-agile";
import ragnarokConfig from "./config/config.js";

Vue.use(VueAgile);

Vue.config.productionTip = false;

Vue.prototype.$rgk = ragnarokConfig;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
