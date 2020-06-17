<template>
  <div class="box">
    <!-- SVG FRACASE -->

    <svg
      class="partner-icos"
      v-if="imgName=='fragcase'"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"
      />
    </svg>

    <!-- SVG ONEXWEAR -->
    <img class="partner-icos" v-if="imgName=='onexwear'" src="../assets/jersey-ico.png" />

    <img class="partner-logo grey" :src="require(`../assets/partenaires/${imgName}-gris.png`)" />
    <a :href="partnerLink" target="_blank">
      <img class="partner-logo colored" :src="require(`../assets/partenaires/${imgName}.png`)" />
    </a>
    <p class="partner-content">
      <slot></slot>
    </p>
    <p class="partner-link">
      <a :href="partnerLink" target="_blank">
        <em>
          Site de
          <span style="color: #792048 ">
            <strong>{{name}}</strong>
          </span>
        </em>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    imgName: {
      type: String,
      required: true
    },
    partnerLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@500&family=Poppins&display=swap");

.box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  border-left: 8px solid #bd2828;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.5), 0 5px 8px 0 rgba(0, 0, 0, 0.5),
    0 1px 14px 0 rgba(0, 0, 0, 0.5);

  border-radius: 5px;
  /*border: 3px solid rgb(0, 0, 0);*/
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box:hover {
  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.7),
    0 18px 28px 2px rgba(0, 0, 0, 0.7), 0 7px 34px 6px rgba(0, 0, 0, 0.7);
}
.box .colored {
  display: none;
}
.box:hover .colored {
  display: inline;
}
.box .grey {
  display: inline;
}
.box:hover .grey {
  display: none;
}
.partner-logo {
  height: 60px;
  margin-bottom: 15px;
  margin-top: 20px;
}
.partner-content {
  margin: 30px;
  color: rgb(36, 36, 36);
  font-family: "Baloo Paaji 2", cursive;
  text-align: center;
}
.partner-icos {
  margin-top: 15px;
  margin-bottom: 20px;
}
.partner-link {
  position: absolute;
  bottom: 15px;
  color: grey;
}
.partner-link a {
  text-decoration: none;
  color: grey;
}
@media (max-width: 768px) {
  .box {
    width: 360px;
  }
}
</style>