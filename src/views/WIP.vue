<template>
  <div class="work-in-progress">
    <div class="wip-content">
      <img class="wip-img" src="../assets/wip.png" />
      <h1>
        <em class="blue">Oops</em>...
        <em class="blue">Travaux en cours</em> !
      </h1>
      <p>
        Nos guerriers s'efforcent de construire le plus rapidement possible
        cette page !
      </p>
      <p>
        Pour plus d'informations, rendez vous sur notre &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#1da1f2"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          />
        </svg>
        <a class="twitter-link" href="https://twitter.com/esport_ragnarok" target="_blank">Twitter</a>!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.work-in-progress {
  padding-top: 300px;
  background: #151515;
  height: calc(100vh - 300px);
  -webkit-box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 1024px) {
    padding-top: 100px;
    height: calc(100vh - 60px);
  }
}
.wip-img {
  margin-bottom: 15px;
}
.wip-content {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  color: #ebebeb;
  font-family: "disket_monobold";
  text-align: center;
}
p {
  font-family: "metropolis_extralight";
  font-size: 18px;
}

em {
  font-style: normal;
  color: #32c1ad;
}
.twitter-link {
  text-decoration: none;
  color: #1da1f2;
}
.twitter-link:hover {
  color: #1b94df;
}
@media (max-width: 768px) {
  .work-in-progress {
    height: 800px;
  }
}
</style>
