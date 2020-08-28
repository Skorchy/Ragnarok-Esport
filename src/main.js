import Vue from "vue";
import LoadScript from "vue-plugin-load-script";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import ragnarokConfig from "./config/config.js";

Vue.use(LoadScript);

Vue.config.productionTip = false;

Vue.prototype.$rgk = ragnarokConfig;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
