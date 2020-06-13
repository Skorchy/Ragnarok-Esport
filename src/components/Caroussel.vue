<template>
  <agile class="caroussel-box" :dots="false">
    <div class="slide">
      <img src="../assets/carousel/slide1.jpg" alt="" />
    </div>
    <div class="slide">
      <img src="../assets/carousel/slide2.jpg" alt="" />
    </div>
    <div class="slide">
      <img src="../assets/carousel/slide3.jpg" alt="" />
    </div>
    <template slot="prevButton"><span>prev</span> </template>
    <template slot="nextButton">next</template>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    agile: VueAgile,
  },
};
</script>

<style scoped>
.caroussel-box {
  background-color: rgb(0, 133, 133);
  height: 700px;
  width: 100%;
}
.slide {
  height: 700px;
  background-size: cover;
}
prev-button {
  color: red;
  font-size: 20px;
}
</style>
