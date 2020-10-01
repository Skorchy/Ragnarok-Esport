<template>
  <div class="sidebar">
    <router-link class="routerlink" :to="{ name: 'Ragnarok' }"
      >RagnaröK Esport</router-link
    >
    <router-link class="routerlink" :to="{ name: 'WIP' }"
      >Partenaires</router-link
    >
    <router-link class="routerlink" :to="{ name: 'WIP' }"
      >Recrutements</router-link
    >
    <router-link class="routerlink" :to="{ name: 'WebTv' }">WebTV</router-link>
    <img class="logo-display" src="../assets/logo-sans-fond.png" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  background: rgba(10, 10, 10, 0.99);
  text-align: center;
  top: 0;
  right: 0;
  width: 100%;
  height: calc(100vh - 110px);
  margin-top: 60px;
  padding-top: 50px;
}

.sidebar-top {
  height: 100px;
  background: #101010;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cross-icon {
  display: inline;
  fill: #fafafaec;
  margin: 0 30px;
}
.logo {
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 0 30px;
}
.routerlink {
  margin: 20px 0px;
  font-size: 24px;
  font-family: "disket_monobold";
  text-decoration: none;
  color: #fafafa;
  text-shadow: 2px 1px 0px #32c1aeec;
}
.logo-display {
  margin: auto;
  height: 200px;
  width: 200px;
  opacity: 0.7;
}
</style>
