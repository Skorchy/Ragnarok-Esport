<template>
  <div class="caroussel-box">
    <div class="mobile-img">
      <img src="../assets/carousel/slide1.png" />
    </div>
    <agile
      class="caroussel-box"
      :dots="false"
      :autoplay="true"
      :autoplay-speed="5000"
      :centermode="true"
    >
      <div class="slide">
        <img src="../assets/carousel/slide4.jpg" alt />
      </div>
      <div class="slide">
        <img src="../assets/carousel/slide4.jpg" alt />
      </div>
      <div class="slide">
        <img src="../assets/carousel/slide4.jpg" alt />
      </div>
      <template slot="prevButton">
        <button class="prev-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#EBEBEB"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            />
          </svg>
        </button>
      </template>
      <template slot="nextButton">
        <button class="next-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#EBEBEB"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </button>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    agile: VueAgile
  }
};
</script>

<style scoped>
.mobile-img {
  display: none;
}
.caroussel-box {
  background: rgb(250, 250, 250);
  background: -moz-linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 20%,
    rgba(50, 193, 173, 1) 80%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 20%,
    rgba(50, 193, 173, 1) 80%
  );
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 20%,
    rgba(50, 193, 173, 1) 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fafafa",endColorstr="#32c1ad",GradientType=1);
  height: 700px;
  width: 100%;
  overflow: hidden;
}
.slide {
  display: flex;
  height: 700px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}
.prev-button,
.next-button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 50px;
  height: 100%;
  position: absolute;
  top: 0;
  width: 80px;
  transition-duration: 0.3s;
}
.prev-button:hover,
.next-button:hover {
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.prev-button {
  left: 0;
}
.next-button {
  right: 0;
}

@media (max-width: 768px) {
  .caroussel-box {
    display: none;
  }
  .mobile-img {
    display: block;
    width: 100%;
  }
}
</style>
