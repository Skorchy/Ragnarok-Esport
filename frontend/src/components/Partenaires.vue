<template>
  <div class="partenaires-boxes">
    <RgkH1 class="partenaires-titre">NOS PARTENAIRES</RgkH1>
    <RgkHr />
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
import RgkHr from "@/components/RgkHr.vue";

export default {
  components: {
    RGKPartnerBox,
    RgkH1,
    RgkHr
  }
};
</script>

<style lang="scss" scoped>
.partenaires-boxes {
  position: relative;
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

.partner-box {
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
}
.partenaires-titre {
  margin-top: 30px;
  margin-bottom: 180px;
  @media (max-width: 415px) {
    margin-bottom: 50px;
  }
}
.partenaires-conteneur {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 415px) {
    margin-bottom: 50px;
  }
}
</style>
