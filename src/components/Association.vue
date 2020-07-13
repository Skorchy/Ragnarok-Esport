<template>
  <div class="association-box">
    <div class="texte-side" data-aos="fade-up" data-aos-duration="1500">
      <RgkH1 class="association-title">QUI SOMMES NOUS ?</RgkH1>
      <p
        class="association-content"
      >Ragnarök Esport est une jeune structure regroupant un groupe de joueurs francophones réunis autour d'un même but : conquérir le monde de l'esport.</p>
      <p
        class="association-content"
      >Créée en 2020, la structure ne cesse d'évoluer et de grandir au fil du temps. Avec l'aide de plus de 30 membres, nous mettons chacunes et chacuns nos compétences en action afin de dévolopper au mieux notre marque. Entraide et motivation sont les maitres mots au sein de notre association.</p>
    </div>
    <div class="img-side" data-aos="fade-down" data-aos-duration="1500">
      <img class="rightside-img" src="../assets/whoarewe-img.jpg" />
    </div>
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

<style scoped>
.association-box {
  background-image: linear-gradient(
    to right bottom,
    #004144,
    #004447,
    #00474a,
    #014b4e,
    #014e51
  );
  max-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  -webkit-box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.75);
}
.texte-side {
  width: 70%;
  margin-left: 50px;
  margin-right: 50px;
}
.association-title {
  margin-bottom: 80px;
}
.association-content {
  font-family: "metropolis_extralight";
  font-size: 18px;
  font-weight: 600;
  color: #d6d5d5;
}
.rightside-img {
  margin: 0;
  width: 700px;
}
@media (max-width: 1024px) {
  .association-box {
    max-height: 600px;
  }
  .texte-side {
    width: 50%;
  }
  .img-side {
    width: 40%;
  }
}
@media (max-width: 768px) {
  .association-box {
    max-height: 700px;
  }
  .texte-side {
    width: 50%;
  }
  .img-side {
    width: 40%;
  }
}
@media (max-width: 415px) {
  .association-box {
    flex-direction: column;
    max-height: unset;
  }
  .texte-side {
    width: 90%;
  }
  .img-side {
    width: 100%;
    height: 400px;
  }
}
</style>
