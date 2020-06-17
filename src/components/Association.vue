<template>
  <div class="association-box">
    <div class="texte-side">
      <h1>QUI SOMMES NOUS ?</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </p>
    </div>
    <div class="img-side">
      <img class="rightside-img" src="../assets/whoarewe-img.jpg" />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default {};
</script>

<style scoped>
.association-box {
  background-color: rgb(35, 0, 133);
  max-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.75);
}
.texte-side {
  width: 50%;
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
