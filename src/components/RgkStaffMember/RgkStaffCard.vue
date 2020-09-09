<template>
  <div class="rgk-staff-card">
    <div
      class="top"
      :style="{
          backgroundImage: `url('${require(`../../assets/photos/${photo}.jpg`)}')`,
        }"
    ></div>
    <div class="bottom">
      <p>{{poste}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poste: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.rgk-staff-card {
  width: calc(100% - 30px);
  max-width: 350px;
  min-height: 450px;
  background: green;
  border: 2px solid white;
  -webkit-box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
}
.top {
  min-height: 350px;
  background-size: cover;
  border-bottom: 1px solid white;
}
</style>