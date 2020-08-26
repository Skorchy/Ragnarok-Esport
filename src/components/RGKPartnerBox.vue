<template>
  <div class="box">
    <!-- SVG FRACASE -->

    <svg
      class="partner-icos"
      v-if="imgName == 'fragcase'"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-3s.447-1 1-1c.552 0 .999.448.999 3s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"
      />
    </svg>

    <!-- SVG ONEXWEAR -->
    <img
      class="partner-icos"
      v-if="imgName == 'onexwear'"
      src="../assets/jersey-ico.png"
    />

    <a :href="partnerLink" target="_blank">
      <img
        class="partner-logo grey"
        :src="require(`../assets/partenaires/${imgName}.png`)"
      />
    </a>
    <p class="partner-content">
      <slot></slot>
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
  background: #fafafa;
  border-radius: 5px;
  border-left: 12px solid #32c1ad;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.5), 0 5px 8px 0 rgba(0, 0, 0, 0.5),
    0 1px 14px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all ease-in-out 0.2s;
}
.box:hover {
  transition: all ease-in-out 0.2s;
  background: #32c1ad;
  transform: scale(1.03);
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
