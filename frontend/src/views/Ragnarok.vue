<template>
  <div class="ragnarok-box">
    <div class="ragnarok-preview">
      <RgkH1 class="ragnarok-header">RGK ESPORT !</RgkH1>
      <div class="ragnarok-presentation">
        <p>
          Ragnarök Esport est une association regroupant des gamers francophones
          qui ont pour vocation de s'implanter et se faire un nom sur la scène
          esport européenne.
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
    <div id="rgk-teams" class="ragnarok-teams">
      <RgkH1 class="ragnarok-header">Nos équipes</RgkH1>

      <template v-for="game in $rgk.games">
        <!-- SEPARATEUR DESKTOP -->
        <div
          :key="'separator-' + game.game"
          class="separator"
          :style="{
            'background-image': `url('${require(`../assets/separators/${game.game}-final-sep.png`)}')`
          }"
        ></div>
        <!-- SEPARATEUR MOBILE -->
        <div
          :key="'separator-mobile-' + game.game"
          class="separator-mobile"
        ></div>
        <!-- TEAM DISPLAY -->
        <div v-for="team in game.teams" :key="team.name">
          <RgkTeam class="rgk-team" :team="team" />
        </div>
      </template>
    </div>
    <div class="separator-mobile"></div>
    <RgkStaffMember :members="$rgk.staff" />
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
import RgkTeam from "@/components/RgkTeam.vue";
import RgkStaffMember from "@/components/RgkStaffMember/RgkStaffMember.vue";
export default {
  components: {
    RgkH1,
    RgkTeam,
    RgkStaffMember
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
  max-width: 100%;
  background: #171717;
  -webkit-box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
}
.ragnarok-header {
  margin-bottom: 50px;
  text-align: center;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
}
.ragnarok-preview {
  padding-top: 80px;
  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.ragnarok-presentation {
  width: 80%;
  font-family: "metropolis_extralight";
  color: #c0c0c0;
  margin: auto;
  @media (max-width: 768px) {
    width: 90%;
  }
}

.ragnarok-teams {
  max-width: 100%;
}

.rgk-team {
  margin: auto;
}
.separator-mobile {
  display: none;
  margin-bottom: 30px;
}
.separator {
  width: 1450px;
  max-width: calc(100% - 6px);
  height: 100px;
  margin: auto;
  margin-bottom: 80px;
  border-radius: 10px 0px 10px 0px;
  -moz-border-radius: 10px 0px 10px 0px;
  -webkit-border-radius: 10px 0px 10px 0px;
  border: 3px solid #32c1ad;
}

@media (max-width: 768px) {
  .ragnarok-content {
    width: 100%;
  }
  .separator {
    display: none;
  }
  .separator-mobile {
    display: block;
    width: 100%;
    height: 50px;
    background: red;
  }
}
</style>
