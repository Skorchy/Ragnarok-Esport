<template>
  <div class="ragnarok-box">
    <div class="ragnarok-content">
      <div class="ragnarok-preview">
        <RgkH1 class="ragnarok-header">RGK ESPORT !</RgkH1>
        <p class="ragnarok-presentation">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p class="ragnarok-presentation">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p class="ragnarok-presentation">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div class="ragnarok-teams">
        <RgkH1 class="ragnarok-header">Nos équipes</RgkH1>

        <template v-for="game in games">
          <div
            :key="'separator-'+game.game"
            class="separator"
            :style="{ 'background-image': `url('${require(`../assets/separators/${game.game}-final-sep.png`)}')`}"
          ></div>
          <div v-for="team in game.teams" :key="team.name">
            <RgkTeam :team="team" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
import RgkTeam from "@/components/RgkTeam.vue";
import rgkGames from "@/rgkGames.js";
export default {
  components: {
    RgkH1,
    RgkTeam
  },
  computed: {
    games() {
      return rgkGames;
    }
  }
};
</script>

<style lang="scss" scoped>
.ragnarok-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
  width: 100%;
  background: #151515;
  -webkit-box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
}
.ragnarok-content {
  width: 80%;
  padding-top: 100px;
}
.ragnarok-header {
  margin-bottom: 50px;
  text-align: center;
}
.ragnarok-presentation {
  font-family: "metropolis_extralight";
  color: #a3a3a3;
}

.separator {
  width: 1450px;
  height: 100px;
  margin-bottom: 80px;
  border-radius: 10px 0px 10px 0px;
  -moz-border-radius: 10px 0px 10px 0px;
  -webkit-border-radius: 10px 0px 10px 0px;
  border: 3px solid #32c1ad;
}
</style>