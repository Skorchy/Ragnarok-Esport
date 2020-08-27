<template>
  <div class="nosjeux-box">
    <RgkH1 class="nosjeux-titre">NOUS SOMMES PRÉSENTS SUR...</RgkH1>
    <RgkHr />
    <div class="blasons">
      <img class="blason" id="blason-Valorant" src="../assets/blasons/blason_LoL_blue.png" />
      <img class="blason" id="blason-LoL" src="../assets/blasons/blason_RL_blue.png" />
      <img class="blason" id="blason-RL" src="../assets/blasons/blason_FN_blue.png" />
      <img class="blason" id="blason-FN" src="../assets/blasons/blason_valorant_blue.png" />
    </div>
    <button class="nosjeux-button" type="button">
      <div class="unskewed-text">
        <router-link
          class="button-router"
          :to="{ name: 'Ragnarok', hash: '#rgk-teams' }"
        >Nos Équipes</router-link>
      </div>
    </button>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
import RgkHr from "@/components/RgkHr.vue";
export default {
  components: {
    RgkH1,
    RgkHr
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
  color: #ebebeb;
  padding: 100px 0;
  @media (max-width: 415px) {
    padding: 50px 0px;
  }
}
.nosjeux-titre {
  padding-top: 30px;
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
.button-router {
  text-decoration: none;
  color: rgb(10, 10, 10);
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
