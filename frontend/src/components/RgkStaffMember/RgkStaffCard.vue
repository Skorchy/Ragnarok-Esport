<template>
  <div class="rgk-staff-card">
    <div
      class="top"
      :style="{
          backgroundImage: `url('${require(`../../assets/photos/${photo}.jpg`)}')`,
        }"
    ></div>
    <div class="bottom">
      <p class="poste" v-for="poste in postes" :key="poste">
        <PrettyWords :words="poste" />
      </p>
    </div>
  </div>
</template>

<script>
import PrettyWords from "@/components/PrettyWords.vue";
export default {
  components: {
    PrettyWords
  },
  props: {
    postes: {
      type: Array,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },
  computed: {
    wordsArray() {
      const postes = this.postes;
      let wordsArray = [];
      postes.forEach(poste => {
        wordsArray = wordsArray.concat(poste.split(" "));
        console.log("Buffer -->", wordsArray);
      });
      return wordsArray;
    }
  }
};
</script>

<style lang="scss" scoped>
.rgk-staff-card {
  width: calc(100% - 30px);
  max-width: 350px;
  min-height: 450px;
  border: 2px solid white;
  -webkit-box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
  -moz-box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 0px rgb(255, 255, 255);
}
.top {
  min-height: 380px;
  background-size: cover;
  border-bottom: 1px solid white;
}
.bottom {
  min-height: 80px;
  max-width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-family: "disket_monobold";
  text-align: center;
}
.poste {
  margin: 0;
}
</style>