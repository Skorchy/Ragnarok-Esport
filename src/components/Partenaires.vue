<template>
  <div class="partenaires-boxes">
    <RgkH1 class="partenaires-titre">NOS PARTENAIRES</RgkH1>
    <div class="partenaires-conteneur">
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
    RgkH1,
  },
};
</script>

<style scoped>
.partenaires-boxes {
  background: #014e51;
  background-size: cover;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
}
.partenaires-titre {
  margin-top: 30px;
  margin-bottom: 180px;
}
.partenaires-conteneur {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 100px;
}
@media (max-width: 768px) {
  .partenaires-conteneur {
    flex-direction: column;
  }
  .partner-box {
    margin-bottom: 30px;
  }
}
</style>
