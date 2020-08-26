<template>
  <div class="association-box">
    <div class="texte-side">
      <img class="logo" src="../assets/logo-sans-fond.png" />
      <RgkH1 class="association-title">QUI SOMMES NOUS ?</RgkH1>
      <p class="association-content">
        Ragnarök Esport est une jeune structure regroupant un groupe de joueurs
        francophones réunis autour d'un même but : conquérir le monde de
        l'esport.
      </p>
      <p class="association-content">
        Créée en 2020, la structure ne cesse d'évoluer et de grandir au fil du
        temps. Avec l'aide de plus de 30 membres, nous mettons chacunes et
        chacuns nos compétences en action afin de dévolopper au mieux notre
        marque. Entraide et motivation sont les maitres mots au sein de notre
        association.
      </p>
    </div>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
export default {
  components: {
    RgkH1,
  },
};
</script>

<style scoped>
.association-box {
  background: #014e51;
  max-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 150px;
}
.logo {
  display: none;
}
.texte-side {
  width: 1200px;
  margin: auto;
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
  .association-content {
    font-size: 16px;
  }
  .association-title {
    margin-bottom: 40px;
  }
  .texte-side {
    width: 90%;
    margin-bottom: 30px;
  }
  .logo {
    display: block;
    margin: auto;
    width: 50px;
    height: 50px;
    padding-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
