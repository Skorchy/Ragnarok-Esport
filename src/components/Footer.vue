<template>
  <div class="footer">
    <div class="footer-box">
      <div>LIENLIEN</div>
      <div>LIENLIENLIENLIEN</div>
      <div>
        <div class="logo"></div>
      </div>
      <div>LIENLIENLIEN</div>
      <div>LIEN</div>
    </div>
    <div class="disclaimer">textetextetextetextetextetextetextetextetexte textetextetextetextetexte</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: rgb(1, 4, 48);
  color: white;
}
.footer-box {
  padding-top: 20px;
  margin-bottom: 20px;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 20px;

  div {
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
  }
}
.logo {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: black;
}
.disclaimer {
  text-align: center;
}
@media (max-width: 1024px) {
  .footer {
    height: 100px;
    width: 100%;
  }
  .logo {
    width: 40px;
    height: 40px;
    background-color: black;
  }
  .footer-box {
    margin: auto;
    padding-top: 15px;
    margin-bottom: 15px;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .footer {
    height: 175px;
    width: 100%;
  }
  .footer-box {
    flex-direction: column;

    div {
      margin-bottom: 0;
      flex-grow: 1;
    }
  }
  .logo {
    display: none;
    height: 0;
    position: absolute;
  }
}
</style>
