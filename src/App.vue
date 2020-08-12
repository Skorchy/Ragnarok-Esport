<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "azonixregular";
  src: url("assets/fonts/azonix/azonix-webfont.woff2") format("woff2"),
    url("assets/fonts/azonix/azonix-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "disket_monobold";
  src: url("assets/fonts/disket/disket-mono-bold-webfont.woff2") format("woff2"),
    url("assets/fonts/disket/disket-mono-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "bagnard_regularregular";
  src: url("assets/fonts/bagnard/bagnardsans-webfont.woff2") format("woff2"),
    url("assets/fonts/bagnard/bagnardsans-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "metropolis_extralight";
  src: url("assets/fonts/metropolis/Metropolis-ExtraLight.woff2")
      format("woff2"),
    url("assets/fonts/metropolis/Metropolis-ExtraLight.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
body,
html {
  margin: 0;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
