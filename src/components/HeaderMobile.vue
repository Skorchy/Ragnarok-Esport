<template>
  <div class="header-mobile">
    <router-link :to="{ name: 'Home' }">
      <img @click="closeSidebar" class="logo" src="../assets/logo-sans-fond.png" />
    </router-link>
    <svg
      v-show="!$store.state.isSidebarDisplayed"
      class="burger-menu"
      @click="toggleSidebar"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
    </svg>
    <svg
      v-show="$store.state.isSidebarDisplayed"
      class="burger-menu"
      @click="toggleSidebar"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
      />
    </svg>
    <transition name="fade">
      <Sidebar v-if="$store.state.isSidebarDisplayed" />
    </transition>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
    closeSidebar() {
      this.$store.commit("closeSidebar");
    }
  }
};
</script>

<style scoped>
.header-mobile {
  width: 100%;
  height: 100px;
  background: #101010;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 0 30px;
}

.burger-menu {
  display: inline-block;
  margin: 0 30px;
  fill: #fafafa;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-in-out;
}
</style>