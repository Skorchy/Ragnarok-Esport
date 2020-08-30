<template>
  <div class="web-tv">
    <div class="tv">
      <iframe
        class="twitch-player"
        src="https://player.twitch.tv/?channel=skorchyrgk&parent=rgk-uat.netlify.app"
        height="100%"
        width="100%"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
      ></iframe>
      <div class="buttons">
        <a class="links" href="https://www.paypal.com/paypalme/RagnarokEsport" target="_blank">
          <button class="button donate">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 16.166c0-3.529-3.023-4.962-6-6.255v-4.653c1.42.052 2.85.453 4.16.914l.725-3.295c-1.814-.551-3.438-.803-4.885-.841v-2.036h-2v2.134c-3.891.535-5.969 2.975-5.969 5.7 0 3.857 3.558 5.126 5.969 5.919v4.712c-1.706-.019-3.592-.62-5.091-1.202l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.312-.464 6.005-2.293 6-5.729zm-8-10.643v3.482c-1.611-.921-1.678-2.771 0-3.482zm2 12.601v-3.591c1.841 1.065 1.605 2.864 0 3.591z"
              />
            </svg>
            <span>DONATE</span>
          </button>
        </a>
        <button class="button go-twitch">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
          <span>VOIR SUR TWITCH</span>
        </button>
      </div>
    </div>
    <div class="planning">
      <RgkH1 class="planning-titre">Programmation</RgkH1>
      <div class="planning-img"></div>
    </div>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
export default {
  components: {
    RgkH1
  }
};
</script>

<style lang="scss" scoped>
.web-tv {
  padding-top: 160px;
  background: #151515;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding-top: 20px;
  }
}
.twitch-player {
  width: 100%;
  height: 810px;
  @media (max-width: 415px) {
    height: 200px;
  }
  @media (max-width: 568px) {
    height: 250px;
  }
  @media (max-width: 812px) {
    height: 350px;
  }
  @media (max-width: 1024px) {
    height: 460px;
  }
}
.tv {
  width: 80%;
  min-height: 400px;
  @media (max-width: 415px) {
    width: 95%;
  }
}
.planning {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.planning-titre {
  margin-bottom: 50px;
}

.planning-img {
  height: 450px;
  background-image: url("../assets/comingsoon.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-bottom: 50px;
}
.buttons {
  margin: auto;
  padding-top: 50px;
  padding-bottom: 150px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 415px) {
    flex-direction: column;
  }
}
.links {
  text-decoration: none;
}
.button {
  cursor: pointer;
  height: 70px;
  width: 300px;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 5px;
  opacity: 0.9;
  font-size: 20px;
  font-family: "azonixregular";
  color: #fafafa;
  fill: #fafafa;
  -webkit-box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 415px) {
    width: 100%;
  }
}
.button:hover {
  opacity: 1;
}
.button:focus {
  outline: 0;
}
.button:active {
  transform: scale(0.99);
}
.button svg {
  margin-left: 20px;
}

.donate {
  background: #32c1ad;

  span {
    margin-left: 90px;
  }
  @media (max-width: 415px) {
    margin-bottom: 10px;
  }
}
.go-twitch {
  background: #6441a5;
  span {
    margin-left: 45px;
  }
}
</style>
