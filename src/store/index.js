import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSidebarDisplayed: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarDisplayed = !state.isSidebarDisplayed;
    },
    closeSidebar(state) {
      state.isSidebarDisplayed = false;
    },
  },
  actions: {},
  modules: {},
});
