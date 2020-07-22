<template>
  <div class="social-networks">
    <RgkH1 class="sn-title">Retrouvez nous sur nos réseaux sociaux</RgkH1>
    <div class="sn-outter-links">
      <div class="icos">
        <img class="ico" src="../assets/icos/twitter-ico.png" />
        <img class="ico" src="../assets/icos/twitch-ico.png" />
        <img class="ico" src="../assets/icos/yt-ico.png" />
        <img class="ico" src="../assets/icos/ig-ico.png" />
      </div>
    </div>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
export default {
  components: {
    RgkH1
  }
};
</script>

<style>
.social-networks {
  min-height: 200px;
  background-image: linear-gradient(
    to right bottom,
    #004144,
    #004447,
    #00474a,
    #014b4e,
    #014e51
  );
  -webkit-box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.75);
}
.sn-title {
  padding-top: 30px;
  text-align: center;
  margin-bottom: 30px;
}
.sn-outter-links {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.icos {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.ico {
  height: 80px;
  width: 80px;
  transition: all 0.3s ease-in-out;
}
.ico:hover {
  transform: scale(1.1);
}
</style>