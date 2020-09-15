<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left elevation="3" :color="color" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ragnarök Esport BackOffice</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://rgk-uat.netlify.app" target="_blank">
        <v-icon>mdi-web-clock</v-icon>
      </v-btn>
      <v-btn icon href="https://ragnarok-esport.netlify.app" target="_blank">
        <v-icon>mdi-web</v-icon>
      </v-btn>

      <v-btn large color="#32C1AD" outlined tile>Log In</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :color="color" app clipped dark>
      <v-list dense nav class="py-5">
        <v-list-item :to="item.link" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },

  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Accueil",
          icon: "mdi-home",
          link: "/"
        },
        {
          title: "Recrutements",
          icon: "mdi-account-multiple-plus-outline",
          link: "recrutements"
        },
        { title: "Teams", icon: "mdi-gamepad-variant", link: "teams" }
      ],
      color: "#484749",
      colors: ["primary", "blue", "success", "red", "#484749"]
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>