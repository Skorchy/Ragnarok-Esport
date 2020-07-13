<template>
  <div class="nosjeux-box">
    <RgkH1 class="nosjeux-titre">NOUS SOMMES PRÉSENTS SUR...</RgkH1>
    <hr class="nosjeux-hr" />
    <div class="blasons">
      <img
        class="blason"
        data-aos="fade-up"
        data-aos-duration="1500"
        id="blason-Valorant"
        src="../assets/blasons/blason_LoL_blue.png"
      />
      <img
        class="blason"
        data-aos="fade-down"
        data-aos-duration="1500"
        id="blason-LoL"
        src="../assets/blasons/blason_RL_blue.png"
      />
      <img
        class="blason"
        data-aos="fade-up"
        data-aos-duration="1500"
        id="blason-RL"
        src="../assets/blasons/blason_FN_blue.png"
      />
      <img
        class="blason"
        data-aos="fade-down"
        data-aos-duration="1500"
        id="blason-FN"
        src="../assets/blasons/blason_valorant_blue.png"
      />
    </div>
    <button class="nosjeux-button" type="button">
      <div class="unskewed-text">Nos Équipes</div>
    </button>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import RgkH1 from "@/components/RgkH1.vue";
export default {
  components: {
    RgkH1
  }
};
</script>

<style lang="scss" scoped>
.nosjeux-box {
  background-color: rgb(10, 10, 10);

  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.nosjeux-titre {
  margin-bottom: 80px;
}
.blasons {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 50px;
}
.blason {
  height: 180px;
  width: 180px;
}
.nosjeux-button {
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: "azonixregular";
  width: 250px;
  color: rgb(10, 10, 10);
  font-size: 20px;
  padding: 15px;
  border: 0;
  -moz-transform: skew(-30deg, 0deg);
  -webkit-transform: skew(-30deg, 0deg);
  -o-transform: skew(-30deg, 0deg);
  -ms-transform: skew(-30deg, 0deg);
  transform: skew(-30deg, 0deg);
  background: rgb(0, 142, 138);
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
}
.unskewed-text {
  -moz-transform: skew(30deg, 0deg);
  -webkit-transform: skew(30deg, 0deg);
  -o-transform: skew(30deg, 0deg);
  -ms-transform: skew(30deg, 0deg);
  transform: skew(30deg, 0deg);
}
.nosjeux-button:focus {
  outline: 0;
}
.nosjeux-hr {
  display: none;
}

@media (max-width: 768px) {
  .blasons {
    flex-direction: column;
    align-items: center;
  }
  .nosjeux-titre {
    text-align: center;
    margin-bottom: 20px;
  }
  .nosjeux-hr {
    display: block;
    width: 50%;
    margin-bottom: 60px;
  }
  #blason-Valorant,
  #blason-RL {
    padding-left: 250px;
  }
  #blason-LoL,
  #blason-FN {
    padding-right: 250px;
  }
}

@media (max-width: 415px) {
  .blasons {
    flex-direction: column;
    align-items: center;
  }
  .nosjeux-titre {
    text-align: center;
    margin-bottom: 20px;
  }
  .nosjeux-hr {
    display: block;
    width: 50%;
    margin-bottom: 40px;
  }
  #blason-Valorant,
  #blason-RL {
    padding-left: 130px;
  }
  #blason-LoL,
  #blason-FN {
    padding-right: 130px;
  }
}
</style>
