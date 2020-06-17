<template>
  <div class="nosjeux-box">
    <h1 class="nosjeux-titre">NOUS SOMMES PRÉSENTS SUR</h1>
    <hr class="nosjeux-hr" />
    <div class="blasons">
      <img
        class="blason"
        data-aos="fade-up"
        data-aos-duration="1500"
        id="blason-Valorant"
        src="../assets/blasons/blason_RL_gold.png"
      />
      <img
        class="blason"
        data-aos="fade-down"
        data-aos-duration="1500"
        id="blason-LoL"
        src="../assets/blasons/blason_RL_gold.png"
      />
      <img
        class="blason"
        data-aos="fade-up"
        data-aos-duration="1500"
        id="blason-RL"
        src="../assets/blasons/blason_RL_gold.png"
      />
      <img
        class="blason"
        data-aos="fade-down"
        data-aos-duration="1500"
        id="blason-FN"
        src="../assets/blasons/blason_RL_gold.png"
      />
    </div>
    <button class="nosjeux-button" type="button">Nos Équipes</button>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default {};
</script>

<style lang="scss" scoped>
.nosjeux-box {
  background-color: rgb(19, 19, 19);
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 160px;
  width: 160px;
}
.nosjeux-button {
  margin-bottom: 50px;
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
