<template>
  <div class="partenaires-boxes">
    <h1 class="partenaires-titre">NOS PARTENAIRES</h1>
    <div class="parteraires-conteneur">
      <RGKPartnerBox
        class="partner-box"
        name="OneXWear"
        data-aos="zoom-out-left"
        data-aos-duration="3000"
        imgName="onexwear"
        partnerLink="https://onexwear.co"
      />
      <RGKPartnerBox
        class="partner-box"
        name="FragCase"
        data-aos="zoom-out-right"
        data-aos-duration="3000"
        imgName="fragcase"
        partnerLink="https://fragcase.com"
      />
    </div>
  </div>
</template>

<script>
import RGKPartnerBox from "@/components/RGKPartnerBox.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default {
  components: {
    RGKPartnerBox
  }
};
</script>

<style scoped>
.partenaires-boxes {
  background-color: rgb(0, 133, 44);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.partenaires-titre {
  margin-top: 20px;
  margin-bottom: 80px;
}
.parteraires-conteneur {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
@media (max-width: 415px) {
  .parteraires-conteneur {
    flex-direction: column;
  }
  .partner-box {
    margin-bottom: 30px;
  }
}
</style>
