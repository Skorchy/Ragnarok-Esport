<template>
  <div class="partenaires-boxes">
    <RgkH1 class="partenaires-titre">NOS PARTENAIRES</RgkH1>
    <div class="parteraires-conteneur">
      <RGKPartnerBox
        class="partner-box"
        name="OneXWear"
        imgName="onexwear"
        partnerLink="https://onexwear.co"
      />
      <RGKPartnerBox
        class="partner-box"
        name="FragCase"
        imgName="fragcase"
        partnerLink="https://fragcase.com"
      />
    </div>
  </div>
</template>

<script>
import RGKPartnerBox from "@/components/RGKPartnerBox.vue";
import RgkH1 from "@/components/RgkH1.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default {
  components: {
    RGKPartnerBox,
    RgkH1
  }
};
</script>

<style scoped>
.partenaires-boxes {
  background-image: url("../assets/esport-stadium.jpg");
  background-size: cover;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  -webkit-box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
}
.partenaires-titre {
  margin-top: 30px;
  margin-bottom: 50px;
}
.parteraires-conteneur {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
@media (max-width: 768px) {
  .parteraires-conteneur {
    flex-direction: column;
  }
  .partner-box {
    margin-bottom: 30px;
  }
}
</style>
