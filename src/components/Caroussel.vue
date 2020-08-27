<template>
  <div class="front-display">
    <div class="content">
      <RgkH1 class="title">Bienvenue chez Ragnarök Esport</RgkH1>
      <div class="buttons">
        <a href="#decouvrir">
          <button class="button">Nous découvrir</button>
        </a>
        <button class="button button-boutique" :disabled="disabled">Notre boutique</button>
      </div>
    </div>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
export default {
  data() {
    return {
      disabled: true
    };
  },
  components: {
    RgkH1
  }
};
</script>

<style lang="scss" scoped>
.front-display {
  width: 100%;
  height: calc(100vh);
  background-image: url("../assets/carousel/front-image.jpg");
  background-size: cover;
  -webkit-box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.75);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  @media (max-width: 415px) {
    padding-top: 100px;
  }
}
.title {
  @media (max-width: 415px) {
    text-align: center;
  }
}
.buttons {
  display: flex;
  min-width: 30%;
  align-items: center;
  justify-content: space-between;
  margin-top: 300px;
  @media (max-width: 415px) {
    margin-top: 180px;
  }
}
.button {
  margin-right: 50px;
  cursor: pointer;
  margin-top: 20px;
  font-family: "azonixregular";
  color: rgb(10, 10, 10);
  font-size: 20px;
  padding: 15px;
  border: 0;
  background: -moz-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: -webkit-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: -o-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: -ms-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: linear-gradient(
    329deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  -webkit-box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.75);
  @media (max-width: 415px) {
    margin: auto;
  }
}
.button:active {
  transform: scale(0.98);
}
.button:disabled {
  background: grey;
}
.button-boutique {
  @media (max-width: 415px) {
    display: none;
  }
}
</style>
